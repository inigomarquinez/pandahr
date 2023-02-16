import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import PreviewIcon from '@mui/icons-material/Preview';
import RouteIcon from '@mui/icons-material/Route';
import FeedbackIcon from '@mui/icons-material/Feedback';
import FlagIcon from '@mui/icons-material/Flag';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { useNavigate } from 'react-router-dom';

import { ERoutes } from '../../routes';

export const MainListItems = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <ListItemButton onClick={() => navigate(ERoutes.DASHBOARD)}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>

      <ListItemButton onClick={() => navigate(ERoutes.CAREER_PATH)}>
        <ListItemIcon>
          <RouteIcon />
        </ListItemIcon>
        <ListItemText primary="Career path" />
      </ListItemButton>

      <ListItemButton onClick={() => navigate(ERoutes.REPORTING)}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Reporting" />
      </ListItemButton>

      <ListItemButton onClick={() => navigate(ERoutes.PEER_FEEDBACK)}>
        <ListItemIcon>
          <FeedbackIcon />
        </ListItemIcon>
        <ListItemText primary="Peer feedback" />
      </ListItemButton>

      <ListItemButton onClick={() => navigate(ERoutes.GOALS)}>
        <ListItemIcon>
          <FlagIcon />
        </ListItemIcon>
        <ListItemText primary="Goals" />
      </ListItemButton>

      <ListItemButton onClick={() => navigate(ERoutes.SKILLS)}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Skills" />
      </ListItemButton>

      <ListItemButton onClick={() => navigate(ERoutes.PERFORMANCE_REVIEW)}>
        <ListItemIcon>
          <ReceiptLongIcon />
        </ListItemIcon>
        <ListItemText primary="Performance Review" />
      </ListItemButton>

      <ListItemButton onClick={() => navigate(ERoutes.ONE_ON_ONE)}>
        <ListItemIcon>
          <DriveFileRenameOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="1:1 notes" />
      </ListItemButton>
    </React.Fragment>
  );
};

export const SecondaryListItems = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Admin area
      </ListSubheader>
      <ListItemButton onClick={() => navigate(ERoutes.ADMIN_REMINDERS)}>
        <ListItemIcon>
          <EditNotificationsIcon />
        </ListItemIcon>
        <ListItemText primary="Reminders" />
      </ListItemButton>

      <ListItemButton onClick={() => navigate(ERoutes.ADMIN_ROLES)}>
        <ListItemIcon>
          <PreviewIcon />
        </ListItemIcon>
        <ListItemText primary="Roles" />
      </ListItemButton>

      <ListItemButton onClick={() => navigate(ERoutes.ADMIN_SKILLS)}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Skills" />
      </ListItemButton>

      <ListItemButton
        onClick={() => navigate(ERoutes.ADMIN_PERFORMANCE_REVIEWS)}
      >
        <ListItemIcon>
          <ReceiptLongIcon />
        </ListItemIcon>
        <ListItemText primary="Performance Reviews" />
      </ListItemButton>
    </React.Fragment>
  );
};
