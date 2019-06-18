import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../css/Page.css';
import { Typography, Divider, Fab } from '@material-ui/core';
import { ArrowUpward } from '@material-ui/icons';

const Page = ({ title, content }) => {
	return (
		<Fragment>
			<div className="page-main" style={{ height: '85vh', width: '95%' }}>
				<Typography variant="h2" style={{ textAlign: 'center' }}>
					{title}
				</Typography>
				<Divider className="divider" />
				<div>{content}</div>
				<div className="bottom-spacer" style={{ height: '60px' }} />
			</div>
			<div
				className="fixed-arrow"
				onClick={() =>
					window.scrollTo({
						top: 0,
						left: 0,
						behavior: 'smooth'
					})
				}
			>
				<Fab color="primary" aria-label="Add">
					<ArrowUpward />
				</Fab>
			</div>
		</Fragment>
	);
};

Page.propTypes = {
	title: PropTypes.string,
	content: PropTypes.element
};

export default Page;
