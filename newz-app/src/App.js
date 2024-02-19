import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Search from './components/Search';
import Card from './components/Card';
function App() {
  return (
    <>
      <div>
        <Header/>
        <Routes>
          <Route exact path='/home' element={<Card />} />
          <Route exact path='/business' element={<Card cat="business" />} />
          <Route exact path='/entertainment' element={<Card cat="Entertainment" />} />
          <Route exact path='/general' element={<Card cat="General" />} />
          <Route exact path='/sports' element={<Card cat="Sports" />} />
          <Route exact path='/health' element={<Card cat="Health" />} />
          <Route exact path='/science' element={<Card cat="Science" />} />
          <Route exact path='/technology' element={<Card cat="Technology" />} />
          <Route exact path='/search' element={<Search />  } />
        </Routes>
      </div>
    </>
  );
}

export default App;
