import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {
	return (
		<Fragment>
			<div className="belt">
				{props.sushis.slice(props.counter, props.counter + 4).map((sushi) => (
					<Sushi
						key={sushi.id}
						{...props}
						sushi={sushi}
						// sushi={sushi}
					/>
				))}
				<MoreButton
					handleMoreSushi={() => props.handleMoreSushi(props.counter)}
				/>
			</div>
		</Fragment>
	);
};

export default SushiContainer;
