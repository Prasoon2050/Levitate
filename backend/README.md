# Backend

FastAPI server for AI processing and website generation.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running the Server

Start the development server on port 8000:

```bash
uvicorn main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`

## API Endpoints

### POST /generate
Generate code based on a prompt.

**Request:**
```json
{
  "prompt": "Create a real estate portal"
}
```

**Response:**
```json
{
  "job_id": "123"
}
```

### GET /status/{job_id}
Check the status of a generation job.

**Response:**
```json
{
  "job_id": "123",
  "status": "completed",
  "result": {
    "message": "Code generation completed successfully"
  }
}
```

### GET /
Health check endpoint.

## API Documentation

Once the server is running, visit:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

