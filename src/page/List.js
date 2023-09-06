import React, { useEffect, useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { db } from './instans';

function List() {
  const { catagory } = useParams();
  const [data, setData] = useState();
  const { state } = useLocation();

  const nave = useNavigate();


  async function loadData() {
    const load = await db.db_All();
    setData(load[state])
  }

  useEffect(() => {
    loadData();
  }, [state])

  if(!data)return (<>loading....</>);

  return (
    <>
      <h2 className='list_h2'>{catagory}</h2>
      <div className='list'>
        {
      data.map((v) => (
        <figure onClick ={()=>{nave(`/movie/${v.id}`)}} key = {v.id}>
          <p>
            <img src={db.img_poster + v.poster_path}></img>
          </p>
          <figcaption>
            <b>{v.title + v.name}</b>
          </figcaption>
        </figure>
      ))
      }
      </div>
      
    </>

  )
}

export default List