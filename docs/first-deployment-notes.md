# First deployment notes — Passeport Professionnel MVP

## Goal
Deploy a first working version of the cloned-and-adapted MVP with:
- server-side frontend rendering
- FastAPI backend
- two distinct user profiles
- professional training wording
- interpretable indicators and recommendations

## Backend target
Backend service should expose:
- `/`
- `/dashboard/1`
- `/dashboard/2`

## Frontend target
Frontend should:
- read `BACKEND_URL`
- render the dashboard via server-side fetch
- support `?user=1` and `?user=2`

## Product target
The first deployment should demonstrate:
- requalification
- employability
- AI literacy readiness
- no intelligence scoring
- no psychometric framing

## Immediate checks
- backend returns two different profiles
- frontend loads without client fetch logic
- wording is coherent with professional training
- metric cards render correctly
- recommendations are visible
