
export const AVAILABLE_WIDGETS = {
  workforce: {
    id: 'workforce',
    title: 'Workforce Overview',
    description: 'Overview of workforce metrics and statistics',
    icon: '👥',
    defaultLayout: { w: 8, h: 3.65, minW: 4, minH: 4 },
    removable: true,
  },
  recruitment: {
    id: 'recruitment',
    title: 'Recruitment Metrics',
    description: 'Track recruitment progress and metrics',
    icon: '📊',
    defaultLayout: { w: 4, h: 3.65, minW: 3, minH: 4 },
    removable: true,
  },
  attendance: {
    id: 'attendance',
    title: 'Attendance & Leave',
    description: 'Monitor attendance and leave requests',
    icon: '📅',
    defaultLayout: { w: 4, h: 3, minW: 3, minH: 3 },
    removable: true,
  },
  training: {
    id: 'training',
    title: 'Training Progress',
    description: 'Track employee training progress',
    icon: '🎓',
    defaultLayout: { w: 4, h: 3, minW: 3, minH: 3 },
    removable: true,
  },
  turnover: {
    id: 'turnover',
    title: 'Turnover & Retention',
    description: 'Monitor turnover and retention metrics',
    icon: '📈',
    defaultLayout: { w: 4, h: 3, minW: 3, minH: 3 },
    removable: true,
  },
  performance: {
    id: 'performance',
    title: 'Performance Summary',
    description: 'View performance metrics and summaries',
    icon: '⭐',
    defaultLayout: { w: 4, h: 2.7, minW: 3, minH: 3 },
    removable: true,
  },
  payroll: {
    id: 'payroll',
    title: 'Payroll Summary',
    description: 'Overview of payroll information',
    icon: '💰',
    defaultLayout: { w: 4, h: 1.9, minW: 3, minH: 3 },
    removable: true,
  },
  myApprovals: {
    id: 'myApprovals',
    title: 'My Pending Approvals',
    description: 'Review and manage pending approvals',
    icon: '👥',
    defaultLayout: { w: 4, h: 2.7, minW: 3, minH: 4 },
    removable: true,
  },
  quickActions: {
    id: 'quickActions',
    title: 'Quick Actions',
    description: 'Quick access to common actions',
    icon: '⚡',
    defaultLayout: { w: 4, h: 2.9, minW: 3, minH: 4 },
    removable: true,
  },
  quickCreate: {
    id: 'quickCreate',
    title: 'Quick Create',
    description: 'Create new items quickly',
    icon: '✨',
    defaultLayout: { w: 4, h: 2.1, minW: 3, minH: 3 },
    removable: true,
  },
};

/**
 * Get all available widget IDs
 */
export const getAllWidgetIds = () => Object.keys(AVAILABLE_WIDGETS);

/**
 * Get widget metadata by ID
 */
export const getWidgetMetadata = (widgetId) => AVAILABLE_WIDGETS[widgetId];

/**
 * Get list of widgets that are currently available to add (not in current layout)
 */
export const getAvailableWidgetsForAdding = (currentLayout) => {
  const currentWidgetIds = new Set(currentLayout.map(item => item.i));
  return getAllWidgetIds().filter(widgetId => !currentWidgetIds.has(widgetId));
};

/**
 * Get display info for available widgets
 */
export const getAvailableWidgetsInfo = (currentLayout) => {
  return getAvailableWidgetsForAdding(currentLayout).map(widgetId => ({
    ...AVAILABLE_WIDGETS[widgetId],
  }));
};
