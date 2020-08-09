import React from 'react';

const SVG = ({
	id = "ArrowUpRight",
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
            <line x1="17" y1="7" x2="7" y2="17" />
            <polyline points="8 7 17 7 17 16" />
		</svg>
	</i>
);

export default SVG;
