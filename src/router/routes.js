import React from 'react';
import Person from '@material-ui/icons/Person';
import Auth from '@material-ui/icons/Https';
import Middleware from '@material-ui/icons/CompareArrows';
import Assignment from '@material-ui/icons/Assignment';
import Build from '@material-ui/icons/Build';
import Money from '@material-ui/icons/AttachMoney';
import Key from '@material-ui/icons/VpnKey';
import Camera from '@material-ui/icons/CameraAlt';

export const uiRoutes = [
	{
		link: '/ui',
		icon: <Person />,
		linkText: 'User Interface'
	},
	{
		link: '/ocr',
		icon: <Camera />,
		linkText: 'Vin as Picture'
	},
	{
		link: '/mock-vin',
		icon: <Money />,
		linkText: 'Policy Failure'
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
		link: '/middleware',
		icon: <Middleware />,
		linkText: 'Middleware'
	},
	{
		link: '/docs',
		icon: <Assignment />,
		linkText: 'Documentation'
	}
];

export const extensibilityNestedRoutes = [
	{
		link: '/access',
		icon: <Key />,
		linkText: 'Data Flexibility'
	},
	{
		link: '/auth',
		icon: <Auth />,
		linkText: 'Service Availibility'
	}
];
