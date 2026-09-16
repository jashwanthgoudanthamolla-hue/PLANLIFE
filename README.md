# ⚡ PlanLife — Notion Planning System & Executive Dashboard

An executive planning workspace designed in high-contrast Notion aesthetics. Includes an **Interactive 24-Hour Circular Day Planner**, **Comprehensive Finance Manager with Real-Time Surplus/Deficit Engine**, **Goal Progression Hub**, **Habit Streak Multipliers**, **Master Checklist**, **Daily Focus Engine**, and a **Summarized Executive Dashboard**.

---

## 🌟 Key Features Overview

### 1. 📅 24-Hour Circular Day Planner (Matching Your Screenshots)
- **Interactive 24-Hour Clock Dial**: 15-minute resolution, outer hour markers (00, 3, 6, 9, 12, 15, 18, 21), tick marks, live gold needle indicating current time, and real-time center readout (`22:32 NOW`).
- **Drag-to-Schedule**: Click and drag across the circular clock face to visually block out time.
- **Category Colors**: Sleep (Blue), Work (Purple), Personal (Cyan), Travel (Lilac), Office (Red/Coral), and more.
- **Schedule Block List**: Clean Notion cards with completion checkboxes, category badges, inline edit, and delete.
- **Empty State**: Displays when no blocks are scheduled, matching your reference screenshot.
- **Hours by Category**: Real-time distribution breakdown bars with duration and percentage of 24h.
- **Auto-Rollover**: Move all uncompleted blocks from a previous day to tomorrow with one click.

### 2. 💰 Finance Manager (Real-Time Surplus / Deficit Engine)
- **i. Available in Banks**: Multiple liquid accounts (Checking, High Yield Savings, Investment Cash) with total cash balance.
- **ii. Loans Due**: EMI tracker with monthly dues, due dates, remaining principal, and status.
- **iii. Credit Cards Due**: Statement balance, minimum due, payment date, and live credit utilization progress bars.
- **iv. Expected Inflows**: Income streams (salary, freelancing, dividends) with probability and arrival dates.
- **v. Future Expenses**: Upcoming fixed and recurring bills (rent, insurance, utilities, subscriptions).
- **vii. Things to Buy (Wishlist)**: Items with priority, estimated cost, target date, and automatic affordability assessment.
- **viii. Surplus / Deficit Formula**:
  $$\text{Net Surplus} = (\text{Bank Balances} + \text{Inflows}) - (\text{Loans Due} + \text{Credit Cards} + \text{Future Expenses})$$
  Features dynamic health badges: *Healthy Surplus* vs *Deficit Alert*, plus monthly burn rate and financial runway calculation.

### 3. 🎯 Goals & Strategy (Matching Your Screenshot)
- **Circular Progress Ring**: Dynamic percentage circle (`0%`, `50%`, `100%`).
- **Step Tracking**: `Update Progress: [ X ] / Y steps` with quick `+1` button and `Save` button.
- **Notes & Strategy**: Card with editable bullet points and execution strategies.
- **Docs & Attachments**: Attach study materials, PDFs, spreadsheets, and web links with count badge.
- **Milestones**: `+ Add milestone` button to expand steps and strategic roadmap.

### 4. 🔥 Habit Streak Counter
- **Daily Check-ins**: 7-day visual matrix (Mon through Sun bubbles).
- **Flame Streaks**: Active streak counter 🔥 and all-time best record 🏆.
- **Consistency Rates**: Weekly percentage completion ring.

### 5. ✅ Checklist & Master Task Hub
- **Quick-Add Bar**: Instant capture with priority tags (🔴 P1, 🟡 P2, 🟢 P3), category tags, and due dates.
- **Smart Filters**: Filter by *All Tasks*, *Today*, *Upcoming*, and *Completed*.

### 6. ⚡ Daily Focus & Time Audit (Bonus "Must-Have" Feature)
- **Non-Negotiable Top 3**: Prioritize your highest-leverage outcomes before tackling the day.
- **Frictionless Brain Dump**: Capture thoughts and send them directly to the Checklist or Day Planner with 1 click.
- **Evening Reflection**: 1-10 energy rating slider, needle-mover analysis, and friction audit.

### 7. 📊 Executive Summarized Dashboard
- Synchronizes all modules into a high-level command center with live KPIs, active time-block indicators, goal snapshots, and cash runway.

---

## 🚀 How to Run & Use

### Option 1: Standalone Browser (Instant, No Installation Required)
Simply double-click or open `index.html` in any web browser (Chrome, Edge, Safari, Firefox).
All data is saved automatically in your browser's `localStorage` and persists between visits.
You can use the **Backup** and **Restore** buttons in the navbar to export and import your data as JSON.

### Option 2: Embed Inside Notion
1. Host the folder on GitHub Pages, Vercel, or Netlify (all free with 1 click).
2. Inside any Notion page, type `/embed` and press Enter.
3. Paste the URL of your hosted PlanLife app.
4. Expand the embed block to full width.
5. Enjoy the interactive 24-hour circular day planner directly inside your Notion workspace!

### Option 3: Build as Native Notion Databases
Refer to `NOTION_TEMPLATE_SPECIFICATION.md` for complete database schemas, Notion Formulas 2.0 formulas, and page layouts.
