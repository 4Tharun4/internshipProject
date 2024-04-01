import React, { useState } from 'react';

const Domain = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState(null);
  const [whoisdata, setWhois] = useState(null);
  const [domainDetails, setDomainDetails] = useState(null);
  console.log(domainDetails);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const fetchData = async () => {
    const url = `https://whoisapi-dns-lookup-v1.p.rapidapi.com/whoisserver/DNSService?domainname=${input}&type=A&apiKey=at_SCXuFZajbKrsesVKHKNHq1tlmrbJP&outputFormat=JSON`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9e4b6ee11fmsh4185aa7f735029fp1673a1jsn0756a910c898',
        'X-RapidAPI-Host': 'whoisapi-dns-lookup-v1.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData.DNSData);
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const whois = async (address) => {
    try {
      const response = await fetch(`http://localhost:3001/api/ip-details?address=${address}`);
      console.log(address);
      if (response.ok) {
        const data = await response.json();
        setWhois(data);
        console.log(data);
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error fetching IP details:', error);
    }
  };
  const whoisdomain = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/domaindetails?domain=${input}`);
      const data = await response.json();
      setDomainDetails(data.WhoisRecord);
      console.log(data); // Assuming 'WhoisRecord' is the key containing domain details
    } catch (error) {
      console.error('Error fetching domain details:', error);
    }
  };

  const handleRequest = () => {
    fetchData();
    whoisdomain();
    if (data && data.dnsRecords && data.dnsRecords.length > 0) {
      const address = data.dnsRecords[0].address; // Assuming you want to use the first DNS record's address
      whois(address);
    }
    
  };
  const renderData = () => {
    if (!whoisdata) {
      return null;
    }

    return (
      <div>
        <h2 className='text-3xl text-center bg-red-500'> Domain IP Details</h2>
        <p>Organization: {whoisdata.as}</p>
        <p>ASN: {whoisdata.asn}</p>
        <p>City: {whoisdata.city_name}</p>
        <p>Country Code: {whoisdata.country_code}</p>
        <p>Country Name: {whoisdata.country_name}</p>
        <p>IP Address: {whoisdata.ip}</p>
        <p>Is Proxy: {whoisdata.is_proxy ? 'Yes' : 'No'}</p>
        <p>Latitude: {whoisdata.latitude}</p>
        <p>Longitude: {whoisdata.longitude}</p>
        <p>Region Name: {whoisdata.region_name}</p>
        <p>Time Zone: {whoisdata.time_zone}</p>
        <p>Zip Code: {whoisdata.zip_code}</p>
      </div>
    );
  };
  return (
    <div className="main  h-[100vh]">
      <div className="sec flex items-center justify-center">
      <input type="text" className='flex w-[300px] h-12 rounded-3xl placeholder:pl-4 m-4  border-2 outline-none '  placeholder="Enter Domain Name.." name="input" onChange={handleInputChange} />
      <button className='bg-red-600 w-32 h-12 rounded-lg text-white' onClick={handleRequest}>Get Data</button>
     
      </div>
      
      <div>
        {data && (
          <>
         <div className="dis bg-red-600  text-white flex justify-center items-center  h-12  mt-5   ">
         <p><span className=' font-bold mr-3'>DISCLMAR:</span>FOR MORE INFORMATION REFER BROWSER CONSOLE</p>
    </div>
          <div className=' bg-slate-500  mt-10'>
            <h2 className='text-red-500 text-3xl text-center'>Domain Details</h2>
            <p className=''>Domain Name: {data.domainName}</p>
            <p>DNS Type: {data.dnsTypes}</p>
            <p>Created Date: {data.audit.createdDate}</p>
            <p>Updated Date: {data.audit.updatedDate}</p>
            <h3>DNS Records</h3>
            <ul>
              {data.dnsRecords.map((record, index) => (
                <li key={index}>
                  <p>Type: {record.type}</p>
                  <p>Name: {record.name}</p>
                  <p>TTL: {record.ttl}</p>
                  <p>Address: {record.address}</p>
                </li>
              ))}
            </ul>
<hr />
            <div className="addressdetails mt-7">
               {renderData()}
            </div>
            <hr />
            <div className=" mt-7">
            {domainDetails ? (
        <div>
          <h2 className='bg-red-500 text-3xl text-center '>More Domain Details From Whois</h2>
          <p>Domain Name: {domainDetails.domainName}</p>
          <p>Estimated Domain Age: {domainDetails.estimatedDomainAge}</p>
          <p>Email:{domainDetails.contactEmail}</p>
         
        </div>
      ) : (
        <p>Loading...</p>
      )} 
            </div>
           
          </div>
          </>
        )}
      </div>
    
      </div>
      
      
    
  );
};

export default Domain;
