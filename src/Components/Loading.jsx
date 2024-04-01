import React from 'react'
import './loading.css'
import { useTypewriter,Cursor } from 'react-simple-typewriter'

const Loading = () => {

    const [text] = useTypewriter({
        words:['WE PROVIDE INFORMATION'],
        loop:{},
    });
  return (
    <div className='text'>
      <h1>{text}</h1>
    </div>
  )
}

export default Loading
