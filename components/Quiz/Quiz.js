import React, {useState} from 'react'
import Router from 'next/router'
import Ask from './Ask/Ask'
import css from './style.css'

const Quiz = ({Questions, id}) => {
	const [selectedValue, setSelectedValue] = useState(false);

	const QuestionId = parseInt(id, 10);

	const NextQuestion = QuestionId + 1;

	const Question = Questions.find(element =>  element.id === QuestionId);

	const handleOption = (event) => {
		setSelectedValue(event.target.value);
	}

	const handleNextButton = () => {
		if(!selectedValue) return;

		if(NextQuestion > Questions.length) return;

		Router.push('/quiz/' + NextQuestion);
	}

	if(!Question) return <p>Carregando...</p>
		
	return(
		<section>
			<div>
				<div>
					<h1>{Question.title}</h1>
				</div>	
				{Question.options.map(element => (
					<Ask text={element.text} 
						 key={element.id} 
						 value={element.id} 
						 onClick={handleOption} 
						 isSelectedValue={selectedValue} />
				))}
				<hr /> 
				<div className={css.nextButtonWrapper}>
					<button className={css.nextButton} onClick={handleNextButton}>
				    	Próxima
					</button>
				</div>
			</div>
		</section>
	);
}
export default Quiz; 
