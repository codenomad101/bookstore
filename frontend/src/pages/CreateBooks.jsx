import React from 'react'
import { useState,useEffect } from 'react'
import Spinner from '../components/Spinner.jsx'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../components/BackButton.jsx';

const CreateBooks = () => {
  const [title,setTitle]=useState('');
  const [author,setAuthor]=useState('');
  const [publishYear, setPublishYear]=useState('');
  const [loading,setLoading]=useState('');
  const navigate=useNavigate();

  const handleSaveBook=()=>{
    const data={
      title,author,publishYear
    };
    setLoading(true);
    axios.post('http://localhost:4000/books',data).then(()=>{
      setLoading(false);
      navigate('/');
    }).catch((error)=>{
      setLoading(false);
      console.log(error);
    })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading?(<Spinner />):''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] mx-auto'>

       <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Title
        </label>
        <input type='text'
         value={title} 
        onChange={(e)=>setTitle(e.target.value)} 
        className='border-2 border-gray-500 py-2 w-full'>
          
        </input>

       </div>
       <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Author
        </label>
        <input type='text'
         value={author} 
        onChange={(e)=>setAuthor(e.target.value)} 
        className='border-2 border-gray-500 py-2 w-full'>
          
        </input>

       </div>
       <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Publish Year
        </label>
        <input type='text'
         value={publishYear} 
        onChange={(e)=>setPublishYear(e.target.value)} 
        className='border-2 border-gray-500 py-2 w-full'>
          
        </input>

       </div>
     <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>Save</button>

      </div>

    </div>
  )
}
 
export default CreateBooks