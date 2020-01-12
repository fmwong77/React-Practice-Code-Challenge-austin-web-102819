import React from 'react';

const MoreButton = (props) => {
	return (
		<button onClick={() => props.handleMoreSushi(props.counter)}>
			More sushi!
		</button>
	);
};

export default MoreButton;
