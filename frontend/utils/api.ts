export const API_BASE_URL = "http://localhost:8000";

export const createJob = async (prompt: string) => {
    const response = await fetch(`${API_BASE_URL}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
    });
    if (!response.ok) throw new Error("Failed to create job");
    return response.json();
};

export const getJobStatus = async (jobId: string) => {
    const response = await fetch(`${API_BASE_URL}/status/${jobId}`);
    if (!response.ok) throw new Error("Failed to fetch status");
    return response.json();
};
