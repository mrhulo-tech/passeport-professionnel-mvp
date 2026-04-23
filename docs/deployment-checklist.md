# Deployment checklist — First professional MVP

## Backend
- Confirm `backend/requirements.txt` is present
- Confirm `backend/app/main.py` is the entry point
- Confirm Render start command points to `app.main:app`
- Confirm `/dashboard/1` and `/dashboard/2` return different professional profiles

## Frontend
- Confirm `BACKEND_URL` is set in Vercel
- Confirm homepage renders with server-side fetch
- Confirm `?user=1` and `?user=2` display different profiles
- Confirm UI wording reflects professional training, employability, and AI literacy

## Product checks
- Confirm the UI explains the profile is based on observable data
- Confirm indicators remain interpretable
- Confirm recommendations are actionable
- Confirm no wording suggests an intelligence score or psychometric test
