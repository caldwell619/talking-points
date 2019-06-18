import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(theme => ({
	paper: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(4),
		outline: 'none',
		zIndex: 10000000000,
		width: '80%'
	}
}));

const SideBySide = props => {
	const {
		isSideBySideShown,
		handleClose,
		title,
		sideBySideImg1,
		sideBySideImg2,
		altText1,
		altText2
	} = props;
	const classes = useStyles();
	return (
		<div className="modal">
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={isSideBySideShown}
				onClose={handleClose}
			>
				<div className={classes.paper}>
					<Typography variant="h5" id="modal-title">
						{title}
					</Typography>
					<div className="side-by-side-modal">
						<div className="media-content">
							<img
								src={sideBySideImg1}
								alt={altText1}
								className="comparison-img first-compare-image"
							/>
						</div>
						<div className="media-content">
							<img src={sideBySideImg2} alt={altText2} className="comparison-img" />
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
};

SideBySide.prototype = {
	isSideBySideShown: PropTypes.bool,
	handleClose: PropTypes.func,
	title: PropTypes.string,
	sideBySideImg1: PropTypes.element,
	sideBySideImg2: PropTypes.element,
	altText1: PropTypes.string,
	altText2: PropTypes.string
};

export default SideBySide;
