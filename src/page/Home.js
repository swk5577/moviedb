import React, { useEffect, useState } from 'react'
import { themoviedb, db } from './instans.js'
import { useNavigate } from 'react-router-dom';

function Home() {
  let [a, 수정] = useState();
  const nave = useNavigate();


  async function aa() {
    let a = await db.db_All()
    수정(a)
  }

  useEffect(() => {
    //화면출력시 실행
    aa();
  }, [])
  //[] 로드되는 시점에 1번만 실행


  if (!a) return (<>loading....</>);
  //0이 아니면 갚을 출력하는 코드

  return (
    <>
      <div className='con1'>

        {
          a['Top Rated Movies'].map(v => (
            <div key={v.id} style={{ backgroundImage: `url(${db.img_origin + v.backdrop_path})` }}>
              <figure>
                <figcaption>
                  <h2>{v.title}</h2>
                  <p>{v.overview}</p>
                  <button>Watch now</button>
                  <button>Watch trailer</button>
                </figcaption>

                <p><img src={db.img_poster + v.poster_path} /></p>
              </figure>
            </div>
          ))
        }

      </div>

      <div className='con2'>
        <div>
          <button onClick={() => { nave(`/movie`, { state: 'Trending Movies' }) }}> view more</button>
          <div className='trending-movies'>
            {
              a['Trending Movies'].map(v => (
                <figure onClick={() => { nave(`/movie/${v.id}`) }} key={v.id}>
                  <p><img src={db.img_poster + v.poster_path} /></p>
                  <figcaption>
                    <h2>{v.title}</h2>
                  </figcaption>
                </figure>
              ))}
          </div>
        </div>

        <div>
          <button onClick={() => { nave(`/movie`, { state: 'Top Rated Movies' }) }}>view more</button>
          <div className='top-movies'>
            {
              a['Top Rated Movies'].map(v => (
                <figure onClick={() => { nave(`/movie/${v.id}`) }} key={v.id}>
                  <p><img src={db.img_poster + v.poster_path} /></p>
                  <figcaption>
                    <h2>{v.title}</h2>
                  </figcaption>
                </figure>
              ))}
          </div>
        </div>

        <div>
          <button onClick={() => { nave(`/movie`, { state: 'Trending TV' }) }}>view more</button>
          <div className='trending-tv'>
            {
              a['Trending TV'].map(v => (
                <figure onClick={() => { nave(`/movie/${v.id}`) }} key={v.id}>
                  <p><img src={db.img_poster + v.poster_path} /></p>
                  <figcaption>
                    <h2>{v.name}</h2>
                  </figcaption>
                </figure>
              ))}
          </div>
        </div>

        <div>
          <button onClick={() => { nave(`/movie`, { state: 'Top Rated TV' }) }}>view more</button>
          <div className='top-tv'>
            {
              a['Top Rated TV'].map(v => (
                <figure onClick={() => { nave(`/movie/${v.id}`) }} key={v.id}>
                  <p><img src={db.img_poster + v.poster_path} /></p>
                  <figcaption>
                    <h2>{v.name}</h2>
                  </figcaption>
                </figure>
              ))}
          </div>
        </div>

      </div>
      <div className='con1'>

      </div>
      <footer></footer>
    </>
  )
}

export default Home