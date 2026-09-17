/**
 * PLANLIFE — Executive Notion Planning Dashboard
 * Comprehensive client-side state management, 24h circular clock engine,
 * finance manager, goals system, habit streaks, checklist, and focus engine.
 */

// Initial Default State (Pre-populated with user's exact screenshot data)
const DEFAULT_STATE = {
  theme: 'light',
  selectedDate: '2026-09-16',
  
  // 1. DAY PLANNER SCHEDULE BLOCKS (Matching Reference Image 1)
  schedule: {
    '2026-09-16': [
      { id: 'b-0', title: 'Sleep', start: '00:00', end: '05:00', category: 'SLEEP', color: '#3b82f6', completed: true },
      { id: 'b-1', title: 'WORK', start: '05:00', end: '08:00', category: 'WORK', color: '#8b5cf6', completed: true },
      { id: 'b-2', title: 'Get ready', start: '08:00', end: '09:15', category: 'PERSONAL', color: '#06b6d4', completed: true },
      { id: 'b-3', title: 'OFFICE', start: '09:15', end: '09:30', category: 'TRAVEL', color: '#a855f7', completed: true },
      { id: 'b-4', title: 'WORK @ FINX', start: '09:30', end: '21:00', category: 'OFFICE', color: '#ef4444', completed: false },
      { id: 'b-5', title: 'WORK', start: '21:00', end: '23:00', category: 'WORK', color: '#8b5cf6', completed: false },
      { id: 'b-6', title: 'SLEEP', start: '23:00', end: '24:00', category: 'SLEEP', color: '#3b82f6', completed: false }
    ],
    '2026-09-17': []
  },

  // 2. FINANCE MANAGER DATA
  finance: {
    // i. Available Bank Balances
    banks: [
      { id: 'bk-1', name: 'Primary Checking', type: 'Operating Cash', institution: 'JPMorgan Chase', balance: 8450.00, updated: 'Today' },
      { id: 'bk-2', name: 'High Yield Savings', type: 'Emergency Reserve', institution: 'Ally Bank (4.25%)', balance: 18200.00, updated: 'Yesterday' },
      { id: 'bk-3', name: 'Brokerage Cash Account', type: 'Investment Cash', institution: 'Vanguard Cash Plus', balance: 4850.00, updated: 'Sep 14' }
    ],
    // ii. Loans Due
    loans: [
      { id: 'ln-1', name: 'Car Loan EMI', lender: 'Toyota Financial', emi: 480.00, dueDate: '2026-09-25', remaining: 11500.00, status: 'Active' },
      { id: 'ln-2', name: 'Executive Education Loan', lender: 'Sallie Mae', emi: 320.00, dueDate: '2026-10-02', remaining: 7800.00, status: 'Active' }
    ],
    // iii. Credit Cards Due
    cards: [
      { id: 'cc-1', name: 'Amex Platinum', balance: 2150.00, minDue: 2150.00, dueDate: '2026-09-28', limit: 15000, status: 'Pending' },
      { id: 'cc-2', name: 'Chase Sapphire Reserve', balance: 1420.00, minDue: 150.00, dueDate: '2026-10-05', limit: 20000, status: 'Pending' },
      { id: 'cc-3', name: 'Apple Card', balance: 340.00, minDue: 35.00, dueDate: '2026-09-30', limit: 8000, status: 'Pending' }
    ],
    // iv. Expected Inflows
    inflows: [
      { id: 'inf-1', source: 'Corporate Salary Deposit', category: 'Salary', amount: 6500.00, expectedDate: '2026-09-30', probability: '100%', status: 'Confirmed' },
      { id: 'inf-2', source: 'Product Consulting Retainer', category: 'Freelance', amount: 2200.00, expectedDate: '2026-10-01', probability: '95%', status: 'Invoiced' },
      { id: 'inf-3', source: 'Quarterly ETF Dividends', category: 'Investment', amount: 450.00, expectedDate: '2026-10-15', probability: '90%', status: 'Projected' }
    ],
    // v. Future Expenses
    expenses: [
      { id: 'exp-1', title: 'Luxury Apartment Rent', category: 'Housing', amount: 2600.00, dueDate: '2026-10-01', recurrence: 'Monthly', status: 'Upcoming' },
      { id: 'exp-2', title: 'Health & Dental Insurance', category: 'Health', amount: 380.00, dueDate: '2026-10-05', recurrence: 'Monthly', status: 'Upcoming' },
      { id: 'exp-3', title: 'SaaS Software & AI Stack', category: 'Business', amount: 195.00, dueDate: '2026-09-24', recurrence: 'Monthly', status: 'Upcoming' },
      { id: 'exp-4', title: 'Electric & Fiber Internet', category: 'Utilities', amount: 165.00, dueDate: '2026-09-27', recurrence: 'Monthly', status: 'Upcoming' }
    ],
    // vii. Things to Buy / Wishlist
    wishlist: [
      { id: 'wb-1', item: 'Herman Miller Embody Chair', priority: 'High', cost: 1695.00, category: 'Need / Ergonomics', targetDate: '2026-10-15' },
      { id: 'wb-2', item: 'Studio Display 27-inch 5K', priority: 'Medium', cost: 1599.00, category: 'Want / Setup', targetDate: '2026-11-01' },
      { id: 'wb-3', item: 'Sony WH-1000XM5 ANC Headphones', priority: 'Low', cost: 398.00, category: 'Productivity', targetDate: '2026-12-01' }
    ]
  },

  // 3. GOALS TRACKER (Matching Reference Image 3: BUILD A NOTION TEMPLATE)
  goals: [
    {
      id: 'g-1',
      title: 'BUILD A NOTION TEMPLATE',
      currentSteps: 0,
      totalSteps: 1,
      deadline: '2026-09-30',
      notes: [
        'Define database schema for daily sprints & habit trackers',
        'Design executive white typography & high-contrast aesthetics',
        'Prepare launch documentation, user templates & demo video'
      ],
      attachments: [],
      milestones: [
        { id: 'm-1', text: 'Complete database relational links', done: false }
      ]
    },
    {
      id: 'g-2',
      title: 'LAUNCH PLANLIFE EXECUTIVE OS',
      currentSteps: 3,
      totalSteps: 5,
      deadline: '2026-10-15',
      notes: [
        'Run beta tests with 25 product leaders',
        'Integrate 24-hour circular day planner widget',
        'Finalize Gumroad & Product Hunt launch assets'
      ],
      attachments: [
        { id: 'att-1', title: 'Product Hunt Launch Checklist.pdf', type: 'PDF', url: '#' },
        { id: 'att-2', title: 'PlanLife Beta Feedback Sheet', type: 'Sheet', url: '#' }
      ],
      milestones: [
        { id: 'm-2', text: 'Publish interactive landing page', done: true },
        { id: 'm-3', text: 'Create onboarding video walkthrough', done: true },
        { id: 'm-4', text: 'Distribute early access licenses', done: true },
        { id: 'm-5', text: 'Collect post-launch feedback', done: false }
      ]
    }
  ],

  // 4. HABIT STREAK TRACKER
  habits: [
    {
      id: 'h-1',
      name: 'Morning Meditation & Breathing (15m)',
      category: 'Mind',
      frequency: 'daily',
      currentStreak: 14,
      bestStreak: 28,
      history: { 'Mon': true, 'Tue': true, 'Wed': true, 'Thu': true, 'Fri': false, 'Sat': false, 'Sun': false }
    },
    {
      id: 'h-2',
      name: 'Deep Work Sprint (90m uninterrupted)',
      category: 'Craft',
      frequency: 'daily',
      currentStreak: 8,
      bestStreak: 21,
      history: { 'Mon': true, 'Tue': true, 'Wed': true, 'Thu': false, 'Fri': false, 'Sat': false, 'Sun': false }
    },
    {
      id: 'h-3',
      name: 'Physical Workout / Strength Training',
      category: 'Body',
      frequency: 'daily',
      currentStreak: 5,
      bestStreak: 19,
      history: { 'Mon': true, 'Tue': true, 'Wed': false, 'Thu': false, 'Fri': false, 'Sat': false, 'Sun': false }
    },
    {
      id: 'h-4',
      name: 'Evening Finance & Schedule Audit',
      category: 'Discipline',
      frequency: 'daily',
      currentStreak: 22,
      bestStreak: 30,
      history: { 'Mon': true, 'Tue': true, 'Wed': true, 'Thu': true, 'Fri': false, 'Sat': false, 'Sun': false }
    }
  ],

  // 5. CHECKLIST & TASKS
  tasks: [
    { id: 't-1', title: 'Review August bank statements & reconcile cash surplus', priority: 'high', tag: 'Finance', dueDate: '2026-09-16', completed: true },
    { id: 't-2', title: 'Draft schema for Notion habit streak formulas 2.0', priority: 'high', tag: 'Work', dueDate: '2026-09-16', completed: false },
    { id: 't-3', title: 'Schedule sync with engineering lead regarding Q4 roadmap', priority: 'medium', tag: 'Work', dueDate: '2026-09-17', completed: false },
    { id: 't-4', title: 'Research ergonomic monitor arm for dual display setup', priority: 'low', tag: 'Personal', dueDate: '2026-09-20', completed: false },
    { id: 't-5', title: 'Refill multivitamins & recovery supplements', priority: 'low', tag: 'Health', dueDate: '2026-09-18', completed: false }
  ],

  // 6. FOCUS & BRAIN DUMP (Value-add feature)
  focus: {
    top3: [
      { id: 'p1', text: 'Finalize Notion template database architecture', done: false },
      { id: 'p2', text: 'Reconcile loans due and verify credit card autopay', done: true },
      { id: 'p3', text: 'Complete 24-hour circular day planner schedule blocks', done: true }
    ],
    brainDump: 'Remember to verify tax deduction documents for the home office upgrade.\nSend invoice #104 to consulting client.\nBackup Notion workspace before migrating formulas.',
    review: {
      energy: 8,
      needleMoved: 'Shipped the full 24-Hour Circular Day Planner clock UI and finance manager calculations.',
      friction: 'Context switching between emails during the mid-day focus block.'
    }
  }
};

// =============================================================================
// MAIN APPLICATION CORE
// =============================================================================

