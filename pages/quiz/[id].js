import React, {useState} from 'react'
import Head from 'next/head'
import Header from '../../components/Header/Header'
import Quiz from '../../components/Quiz/Quiz'
import Footer from '../../components/Footer/Footer'
import '../style.css'
import Questions from '../../static/mockedQuestions';
import { useRouter } from 'next/router'

const QuizPage = () => {

  const router = useRouter();
  const { id } = router.query;

	return (
		<div>
		    <Head>
		    	<title>Quiz Page</title>
		    	<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		    </Head>
		    <Header />
		    <Quiz Questions={Questions} id={id} />
		    <Footer />
  		</div>
	)
}

export default QuizPage;
