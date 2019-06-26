import React from 'react';
import { Typography, Divider } from '@material-ui/core';
const uiFlow = require('../../assets/videos/full-ui-flow.mov');

const WalkThrough = () => {
	return (
		<div>
			<Typography variant="h6">Full UI Walk Through</Typography>
			<Divider className="divider" />
			<div className="media-cont">
				<video src={uiFlow} width="480" height="200" controls />;
			</div>
		</div>
	);
};

export default WalkThrough;
