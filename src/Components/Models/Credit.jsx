import React from 'react'
import axios from 'axios'



const Handleclick=()=>{
  let url = "https://api.ip2whois.com/v2?key=C5005D24F6099871772B5343D3EADC9A&domain=gitam.edu"

  axios.get(url)
  .then(response => {
    console.log(response.data); // Assuming you want to log the response data
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}



const Credit = ({close}) => {
  return (
    <div className="modalBackground   fixed top-[200px] justify-center items-center ">
    <div className="modalContainer w-[700px] bg-orange-300   h-[300px] border rounded-2xl flex flex-col p-[25px] shadow-xl ">
      <div className="titleCloseBtn flex justify-end bg-orange-300 ">
        <button className=' bg-transparent border-none text-[25px] cursor-pointer'
          onClick={() => {
            close(false);
          }}
        >
          X
        </button>
      </div>
      <div className="title  bg-orange-300   inline-block text-center mt-[10px]">
       <input type="text" name="" id="" placeholder='Enter 4 Digits of Card' className='w-[500px] h-14  rounded-2xl
           outline-none '/>
      </div>
      <div className="body  bg-orange-300  mt-10 flex justify-center items-center text-[1.7rem] text-center">
        <button onClick={Handleclick} className='bg-red-400  w-36 h-11 rounded-xl shadow-2xl'>Get Data</button>
      </div>
    </div>
  </div>
  )
}

export default Credit
