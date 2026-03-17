# TransNorth TMS (Web SaaS)

Production-style Transport Management System with modern SaaS UI, mock logistics data, and GitHub push-to-live deployment.

## Features Included

- Public landing page (hero, features, regions, testimonial, CTA)
- Admin dashboard with sidebar, topbar, KPI cards
- Fleet management (list, status badges, add truck, region filter)
- Live tracking map (OpenStreetMap + simulated GPS + route alerts)
- Orders module (create + assign mock flow, status)
- Driver & labour view (profiles, trip count, salary)
- CRM page (customers, payment state, last communication)
- Finance dashboard (charts + expense/profit visibility)
- Responsive UI (desktop/tablet/mobile)

## Tech Stack

- Next.js 14 + React 18
- Tailwind CSS
- Recharts (analytics)
- React-Leaflet + OpenStreetMap (live tracking map)
- GitHub Actions + GitHub Pages (auto deployment)

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

## Production Build

```bash
npm run build
```

Static export is generated in `out/`.

## CI/CD (Git Push -> Auto Deploy)

Workflow file: `.github/workflows/deploy.yml`

1. Create GitHub repo and push code to `main`.
2. In GitHub repo settings:
- `Settings > Pages`
- Source: `GitHub Actions`
3. Every push to `main` triggers:
- install
- build
- deploy to GitHub Pages

Live URL format:

`https://<your-github-username>.github.io/<repo-name>/`

## Project Structure

```text
app/
  page.js (landing)
  dashboard/
  fleet/
  tracking/
  orders/
  drivers/
  crm/
  finance/
components/
  layout/
  ui/
  charts/
  map/
lib/
  mockData.js
.github/workflows/
  deploy.yml
```

## Sample Mock Data

All sample data lives in `lib/mockData.js`:
- trucks
- orders
- drivers
- customers
- tracking points
- financial series

## Suggested Next Iterations

- Real auth (Admin/Dispatcher roles)
- Backend APIs + PostgreSQL
- WebSocket tracking feed
- PDF/Excel report export
- Dark mode + i18n
