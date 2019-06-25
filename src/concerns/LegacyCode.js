import React, { Component, Fragment } from 'react';
import { Typography, Divider } from '@material-ui/core';
import DropDown from '../util/DropDown';
import ImgPopout from '../util/ImgPopout';
import SideBySide from '../util/SideBySide';
import followThroughLinks from '../static-data/follow-through-links';
const emptyFile1 = require('../assets/screen-shots/empty-1.png');
const emptyFile2 = require('../assets/screen-shots/empty-2.png');
const emptyFile3 = require('../assets/screen-shots/empty-3.png');
const emptyFile4 = require('../assets/screen-shots/empty-4.png');
const emptyFile5 = require('../assets/screen-shots/empty-5.png');
const emptyFile7 = require('../assets/screen-shots/empty-7.png');
const emptyFile8 = require('../assets/screen-shots/empty-8.png');
const emptyFileCollection = [
	emptyFile1,
	emptyFile2,
	emptyFile3,
	emptyFile4,
	emptyFile5,
	emptyFile7,
	emptyFile8
];
const compare1 = require('../assets/screen-shots/compound-1.png');
const compare2 = require('../assets/screen-shots/compound-2.png');

class BrokenEndpoints extends Component {
	state = {
		isPopupShown: false,
		imageToShow: '',
		isSideBySideShown: false,
		sideBySideImg1: '',
		sideBySideImg2: ''
	};
	handleClose = () => this.setState({ isPopupShown: false, isSideBySideShown: false });

	updateImageToShow = imgToShow => this.setState({ imageToShow: imgToShow });

	updateSideBySide = () => {
		this.setState({
			isSideBySideShown: true,
			sideBySideImg1: compare1,
			sideBySideImg2: compare2
		});
	};

	render() {
		return (
			<Fragment>
				<div>
					<Typography variant="h6">
						Accepting a product that has unused and broken code accrues a great deal of technical
						debt.
					</Typography>
					<Divider className="divider" />

					<Typography variant="h6" className="spacer">
						Opportunity for Improvement
					</Typography>
					<Typography variant="body1" className="spacer bottom-spacer">
						By accepting code that is broken / unrelated to the product, you assume technical debt
						that will require dev time to fix. Time will need to be alloted to sort through what
						should, and should not be there.
						<br />
						<br />
						<Typography variant="body1" className="bottom-spacer">
							Several aspects of Bacon Loan Pay have been simply{' '}
							<span
								style={{ color: 'blue', cursor: 'pointer' }}
								onClick={() => this.updateSideBySide()}
							>
								copied and pasted
							</span>{' '}
							into the architecture of this application.
							<br />
							<br />
							Having this unused duplication increases the size of the application. Resource
							consumption on AWS slows performance and increases cost.
							<br />
						</Typography>
					</Typography>
					<Typography variant="h6" className="spacer">
						Moving Forward
					</Typography>
					<Typography variant="body1" className="spacer bottom-spacer">
						Prune the code that is not relevant to the project, and fix the ones that are.
					</Typography>
					<div>
						<Typography variant="h6">List of Broken Functions</Typography>
					</div>
					<Divider className="divider" />
					<div>
						<DropDown title="Password Reset Request" content={() => content(passwordError)} />
						<DropDown title="Compound" content={() => content(compoundError)} />
						<DropDown title="Bank Routing" content={() => content(routingError)} />
					</div>
					<div>
						<Typography variant="h6" className="spacer">
							Unfinished Files on the Source Code
						</Typography>
						<Divider className="divider" />
						<div className="links-cont">
							{followThroughLinks.map(({ url, text }) => (
								<div>
									<a href={url} rel="noopener noreferrer" target="_blank" className="blue-link">
										{text}
									</a>
								</div>
							))}
						</div>
					</div>
					<div className="media-cont">
						{emptyFileCollection.map((image, index) => (
							<img
								key={index}
								src={image}
								alt="low effort"
								height="200"
								onClick={() => this.setState({ isPopupShown: true, imageToShow: image })}
							/>
						))}
					</div>
				</div>
				<ImgPopout
					{...this.state}
					handleClose={this.handleClose}
					altText="poor design"
					title="Poor Design"
				/>
				<div className="side-by-side-cont">
					<SideBySide
						{...this.state}
						handleClose={this.handleClose}
						altText1="Bacon Loan Pay"
						altText2="Buy Now"
						title="Side By Side Comparison of both Apps"
					/>
				</div>
			</Fragment>
		);
	}
}

export default BrokenEndpoints;

const compoundError =
	"TypeError: Cannot read property 'authorization' of undefined at exports.handler(/var/task / index.js: 17: 31)";
const passwordError =
	'User: lambda - UtilityGetBankInfo - 3LX7ERI7HXGN is not authorized to perform: secretsmanager: GetSecretValue on resource: arn: aws: secretsmanager:';
const routingError =
	"Lambda execution failed with status 200 due to customer function error: Handler 'handler' missing on module 'index'";
const content = errorMessage => (
	<div>
		<Typography variant="subtitle2">Error Message:</Typography>
		<Typography variant="body1">
			<code>{errorMessage}</code>
		</Typography>
	</div>
);
