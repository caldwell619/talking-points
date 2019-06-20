import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Home from '@material-ui/icons/Home';
import Cloud from '@material-ui/icons/CloudOutlined';
import HeaderItem from './HeaderItem';
import { topRoutes, bottomRoutes, extensibilityNestedRoutes, uiRoutes } from '../router/routes';
import NavListItems from './NavListItems';
import NestedNavList from './NestedNavList';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
	appBar: {
		width: `100`,
		marginLeft: drawerWidth,
		zIndex: 1300
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
				<List
					component="nav"
					aria-labelledby="nested-list-subheader"
					subheader={
						<ListSubheader component="div" id="nested-list-subheader">
							Improve Now
						</ListSubheader>
					}
				>
					<NavListItems navItems={uiRoutes} />
					<NestedNavList
						primaryIcon={<Cloud />}
						topLevelText="Extensibility"
						nestedNavItems={extensibilityNestedRoutes}
					/>
					<NavListItems subheaderText="Improve Later" navItems={topRoutes} />
				</List>
				<Divider />
				<List
					component="nav"
					aria-labelledby="nested-list-subheader"
					subheader={
						<ListSubheader component="div" id="nested-list-subheader">
							Improve Later
						</ListSubheader>
					}
				>
					<NavListItems navItems={bottomRoutes} />
				</List>
			</Drawer>
		</div>
	);
}
