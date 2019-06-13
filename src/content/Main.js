import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Typography, Button } from '@material-ui/core';
import '../css/Main.css';

const Main = ({}) => (
	<div className="main-root">
		<div className="main-title">
			<Typography variant="h2">Welcome!</Typography>
		</div>
		<Divider className="divider" />
		<div className="main-body">
			<Typography variant="h5" className="main-block">
				Thank you for taking the time to listen to our concerns
			</Typography>
			<Typography variant="h5" className="main-block">
				On the left side, you'll find a list of categories that we feel need
				addressing.
			</Typography>
		</div>
		<div style={{ textAlign: 'right' }}>
			<Link to="/auth">
				<Button variant="contained" color="primary">
					Get Started
				</Button>
			</Link>
		</div>
	</div>
);

export default Main;
