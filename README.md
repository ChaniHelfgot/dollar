# Dollar Exchange Rate Dashboard

A full-stack system for collecting, processing, and visualizing average monthly USD exchange rates starting from January 2023.

The system automatically stores real historical data, updates it monthly, provides analytical views, forecasts future values, and exposes the data through a clean API and interactive UI.

---

## Overview


## Features

- Stores average **monthly USD exchange rates** (from Jan 2023 onward)
- Automatic monthly update on the **1st of each month**
- Interactive dashboard including:
  - Monthly average line chart
  - Color-coded table (green = highest, red = lowest)
  - Sorting and filtering by month and value
  - Month search and highlighting
- **Forecast** of the next month based on the previous 3-month rolling average
- Analytical matrices:
  - Forecast vs actual difference matrix
  - Rolling 3-month average matrix
  - Matrix multiplication between forecast and difference matrices
- Clean UI table rendering for all matrices
- Unit and integration tests (client + server)

---

## Tech Stack

**Frontend**
- React
- TypeScript
- Vite
- Chart.js
- Vitest

**Backend**
- Node.js
- TypeScript
- Express
- PostgreSQL
- node-cron
- Jest

**Infrastructure**
- Docker
- Docker Compose
- GitHub Actions (CI)

---

## Project Structure

```text
dollar/
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/matrix/
│   │   └── App.tsx
│   ├── Dockerfile
│   ├── .eslintrc.json
│   └── package.json
│
├── server/                 # Backend (Node + TS)
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── db/
│   │   ├── cron/
│   │   └── dollar.ts
│   ├── schema.sql
│   ├── Dockerfile
│   ├── .eslintrc.json
│   └── package.json
│
├── .github/
│   └── workflows/
│       └── ci.yml          # CI: lint + tests
│
├── docker-compose.yml
└── README.md
```
## Running the Project (Recommended)

### Start the full system

```bash
docker-compose up --build
```