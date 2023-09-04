import React from 'react'
import { useState,useEffect } from 'react'
import Spinner from '../components/Spinner.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../components/BackButton.jsx';
import { useParams } from 'react-router-dom';

const EditBook = () => {
  const [title,setTitle]=useState('');
  const [author,setAuthor]=useState('');
  const [publishYear, setPublishYear]=useState('');
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();

  const {id}=useParams();

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:4000/books/${id}`).
    then((response)=>{
      setTitle(response.data.title);
      setAuthor(response.data.author);
      setPublishYear(response.data.publishYear);
     setLoading(false);
    }).then((error)=>{
      setLoading(false);
      alert('error has occured, look into console');
      console.log(error);
     
    })
   
  },[])

  const handleEditBook=()=>{
    const data={
      title,author,publishYear
    };
    setLoading(true);
    axios.put(`http://localhost:4000/books/${id}`,data).then(()=>{
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
     <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>Save</button>

      </div>

    </div>
  )
}
 
export default EditBook