# PlanLife — Complete Notion Architecture & Template Specification

This document provides the complete structural blueprint, database schemas, Notion Formulas 2.0 formulas, page hierarchy, and embed instructions to build the **PlanLife Executive OS** directly inside Notion or embed the interactive web application widget suite.

---

## Part 1: Notion Page Structure & Hierarchy

Create a top-level Notion page named **PlanLife Executive OS**.

```
PlanLife Executive OS (Dashboard Page)
├── 🏛️ Command Center (Header, Daily KPIs, Quote, Live Clock Embed)
├── 📅 Daily Sprint & Day Planner (2-Column Layout: 24h Clock Widget + Schedule DB)
├── 🎯 Strategic Goals & Outcomes (Gallery View of Active Goals with Progress Rings)
├── 💰 Finance Hub & Cash Flow Engine (Multi-tab Linked Views + Surplus / Deficit Callout)
├── 🔥 Habit Streak Multiplier (7-Day Board & Table View with Fire Streaks)
├── ✅ Master Checklist & Tasks (Filtered by Today, Priority P1/P2/P3, and Context)
└── ⚡ Focus, Brain Dump & Daily Review (Toggle Lists + Frictionless Notes)
```

---

## Part 2: Database Schemas & Formulas 2.0

### Database 1: 💰 Finance Manager

The finance system tracks liquid bank accounts, debt obligations, future cash flows, and wishlist items.

#### A. Database: `Accounts & Liquid Cash`
| Property Name | Property Type | Description / Options |
| :--- | :--- | :--- |
| **Account Name** | Title | e.g. *JPMorgan Chase Checking*, *Ally HYSA* |
| **Institution** | Select | `Chase`, `Ally`, `Vanguard`, `Fidelity`, `Cash` |
| **Account Type** | Select | `Operating Checking`, `Emergency Reserve`, `Investment Cash` |
| **Balance** | Number (Currency: USD) | e.g. `$8,450.00` |
| **Is Liquid?** | Checkbox | `true` |
| **Last Reconciled** | Date | Date of statement reconciliation |

#### B. Database: `Loans & Debt Obligations`
| Property Name | Property Type | Description / Options |
| :--- | :--- | :--- |
| **Loan Name** | Title | e.g. *Toyota Auto Loan EMI*, *Education Loan* |
| **Lender / Bank** | Text | Lender institution |
| **Monthly EMI** | Number (Currency) | Monthly payment obligation (e.g. `$480.00`) |
| **Next Due Date** | Date | Monthly due date |
| **Remaining Principal** | Number (Currency) | Remaining payoff balance |
| **Status** | Status | `Active`, `Paid Off`, `Deferred` |
| **Due in Days** | Formula (2.0) | `dateBetween(prop("Next Due Date"), now(), "days")` |

#### C. Database: `Credit Cards`
| Property Name | Property Type | Description / Options |
| :--- | :--- | :--- |
| **Card Name** | Title | e.g. *Amex Platinum*, *Chase Sapphire* |
| **Statement Balance** | Number (Currency) | Amount due this cycle (e.g. `$2,150.00`) |
| **Minimum Due** | Number (Currency) | Minimum monthly payment required |
| **Payment Due Date** | Date | Due date |
| **Credit Limit** | Number (Currency) | Total credit line (e.g. `$15,000`) |
| **Utilization %** | Formula (2.0) | `round((prop("Statement Balance") / prop("Credit Limit")) * 100) + "%"` |
| **Autopay Configured?**| Checkbox | `true` |

#### D. Database: `Expected Inflows`
| Property Name | Property Type | Description / Options |
| :--- | :--- | :--- |
| **Inflow Source** | Title | e.g. *Bi-weekly Salary*, *Consulting Retainer* |
| **Category** | Select | `Salary`, `Freelance`, `Dividends`, `Bonus`, `Refund` |
| **Expected Amount** | Number (Currency) | e.g. `$6,500.00` |
| **Expected Date** | Date | Projected arrival date |
| **Status** | Status | `Projected`, `Invoiced`, `Received` |
| **Probability** | Select | `100% Guaranteed`, `90% Probable`, `50% Speculative` |

#### E. Database: `Future Expenses & Subscriptions`
| Property Name | Property Type | Description / Options |
| :--- | :--- | :--- |
| **Expense Item** | Title | e.g. *Apartment Rent*, *Health Insurance*, *AI Stack* |
| **Category** | Select | `Housing`, `Health`, `Utilities`, `Software`, `Tax` |
| **Amount Due** | Number (Currency) | e.g. `$2,600.00` |
| **Due Date** | Date | Payment due date |
| **Recurrence** | Select | `Monthly`, `Quarterly`, `Annual`, `One-time` |
| **Status** | Status | `Upcoming`, `Scheduled`, `Paid` |

#### F. Database: `Things to Buy / Wishlist`
| Property Name | Property Type | Description / Options |
| :--- | :--- | :--- |
| **Item Name** | Title | e.g. *Herman Miller Embody Chair* |
| **Estimated Cost** | Number (Currency) | e.g. `$1,695.00` |
| **Priority** | Select | `🔴 High (Need)`, `🟡 Medium (Value)`, `🟢 Low (Want)` |
| **Target Buy Date** | Date | Planned purchase date |
| **Affordability** | Formula (2.0) | `if(prop("Estimated Cost") <= 1500, "✅ Safe from Surplus", "⏳ Needs Allocation")` |

#### G. Master Cash Flow Rollup & Surplus Formula:
In a centralized dashboard page block or summary relation:
$$\text{Net Cash Surplus} = \text{Total Liquid Cash} + \text{Expected Inflows} - (\text{Credit Card Dues} + \text{Loans Due} + \text{Future Expenses})$$

