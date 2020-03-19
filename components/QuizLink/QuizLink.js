import React, {useState} from 'react'
import Link from 'next/link'

const QuizLink = ({name, permaLink}) => {
	return(
		<Link href={permaLink}>
      		<a>{name}</a>
    	</Link>
	)
}

export default QuizLink
