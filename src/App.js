import { useEffect } from 'react'
import './App.scss';
import { db } from './page/instans';
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './page/Home';
import List from './page/List';
import Detail from './page/Detail';


function App() {

  useEffect(() => {
    (async function () {
      // console.log(  await db.db_Movie('popular',1)  )    
    })();
  }, [])








  return (
    <HashRouter>
      <div>
      <header>
        <nav>
          <Link to="/">YFLIX</Link>
          <div>
            <Link to="/">HOME</Link>
            <Link to="/movie" state={'Trending Movies'}>Movie</Link>
            <Link to="/tv" state={'Trending TV'}>Tv</Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:catagory/" element={<List />} />
        <Route path="/:catagory/:id" element={<Detail />} />
      </Routes>
      </div>
    </HashRouter>
  );
}

export default App;



// list (2)
// <Route path="/:type" Elements={<List/>}
// <Route path="/:type/:id" Elements={<Detail/>}
// <Route path="/:type/search/:keyword" Elements={<Search/>}

// function List(){

// }
