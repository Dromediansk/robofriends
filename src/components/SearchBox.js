import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input
				style={{
					borderRadius: '15px',
					outline: 'none',
					textAlign: 'center'
				}}
				aria-label='Search Robots'
				className='pa3 ba b--green bg-lightest-blue'
				type='search'
				placeholder='search robots'
				onChange={ searchChange }
				/>
		</div>

	);
}

export default SearchBox;