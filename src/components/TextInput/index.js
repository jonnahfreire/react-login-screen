import React, { useEffect, useState } from 'react';
import './index.css'


export const TextInput = ({type, placeholder}) => {
	
	const [ placeholderAnimation, setPlaceholderAnimation ] = useState("");

	const handleChange = (value) => {
		value !== ""
			? setPlaceholderAnimation("input-placeholder active")
			: setPlaceholderAnimation("input-placeholder")
	}

	useEffect(() => {
		setPlaceholderAnimation("input-placeholder")
	}, [])

	return (
		<div className="input-container">
			<p className={placeholderAnimation}>{placeholder || ""}</p>
			<input 
				type={type || "text"} 
				onChange={event => {
					handleChange(event.target.value)
				}} 
			/>
		</div>
	)
}
