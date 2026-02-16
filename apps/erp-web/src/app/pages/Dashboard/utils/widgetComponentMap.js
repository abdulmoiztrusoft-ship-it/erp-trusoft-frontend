/**
 * Widget Component Mapper - Maps widget IDs to their React components
 */

import WorkforceOverview from '../components/cards/WorkforceOverview';
import RecruitmentMetrics from '../components/cards/RecruitmentMetrics';
import AttendanceAndLeave from '../components/cards/AttendanceAndLeave';
import TrainingProgress from '../components/cards/TrainingProgress';
import TurnoverRetention from '../components/cards/TurnoverRetention';
import PerformanceSummary from '../components/cards/PerformanceSummary';
import PayrollSummary from '../components/cards/PayrollSummary';
import MyPendingApprovalsWidget from '../components/cards/MyPendingApprovalsWidget';
import QuickActionsWidget from '../components/cards/QuickActionsWidget';
import QuickCreateWidget from '../components/cards/QuickCreateWidget';

/**
 * Map of widget IDs to their components
 */
const WIDGET_COMPONENTS = {
  workforce: WorkforceOverview,
  recruitment: RecruitmentMetrics,
  attendance: AttendanceAndLeave,
  training: TrainingProgress,
  turnover: TurnoverRetention,
  performance: PerformanceSummary,
  payroll: PayrollSummary,
  myApprovals: MyPendingApprovalsWidget,
  quickActions: QuickActionsWidget,
  quickCreate: QuickCreateWidget,
};

/**
 * Get the React component for a widget by ID
 */
export const getWidgetComponent = (widgetId) => {
  return WIDGET_COMPONENTS[widgetId];
};

/**
 * Check if a widget component exists
 */
export const hasWidgetComponent = (widgetId) => {
  return !!WIDGET_COMPONENTS[widgetId];
};
