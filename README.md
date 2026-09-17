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

### Option 2: Embed Modular Widgets Inside Notion (Recommended)

Instead of embedding the entire monolithic desktop app into a single iframe, PlanLife provides **dedicated, distraction-free micro-widgets** designed to look like native Notion components:

#### 🧩 Notion Widget Hub & Embed Link Generator
Open **`widgets/index.html`** in your browser to test all widgets, switch between **Notion Dark**, **Notion Light**, or **Transparent**, and copy 1-click Notion embed links!

#### 🔗 Direct Widget Embed URLs

| Widget | Purpose | Direct Parameter URL | Pretty File Shortcut | Recommended Notion Sizing |
| :--- | :--- | :--- | :--- | :--- |
| 🕒 **24h Circular Clock** | Isolated circular dial, live hand, center time | `index.html?widget=clock&theme=dark` | `widgets/clock.html` | Height: `450px` \| 1/2 Column or Full |
| 📋 **Day Schedule Blocks** | Active timeline blocks with checkoff & quick add | `index.html?widget=schedule&theme=dark` | `widgets/schedule.html` | Height: `460px` \| 1/2 Column or Full |
| 📊 **Executive KPI Strip** | Single-line command bar (Surplus, Time, Habits, Tasks) | `index.html?widget=kpis&theme=dark` | `widgets/kpis.html` | Height: `150px` \| Full Width Banner |
| 🔥 **Habit Streak Tracker** | 7-day Mon-Sun check-in grid with fire streaks | `index.html?widget=habits&theme=dark` | `widgets/habits.html` | Height: `420px` \| Full or 2-Column |
| 💰 **Finance Surplus Engine** | Net Surplus badge, bank balances, loans & runway | `index.html?widget=finance&theme=dark` | `widgets/finance.html` | Height: `500px` \| Full Width |
| 🎯 **Strategic Goals** | Circular progress rings, step milestones & links | `index.html?widget=goals&theme=dark` | `widgets/goals.html` | Height: `450px` \| Full or 2-Column |
| ✅ **Master Checklist** | Quick task capture with P1/P2/P3 priority badges | `index.html?widget=checklist&theme=dark` | `widgets/checklist.html` | Height: `420px` \| 1/2 Column or Full |
| ⚡ **Daily Focus Top 3** | Top 3 high-leverage outcomes & Brain Dump notepad | `index.html?widget=focus&theme=dark` | `widgets/focus.html` | Height: `400px` \| Full Width |
| 📅 **Complete Day Planner** | Responsive Clock + Schedule side-by-side | `index.html?widget=planner&theme=dark` | `widgets/planner.html` | Height: `550px` \| Full Width |

#### ⚡ Real-Time Cross-Widget Synchronization
All widgets embedded across your Notion pages share the same `localStorage` and synchronize in real time via `BroadcastChannel`. When you check off a block on the Clock or Schedule, the KPI strip and Dashboard widgets update instantly without refreshing the page!

#### 🎨 Theme Parameters
Add `&theme=dark` for Notion Dark Mode (`#191919`), `&theme=light` for Notion Light Mode (`#ffffff`), or `&theme=transparent` so the widget seamlessly floats on top of whatever background your Notion page or callout block has.

---

### Option 3: Build as Native Notion Databases
Refer to `NOTION_TEMPLATE_SPECIFICATION.md` for complete database schemas, Notion Formulas 2.0 formulas, and page layouts.
