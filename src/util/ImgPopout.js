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
		zIndex: 10000000000
	}
}));

const ImgPopout = ({ isOpen, handleClose, title, imgSrc, altText }) => {
	const classes = useStyles();
	return (
		<div className="modal">
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={isOpen}
				onClose={handleClose}
			>
				<div className={classes.paper}>
					<Typography variant="h6" id="modal-title">
						{title}
					</Typography>
					<div className="media-content">
						<img src={imgSrc} alt={altText} className="modal-img" />
					</div>
				</div>
			</Modal>
		</div>
	);
};

ImgPopout.prototype = {
	isOpen: PropTypes.bool,
	handleClose: PropTypes.func,
	title: PropTypes.string,
	imgSrc: PropTypes.element,
	altText: PropTypes.string
};

export default ImgPopout;