class PlanLifeApp {
  constructor() {
    this.STORAGE_KEY = 'planlife_workspace_state_v1';
    this.instanceId = 'widget-' + Math.random().toString(36).substring(2, 9);
    this.state = this.loadState();
    
    // Parse URL Query Parameters for Widget Mode & Notion Embeds
    const params = new URLSearchParams(window.location.search);
    this.widgetMode = (params.get('widget') || '').toLowerCase();
    this.themeOverride = (params.get('theme') || '').toLowerCase();
    this.noBg = params.get('nobg') === 'true' || params.get('transparent') === 'true';
    const urlDate = params.get('date');
    if (urlDate && /^\d{4}-\d{2}-\d{2}$/.test(urlDate)) {
      this.state.selectedDate = urlDate;
    }

    // Active drag selection state for circular clock
    this.clockDrag = {
      isDragging: false,
      startAngle: null,
      currentAngle: null
    };

    // Active goal ID being edited/attached to
    this.activeGoalId = null;
    this.activeFinanceType = null;
    this.activeBlockId = null;
    this.activeTaskFilter = 'all';

    // Sub-controllers
    this.planner = new DayPlannerController(this);
    this.finance = new FinanceController(this);
    this.goals = new GoalsController(this);
    this.habits = new HabitsController(this);
    this.checklist = new ChecklistController(this);
    this.focusCtrl = new FocusController(this);

    // Cross-widget real-time sync channel
    this.setupCrossWidgetSync();

    this.init();
  }