**Notion Formula 2.0 for Surplus Status Badge:**
```js
let(
  surplus, prop("Total Bank Balances") + prop("Expected Inflows") - prop("Total Outflows"),
  if(surplus >= 5000, 
    "🟢 Healthy Surplus (+$" + surplus.format() + ")",
    if(surplus >= 0, 
      "🟡 Tight Buffer (+$" + surplus.format() + ")", 
      "🔴 Deficit Alert (-$" + abs(surplus).format() + ")"
    )
  )
)
```

---

### Database 2: 🎯 Strategic Goals & Milestones (Matching Image 3)

| Property Name | Property Type | Description / Options |
| :--- | :--- | :--- |
| **Goal Title** | Title | e.g. *BUILD A NOTION TEMPLATE* |
| **Completed Steps** | Number | e.g. `0` |
| **Total Steps** | Number | e.g. `1` or `5` |
| **Target Deadline** | Date | e.g. `Sep 30, 2026` |
| **Notes & Strategy** | Text (or Page Body) | Strategic bullet points & execution principles |
| **Files & Attachments**| Files & media | Attached PDFs, spreadsheets, documents |
| **Progress %** | Formula (2.0) | `round((prop("Completed Steps") / max(1, prop("Total Steps"))) * 100)` |
| **Visual Progress Bar**| Formula (2.0) | *(Formula below)* |
| **Status** | Status | `In Progress`, `On Track`, `Completed`, `Paused` |

**Notion Formula 2.0 for Circular / Bar Progress Display:**
```js
let(
  pct, round((prop("Completed Steps") / max(1, prop("Total Steps"))) * 100),
  let(
    filled, slice("██████████", 0, round(pct / 10)),
    empty, slice("░░░░░░░░░░", 0, 10 - round(pct / 10)),
    filled + empty + " " + pct + "%" + " (" + prop("Completed Steps") + "/" + prop("Total Steps") + " steps)"
  )
)
```

---

### Database 3: 🔥 Habit Streak Counter

| Property Name | Property Type | Description / Options |
| :--- | :--- | :--- |
| **Habit Name** | Title | e.g. *Morning Meditation*, *Deep Work Sprint* |
| **Category** | Select | `Mind`, `Body`, `Craft`, `Discipline` |
| **Frequency** | Select | `Daily`, `Weekdays`, `3x / Week` |
| **Current Streak** | Number | e.g. `14` |
| **Best Streak** | Number | e.g. `28` |
| **Mon** | Checkbox | Monday completion |
| **Tue** | Checkbox | Tuesday completion |
| **Wed** | Checkbox | Wednesday completion |
| **Thu** | Checkbox | Thursday completion |
| **Fri** | Checkbox | Friday completion |
| **Sat** | Checkbox | Saturday completion |
| **Sun** | Checkbox | Sunday completion |
| **Streak Badge** | Formula (2.0) | `if(prop("Current Streak") > 0, "🔥 " + prop("Current Streak") + " days", "💤 Inactive")` |
| **Weekly Completion** | Formula (2.0) | *(Formula below)* |

**Notion Formula 2.0 for Weekly Completion:**
```js
let(
  doneCount, (prop("Mon") ? 1 : 0) + (prop("Tue") ? 1 : 0) + (prop("Wed") ? 1 : 0) + (prop("Thu") ? 1 : 0) + (prop("Fri") ? 1 : 0) + (prop("Sat") ? 1 : 0) + (prop("Sun") ? 1 : 0),
  round((doneCount / 7) * 100) + "% (" + doneCount + "/7 days)"
)
```

---

### Database 4: ✅ Master Checklist & Tasks

| Property Name | Property Type | Description / Options |
| :--- | :--- | :--- |
| **Task Name** | Title | Description of action |
| **Done?** | Checkbox | Completion status |
| **Priority** | Select | `🔴 P1 High`, `🟡 P2 Medium`, `🟢 P3 Low` |
| **Category Tag** | Select | `Work`, `Personal`, `Finance`, `Health`, `Learning` |
| **Due Date** | Date | Target completion date |
| **Related Goal** | Relation | Linked to *Strategic Goals* Database |
| **Energy Level** | Select | `⚡ High Focus`, `☕ Low Energy`, `📞 Quick Win` |

---

### Database 5: 📅 Day Schedule Blocks (Native Companion to Circular Clock)

| Property Name | Property Type | Description / Options |
| :--- | :--- | :--- |
| **Block Title** | Title | e.g. *WORK @ FINX*, *Sleep*, *Get ready* |
| **Time Range** | Date (with start & end) | Start and End time in 24h format |
| **Category** | Select | `WORK`, `SLEEP`, `PERSONAL`, `TRAVEL`, `OFFICE`, `HEALTH` |
| **Completed?** | Checkbox | Done toggle |
| **Date** | Date | Planning date |

---

## Part 3: How to Embed the Interactive 24-Hour Circular Clock in Notion

Because Notion does not natively support interactive SVG/Canvas drag-and-drop 24-hour circular clocks with live rotating hands and audio/visual snapping:

1. **Local Access**: Open `e:\PLANLIFE\index.html` in your browser.
2. **Embed in Notion**:
   - Host `index.html`, `styles.css`, and `app.js` using free, 1-click GitHub Pages, Vercel, or Netlify.
   - In your Notion page, type `/embed` and press Enter.
   - Paste the URL of your hosted PlanLife dashboard.
   - Resize the embed container to full width.
   - The interactive 24-Hour Circular Day Planner, Goal Cards, Finance Surplus Calculator, and Habit Matrix will render directly inside Notion!
