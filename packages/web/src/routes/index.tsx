import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Alerts = React.lazy(() => import('../components/Alerts'));
const CareerPath = React.lazy(() => import('../components/CareerPath'));
const Reporting = React.lazy(() => import('../components/Reporting'));
const PeerFeedback = React.lazy(() => import('../components/PeerFeedback'));
const Skills = React.lazy(() => import('../components/Skills'));
const Goals = React.lazy(() => import('../components/Goals'));
const PerformanceReview = React.lazy(
  () => import('../components/PerformanceReview')
);
const OneOnOne = React.lazy(() => import('../components/OneOnOne'));
const AdminSkills = React.lazy(() => import('../components/AdminSkills'));
const AdminReminders = React.lazy(() => import('../components/AdminReminders'));
const AdminPerformanceReviews = React.lazy(
  () => import('../components/AdminPerformanceReviews')
);
const AdminRoles = React.lazy(() => import('../components/AdminRoles'));

const ERoutes = {
  DASHBOARD: '/',
  CAREER_PATH: '/career-path',
  REPORTING: '/reporting',
  PEER_FEEDBACK: '/peer-feedback',
  SKILLS: '/skills',
  GOALS: '/goals',
  PERFORMANCE_REVIEW: '/performance-review',
  ONE_ON_ONE: '/one-on-one',
  ADMIN_REMINDERS: '/admin-reminders',
  ADMIN_ROLES: '/admin-roles',
  ADMIN_SKILLS: '/admin-skills',
  ADMIN_PERFORMANCE_REVIEWS: '/admin-performance-reviews',
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: '',
        element: <Alerts />,
      },
      {
        path: 'career-path',
        element: <CareerPath />,
      },
      {
        path: 'reporting',
        element: <Reporting />,
      },
      {
        path: 'peer-feedback',
        element: <PeerFeedback />,
      },
      {
        path: 'skills',
        element: <Skills />,
      },
      {
        path: 'goals',
        element: <Goals />,
      },
      {
        path: 'performance-review',
        element: <PerformanceReview />,
      },
      {
        path: 'one-on-one',
        element: <OneOnOne />,
      },
      {
        path: 'admin-reminders',
        element: <AdminReminders />,
      },
      {
        path: 'admin-roles',
        element: <AdminRoles />,
      },
      {
        path: 'admin-skills',
        element: <AdminSkills />,
      },
      {
        path: 'admin-performance-reviews',
        element: <AdminPerformanceReviews />,
      },
    ],
  },
]);

export default router;
export { ERoutes };
