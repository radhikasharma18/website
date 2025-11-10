import React from 'react'
import logo from '../src/assets/hero_2.webp'
// import heroImage from './assets/hero_2.jpeg.webp';
// import heroImage from './assets/hero_2.jpg.webp';


const Home = () => {
  return (
    <div
        className=" overlay realtive h-full"
        style={{
        backgroundImage: `url(${logo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',

        }}
    >
      <div className=' w-full absolute flex  flex-col justify-center items-center h-full text-white  z-[800] '>
        <div className='text-8xl'> MSFIN CREDITORS</div>
        <div>वित्य सहायता सुकून के साथ</div> </div>
<div className="absolute inset-0 bg-[rgba(184,178,166,0.7)]"></div>


      
    </div>
  )
}

export default Home