import React from 'react';
import Person from '@material-ui/icons/Person';
import Auth from '@material-ui/icons/Https';
import Middleware from '@material-ui/icons/CompareArrows';
import Assignment from '@material-ui/icons/Assignment';
import Build from '@material-ui/icons/Build';
import Key from '@material-ui/icons/VpnKey';

export const uiRoutes = [
	{
		link: '/ui',
		icon: <Person />,
		linkText: 'User Interface'
	}
];
export const topRoutes = [
	{
		link: '/broken',
		icon: <Build />,
		linkText: 'Legacy Code'
	}
];
export const bottomRoutes = [
	{
		link: '/docs',
		icon: <Assignment />,
		linkText: 'Documentation'
	},
	{
		link: '/access',
		icon: <Key />,
		linkText: 'Data Flexibility'
	}
];

export const extensibilityNestedRoutes = [
	{
		link: '/middleware',
		icon: <Middleware />,
		linkText: 'Middleware'
	},
	{
		link: '/auth',
		icon: <Auth />,
		linkText: 'Service Availibility'
	}
];
