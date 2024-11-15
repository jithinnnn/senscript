import React, { useEffect, useState } from 'react'
import './Home.css';
import Quote from '../Components/Quote';  
import Pagination from 'react-bootstrap/Pagination';




function Home() {

    const [quote,setQuote] = useState([]);
    const [loading,setLoading] = useState(false);
    let items = []
    let active = 1;

for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

    function getQuotes() {
        fetch('https://api.javascripttutorial.net/v1/quotes/?page=1&limit=10').then(data => data.json()).then(data => setQuote(data))
    }

    useEffect((e) => {
        setLoading(true);
        getQuotes()
        setLoading(false);
    }, [])

    
    return (
        <div>
            <h1 className='text-white' style={{ textAlign: 'center' }}>"Quotes"</h1>
            <Quote loading={loading} quote={quote}></Quote>
                <Pagination>{items}</Pagination>
        </div>
    )
}

export default Home