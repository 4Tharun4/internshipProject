import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import xml2js from 'xml2js';
const { parseString } = xml2js;

const app = express();
const port = 3001; // Choose your desired port

// Enable CORS for all routes
app.use(cors());

// Define a route to fetch details from IP2Location
app.get('/api/ip-details', async (req, res) => {
  try {
    const apiKey = 'C5005D24F6099871772B5343D3EADC9A';
    const address = req.query.address;
    console.log(address);
    if (!address) {
      return res.status(400).json({ error: 'Address parameter is required' });
    }// Default IP address

    const response = await fetch(`https://api.ip2location.io/?key=${apiKey}&ip=${address}`);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error('Error fetching IP details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/api/domaindetails', async (req, res) => {
  const domain = req.query.domain;
  console.log(domain);
  try {
    
    const response = await fetch(`https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_SCXuFZajbKrsesVKHKNHq1tlmrbJP&domainName=${domain}`);
    const xmlData = await response.text(); // Get the XML response as text

    // Parse the XML into JSON using xml2js
    parseString(xmlData, (err, jsonData) => {
      if (err) {
        console.error('Error parsing XML:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        // Send the parsed JSON data as the response
        res.json(jsonData);
        
      }
    });
  } catch (error) {
    console.error('Error fetching domain details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  };
});
app.get("/api/Vurnable",async (req,res)=>{
  const cvenum = req.query.input;
  console.log(cvenum);
  const url = (`https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=${cvenum}`)
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    res.json(data); // Sending the parsed JSON data to the client
    console.log(data); // Logging the parsed JSON data
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' }); // Sending an error response to the client
  }
         
        
  
      
})

//card details
app.get("/api/cardinfo",async (req,res)=>{
  const cardinfo = req.query.input;
  console.log(cardinfo);
  const url = (`https://lookup.binlist.net/${cardinfo}`)
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    res.json(data); // Sending the parsed JSON data to the client
    console.log(data); // Logging the parsed JSON data
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' }); // Sending an error response to the client
  }
         
        
  
      
})


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
