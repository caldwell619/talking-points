import React from 'react';
import PropTypes from 'prop-types';
import '../css/Page.css';

const Page = ({ title, content }) => {
	return (
		<div className="page-main">
			<h1>{title}</h1>
			<div>{content()}</div>
		</div>
	);
};

Page.propTypes = {
	title: PropTypes.string,
	content: PropTypes.func
};

export default Page;
