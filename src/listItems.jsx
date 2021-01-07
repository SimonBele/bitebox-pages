import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import AssignmentIcon from '@material-ui/icons/Assignment';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import { Link as RouterLink } from "react-router-dom";
import Link from '@material-ui/core/Link';
export const mainListItems = (
  <div>
     <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
        <Link
          {...{
            component: RouterLink,
            to: "/dashboard",
            color: "inherit",
            style: { textDecoration: "none" },
            key: "Dashboard",
          }}
        >
          <ListItemText primary="Dashboard" />
        </Link>
      
    </ListItem>
      <ListItem button>
      <ListItemIcon>
        <FastfoodIcon />
      </ListItemIcon>
        <Link
          {...{
            component: RouterLink,
            to: "/discover",
            color: "inherit",
            style: { textDecoration: "none" },
            key: "Discover",
          }}
        >
          <ListItemText primary="Discover" />
        </Link>

      
    </ListItem>
    <ListItem button onClick={() => setComponent('account')}>
      <ListItemIcon>
        <CalendarTodayIcon />
      </ListItemIcon>

      <Link
          {...{
            component: RouterLink,
            to: "/planner",
            color: "inherit",
            style: { textDecoration: "none" },
            key: "Planner",
          }}
        >
          <ListItemText primary="Planner" />
        </Link>
      
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <Link
          {...{
            component: RouterLink,
            to: "/shoppinglist",
            color: "inherit",
            style: { textDecoration: "none" },
            key: "ShoppingList",
          }}
        >
          <ListItemText primary="Shopping list" />
        </Link>
      
    </ListItem>
   
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);