import {useEffect} from "react";


const Yodish = () =>{
    const axios = require('axios');

    const options = {
        method: 'POST',
        url: 'https://yodish.p.rapidapi.com/yoda.json',
        params: {
            text: 'Master Obiwan has lost a planet.'
        },
        headers: {
            'X-RapidAPI-Key': '8b8e0d7d3bmshfbfbb8a7d2e80a0p18ced7jsnf82456c0c582',
            'X-RapidAPI-Host': 'yodish.p.rapidapi.com'
        }
    };

    // try {
    //     const response = await axios.request(options);
    //     console.log(response.data);
    // } catch (error) {
    //     console.error(error);
    // }

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const response = await axios.request(options)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])

    return(
        <>
        </>
    )
}
export default Yodish;