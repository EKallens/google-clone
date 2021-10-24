import React from 'react'

const Footer = () => {

	const year = new Date().getFullYear();

	return (
		<div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200">
			<h1>{year} Goggl, Inc.</h1>
		</div>
	)
}

export default Footer
