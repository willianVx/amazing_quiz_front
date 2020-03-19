
import fetch from 'isomorphic-unfetch';

const RequestData = async (req, params) => {

	const apiURl = 'http://localhost:8080/' + req;

	const fetchOptions = { 
		method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(params)
    }; 

	try {
		const data = await fetch(apiURl, fetchOptions); 
		const jsonData = await data.json();	
		return jsonData;	
	} catch(e){
		console.log('error: ', e);
		return false;
	}
	
}

export default RequestData;
