import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import HeaderItem from './HeaderItem';
import { topRoutes, bottomRoutes } from '../static/routes';
import Home from '@material-ui/icons/Home';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
	appBar: {
		width: `100`,
		marginLeft: drawerWidth,
		zIndex: 10000
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3)
	}
}));

export default function Header() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" noWrap>
						Talking Points
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper
				}}
				anchor="left"
			>
				<div className={classes.toolbar} />
				<HeaderItem link="/" linkText="Home" icon={<Home />} />
				<Divider />
				<List>
					{topRoutes.map((route, index) => (
						<HeaderItem key={index} {...route} />
					))}
				</List>
				<Divider />
				<List>
					{bottomRoutes.map((route, index) => (
						<HeaderItem key={index} {...route} />
					))}
				</List>
			</Drawer>
		</div>
	);
}
