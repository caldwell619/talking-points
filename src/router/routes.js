import React from 'react';
import Person from '@material-ui/icons/Person';
import Auth from '@material-ui/icons/Https';
import Middleware from '@material-ui/icons/CompareArrows';
import Money from '@material-ui/icons/AttachMoney';
import Assignment from '@material-ui/icons/Assignment';
import Phone from '@material-ui/icons/PhonelinkRing';
import Cloud from '@material-ui/icons/CloudOutlined';
import Build from '@material-ui/icons/Build';
import CloudDone from '@material-ui/icons/CloudDone';

export const topRoutes = [
	{
		link: '/auth',
		icon: <Auth />,
		linkText: 'Auth'
	},
	{
		link: '/middleware',
		icon: <Middleware />,
		linkText: 'Middleware'
	},
	{
		link: '/docs',
		icon: <Assignment />,
		linkText: 'Documentation'
	},
	{
		link: '/broken',
		icon: <Build />,
		linkText: 'Broken Endpoints'
	},
	{
		link: '/comms',
		icon: <Phone />,
		linkText: 'Communication'
	}
];
export const bottomRoutes = [
	{
		link: '/access',
		icon: <Cloud />,
		linkText: 'Access Patterns'
	},
	{
		link: '/business-needs',
		icon: <Money />,
		linkText: 'Business Reqs'
	},
	{
		link: '/ux',
		icon: <Person />,
		linkText: 'UX Concerns'
	},
	{
		link: '/follow-through',
		icon: <CloudDone />,
		linkText: 'Follow Through'
	}
];
