import React, { Component, Fragment } from 'react';
import '../../css/Conerns.css';
import { Typography, Divider } from '@material-ui/core';
import ImgPopout from '../../util/ImgPopout';
import browserIncapatability from '../../assets/screen-shots/browser-incapatability';
const images = [browserIncapatability];

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
						IE and Edge are unsupported with this application
					</Typography>
					<Divider className="divider" />
					<Typography variant="h6" className="spacer">
						This was tested with the version on Beta as of 10:15am, June 24th, 2019 with
						BrowserStack
					</Typography>
					<Typography variant="body1" className="bottom-spacer">
						<code className="code-block">
							https://web.betamktapp.com/9a175661-f00d-4697-9b6e-f80bb4a06964/splash
						</code>
						{'  '}
						results in a blank page. Checks were made to ensure JavaScript was enabled
					</Typography>
					<Typography variant="h6">Fails</Typography>
					<Divider className="divider" />
					<ul>
						<li>IE 11 (Windows)</li>
						<li>Edge (Windows)</li>
						<li>Yandex (Windows)</li>
						<li>Safari 10.1 Max OS X Sierra</li>
						<li>Safari 9.1 Max OS X El Capitan</li>
					</ul>
					<Typography variant="h6">Pass</Typography>
					<Divider className="divider" />
					<ul>
						<li>Opera (Windows)</li>
						<li>Chrome (Windows)</li>
						<li>Android – Galaxy S9</li>
						<li>Safari iPhone XS</li>
						<li>Safari 12.1 IOS Mojave</li>
						<li>Safari 11.1 Max OS X High Sierra</li>
						<li>iPad Pro 12.9.2018</li>
					</ul>
					<Typography variant="h6">General Notes</Typography>
					<Divider className="divider" />
					<Typography variant="body1" className="bottom-spacer">
						Doesn’t work on IE or Edge. Doesn’t look to work on Safari (Mac OS) below version 11.1
						Doesn’t work on mobile devices when horizontal (prompts to rotate)
					</Typography>

					<Typography variant="h6" className="bottom-spacer">
						Examples
					</Typography>
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

export default Responsiveness;
