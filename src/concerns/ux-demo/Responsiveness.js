import React, { Component, Fragment } from 'react';
import '../../css/Conerns.css';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import ImgPopout from '../../util/ImgPopout';
const camera = require('../../assets/screen-shots/camera.png');
const confirmationPage = require('../../assets/screen-shots/media-query-1.png');
const nonLevel = require('../../assets/screen-shots/non-level-box.png');
const viewHieght = require('../../assets/screen-shots/view-height-1.png');
const images = [camera, confirmationPage, nonLevel, viewHieght];

class Responsiveness extends Component {
	state = {
		isPopoutShown: false,
		imageToShow: ''
	};

	handleClose = () => this.setState({ isPopoutShown: false });

	updateImageToShow = imgToShow => this.setState({ imageToShow: imgToShow });

	render() {
		return (
			<Fragment>
				<div>
					<Typography variant="h6" className="spacer">
						The support for mobile is non existent.
					</Typography>
					<Typography variant="body1" className="bottom-spacer">
						The argument could be made that there are only fixed values that this application will
						be seen with. <br />
						However, it makes more sense to be thourough.
					</Typography>

					<div>
						<Typography variant="h6" className="bottom-spacer">
							Examples
						</Typography>
					</div>
					<div className="media-cont">
						{images.map(image => (
							<img
								src={image}
								alt="bad media query"
								height="200"
								onClick={() => this.setState({ isPopoutShown: true, imageToShow: image })}
							/>
						))}
					</div>
				</div>
				<ImgPopout
					isPopupShown={this.state.isPopoutShown}
					handleClose={this.handleClose}
					imageToShow={this.state.imageToShow}
					altText="bad media query"
					title="Improper Media Query"
				/>
			</Fragment>
		);
	}
}

Responsiveness.propTypes = {};
export default Responsiveness;
