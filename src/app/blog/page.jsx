
import React, { createContext } from 'react'
import style from './page.module.css'
import Image from 'next/image';
import BookCard from '@/components/Card/card';


async function getData() {
  const res = await fetch("http://127.0.0.1:8000/books",{ cache: 'no-store' });
  // const res = await fetch("http://127.0.0.1:8000/authors",{ cache: 'no-store' });
  // const res = { books: books, authors: authors}
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  


  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}
 
const Blog = async () => {
  const data = await getData();

  return (
    <div className={style.blog}>     
        
     {
      
      data.map(async(data)=>(
        <div key={data.id} className={style.container}>
         { console.log(data.title)}
         { console.log(data.publication_date)}
        {console.log(data.author)}
   
       
   
         <BookCard url="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" title={data.title} author={data.publication_date} />
        </div>
      
       
    
   
        
      ))
    } 

  

      

      
   

 



    </div>
  )
}

export default Blog