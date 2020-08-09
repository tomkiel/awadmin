import React from 'react';

const SVG = ({
	id = "Arrow",
	className = "bzIcon"
}) => (
	<i className={ className }>

		<svg 
		id={ id }
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		strokeWidth="2"
		stroke="currentColor"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round">
			<path stroke="none" d="M0 0h24v24H0z"/>
			<polyline points="9 6 15 12 9 18" />
		</svg>
	</i>
);

export default SVG;
