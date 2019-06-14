import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import MailIcon from '@material-ui/icons/Mail';
import VideosIcon from '@material-ui/icons/Videocam'
import { Link, NavLink } from 'react-router-dom';

export const mainListItems = (
    <div>
        <ListItem button >
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>


        <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/dashboard/students'>
            <ListItem button >
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Students" />
            </ListItem>
        </NavLink>

        <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/dashboard/invitations'>
            <ListItem button >
                <ListItemIcon>
                    <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Invitations" />
            </ListItem>
        </NavLink>
        <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/dashboard/videos'>
            <ListItem button >
                <ListItemIcon>
                    <VideosIcon />
                </ListItemIcon>
                <ListItemText primary="Videos" />
            </ListItem>
        </NavLink>
    </div>
);

