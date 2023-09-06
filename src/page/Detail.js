import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db, themoviedb } from './instans'


function Detail() {
  const { catagory, id } = useParams();  //:id를 가져옴
  const [d, setD] = useState();
  const [sim, setSim] = useState();
  const [sim_grp, setGrp] = useState([]);
  const nave = useNavigate();


  const setd = () => {
    themoviedb.get(`/${catagory}/${id}`)
      .then(res => {
        setD(res.data);
      })
  }

  async function similar() {
    let a = await db.db_All();
    setSim(a)
  }



  
  useEffect(() => {
    if (sim && d) {
      let sim_ob = Object.keys(sim);
      let aa = [];
      
      sim_ob.forEach((v) => {
        sim[v].forEach((v2) => {
          v2.genre_ids.forEach((v3) => {
            d.genres.forEach((v4) => {
              if (v4.id == v3) {
                aa.push(v2);
              }
            })
          })
        })
      })
      let bb = [...new Set(aa)]
      setGrp(bb)
    }

  }, [sim, d])


  useEffect(() => {
    setd();
    similar();
  }, [id])

  console.log(sim_grp);

  if (!d || !sim_grp) return (<>loading....</>);

  return (
    <div>
      <figure className='detail_top'>
        <p>
          <img src={db.img_poster + d.poster_path} />
        </p>
        <div>
          <figcaption>
            <h2>{d.title}</h2>
            {
              d.genres?.map(v => (
                <span key={v.id}>{v.name}</span>
              ))
            }
            <p>{d.overview}</p>
          </figcaption>

            <h3>Casts</h3>
          <ul>
            {
              d.production_companies?.map((v) => (
                <li key={v.id}>
                  <figure>
                    <p><img src={db.img_poster + v.logo_path}></img></p>
                    <figcaption>
                      <p>{v.id}</p>
                    </figcaption>
                  </figure>
                </li>
              ))
            }
          </ul>
        </div>

      </figure >

      <div className='con2'>
        <div>
          {
            sim_grp.map((v) => (
              <figure onClick={() => {nave(`/movie/${v.id}`)}} key={v.id}>
                <p><img src={db.img_poster + v.poster_path} /></p>
                <figcaption>
                  <h2>{v.title + v.name}</h2>
                </figcaption>
              </figure>
            ))
          }
        </div>
      </div>
    </div >
  )
}

export default Detail