import React from 'react';
import PropTypes from 'prop-types';

const ImageLayout = ({ imagesToDisplay, setImageToDisplay, altText, imageHeight }) => {
	return (
		<div className="media-cont">
			{imagesToDisplay.map((image, index) => (
				<img
					key={index}
					src={image}
					alt={altText}
					height={imageHeight}
					onClick={() => setImageToDisplay(image)}
				/>
			))}
		</div>
	);
};

ImageLayout.propTypes = {
	imagesToDisaplay: PropTypes.arrayOf(PropTypes.element),
	setImageToDisplay: PropTypes.func,
	altText: PropTypes.string,
	imageHeight: PropTypes.string
};

export default ImageLayout;
