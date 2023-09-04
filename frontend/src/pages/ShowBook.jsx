import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const ShowBook = () => {
  const [books,setBooks]=useState({});
  const [loading,setLoading]=useState(false);
  const {id}=useParams();
  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:4000/books/${id}`).then((response)=>{
      setBooks(response.data);
      setLoading(false);
      console.log(response.data);
    }).catch((error)=>{
      console.log(error)
      setLoading(false);
  })
  },[])
  return (
    <div>
<BackButton />
<h1 className='text-3xl my-4'>Show Book</h1>
{loading?(<Spinner />):(
   <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
 <div className='my-4'>
  <span className='text-xl mr-4 text-gray-500'>Id</span>
  <span>{books._id}</span>

 </div>
 <div className='my-4'>
  <span className='text-xl mr-4 text-gray-500'>Title</span>
  <span>{books.title}</span>

 </div>
 <div className='my-4'>
  <span className='text-xl mr-4 text-gray-500'>Author</span>
  <span>{books.author}</span>

 </div>
 <div className='my-4'>
  <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
  <span>{books.publishYear}</span>

 </div>
 <div className='my-4'>
  <span className='text-xl mr-4 text-gray-500'>Created Time</span>
  <span>{new Date(books.createdAt).toString()}</span>

 </div>
 <div className='my-4'>
  <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
  <span>{new Date(books.updatedAt).toString()}</span>

 </div>
    </div>

)}

    </div>
  )
}

export default ShowBook