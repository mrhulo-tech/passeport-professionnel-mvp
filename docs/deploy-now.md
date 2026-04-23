# Deploy now — Passeport Professionnel MVP

## Backend
Create a new Render Web Service.

### Settings
- Root Directory: `backend`
- Build Command: `pip install -r requirements.txt`
- Start Command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`

## Frontend
Create a new Vercel project.

### Settings
- Root Directory: `frontend`
- Framework: Next.js

### Environment Variable
- `BACKEND_URL=https://YOUR-BACKEND-URL.onrender.com`

## Validation sequence

### Backend checks
- `https://YOUR-BACKEND-URL.onrender.com/`
- `https://YOUR-BACKEND-URL.onrender.com/dashboard/1`
- `https://YOUR-BACKEND-URL.onrender.com/dashboard/2`

### Frontend checks
- `https://YOUR-FRONTEND-URL.vercel.app/?user=1`
- `https://YOUR-FRONTEND-URL.vercel.app/?user=2`

## Expected result
- two different profiles render correctly
- wording reflects professional training and employability
- SSR fetch works
- no client-side dashboard fetch is required
