import React, { useState } from 'react';

const Cardinfo = () => {
  const [input, setInput] = useState('');
  const [card, setCard] = useState(null);

  const whoisdomain = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/cardinfo?input=${input}`,{
        method:"GET",
        headers:{
            Accept:"application/json",
            "content-type":"application/json"
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch card details: ' + response.statusText);
      }
  
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        const data = await response.json();
        setCard(data);
        console.log(data); 
        console.log(input);
      } else {
        throw new Error('Unexpected response format: ' + contentType);
      }
    } catch (error) {
      console.error('Error fetching card details:', error);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    whoisdomain();
  };

  return (
    <div>
      <div className="sec flex items-center justify-center">
      <input type="number" className='flex w-[300px] h-12 rounded-3xl placeholder:pl-4 m-4  border-2 outline-none px-3 '   placeholder="Enter first 8 digits card numbe... " name="input" onChange={handleInputChange} />
      <button className='bg-red-600 w-32 h-12 rounded-lg text-white' onClick={handleClick}>Get Data</button>
    </div>
      {card && (
        <div className=' flex justify-center items-center h-[100vh] '>
          <div className="sec bg-[#f5f5f5] w-[700px] h-[430px]   ">
          <h2 className='text-center text-3xl font-bold'>Card Details</h2>
          <div className="ml-6 mt-10">
          <p><span className='font-bold'>Bank Name:</span> {card.bank.name}</p>
          <p> <span className='font-bold'>Card  Type:</span> {card.brand}</p>
          <p><span className='font-bold mr-2'>CountryCode:</span>{card.country.alpha2}</p>
          <p><span className='font-bold mr-2'>Currency:</span>{card.country.currency}</p>
          <p><span className='font-bold mr-2'>Latitude:</span>{card.country.latitude}</p>
          <p><span className='font-bold mr-2'>Longitude:</span>{card.country.longitude}</p>
          <p><span className='font-bold mr-2'>CountryName:</span>{card.country.name}</p>
          <p><span className='font-bold mr-2'>CountryNumeric:</span>{card.country.numeric}</p>
          <p><span className='font-bold mr-2'>CardScheme:</span>{card.scheme}</p>
          <p><span className='font-bold mr-2'>CardType:</span>{card.type}</p>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Cardinfo;
