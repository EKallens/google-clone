import React, { useState, useEffect, useRef } from 'react';
import {useDebounce} from 'use-debounce';
import { useResultContext } from '../contexts/ResultContextProvider';
import Links from './Links';

const Search = () => {

	const [ text, setText ] = useState('');
	const { searchTerm, setSearchTerm } = useResultContext();
	const [ debouncedValue ] = useDebounce(text, 1000);
	const inputRef = useRef(null);

	useEffect(() => {
		if(debouncedValue){
			setSearchTerm(debouncedValue);
		}
	}, [debouncedValue]);

	useEffect(() => {
		if(searchTerm === ''){
			setText('');
			inputRef.current.focus();
		}
	}, [searchTerm]);

	const resetSearch = () => {
		setText('');
	}

	return (
		<div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
			<input 
				value={text}
				type="text"
				ref={inputRef}
				className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
				placeholder="Search Gogg"
				autoFocus
				name="searchInput"
				onChange={(e) => setText(e.target.value)}
			/>
			{ text && (
				<button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500" onClick={resetSearch}>
					X
				</button>
			) }
			<Links />
		</div>
	)
}

export default Search;
