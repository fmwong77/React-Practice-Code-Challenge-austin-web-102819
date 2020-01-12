import React, { Fragment } from 'react';

const Sushi = (props) => {
	// state = {};
	const { id, name, img_url, price } = props.sushi;

	return (
		<div className="sushi">
			<div
				className="plate"
				onClick={() => props.handleSelectedSushi(props.sushi)}
			>
				{props.selectedSushi.some((s) => s.id === props.sushi.id) ? null : (
					<img src={img_url} width="100%" />
				)}
			</div>
			<h4 className="sushi-details">
				{name} - ${price}
			</h4>
		</div>
	);
};

export default Sushi;
