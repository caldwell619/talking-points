import React from 'react';
import Person from '@material-ui/icons/Person';
import Middleware from '@material-ui/icons/CompareArrows';
import Money from '@material-ui/icons/AttachMoney';
import Assignment from '@material-ui/icons/Assignment';
import Phone from '@material-ui/icons/PhonelinkRing';
import Cloud from '@material-ui/icons/CloudOutlined';

export const topRoutes = [
	{
		link: '/auth',
		icon: <Person />,
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
	}
];
