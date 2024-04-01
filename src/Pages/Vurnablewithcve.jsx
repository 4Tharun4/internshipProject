

import React, { useState, useEffect } from 'react';

const Vurnablewithcve = () => {
  const [domainDetails, setDomainDetails] = useState(null);
 const[input,setInput] = useState("")

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/Vurnable?input=${input}`);
      const data = await response.json();
      setDomainDetails(data);
      console.log(data); // Assuming 'WhoisRecord' is the key containing domain details
    } catch (error) {
      console.error('Error fetching domain details:', error);
    }
  };

  const Handle = () => {
    fetchData();
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  

  return (
    <div>
            <div className="sec flex items-center justify-center">
      <input type="text" className='flex w-[300px] h-12 rounded-3xl placeholder:pl-4 m-4 px-3 border-2 outline-none '   placeholder="Enter CVE NUM... " name="input" onChange={handleInputChange} />
      <button className='bg-red-600 w-32 h-12 rounded-lg text-white' onClick={Handle}>Get Data</button>
    </div>
    {
      domainDetails && 
      (<>
        <div className="dis bg-red-600  text-white flex justify-center items-center  h-12  mt-5   ">
        <p><span className=' font-bold mr-3'>DISCLMAR:</span>FOR MORE INFORMATION REFER BROWSER CONSOLE</p>
   </div>
   <div className="information">
  
  <p><span className=' space-x-3 mr-3 font-bold'>CVE-ID:</span>{domainDetails.vulnerabilities[0].cve.id}</p>
    
   <p><span className='space-x-3 mr-3 font-bold'>Description:</span>{domainDetails.vulnerabilities[0].cve.descriptions[0].value}</p>
      
   <p><span className='space-x-3 mr-3 font-bold'>Last Modified:</span>{domainDetails.vulnerabilities[0].cve.lastModified
}</p>

   
<p><span className='space-x-3 mr-3 font-bold'>Impact Score:</span>{domainDetails.vulnerabilities[0].cve.metrics.cvssMetricV31[0].impactScore}</p>
   </div>

</>
      )
    }
  </div>
  );
};

export default Vurnablewithcve;
