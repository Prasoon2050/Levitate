from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

from celery.result import AsyncResult
from tasks import generate_website, JOB_STATES

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class GenerateRequest(BaseModel):
    prompt: str


class GenerateResponse(BaseModel):
    job_id: str


class StatusResponse(BaseModel):
    job_id: str
    status: str
    result: Optional[dict] = None


@app.post("/generate", response_model=GenerateResponse)
async def generate(request: GenerateRequest):
    """
    Generate code based on the provided prompt.
    Starts a background Celery task.
    """
    task = generate_website.delay(request.prompt)
    return GenerateResponse(job_id=task.id)


@app.get("/status/{job_id}", response_model=StatusResponse)
async def get_status(job_id: str):
    """
    Get the status of a generation job.
    Fetches state from Celery/Redis.
    """
    task_result = AsyncResult(job_id)
    
    # Default to CREATED if task is not yet known or pending without state
    status = task_result.status
    if task_result.state == 'PENDING':
         # In Celery, PENDING is the default for unknown tasks too, 
         # but we assume it's CREATED if we just submitted it.
         # For better tracking, we might rely on the task updating itself to CREATED immediately.
         # For now, let's map PENDING -> CREATED if it's not a real unknown ID (which we can't easily distinguish without DB)
         status = JOB_STATES["CREATED"]
    elif isinstance(task_result.info, dict) and "status" in task_result.info:
        status = task_result.info["status"]
    
    result = None
    if task_result.successful():
         result = task_result.result
    elif task_result.failed():
         result = {"error": str(task_result.result)}

    return StatusResponse(
        job_id=job_id,
        status=status,
        result=result
    )


@app.get("/")
async def root():
    """Health check endpoint"""
    return {"status": "ok", "message": "Levitate Backend API"}
