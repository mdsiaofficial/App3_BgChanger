import { useContext, useState } from 'react'
import './App.css'
import Profile from './Profile'
import Bg from './Bg'
import { ThemeContext } from './ThemeProvider';

function App() {
  let p1 = {
    name: "Md Shoriful Islam Ashiq",
    address: "Belgium Mat, Rajashon, Savar, Dhaka",
    phone: "01885981241",
    imgURL: "https://miro.medium.com/v2/resize:fit:2400/1*NT_I3qv4hyI0ZjXTEHTNkg.jpeg",
  }

  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h1 className='text-4xl text-center text-[crimson]'>
        Profile Card
      </h1>
      <div className="Profile_Cards flex flex-wrap">

        <Profile name={p1.name} address={p1.address} phone={p1.phone} imgURL={p1.imgURL}/>
        <Profile name={p1.name} address={p1.address} phone={p1.phone} />
      </div>

      
      <Bg/>
    </>
  )
}

export default App
