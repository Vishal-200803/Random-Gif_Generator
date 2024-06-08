import React, { useEffect, useState } from 'react'
import axios from "axios"
import Spinner from './Spinner';
import useGif
 from '../hooks/useGif';
const Tag = () => {
  
 
  
  const [tag, setTag] = useState('');
  const { gif, loading, fetchData } = useGif(tag);

  function changeHandler(event){
    setTag(event.target.value)
  }


return (
  <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px]text-3xl underline font-bold'> A Random Gif</h1>
      {
        loading ? <Spinner/> :  <img src={gif} width="450" alt="gif_iamge" className='' />
      }
     <input type="text" className='w-10/12 text-lg rounded-lg py-2 text-center' value={tag} onChange={changeHandler}/>
      <button onClick={fetchData} className='mb-[15px] w-10/12 bg-green-200 text-lg rounded-lg py-2'> Generate </button>
  </div>
)
}

export default Tag