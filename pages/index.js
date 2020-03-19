import React, {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import QuizLink from '../components/QuizLink/QuizLink'
import './style.css'
import Questions from '../static/mockedQuestions';
import RequestData from '../components/Connection/RequestData';

const Home = () => {

const [questions, setQuestions] = useState([]);

const questionsList = RequestData('questionsList', {});

questionsList.then(res => setQuestions(res));

return(
	<div>
	    <Head>
	      <title>Home</title>
	      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
	    </Head>
	    <Header />
	    {questions.map(({id, permaLink, questionaryTitle}) => {
	    	return (
		    	<div>
		    		<h3>{questionaryTitle}</h3>
		    		<QuizLink name={permaLink  } permaLink={permaLink} />
		    	</div>
	    	)
	    })}
	    <Footer />
	  </div>
	)
}
export default Home
