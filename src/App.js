import './App.css';
import Navbar from './components/Navbar/Navbar';
import { StyledEngineProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchNewAlbum, fetchTopAlbum,fetchSongs } from './api/api';


function App() {
  const [data,setData] = useState({})
  const generateData = (key,source) =>{
    source().then((data)=>{
      setData((prevState)=>{
        return{
          ...prevState,
          [key]:data
        }
      })
    })
  }
  useEffect(()=>{
    generateData("topAlbums",fetchTopAlbum)
    generateData("newAlbums",fetchNewAlbum)
    generateData("songs",fetchSongs)
  },[])
  const {topAlbums = [],newAlbums=[],songs = []} = data
 
  return (
    <>
      <StyledEngineProvider injectFirst>
      <Navbar/>
      <Outlet context={{data:{topAlbums,newAlbums,songs}}}/>
      </StyledEngineProvider>
      
    </>
  );
}

export default App;
