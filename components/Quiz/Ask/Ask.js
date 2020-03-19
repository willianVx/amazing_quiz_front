import React from 'react'
import css from './style.css'

const Ask = ({text, value, onClick, isSelectedValue}) => {
	const isSelected = parseInt(value, 10) ===  parseInt(isSelectedValue, 10);
	const selectedStyle = {backgroundColor: "#3880D6", padding: "18px", fontSize: "1.4em"}
	return(
		<button 
			className={css.askText} 
			value={value} 
			onClick={onClick} 
			style={isSelected ? selectedStyle : {}}>
			{text}
		</button> 
	)
}
export default Ask;
