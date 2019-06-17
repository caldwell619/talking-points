import React, { Fragment } from 'react';
import {
	Typography,
	Divider,
	List,
	ListItemText,
	ListItem
} from '@material-ui/core';
import ImgPopout from '../util/ImgPopout';

const Auth = () => (
	<Fragment>
		<div>
			<Typography variant="h6">
				As it stands, there is no authentication being done in this application.
			</Typography>
			<Typography variant="body1" className="bottom-spacer">
				Any form of auth is being done strictly from local storage. There is{' '}
				<strong>NO</strong> way to log in on your own.
			</Typography>
			<Typography variant="h6" className="spacer">
				The Problem
			</Typography>
			<Typography variant="body1" className="">
				The way this application is structures is as follows:
				<br />
			</Typography>
			<Typography variant="body1" className="">
				<ul>
					<li>
						Users initially come to a splash page in which they are asked for an
						email address
					</li>
					<li>
						Upon entering an email (could be <em>a@b.asaa</em> ), they are given
						a token which grants access to several endpoints, including a
						pass-through to Unity.
					</li>
					<li>
						This token does expire, however, the UI is configured to
						automatically refresh the token. It does this without prompt from
						the user.
					</li>
					<li>After getting this token, </li>
					<li />
					<li />
				</ul>
			</Typography>
			<Typography variant="h6" className="spacer">
				Potential Solutions
			</Typography>
			<Typography variant="body1" className="spacer bottom-spacer">
				A clearer understanding of the Business Requriements is needed. We have
				ideas about fixing what is in place, but if thats the intent, then we
				don't need to fix anything.
				<br />
			</Typography>
		</div>
	</Fragment>
);

export default Auth;