  loadState() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Could not load saved state, using defaults', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  saveState() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('Error saving state to localStorage', e);
    }
    
    // Broadcast state update to all other embedded Notion widgets in real time
    if (this.syncChannel) {
      try {
        this.syncChannel.postMessage({
          type: 'STATE_UPDATED',
          sender: this.instanceId,
          timestamp: Date.now()
        });
      } catch (err) {
        console.warn('BroadcastChannel error', err);
      }
    }

    this.refreshActiveViews();
  }

  setupCrossWidgetSync() {
    // 1. BroadcastChannel API for instant iframe-to-iframe communication
    if (typeof BroadcastChannel !== 'undefined') {
      try {
        this.syncChannel = new BroadcastChannel('planlife_notion_sync');
        this.syncChannel.onmessage = (event) => {
          if (event.data && event.data.type === 'STATE_UPDATED' && event.data.sender !== this.instanceId) {
            this.handleExternalStateUpdate();
          }
        };
      } catch (e) {
        console.warn('BroadcastChannel not supported', e);
      }
    }

    // 2. Storage event fallback for cross-tab or cross-window sync
    window.addEventListener('storage', (e) => {
      if (e.key === this.STORAGE_KEY) {
        this.handleExternalStateUpdate();
      }
    });
  }

  handleExternalStateUpdate() {
    const newState = this.loadState();
    this.state = newState;
    this.refreshActiveViews();
  }

  refreshActiveViews() {
    if (this.widgetMode) {
      this.renderWidgetView(this.widgetMode);
    } else {
      this.renderDashboard();
      this.planner.render();
      this.finance.render();
      this.goals.render();
      this.habits.render();
      this.checklist.render();
      this.focusCtrl.render();
    }
  }

  init() {
    // Determine active theme (URL override takes precedence, then saved state)
    let activeTheme = this.themeOverride || this.state.theme || 'light';
    this.applyTheme(activeTheme);
    if (this.noBg) {
      document.body.classList.add('theme-transparent');
    }

    this.bindGlobalEvents();

    // Set today's date picker to state date
    const dateInput = document.getElementById('plannerDateInput');
    if (dateInput) {
      dateInput.value = this.state.selectedDate;
    }

    // Initialize all tabs
    this.planner.init();
    this.finance.init();
    this.goals.init();
    this.habits.init();
    this.checklist.init();
    this.focusCtrl.init();

    // If Widget Mode active, initialize dedicated widget layout
    if (this.widgetMode) {
      this.setupWidgetMode(this.widgetMode);
    } else {
      // Render standard executive dashboard
      this.renderDashboard();
    }

    // Live clock ticker every 30 seconds
    setInterval(() => {
      this.planner.updateLiveTime();
    }, 30000);
  }

  applyTheme(theme) {
    this.state.theme = theme;
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-transparent');
    if (theme === 'dark') {
      document.body.classList.add('theme-dark');
      const icon = document.querySelector('.theme-icon');
      if (icon) icon.textContent = '☀️';
    } else if (theme === 'transparent') {
      document.body.classList.add('theme-transparent');
      // If user prefers dark system theme, also add dark mode contrast
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('theme-dark');
      }
    } else {
      document.body.classList.add('theme-light');
      const icon = document.querySelector('.theme-icon');
      if (icon) icon.textContent = '🌙';
    }
  }

  setupWidgetMode(widgetName) {
    document.body.classList.add('is-widget');
    document.body.classList.add(`widget-${widgetName}`);
    document.documentElement.classList.add('is-widget');

    // Route to appropriate tab and trigger view render
    this.renderWidgetView(widgetName);
  }

  renderWidgetView(widgetName) {
    switch (widgetName) {
      case 'clock':
        this.switchTab('dayplanner');
        this.planner.render();
        break;
      case 'schedule':
        this.switchTab('dayplanner');
        this.planner.render();
        break;
      case 'planner':
        this.switchTab('dayplanner');
        this.planner.render();
        break;
      case 'kpis':
      case 'kpi':
        this.switchTab('dashboard');
        this.renderDashboard();
        break;
      case 'habits':
        this.switchTab('habits');
        this.habits.render();
        break;
      case 'finance':
        this.switchTab('finance');
        this.finance.render();
        break;
      case 'goals':
        this.switchTab('goals');
        this.goals.render();
        break;
      case 'tasks':
      case 'checklist':
        this.switchTab('checklist');
        this.checklist.render();
        break;
      case 'focus':
        this.switchTab('focus');
        this.focusCtrl.render();
        break;
      default:
        this.switchTab('dashboard');
        this.renderDashboard();
    }
  }

  bindGlobalEvents() {
    // Top Tabs Navigation
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const targetTab = tab.getAttribute('data-tab');
        this.switchTab(targetTab);
      });
    });

    // Jump-to-tab buttons on Dashboard
    document.querySelectorAll('.jump-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        this.switchTab(target);
      });
    });

    // Dark/Light Theme Toggle
    document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
      const nextTheme = this.state.theme === 'light' ? 'dark' : 'light';
      this.applyTheme(nextTheme);
      this.saveState();
    });

    // Backup Export
    document.getElementById('exportDataBtn')?.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `planlife_backup_${new Date().toISOString().slice(0, 10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    });

    // Restore Import
    const fileInput = document.getElementById('importFileInput');
    document.getElementById('importDataBtn')?.addEventListener('click', () => {
      fileInput?.click();
    });

    fileInput?.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          this.state = parsed;
          this.saveState();
          location.reload();
        } catch (err) {
          alert('Invalid JSON backup file');
        }
      };
      reader.readAsText(file);
    });

    // Reset Demo Data
    document.getElementById('resetDataBtn')?.addEventListener('click', () => {
      if (confirm('Reset all planner data to default demo state? This will overwrite local changes.')) {
        this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
        this.saveState();
        location.reload();
      }
    });
  }

  switchTab(tabId) {
    document.querySelectorAll('.nav-tab').forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-tab') === tabId);
    });
    document.querySelectorAll('.tab-view').forEach(view => {
      view.classList.toggle('active', view.id === `tab-${tabId}`);
    });

    // If dayplanner tab activated, trigger redraw
    if (tabId === 'dayplanner') {
      this.planner.render();
    } else if (tabId === 'dashboard') {
      this.renderDashboard();
    }
  }

  // =========================================================================
  // EXECUTIVE DASHBOARD RENDERER
  // =========================================================================
  renderDashboard() {
    // 1. Finance KPIs
    const finSummary = this.finance.calculateNetSurplus();
    const kpiSurplus = document.getElementById('kpiNetSurplus');
    const kpiStatus = document.getElementById('kpiSurplusStatus');
    const kpiRunway = document.getElementById('kpiRunwayText');

    if (kpiSurplus) {
      kpiSurplus.textContent = (finSummary.netSurplus >= 0 ? '+$' : '-$') + Math.abs(finSummary.netSurplus).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      if (finSummary.netSurplus >= 0) {
        kpiSurplus.classList.remove('text-danger');
        kpiSurplus.classList.add('text-success');
        kpiStatus.className = 'kpi-badge badge-success';
        kpiStatus.textContent = 'Healthy Surplus';
      } else {
        kpiSurplus.classList.remove('text-success');
        kpiSurplus.classList.add('text-danger');
        kpiStatus.className = 'kpi-badge badge-danger';
        kpiStatus.textContent = 'Deficit Warning';
      }
      kpiRunway.textContent = `${finSummary.runwayMonths.toFixed(1)} mos runway`;
    }

    // 2. Schedule KPIs
    const date = this.state.selectedDate;
    const blocks = this.state.schedule[date] || [];
    let totalMinutes = 0;
    blocks.forEach(b => {
      const [sh, sm] = b.start.split(':').map(Number);
      const [eh, em] = b.end.split(':').map(Number);
      const startMin = sh * 60 + sm;
      const endMin = (eh === 24 ? 24 * 60 : eh * 60 + em);
      totalMinutes += Math.max(0, endMin - startMin);
    });
    const hours = (totalMinutes / 60).toFixed(1);
    const kpiHours = document.getElementById('kpiScheduledHours');
    const kpiBlocks = document.getElementById('kpiBlocksCount');
    const kpiActive = document.getElementById('kpiActiveBlock');

    if (kpiHours) kpiHours.innerHTML = `${hours}h <span class="kpi-unit">/ 24h</span>`;
    if (kpiBlocks) kpiBlocks.textContent = `${blocks.length} Blocks`;

    // Active block determination
    const now = new Date();
    const curMin = now.getHours() * 60 + now.getMinutes();
    let currentBlock = null;
    blocks.forEach(b => {
      const [sh, sm] = b.start.split(':').map(Number);
      const [eh, em] = b.end.split(':').map(Number);
      const startMin = sh * 60 + sm;
      const endMin = (eh === 24 ? 24 * 60 : eh * 60 + em);
      if (curMin >= startMin && curMin < endMin) {
        currentBlock = b;
      }
    });
    if (kpiActive) {
      kpiActive.textContent = currentBlock ? `Now: ${currentBlock.title}` : 'Now: Free Time';
    }

    // 3. Habits KPIs
    const totalHabits = this.state.habits.length;
    let doneTodayCount = 0;
    let topStreak = 0;
    this.state.habits.forEach(h => {
      if (h.history['Wed']) doneTodayCount++; // using Wednesday for current snapshot
      if (h.currentStreak > topStreak) topStreak = h.currentStreak;
    });
    const habitRate = totalHabits > 0 ? Math.round((doneTodayCount / totalHabits) * 100) : 0;
    const kpiHabits = document.getElementById('kpiHabitsCompleted');
    const kpiHabitRate = document.getElementById('kpiHabitRate');
    const kpiTopStreak = document.getElementById('kpiTopStreak');
    if (kpiHabits) kpiHabits.textContent = `${doneTodayCount} / ${totalHabits}`;
    if (kpiHabitRate) kpiHabitRate.textContent = `${habitRate}% Done`;
    if (kpiTopStreak) kpiTopStreak.textContent = `Top Streak: ${topStreak}d`;

    // 4. Tasks KPIs
    const totalTasks = this.state.tasks.length;
    const pendingTasks = this.state.tasks.filter(t => !t.completed).length;
    const dueToday = this.state.tasks.filter(t => t.dueDate === this.state.selectedDate && !t.completed).length;
    const doneTasks = totalTasks - pendingTasks;
    const kpiTasksPending = document.getElementById('kpiTasksPending');
    const kpiDueToday = document.getElementById('kpiTasksDueToday');
    const kpiTasksCompleted = document.getElementById('kpiTasksCompletedToday');
    if (kpiTasksPending) kpiTasksPending.innerHTML = `${pendingTasks} <span class="kpi-unit">pending</span>`;
    if (kpiDueToday) kpiDueToday.textContent = `${dueToday} Due Today`;
    if (kpiTasksCompleted) kpiTasksCompleted.textContent = `${doneTasks} completed`;

    // 5. Dashboard Timeline List
    const timelineContainer = document.getElementById('dashScheduleTimeline');
    if (timelineContainer) {
      if (blocks.length === 0) {
        timelineContainer.innerHTML = `<div class="text-muted" style="padding: 16px 0;">No schedule blocks for today. Open Day Planner to add.</div>`;
      } else {
        timelineContainer.innerHTML = blocks.map(b => {
          const [sh, sm] = b.start.split(':').map(Number);
          const [eh, em] = b.end.split(':').map(Number);
          const startMin = sh * 60 + sm;
          const endMin = (eh === 24 ? 24 * 60 : eh * 60 + em);
          const isActive = (curMin >= startMin && curMin < endMin);
          return `
            <div class="dash-time-slot ${isActive ? 'is-active' : ''}" style="border-left-color: ${b.color};">
              <span class="slot-time">${b.start} → ${b.end}</span>
              <span class="slot-title">${b.title}</span>
              <span class="slot-category" style="background-color: ${b.color}22; color: ${b.color};">${b.category}</span>
            </div>
          `;
        }).join('');
      }
    }

    // 6. Dashboard Goals Mini List
    const dashGoalsList = document.getElementById('dashGoalsList');
    if (dashGoalsList) {
      dashGoalsList.innerHTML = this.state.goals.map(g => {
        const pct = Math.round((g.currentSteps / Math.max(1, g.totalSteps)) * 100);
        return `
          <div class="dash-goal-row">
            <div class="dash-goal-ring">
              <svg viewBox="0 0 36 36" style="width:100%; height:100%; transform: rotate(-90deg);">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e2e8f0" stroke-width="4"/>
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#3b82f6" stroke-width="4" stroke-dasharray="${pct}, 100"/>
              </svg>
            </div>
            <div class="dash-goal-info">
              <div class="dash-goal-title">${g.title}</div>
              <div class="dash-goal-steps">${g.currentSteps}/${g.totalSteps} steps completed (${pct}%)</div>
            </div>
          </div>
        `;
      }).join('');
    }

    // 7. Dashboard Finance Mini
    const dashFinMini = document.getElementById('dashFinanceMini');
    if (dashFinMini) {
      dashFinMini.innerHTML = `
        <div class="fin-mini-row">
          <span class="fin-mini-lbl">Liquid Bank Balance</span>
          <span class="fin-mini-val">$${finSummary.totalBanks.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
        </div>
        <div class="fin-mini-row">
          <span class="fin-mini-lbl">Scheduled Loans & Credit Cards</span>
          <span class="fin-mini-val text-danger">−$${(finSummary.totalLoans + finSummary.totalCards).toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
        </div>
        <div class="fin-mini-row">
          <span class="fin-mini-lbl">Expected Income</span>
          <span class="fin-mini-val text-success">+$${finSummary.totalInflows.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
        </div>
      `;
    }

    // 8. Top 3 Priorities
    const top3Cont = document.getElementById('dashTop3Container');
    if (top3Cont) {
      top3Cont.innerHTML = this.state.focus.top3.map((item, idx) => `
        <div class="dash-top3-card ${item.done ? 'is-done' : ''}">
          <span class="top3-num-pill">${idx + 1}</span>
          <span style="font-size: 13px; font-weight: 500;">${item.text || 'Not configured'}</span>
        </div>
      `).join('');
    }
  }
}


// =============================================================================
// MODULE 1: 24-HOUR CIRCULAR DAY PLANNER ENGINE (Images 1 & 2)
// =============================================================================

class DayPlannerController {
  constructor(app) {
    this.app = app;
    this.svg = null;
    this.center = 250;
    this.outerRadius = 205;
    this.innerRadius = 110;
  }

  init() {
    this.svg = document.getElementById('clockSvg');
    this.bindEvents();
    this.render();
  }

  bindEvents() {
    // Date navigation
    document.getElementById('prevDayBtn')?.addEventListener('click', () => this.shiftDate(-1));
    document.getElementById('nextDayBtn')?.addEventListener('click', () => this.shiftDate(1));
    document.getElementById('todayBtn')?.addEventListener('click', () => {
      this.setDate(new Date().toISOString().slice(0, 10));
    });
    document.getElementById('plannerDateInput')?.addEventListener('change', (e) => {
      this.setDate(e.target.value);
    });

    // Quick Add Button
    document.getElementById('quickAddBlockBtn')?.addEventListener('click', () => {
      this.openModal();
    });

    // Rollover Button
    document.getElementById('rolloverBtn')?.addEventListener('click', () => {
      this.rolloverIncomplete();
    });

    // Save Block Modal Button
    document.getElementById('saveBlockBtn')?.addEventListener('click', () => {
      this.saveBlockFromModal();
    });

    // SVG Clock Click & Drag Interaction
    if (this.svg) {
      this.svg.addEventListener('mousedown', (e) => this.onClockMouseDown(e));
      window.addEventListener('mousemove', (e) => this.onClockMouseMove(e));
      window.addEventListener('mouseup', (e) => this.onClockMouseUp(e));
    }
  }

  setDate(newDate) {
    this.app.state.selectedDate = newDate;
    const input = document.getElementById('plannerDateInput');
    if (input) input.value = newDate;
    this.app.saveState();
    this.render();
  }

  shiftDate(days) {
    const current = new Date(this.app.state.selectedDate);
    current.setDate(current.getDate() + days);
    const dateStr = current.toISOString().slice(0, 10);
    this.setDate(dateStr);
  }

  getBlocksForDate() {
    return this.app.state.schedule[this.app.state.selectedDate] || [];
  }

  // Convert time "HH:MM" to angle in degrees (00:00 = 0deg at top)
  timeToAngle(timeStr) {
    const [h, m] = timeStr.split(':').map(Number);
    const totalHours = (h === 24 ? 24 : h) + (m / 60);
    return (totalHours / 24) * 360;
  }

  // Convert angle in degrees to time "HH:MM" snapped to 15-minute increments
  angleToTime(angleDeg) {
    let normalized = (angleDeg % 360 + 360) % 360;
    // 24 hours = 360 deg => 1 hour = 15 deg, 15 mins = 3.75 deg
    const snapUnit = 3.75;
    normalized = Math.round(normalized / snapUnit) * snapUnit;
    const totalMinutes = Math.round((normalized / 360) * 24 * 60);
    const hours = Math.floor(totalMinutes / 60) % 24;
    const minutes = totalMinutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  }

  // Polar to Cartesian conversion where 0 deg is at top (12 o'clock)
  polarToCartesian(radius, angleInDegrees) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: this.center + (radius * Math.cos(angleInRadians)),
      y: this.center + (radius * Math.sin(angleInRadians))
    };
  }

  // Construct SVG donut sector path
  describeDonutArc(startAngle, endAngle, innerR, outerR) {
    let angleSpan = endAngle - startAngle;
    if (angleSpan <= 0) angleSpan += 360;
    if (angleSpan > 359.99) angleSpan = 359.99; // prevent full-circle path degenerate

    const endAngleAdjusted = startAngle + angleSpan;
    const startOuter = this.polarToCartesian(outerR, startAngle);
    const endOuter = this.polarToCartesian(outerR, endAngleAdjusted);
    const endInner = this.polarToCartesian(innerR, endAngleAdjusted);
    const startInner = this.polarToCartesian(innerR, startAngle);

    const largeArcFlag = angleSpan > 180 ? 1 : 0;

    return [
      `M ${startOuter.x} ${startOuter.y}`,
      `A ${outerR} ${outerR} 0 ${largeArcFlag} 1 ${endOuter.x} ${endOuter.y}`,
      `L ${endInner.x} ${endInner.y}`,
      `A ${innerR} ${innerR} 0 ${largeArcFlag} 0 ${startInner.x} ${startInner.y}`,
      'Z'
    ].join(' ');
  }

  render() {
    this.renderClockDial();
    this.renderScheduleList();
    this.renderCategoryBreakdown();
    this.updateLiveTime();
  }

  renderClockDial() {
    if (!this.svg) return;
    const blocks = this.getBlocksForDate();

    // Base background layers
    let svgHtml = `
      <!-- Base Outer Dark Dial -->
      <circle cx="250" cy="250" r="225" fill="#0d1527" stroke="#1e293b" stroke-width="2" />
      <circle cx="250" cy="250" r="${this.outerRadius}" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
    `;

    // Render 96 15-min sub-ticks & 24 major hour ticks
    for (let i = 0; i < 96; i++) {
      const angle = (i / 96) * 360;
      const isHour = (i % 4 === 0);
      const isQuarter = (i % 24 === 0); // 0, 6, 12, 18
      const tickLength = isHour ? (isQuarter ? 14 : 9) : 4;
      const p1 = this.polarToCartesian(this.outerRadius, angle);
      const p2 = this.polarToCartesian(this.outerRadius - tickLength, angle);
      const strokeColor = isQuarter ? '#eab308' : (isHour ? '#64748b' : '#1e293b');
      const strokeWidth = isQuarter ? 2 : (isHour ? 1.5 : 1);
      svgHtml += `<line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" stroke="${strokeColor}" stroke-width="${strokeWidth}" />`;
    }

    // Outer Hour Number Labels: 00, 3, 6, 9, 12, 15, 18, 21
    const hoursToLabel = [
      { h: 0, label: '00', color: '#fbbf24' },
      { h: 3, label: '3', color: '#94a3b8' },
      { h: 6, label: '6', color: '#fbbf24' },
      { h: 9, label: '9', color: '#94a3b8' },
      { h: 12, label: '12', color: '#fbbf24' },
      { h: 15, label: '15', color: '#94a3b8' },
      { h: 18, label: '18', color: '#fbbf24' },
      { h: 21, label: '21', color: '#94a3b8' }
    ];

    hoursToLabel.forEach(item => {
      const angle = (item.h / 24) * 360;
      const pos = this.polarToCartesian(this.outerRadius + 14, angle);
      svgHtml += `
        <text x="${pos.x}" y="${pos.y + 4}" text-anchor="middle" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="${item.color}">
          ${item.label}
        </text>
      `;
    });

    // Render Blocks as Arcs
    blocks.forEach(b => {
      const startAngle = this.timeToAngle(b.start);
      const endAngle = this.timeToAngle(b.end);
      const pathData = this.describeDonutArc(startAngle, endAngle, this.innerRadius, this.outerRadius - 2);
      
      // Calculate midpoint angle for slice label
      let span = endAngle - startAngle;
      if (span <= 0) span += 360;
      const midAngle = (startAngle + span / 2) % 360;
      const midPos = this.polarToCartesian((this.innerRadius + this.outerRadius) / 2, midAngle);

      svgHtml += `
        <g class="clock-sector-group" data-id="${b.id}" style="cursor: pointer;">
          <path d="${pathData}" fill="${b.color}" fill-opacity="${b.completed ? '0.5' : '0.9'}" stroke="#0d1527" stroke-width="1.5" />
          ${span >= 15 ? `
            <text x="${midPos.x}" y="${midPos.y + 3}" text-anchor="middle" font-family="'Inter', sans-serif" font-size="10" font-weight="600" fill="#ffffff" style="pointer-events:none;">
              ${b.title.length > 12 ? b.title.slice(0, 10) + '...' : b.title}
            </text>
          ` : ''}
        </g>
      `;
    });

    // Render Drag Selection Preview Arc if user is dragging
    if (this.app.clockDrag.isDragging) {
      const startAngle = this.app.clockDrag.startAngle;
      const curAngle = this.app.clockDrag.currentAngle;
      const previewPath = this.describeDonutArc(startAngle, curAngle, this.innerRadius, this.outerRadius - 2);
      svgHtml += `<path d="${previewPath}" fill="#38bdf8" fill-opacity="0.4" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,4" />`;
    }

    // Render Live Current Time Hand (Needle)
    const now = new Date();
    const curTimeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const liveAngle = this.timeToAngle(curTimeStr);
    const needleEnd = this.polarToCartesian(this.outerRadius + 8, liveAngle);
    const needleHub = this.polarToCartesian(this.innerRadius - 40, liveAngle);

    svgHtml += `
      <!-- Live Needle Hand -->
      <line x1="${needleHub.x}" y1="${needleHub.y}" x2="${needleEnd.x}" y2="${needleEnd.y}" stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round" />
      <circle cx="${needleEnd.x}" cy="${needleEnd.y}" r="4" fill="#fbbf24" />
      <circle cx="250" cy="250" r="6" fill="#fbbf24" />
    `;

    this.svg.innerHTML = svgHtml;

    // Attach click handlers on rendered sectors
    this.svg.querySelectorAll('.clock-sector-group').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = el.getAttribute('data-id');
        this.openModal(id);
      });
    });
  }

  updateLiveTime() {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const liveTimeEl = document.getElementById('clockLiveTime');
    if (liveTimeEl) {
      liveTimeEl.textContent = timeStr;
    }
  }

  // Drag interaction on SVG clock
  getMouseAngle(e) {
    const rect = this.svg.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    // Map to SVG coordinate space 0-500
    const svgX = (mouseX / rect.width) * 500;
    const svgY = (mouseY / rect.height) * 500;
    const dx = svgX - this.center;
    const dy = svgY - this.center;

    // Angle in degrees where 0 is at top
    let theta = Math.atan2(dy, dx) * 180 / Math.PI;
    let clockAngle = theta + 90;
    if (clockAngle < 0) clockAngle += 360;
    return clockAngle;
  }

  onClockMouseDown(e) {
    const angle = this.getMouseAngle(e);
    this.app.clockDrag.isDragging = true;
    this.app.clockDrag.startAngle = angle;
    this.app.clockDrag.currentAngle = angle;
    this.renderClockDial();
  }

  onClockMouseMove(e) {
    if (!this.app.clockDrag.isDragging) return;
    const angle = this.getMouseAngle(e);
    this.app.clockDrag.currentAngle = angle;
    this.renderClockDial();
  }

  onClockMouseUp(e) {
    if (!this.app.clockDrag.isDragging) return;
    this.app.clockDrag.isDragging = false;
    const startAngle = this.app.clockDrag.startAngle;
    const endAngle = this.app.clockDrag.currentAngle;

    let span = endAngle - startAngle;
    if (span < 0) span += 360;

    // If dragged at least 15 minutes (3.75 deg), open modal with prefilled times
    if (span >= 3.75) {
      const startTime = this.angleToTime(startAngle);
      const endTime = this.angleToTime(endAngle);
      this.openModal(null, startTime, endTime);
    }
    this.renderClockDial();
  }

  renderScheduleList() {
    const listContainer = document.getElementById('scheduleListContainer');
    const badge = document.getElementById('scheduleBlocksBadge');
    const blocks = this.getBlocksForDate();

    if (badge) {
      badge.textContent = `${blocks.length} blocks`;
    }

    if (!listContainer) return;

    if (blocks.length === 0) {
      // Empty state matching Image 2
      listContainer.innerHTML = `
        <div class="schedule-empty-state">
          <div class="empty-icon">📅</div>
          <div class="empty-text">No blocks yet — drag on the clock or click Quick Add</div>
        </div>
      `;
      return;
    }

    // Populated state matching Image 1
    listContainer.innerHTML = blocks.map(b => `
      <div class="schedule-block-card ${b.completed ? 'is-completed' : ''}" style="border-left-color: ${b.color};">
        <div class="block-left">
          <input type="checkbox" class="block-checkbox" ${b.completed ? 'checked' : ''} onchange="app.planner.toggleBlockCompleted('${b.id}')">
          <div class="block-details">
            <span class="block-title">${b.title}</span>
            <span class="block-time">${b.start} → ${b.end}</span>
          </div>
        </div>
        <div class="block-right">
          <span class="block-cat-pill" style="background-color: ${b.color}20; color: ${b.color};">${b.category}</span>
          <button class="block-action-icon" title="Edit Block" onclick="app.planner.openModal('${b.id}')">✏️</button>
          <button class="block-action-icon text-danger" title="Delete Block" onclick="app.planner.deleteBlock('${b.id}')">🗑️</button>
        </div>
      </div>
    `).join('');
  }

  renderCategoryBreakdown() {
    const container = document.getElementById('categoryBarsList');
    if (!container) return;
    const blocks = this.getBlocksForDate();

    const catTotals = {};
    let totalDayMinutes = 0;

    blocks.forEach(b => {
      const [sh, sm] = b.start.split(':').map(Number);
      const [eh, em] = b.end.split(':').map(Number);
      const startMin = sh * 60 + sm;
      const endMin = (eh === 24 ? 24 * 60 : eh * 60 + em);
      const duration = Math.max(0, endMin - startMin);

      if (!catTotals[b.category]) {
        catTotals[b.category] = { minutes: 0, color: b.color };
      }
      catTotals[b.category].minutes += duration;
      totalDayMinutes += duration;
    });

    if (totalDayMinutes === 0) {
      container.innerHTML = `<div class="text-muted" style="font-size: 12px; padding: 6px 0;">No hours scheduled for this date.</div>`;
      return;
    }

    container.innerHTML = Object.entries(catTotals).map(([catName, data]) => {
      const hours = (data.minutes / 60).toFixed(1);
      const pct = Math.round((data.minutes / (24 * 60)) * 100);
      return `
        <div class="cat-bar-item">
          <div class="cat-bar-info">
            <span class="cat-bar-name">
              <span class="cat-dot" style="background-color: ${data.color};"></span>
              ${catName}
            </span>
            <span class="cat-bar-time">${hours}h (${pct}%)</span>
          </div>
          <div class="cat-progress-track">
            <div class="cat-progress-fill" style="width: ${pct}%; background-color: ${data.color};"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  toggleBlockCompleted(id) {
    const blocks = this.getBlocksForDate();
    const block = blocks.find(b => b.id === id);
    if (block) {
      block.completed = !block.completed;
      this.app.saveState();
      this.render();
    }
  }

  openModal(blockId = null, defaultStart = '09:00', defaultEnd = '10:30') {
    this.app.activeBlockId = blockId;
    const modal = document.getElementById('blockModal');
    const titleEl = document.getElementById('blockModalTitle');
    const titleInput = document.getElementById('modalBlockTitle');
    const startInput = document.getElementById('modalBlockStart');
    const endInput = document.getElementById('modalBlockEnd');
    const catInput = document.getElementById('modalBlockCategory');
    const colorInput = document.getElementById('modalBlockColor');

    if (blockId) {
      titleEl.textContent = 'Edit Schedule Block';
      const b = this.getBlocksForDate().find(item => item.id === blockId);
      if (b) {
        titleInput.value = b.title;
        startInput.value = b.start;
        endInput.value = b.end;
        catInput.value = b.category;
        colorInput.value = b.color;
      }
    } else {
      titleEl.textContent = 'Add Schedule Block';
      titleInput.value = '';
      startInput.value = defaultStart;
      endInput.value = defaultEnd;
      catInput.value = 'WORK';
      colorInput.value = '#8b5cf6';
    }

    modal.classList.add('active');
  }

  closeModal() {
    document.getElementById('blockModal')?.classList.remove('active');
    this.app.activeBlockId = null;
  }

  saveBlockFromModal() {
    const title = document.getElementById('modalBlockTitle').value.trim();
    const start = document.getElementById('modalBlockStart').value;
    const end = document.getElementById('modalBlockEnd').value;
    const category = document.getElementById('modalBlockCategory').value;
    const color = document.getElementById('modalBlockColor').value;

    if (!title) {
      alert('Please enter a title for the block.');
      return;
    }

    const date = this.app.state.selectedDate;
    if (!this.app.state.schedule[date]) {
      this.app.state.schedule[date] = [];
    }

    if (this.app.activeBlockId) {
      // Edit existing
      const b = this.app.state.schedule[date].find(x => x.id === this.app.activeBlockId);
      if (b) {
        b.title = title;
        b.start = start;
        b.end = end;
        b.category = category;
        b.color = color;
      }
    } else {
      // Add new block
      this.app.state.schedule[date].push({
        id: 'b-' + Date.now(),
        title,
        start,
        end,
        category,
        color,
        completed: false
      });
    }

    // Sort blocks chronologically
    this.app.state.schedule[date].sort((a, b) => a.start.localeCompare(b.start));

    this.closeModal();
    this.app.saveState();
    this.render();
  }

  deleteBlock(id) {
    const date = this.app.state.selectedDate;
    if (confirm('Delete this schedule block?')) {
      this.app.state.schedule[date] = this.app.state.schedule[date].filter(b => b.id !== id);
      this.app.saveState();
      this.render();
    }
  }

  rolloverIncomplete() {
    const date = this.app.state.selectedDate;
    const blocks = this.app.state.schedule[date] || [];
    const incomplete = blocks.filter(b => !b.completed);

    if (incomplete.length === 0) {
      alert('No incomplete blocks to roll over for this day.');
      return;
    }

    // Determine next day date
    const d = new Date(date);
    d.setDate(d.getDate() + 1);
    const nextDate = d.toISOString().slice(0, 10);

    if (!this.app.state.schedule[nextDate]) {
      this.app.state.schedule[nextDate] = [];
    }

    // Copy incomplete blocks to next day
    incomplete.forEach(b => {
      this.app.state.schedule[nextDate].push({
        ...b,
        id: 'b-' + Date.now() + Math.random().toString(36).substr(2, 4),
        completed: false
      });
    });

    alert(`Successfully rolled over ${incomplete.length} block(s) to ${nextDate}!`);
    this.setDate(nextDate);
  }
}


// =============================================================================
// MODULE 2: FINANCE MANAGER ENGINE
// =============================================================================

class FinanceController {
  constructor(app) {
    this.app = app;
  }

  init() {
    this.bindEvents();
    this.render();
  }

  bindEvents() {
    // Finance Subtabs Switching
    document.querySelectorAll('.finance-subtab').forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-fintab');
        document.querySelectorAll('.finance-subtab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.fin-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(`fpanel-${target}`)?.classList.add('active');
      });
    });

    // Save Finance Item Modal
    document.getElementById('saveFinanceItemBtn')?.addEventListener('click', () => {
      this.saveItemFromModal();
    });
  }

  calculateNetSurplus() {
    const totalBanks = this.app.state.finance.banks.reduce((sum, item) => sum + Number(item.balance || 0), 0);
    const totalLoans = this.app.state.finance.loans.reduce((sum, item) => sum + Number(item.emi || 0), 0);
    const totalCards = this.app.state.finance.cards.reduce((sum, item) => sum + Number(item.balance || 0), 0);
    const totalInflows = this.app.state.finance.inflows.reduce((sum, item) => sum + Number(item.amount || 0), 0);
    const totalExpenses = this.app.state.finance.expenses.reduce((sum, item) => sum + Number(item.amount || 0), 0);
    const totalWishlist = this.app.state.finance.wishlist.reduce((sum, item) => sum + Number(item.cost || 0), 0);

    const totalOutflows = totalLoans + totalCards + totalExpenses;
    const netSurplus = (totalBanks + totalInflows) - totalOutflows;

    // Monthly burn rate (loans + expenses + avg min due)
    const monthlyBurn = totalLoans + totalExpenses;
    const runwayMonths = monthlyBurn > 0 ? (totalBanks / monthlyBurn) : 99;

    return {
      totalBanks,
      totalLoans,
      totalCards,
      totalInflows,
      totalExpenses,
      totalWishlist,
      totalOutflows,
      netSurplus,
      runwayMonths
    };
  }

  render() {
    const summary = this.calculateNetSurplus();

    // Banner Figure
    const bannerFig = document.getElementById('bannerSurplusFigure');
    const bannerExp = document.getElementById('bannerSurplusExplanation');
    if (bannerFig) {
      bannerFig.textContent = (summary.netSurplus >= 0 ? '+$' : '-$') + Math.abs(summary.netSurplus).toLocaleString('en-US', { minimumFractionDigits: 2 });
      bannerFig.className = 'surplus-large-figure' + (summary.netSurplus < 0 ? ' deficit' : '');
    }
    if (bannerExp) {
      bannerExp.textContent = `Total Bank Cash ($${summary.totalBanks.toLocaleString()}) + Inflows ($${summary.totalInflows.toLocaleString()}) − Liabilities & Future Outflows ($${summary.totalOutflows.toLocaleString()})`;
    }

    // Hero Stat Pills
    document.getElementById('statBankTotal').textContent = `$${summary.totalBanks.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    document.getElementById('statInflowsTotal').textContent = `+$${summary.totalInflows.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    document.getElementById('statOutflowsTotal').textContent = `−$${summary.totalOutflows.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    document.getElementById('statWishlistTotal').textContent = `$${summary.totalWishlist.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

    // Subtab Count Badges
    document.getElementById('countBanks').textContent = this.app.state.finance.banks.length;
    document.getElementById('countLoans').textContent = this.app.state.finance.loans.length;
    document.getElementById('countCards').textContent = this.app.state.finance.cards.length;
    document.getElementById('countInflows').textContent = this.app.state.finance.inflows.length;
    document.getElementById('countExpenses').textContent = this.app.state.finance.expenses.length;
    document.getElementById('countWishlist').textContent = this.app.state.finance.wishlist.length;

    // Render Tables
    this.renderBankAccounts();
    this.renderLoans();
    this.renderCards();
    this.renderInflows();
    this.renderExpenses();
    this.renderWishlist(summary.netSurplus);
  }

  renderBankAccounts() {
    const tbody = document.getElementById('bankAccountsTbody');
    if (!tbody) return;
    tbody.innerHTML = this.app.state.finance.banks.map(b => `
      <tr>
        <td><strong>${b.name}</strong></td>
        <td><span class="kpi-badge badge-neutral">${b.type}</span></td>
        <td>${b.institution}</td>
        <td class="font-mono"><strong>$${Number(b.balance).toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong></td>
        <td>${b.updated}</td>
        <td class="text-right">
          <button class="block-action-icon text-danger" onclick="app.finance.deleteItem('banks', '${b.id}')">🗑️</button>
        </td>
      </tr>
    `).join('');
  }

  renderLoans() {
    const tbody = document.getElementById('loansDueTbody');
    if (!tbody) return;
    tbody.innerHTML = this.app.state.finance.loans.map(l => `
      <tr>
        <td><strong>${l.name}</strong></td>
        <td>${l.lender}</td>
        <td class="font-mono text-danger"><strong>$${Number(l.emi).toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong> / mo</td>
        <td class="font-mono">${l.dueDate}</td>
        <td class="font-mono">$${Number(l.remaining).toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
        <td><span class="kpi-badge badge-warning">${l.status}</span></td>
        <td class="text-right">
          <button class="block-action-icon text-danger" onclick="app.finance.deleteItem('loans', '${l.id}')">🗑️</button>
        </td>
      </tr>
    `).join('');
  }

  renderCards() {
    const tbody = document.getElementById('creditCardsTbody');
    if (!tbody) return;
    tbody.innerHTML = this.app.state.finance.cards.map(c => {
      const utilPct = Math.round((c.balance / c.limit) * 100);
      return `
        <tr>
          <td><strong>${c.name}</strong></td>
          <td class="font-mono text-danger"><strong>$${Number(c.balance).toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong></td>
          <td class="font-mono">$${Number(c.minDue).toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
          <td class="font-mono">${c.dueDate}</td>
          <td>
            <div style="font-size: 11px; margin-bottom: 2px;">${utilPct}% ($${c.limit.toLocaleString()} Limit)</div>
            <div class="mini-progress-track">
              <div class="mini-progress-fill" style="width: ${utilPct}%; background-color: ${utilPct > 30 ? '#ef4444' : '#10b981'};"></div>
            </div>
          </td>
          <td><span class="kpi-badge badge-neutral">${c.status}</span></td>
          <td class="text-right">
            <button class="block-action-icon text-danger" onclick="app.finance.deleteItem('cards', '${c.id}')">🗑️</button>
          </td>
        </tr>
      `;
    }).join('');
  }

  renderInflows() {
    const tbody = document.getElementById('expectedInflowsTbody');
    if (!tbody) return;
    tbody.innerHTML = this.app.state.finance.inflows.map(inf => `
      <tr>
        <td><strong>${inf.source}</strong></td>
        <td><span class="kpi-badge badge-info">${inf.category}</span></td>
        <td class="font-mono text-success"><strong>+$${Number(inf.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong></td>
        <td class="font-mono">${inf.expectedDate}</td>
        <td><span class="kpi-badge badge-success">${inf.probability}</span></td>
        <td>${inf.status}</td>
        <td class="text-right">
          <button class="block-action-icon text-danger" onclick="app.finance.deleteItem('inflows', '${inf.id}')">🗑️</button>
        </td>
      </tr>
    `).join('');
  }

  renderExpenses() {
    const tbody = document.getElementById('futureExpensesTbody');
    if (!tbody) return;
    tbody.innerHTML = this.app.state.finance.expenses.map(exp => `
      <tr>
        <td><strong>${exp.title}</strong></td>
        <td><span class="kpi-badge badge-neutral">${exp.category}</span></td>
        <td class="font-mono text-danger"><strong>$${Number(exp.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong></td>
        <td class="font-mono">${exp.dueDate}</td>
        <td>${exp.recurrence}</td>
        <td><span class="kpi-badge badge-warning">${exp.status}</span></td>
        <td class="text-right">
          <button class="block-action-icon text-danger" onclick="app.finance.deleteItem('expenses', '${exp.id}')">🗑️</button>
        </td>
      </tr>
    `).join('');
  }

  renderWishlist(currentNetSurplus) {
    const tbody = document.getElementById('thingsToBuyTbody');
    if (!tbody) return;
    tbody.innerHTML = this.app.state.finance.wishlist.map(w => {
      const isAffordable = currentNetSurplus >= w.cost;
      return `
        <tr>
          <td><strong>${w.item}</strong></td>
          <td><span class="priority-tag ${w.priority === 'High' ? 'priority-high' : 'priority-medium'}">${w.priority}</span></td>
          <td class="font-mono"><strong>$${Number(w.cost).toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong></td>
          <td>${w.category}</td>
          <td class="font-mono">${w.targetDate}</td>
          <td>
            <span class="kpi-badge ${isAffordable ? 'badge-success' : 'badge-danger'}">
              ${isAffordable ? '✓ Covered by Surplus' : '⏳ Exceeds Safe Buffer'}
            </span>
          </td>
          <td class="text-right">
            <button class="block-action-icon text-danger" onclick="app.finance.deleteItem('wishlist', '${w.id}')">🗑️</button>
          </td>
        </tr>
      `;
    }).join('');
  }

  openModal(type) {
    this.app.activeFinanceType = type;
    const modal = document.getElementById('financeModal');
    const body = document.getElementById('financeModalBody');
    const titleEl = document.getElementById('financeModalTitle');

    if (type === 'bank') {
      titleEl.textContent = 'Add Bank Account';
      body.innerHTML = `
        <div class="form-group">
          <label class="form-label">Account Name</label>
          <input type="text" id="fin_bank_name" class="form-input" placeholder="e.g. Chase Main Checking">
        </div>
        <div class="form-group">
          <label class="form-label">Type / Purpose</label>
          <input type="text" id="fin_bank_type" class="form-input" placeholder="e.g. Operating Cash, Emergency Fund">
        </div>
        <div class="form-group">
          <label class="form-label">Bank Institution</label>
          <input type="text" id="fin_bank_inst" class="form-input" placeholder="e.g. Ally Bank, Fidelity">
        </div>
        <div class="form-group">
          <label class="form-label">Available Balance ($)</label>
          <input type="number" id="fin_bank_balance" class="form-input" step="0.01" placeholder="5000.00">
        </div>
      `;
    } else if (type === 'loan') {
      titleEl.textContent = 'Add Loan / EMI';
      body.innerHTML = `
        <div class="form-group">
          <label class="form-label">Loan Name</label>
          <input type="text" id="fin_loan_name" class="form-input" placeholder="e.g. Car Loan, Student Debt">
        </div>
        <div class="form-group">
          <label class="form-label">Lender</label>
          <input type="text" id="fin_loan_lender" class="form-input" placeholder="e.g. Chase Auto, SoFi">
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label class="form-label">Monthly EMI ($)</label>
            <input type="number" id="fin_loan_emi" class="form-input" step="0.01" placeholder="450.00">
          </div>
          <div class="form-group">
            <label class="form-label">Next Due Date</label>
            <input type="date" id="fin_loan_date" class="form-input">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Total Principal Remaining ($)</label>
          <input type="number" id="fin_loan_rem" class="form-input" step="0.01" placeholder="12000.00">
        </div>
      `;
    } else if (type === 'card') {
      titleEl.textContent = 'Add Credit Card';
      body.innerHTML = `
        <div class="form-group">
          <label class="form-label">Card Name</label>
          <input type="text" id="fin_card_name" class="form-input" placeholder="e.g. Amex Gold, Chase Freedom">
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label class="form-label">Statement Balance ($)</label>
            <input type="number" id="fin_card_bal" class="form-input" step="0.01" placeholder="1250.00">
          </div>
          <div class="form-group">
            <label class="form-label">Minimum Due ($)</label>
            <input type="number" id="fin_card_min" class="form-input" step="0.01" placeholder="100.00">
          </div>
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label class="form-label">Payment Due Date</label>
            <input type="date" id="fin_card_date" class="form-input">
          </div>
          <div class="form-group">
            <label class="form-label">Credit Limit ($)</label>
            <input type="number" id="fin_card_limit" class="form-input" step="100" placeholder="10000">
          </div>
        </div>
      `;
    } else if (type === 'inflow') {
      titleEl.textContent = 'Add Expected Inflow';
      body.innerHTML = `
        <div class="form-group">
          <label class="form-label">Source / Description</label>
          <input type="text" id="fin_inflow_desc" class="form-input" placeholder="e.g. Salary, Consulting Retainer">
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label class="form-label">Category</label>
            <input type="text" id="fin_inflow_cat" class="form-input" placeholder="e.g. Salary, Freelance">
          </div>
          <div class="form-group">
            <label class="form-label">Amount ($)</label>
            <input type="number" id="fin_inflow_amt" class="form-input" step="0.01" placeholder="3500.00">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Expected Date</label>
          <input type="date" id="fin_inflow_date" class="form-input">
        </div>
      `;
    } else if (type === 'expense') {
      titleEl.textContent = 'Add Future Expense';
      body.innerHTML = `
        <div class="form-group">
          <label class="form-label">Expense Title</label>
          <input type="text" id="fin_exp_title" class="form-input" placeholder="e.g. Rent, Quarterly Tax">
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label class="form-label">Amount ($)</label>
            <input type="number" id="fin_exp_amt" class="form-input" step="0.01" placeholder="1200.00">
          </div>
          <div class="form-group">
            <label class="form-label">Due Date</label>
            <input type="date" id="fin_exp_date" class="form-input">
          </div>
        </div>
      `;
    } else if (type === 'wishlist') {
      titleEl.textContent = 'Add Things to Buy';
      body.innerHTML = `
        <div class="form-group">
          <label class="form-label">Item Name</label>
          <input type="text" id="fin_wish_name" class="form-input" placeholder="e.g. Herman Miller Chair, MacBook Pro">
        </div>
        <div class="form-row-2">
          <div class="form-group">
            <label class="form-label">Estimated Cost ($)</label>
            <input type="number" id="fin_wish_cost" class="form-input" step="0.01" placeholder="1400.00">
          </div>
          <div class="form-group">
            <label class="form-label">Priority</label>
            <select id="fin_wish_prio" class="form-input">
              <option value="High">High</option>
              <option value="Medium" selected>Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Target Date</label>
          <input type="date" id="fin_wish_date" class="form-input">
        </div>
      `;
    }

    modal.classList.add('active');
  }

  closeModal() {
    document.getElementById('financeModal')?.classList.remove('active');
    this.app.activeFinanceType = null;
  }

  saveItemFromModal() {
    const type = this.app.activeFinanceType;
    if (type === 'bank') {
      const name = document.getElementById('fin_bank_name').value.trim();
      const bType = document.getElementById('fin_bank_type').value.trim();
      const inst = document.getElementById('fin_bank_inst').value.trim();
      const balance = parseFloat(document.getElementById('fin_bank_balance').value) || 0;
      if (!name) return alert('Name is required');
      this.app.state.finance.banks.push({ id: 'bk-' + Date.now(), name, type: bType, institution: inst, balance, updated: 'Just now' });
    } else if (type === 'loan') {
      const name = document.getElementById('fin_loan_name').value.trim();
      const lender = document.getElementById('fin_loan_lender').value.trim();
      const emi = parseFloat(document.getElementById('fin_loan_emi').value) || 0;
      const dueDate = document.getElementById('fin_loan_date').value || '2026-10-01';
      const remaining = parseFloat(document.getElementById('fin_loan_rem').value) || 0;
      if (!name) return alert('Name is required');
      this.app.state.finance.loans.push({ id: 'ln-' + Date.now(), name, lender, emi, dueDate, remaining, status: 'Active' });
    } else if (type === 'card') {
      const name = document.getElementById('fin_card_name').value.trim();
      const balance = parseFloat(document.getElementById('fin_card_bal').value) || 0;
      const minDue = parseFloat(document.getElementById('fin_card_min').value) || 0;
      const dueDate = document.getElementById('fin_card_date').value || '2026-10-01';
      const limit = parseFloat(document.getElementById('fin_card_limit').value) || 5000;
      if (!name) return alert('Name is required');
      this.app.state.finance.cards.push({ id: 'cc-' + Date.now(), name, balance, minDue, dueDate, limit, status: 'Pending' });
    } else if (type === 'inflow') {
      const source = document.getElementById('fin_inflow_desc').value.trim();
      const category = document.getElementById('fin_inflow_cat').value.trim();
      const amount = parseFloat(document.getElementById('fin_inflow_amt').value) || 0;
      const expectedDate = document.getElementById('fin_inflow_date').value || '2026-10-01';
      if (!source) return alert('Source is required');
      this.app.state.finance.inflows.push({ id: 'inf-' + Date.now(), source, category, amount, expectedDate, probability: '100%', status: 'Projected' });
    } else if (type === 'expense') {
      const title = document.getElementById('fin_exp_title').value.trim();
      const amount = parseFloat(document.getElementById('fin_exp_amt').value) || 0;
      const dueDate = document.getElementById('fin_exp_date').value || '2026-10-01';
      if (!title) return alert('Title is required');
      this.app.state.finance.expenses.push({ id: 'exp-' + Date.now(), title, category: 'General', amount, dueDate, recurrence: 'Monthly', status: 'Upcoming' });
    } else if (type === 'wishlist') {
      const item = document.getElementById('fin_wish_name').value.trim();
      const cost = parseFloat(document.getElementById('fin_wish_cost').value) || 0;
      const priority = document.getElementById('fin_wish_prio').value;
      const targetDate = document.getElementById('fin_wish_date').value || '2026-11-01';
      if (!item) return alert('Item is required');
      this.app.state.finance.wishlist.push({ id: 'wb-' + Date.now(), item, priority, cost, category: 'Wishlist', targetDate });
    }

    this.closeModal();
    this.app.saveState();
    this.render();
  }

  deleteItem(collectionName, id) {
    if (confirm('Delete this financial item?')) {
      this.app.state.finance[collectionName] = this.app.state.finance[collectionName].filter(x => x.id !== id);
      this.app.saveState();
      this.render();
    }
  }
}


// =============================================================================
// MODULE 3: GOALS & STRATEGY (Matching Reference Image 3)
// =============================================================================

class GoalsController {
  constructor(app) {
    this.app = app;
  }

  init() {
    this.bindEvents();
    this.render();
  }

  bindEvents() {
    document.getElementById('addNewGoalBtn')?.addEventListener('click', () => {
      this.openModal();
    });

    document.getElementById('saveGoalBtn')?.addEventListener('click', () => {
      this.saveGoalFromModal();
    });

    document.getElementById('saveAttachmentBtn')?.addEventListener('click', () => {
      this.saveAttachment();
    });
  }

  render() {
    const container = document.getElementById('goalsCardsContainer');
    if (!container) return;

    // Circumference for r=25 is 2 * PI * 25 = 157.08
    const circumference = 157.08;

    container.innerHTML = this.app.state.goals.map(g => {
      const pct = Math.min(100, Math.round((g.currentSteps / Math.max(1, g.totalSteps)) * 100));
      const strokeOffset = circumference - (pct / 100) * circumference;

      return `
        <div class="goal-card-wrapper" id="goal-card-${g.id}">
          <!-- Top Row: Circle Ring + Serif Title + Actions -->
          <div class="goal-card-top">
            <div class="goal-top-left">
              <div class="goal-progress-circle-box">
                <svg class="goal-circle-svg" viewBox="0 0 60 60">
                  <circle class="goal-circle-bg" cx="30" cy="30" r="25" />
                  <circle class="goal-circle-fill" cx="30" cy="30" r="25"
                    stroke-dasharray="${circumference}"
                    stroke-dashoffset="${strokeOffset}" />
                </svg>
                <span class="goal-pct-label">${pct}%</span>
              </div>
              <h2 class="goal-card-title">${g.title}</h2>
            </div>
            <div class="goal-actions-group">
              <button class="goal-icon-btn" title="Edit Goal" onclick="app.goals.openModal('${g.id}')">✏️</button>
              <button class="goal-icon-btn text-danger" title="Delete Goal" onclick="app.goals.deleteGoal('${g.id}')">🗑️</button>
            </div>
          </div>

          <!-- PROGRESS Section -->
          <div class="goal-progress-section">
            <div class="goal-progress-labels">
              <span class="goal-prog-lbl">PROGRESS</span>
              <span class="goal-prog-steps">${g.currentSteps}/${g.totalSteps} steps</span>
            </div>
            <div class="goal-linear-track">
              <div class="goal-linear-fill" style="width: ${pct}%;"></div>
            </div>
          </div>

          <!-- Update Progress Strip -->
          <div class="goal-update-strip">
            <div class="goal-update-left">
              <span>Update Progress:</span>
              <input type="number" class="goal-step-input" id="step-input-${g.id}" value="${g.currentSteps}" min="0" max="${g.totalSteps}">
              <span>/${g.totalSteps} steps</span>
            </div>
            <div class="goal-update-right">
              <button class="btn btn-pill btn-sm" onclick="app.goals.incrementStep('${g.id}')">+1</button>
              <button class="btn btn-dark btn-sm" onclick="app.goals.saveManualStep('${g.id}')">Save</button>
            </div>
          </div>

          <!-- NOTES & STRATEGY Card (Matching Image 3) -->
          <div class="goal-inner-card">
            <div class="goal-inner-header">
              <div class="goal-inner-title-wrap">
                <span>📝</span>
                <span>NOTES & STRATEGY</span>
              </div>
              <button class="btn btn-pill btn-sm" onclick="app.goals.openModal('${g.id}')">Edit</button>
            </div>
            <ul class="goal-bullet-list">
              ${g.notes.length > 0 ? g.notes.map(n => `<li>${n}</li>`).join('') : '<li style="color:#94a3b8; font-style:italic;">No strategy notes added.</li>'}
            </ul>
          </div>

          <!-- DOCS & ATTACHMENTS Card (Matching Image 3) -->
          <div class="goal-inner-card">
            <div class="goal-inner-header">
              <div class="goal-inner-title-wrap">
                <span>📎</span>
                <span>DOCS & ATTACHMENTS</span>
                <span class="kpi-badge badge-neutral" style="font-size:10px;">${g.attachments.length}</span>
              </div>
              <button class="btn btn-pill btn-sm" onclick="app.goals.openAttachModal('${g.id}')">+ Attach Doc / File</button>
            </div>
            <div class="goal-docs-list">
              ${g.attachments.length === 0 ? `
                <div class="doc-empty-msg">No documents attached yet. Attach study materials, PDFs, spreadsheets, or docs.</div>
              ` : g.attachments.map((att, attIdx) => `
                <div class="goal-doc-item">
                  <div class="doc-info">
                    <span class="doc-type-badge">${att.type}</span>
                    <a href="${att.url}" target="_blank" style="text-decoration:none; color:inherit;">${att.title}</a>
                  </div>
                  <button class="block-action-icon text-danger" onclick="app.goals.deleteAttachment('${g.id}', ${attIdx})">✕</button>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Add Milestone Button (Matching Image 3) -->
          <div>
            <button class="btn btn-pill btn-sm" onclick="app.goals.addMilestone('${g.id}')">+ Add milestone</button>
          </div>
        </div>
      `;
    }).join('');
  }

  incrementStep(goalId) {
    const goal = this.app.state.goals.find(g => g.id === goalId);
    if (goal) {
      goal.currentSteps = Math.min(goal.totalSteps, goal.currentSteps + 1);
      this.app.saveState();
      this.render();
    }
  }

  saveManualStep(goalId) {
    const input = document.getElementById(`step-input-${goalId}`);
    if (!input) return;
    const val = parseInt(input.value, 10);
    const goal = this.app.state.goals.find(g => g.id === goalId);
    if (goal && !isNaN(val)) {
      goal.currentSteps = Math.max(0, Math.min(goal.totalSteps, val));
      this.app.saveState();
      this.render();
    }
  }

  addMilestone(goalId) {
    const text = prompt('Enter new milestone description:');
    if (text) {
      const goal = this.app.state.goals.find(g => g.id === goalId);
      if (goal) {
        goal.totalSteps += 1;
        goal.notes.push(text);
        this.app.saveState();
        this.render();
      }
    }
  }

  openModal(goalId = null) {
    this.app.activeGoalId = goalId;
    const modal = document.getElementById('goalModal');
    const titleEl = document.getElementById('goalModalTitle');
    const titleInput = document.getElementById('modalGoalTitle');
    const totalSteps = document.getElementById('modalGoalTotalSteps');
    const currentSteps = document.getElementById('modalGoalCurrentSteps');
    const notesInput = document.getElementById('modalGoalNotes');
    const deadline = document.getElementById('modalGoalDeadline');

    if (goalId) {
      titleEl.textContent = 'Edit Strategic Goal';
      const g = this.app.state.goals.find(item => item.id === goalId);
      if (g) {
        titleInput.value = g.title;
        totalSteps.value = g.totalSteps;
        currentSteps.value = g.currentSteps;
        notesInput.value = g.notes.join('\n');
        deadline.value = g.deadline || '';
      }
    } else {
      titleEl.textContent = 'Create New Goal';
      titleInput.value = '';
      totalSteps.value = 5;
      currentSteps.value = 0;
      notesInput.value = '• Strategy milestone 1\n• Strategy milestone 2';
      deadline.value = '';
    }

    modal.classList.add('active');
  }

  closeModal() {
    document.getElementById('goalModal')?.classList.remove('active');
    this.app.activeGoalId = null;
  }

  saveGoalFromModal() {
    const title = document.getElementById('modalGoalTitle').value.trim();
    const totalSteps = parseInt(document.getElementById('modalGoalTotalSteps').value, 10) || 1;
    const currentSteps = parseInt(document.getElementById('modalGoalCurrentSteps').value, 10) || 0;
    const notesRaw = document.getElementById('modalGoalNotes').value;
    const deadline = document.getElementById('modalGoalDeadline').value;

    if (!title) return alert('Goal title is required');

    const notes = notesRaw.split('\n').map(s => s.trim().replace(/^[•\-\*]\s*/, '')).filter(Boolean);

    if (this.app.activeGoalId) {
      const g = this.app.state.goals.find(item => item.id === this.app.activeGoalId);
      if (g) {
        g.title = title;
        g.totalSteps = totalSteps;
        g.currentSteps = Math.min(totalSteps, currentSteps);
        g.notes = notes;
        g.deadline = deadline;
      }
    } else {
      this.app.state.goals.push({
        id: 'g-' + Date.now(),
        title,
        totalSteps,
        currentSteps,
        notes,
        deadline,
        attachments: [],
        milestones: []
      });
    }

    this.closeModal();
    this.app.saveState();
    this.render();
  }

  deleteGoal(id) {
    if (confirm('Delete this goal card?')) {
      this.app.state.goals = this.app.state.goals.filter(g => g.id !== id);
      this.app.saveState();
      this.render();
    }
  }

  openAttachModal(goalId) {
    this.app.activeGoalId = goalId;
    document.getElementById('attachmentModal')?.classList.add('active');
  }

  closeAttachModal() {
    document.getElementById('attachmentModal')?.classList.remove('active');
  }

  saveAttachment() {
    const title = document.getElementById('attachDocTitle').value.trim();
    const url = document.getElementById('attachDocUrl').value.trim() || '#';
    const type = document.getElementById('attachDocType').value;

    if (!title) return alert('Title is required');

    const goal = this.app.state.goals.find(g => g.id === this.app.activeGoalId);
    if (goal) {
      goal.attachments.push({ id: 'att-' + Date.now(), title, url, type });
      this.closeAttachModal();
      this.app.saveState();
      this.render();
    }
  }

  deleteAttachment(goalId, attIndex) {
    const goal = this.app.state.goals.find(g => g.id === goalId);
    if (goal) {
      goal.attachments.splice(attIndex, 1);
      this.app.saveState();
      this.render();
    }
  }
}


// =============================================================================
// MODULE 4: HABIT STREAK COUNTER ENGINE
// =============================================================================

class HabitsController {
  constructor(app) {
    this.app = app;
  }

  init() {
    this.bindEvents();
    this.render();
  }

  bindEvents() {
    document.getElementById('addNewHabitBtn')?.addEventListener('click', () => {
      document.getElementById('habitModal')?.classList.add('active');
    });

    document.getElementById('saveHabitBtn')?.addEventListener('click', () => {
      this.saveHabitFromModal();
    });
  }

  closeModal() {
    document.getElementById('habitModal')?.classList.remove('active');
  }

  saveHabitFromModal() {
    const name = document.getElementById('habitModalName').value.trim();
    const category = document.getElementById('habitModalCategory').value;
    const frequency = document.getElementById('habitModalFrequency').value;

    if (!name) return alert('Habit name is required');

    this.app.state.habits.push({
      id: 'h-' + Date.now(),
      name,
      category,
      frequency,
      currentStreak: 1,
      bestStreak: 1,
      history: { 'Mon': true, 'Tue': false, 'Wed': false, 'Thu': false, 'Fri': false, 'Sat': false, 'Sun': false }
    });

    this.closeModal();
    this.app.saveState();
    this.render();
  }

  render() {
    const container = document.getElementById('habitsGridContainer');
    if (!container) return;

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    container.innerHTML = this.app.state.habits.map(h => `
      <div class="habit-card">
        <div class="habit-card-header">
          <div>
            <h3 class="habit-name">${h.name}</h3>
            <span class="habit-category-pill">${h.category} • ${h.frequency}</span>
          </div>
          <div class="habit-streak-display">
            <span class="streak-count-badge" title="Active Streak">🔥 ${h.currentStreak}d</span>
            <span style="font-size: 11px; color: var(--text-muted);">Best: ${h.bestStreak}d</span>
            <button class="block-action-icon text-danger" onclick="app.habits.deleteHabit('${h.id}')">🗑️</button>
          </div>
        </div>

        <div class="habit-matrix-row">
          ${days.map(d => {
            const isChecked = !!h.history[d];
            return `
              <div class="matrix-day-col">
                <span class="matrix-day-lbl">${d}</span>
                <button class="matrix-day-bubble ${isChecked ? 'checked' : ''}" onclick="app.habits.toggleDay('${h.id}', '${d}')">
                  ${isChecked ? '✓' : ''}
                </button>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `).join('');

    // Update Stats Strip
    const total = this.app.state.habits.length;
    let doneToday = 0;
    let maxBest = 0;
    let totalChecks = 0;

    this.app.state.habits.forEach(h => {
      if (h.history['Wed']) doneToday++;
      if (h.bestStreak > maxBest) maxBest = h.bestStreak;
      days.forEach(d => { if (h.history[d]) totalChecks++; });
    });

    const weeklyRate = total > 0 ? Math.round((totalChecks / (total * 7)) * 100) : 0;
    document.getElementById('habitsTodayDone').textContent = `${doneToday} / ${total}`;
    document.getElementById('habitsActiveStreaks').textContent = `${this.app.state.habits.reduce((acc, x) => acc + (x.currentStreak > 0 ? 1 : 0), 0)} 🔥`;
    document.getElementById('habitsWeeklyRate').textContent = `${weeklyRate}%`;
    document.getElementById('habitsAllTimeBest').textContent = `${maxBest}d 🏆`;
  }

  toggleDay(habitId, day) {
    const habit = this.app.state.habits.find(h => h.id === habitId);
    if (habit) {
      habit.history[day] = !habit.history[day];
      if (habit.history[day]) {
        habit.currentStreak += 1;
        if (habit.currentStreak > habit.bestStreak) {
          habit.bestStreak = habit.currentStreak;
        }
      } else {
        habit.currentStreak = Math.max(0, habit.currentStreak - 1);
      }
      this.app.saveState();
      this.render();
    }
  }

  deleteHabit(id) {
    if (confirm('Delete this habit?')) {
      this.app.state.habits = this.app.state.habits.filter(h => h.id !== id);
      this.app.saveState();
      this.render();
    }
  }
}


// =============================================================================
// MODULE 5: CHECKLIST & MASTER TASK HUB
// =============================================================================

class ChecklistController {
  constructor(app) {
    this.app = app;
  }

  init() {
    this.bindEvents();
    this.render();
  }

  bindEvents() {
    // Quick Add Enter Key
    document.getElementById('quickTaskTitle')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.addTask();
    });
    document.getElementById('quickTaskSubmitBtn')?.addEventListener('click', () => {
      this.addTask();
    });

    // Filters
    document.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.app.activeTaskFilter = pill.getAttribute('data-taskfilter');
        this.render();
      });
    });
  }

  addTask(titleOverride = null) {
    const titleInput = document.getElementById('quickTaskTitle');
    const title = titleOverride || (titleInput ? titleInput.value.trim() : '');
    if (!title) return;

    const prio = document.getElementById('quickTaskPriority')?.value || 'medium';
    const tag = document.getElementById('quickTaskTag')?.value || 'Work';
    const date = document.getElementById('quickTaskDate')?.value || this.app.state.selectedDate;

    this.app.state.tasks.unshift({
      id: 't-' + Date.now(),
      title,
      priority: prio,
      tag,
      dueDate: date,
      completed: false
    });

    if (titleInput) titleInput.value = '';
    this.app.saveState();
    this.render();
  }

  toggleTask(id) {
    const task = this.app.state.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.app.saveState();
      this.render();
    }
  }

  deleteTask(id) {
    this.app.state.tasks = this.app.state.tasks.filter(t => t.id !== id);
    this.app.saveState();
    this.render();
  }

  render() {
    const container = document.getElementById('checklistItemsContainer');
    if (!container) return;

    const filter = this.app.activeTaskFilter;
    const today = this.app.state.selectedDate;

    let filtered = this.app.state.tasks;
    if (filter === 'today') {
      filtered = filtered.filter(t => t.dueDate === today);
    } else if (filter === 'upcoming') {
      filtered = filtered.filter(t => t.dueDate > today && !t.completed);
    } else if (filter === 'completed') {
      filtered = filtered.filter(t => t.completed);
    }

    // Counts
    document.getElementById('countTaskAll').textContent = this.app.state.tasks.length;
    document.getElementById('countTaskToday').textContent = this.app.state.tasks.filter(t => t.dueDate === today).length;
    document.getElementById('countTaskUpcoming').textContent = this.app.state.tasks.filter(t => t.dueDate > today && !t.completed).length;
    document.getElementById('countTaskCompleted').textContent = this.app.state.tasks.filter(t => t.completed).length;

    // Progress Bar
    const completedCount = this.app.state.tasks.filter(t => t.completed).length;
    const pct = this.app.state.tasks.length > 0 ? Math.round((completedCount / this.app.state.tasks.length) * 100) : 0;
    const progLabel = document.getElementById('taskProgressLabel');
    const progFill = document.getElementById('taskProgressFill');
    if (progLabel) progLabel.textContent = `${pct}% Completed`;
    if (progFill) progFill.style.width = `${pct}%`;

    if (filtered.length === 0) {
      container.innerHTML = `<div class="text-muted" style="padding: 24px; text-align: center;">No tasks matching this filter.</div>`;
      return;
    }

    container.innerHTML = filtered.map(t => `
      <div class="task-card ${t.completed ? 'is-completed' : ''}">
        <div class="task-left">
          <input type="checkbox" class="task-checkbox" ${t.completed ? 'checked' : ''} onchange="app.checklist.toggleTask('${t.id}')">
          <span class="task-title-text">${t.title}</span>
        </div>
        <div class="task-right">
          <span class="priority-tag priority-${t.priority}">${t.priority.toUpperCase()}</span>
          <span class="task-tag-badge">#${t.tag}</span>
          <span class="task-due-date">${t.dueDate}</span>
          <button class="block-action-icon text-danger" onclick="app.checklist.deleteTask('${t.id}')">🗑️</button>
        </div>
      </div>
    `).join('');
  }
}


// =============================================================================
// MODULE 6: FOCUS & BRAIN DUMP ENGINE (Value-Add Feature)
// =============================================================================

class FocusController {
  constructor(app) {
    this.app = app;
  }

  init() {
    this.bindEvents();
    this.loadFocusData();
  }

  bindEvents() {
    // Save Daily Top 3
    document.getElementById('saveTop3Btn')?.addEventListener('click', () => {
      this.app.state.focus.top3[0].text = document.getElementById('top3_1').value;
      this.app.state.focus.top3[0].done = document.getElementById('top3_1_check').checked;
      this.app.state.focus.top3[1].text = document.getElementById('top3_2').value;
      this.app.state.focus.top3[1].done = document.getElementById('top3_2_check').checked;
      this.app.state.focus.top3[2].text = document.getElementById('top3_3').value;
      this.app.state.focus.top3[2].done = document.getElementById('top3_3_check').checked;
      this.app.saveState();
      alert('Top 3 non-negotiables saved!');
    });

    // Send Brain Dump to Task
    document.getElementById('dumpToTaskBtn')?.addEventListener('click', () => {
      const text = document.getElementById('brainDumpText').value.trim();
      if (!text) return;
      this.app.checklist.addTask(text);
      document.getElementById('brainDumpText').value = '';
      alert('Sent to Checklist!');
    });

    // Send Brain Dump to Block
    document.getElementById('dumpToBlockBtn')?.addEventListener('click', () => {
      const text = document.getElementById('brainDumpText').value.trim();
      if (!text) return;
      this.app.planner.openModal(null, '14:00', '15:00');
      document.getElementById('modalBlockTitle').value = text;
      document.getElementById('brainDumpText').value = '';
    });

    // Energy Slider readout
    const slider = document.getElementById('dailyEnergyRating');
    const valText = document.getElementById('energyValText');
    slider?.addEventListener('input', () => {
      if (valText) valText.textContent = slider.value;
    });

    // Save Reflection
    document.getElementById('saveReviewBtn')?.addEventListener('click', () => {
      this.app.state.focus.review = {
        energy: parseInt(slider.value, 10),
        needleMoved: document.getElementById('needleMovedInput').value,
        friction: document.getElementById('frictionInput').value
      };
      this.app.saveState();
      alert('Daily reflection logged!');
    });

    // Auto Rollover from Review
    document.getElementById('rolloverIncompleteReviewBtn')?.addEventListener('click', () => {
      this.app.planner.rolloverIncomplete();
    });
  }

  loadFocusData() {
    const focus = this.app.state.focus;
    if (focus.top3) {
      if (document.getElementById('top3_1')) document.getElementById('top3_1').value = focus.top3[0]?.text || '';
      if (document.getElementById('top3_1_check')) document.getElementById('top3_1_check').checked = !!focus.top3[0]?.done;
      if (document.getElementById('top3_2')) document.getElementById('top3_2').value = focus.top3[1]?.text || '';
      if (document.getElementById('top3_2_check')) document.getElementById('top3_2_check').checked = !!focus.top3[1]?.done;
      if (document.getElementById('top3_3')) document.getElementById('top3_3').value = focus.top3[2]?.text || '';
      if (document.getElementById('top3_3_check')) document.getElementById('top3_3_check').checked = !!focus.top3[2]?.done;
    }
    if (document.getElementById('brainDumpText')) {
      document.getElementById('brainDumpText').value = focus.brainDump || '';
    }
    if (focus.review) {
      const slider = document.getElementById('dailyEnergyRating');
      const valText = document.getElementById('energyValText');
      if (slider) slider.value = focus.review.energy || 8;
      if (valText) valText.textContent = focus.review.energy || 8;
      if (document.getElementById('needleMovedInput')) document.getElementById('needleMovedInput').value = focus.review.needleMoved || '';
      if (document.getElementById('frictionInput')) document.getElementById('frictionInput').value = focus.review.friction || '';
    }
  }
}

// Instantiate App on window load
let app = null;
window.addEventListener('DOMContentLoaded', () => {
  app = new PlanLifeApp();
  window.app = app;
});
