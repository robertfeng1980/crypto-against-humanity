import React from 'react';
import Card from './card';

const WhiteCardListItem = ({title}) => {
	return ( 
		<li className="list-group-item">
			<div className="card-list media">
				<div className="media-left">
					<Card title={title} />
				</div>
			</div>
		</li>
	)
}

export default WhiteCardListItem;