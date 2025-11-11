import React from 'react'
import logo from '../src/assets/hero_2.webp'
import Card from './Card/Card'
import { IoWalletOutline } from "react-icons/io5";




const Home = () => {
  return (
    <>
    <div
        className =" "
        style={{
        backgroundImage: `url(${logo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            position: 'relative'

        }}
    >
      <div className=' w-full absolute flex  flex-col justify-center items-center h-full text-white  z-[50] '>
        <div className='text-8xl'> MSFIN CREDITORS</div>
        <div>वित्य सहायता सुकून के साथ</div> </div>
<div className="absolute inset-0 bg-[rgba(184,178,166,0.7)]"></div>
</div>
<div className='flex justify-between h-full p-32 my-32'>
  <Card
  icon={<IoWalletOutline/>} 
  description='A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  title='Money Saving '
  children=''/>
  <Card
  icon={<IoWalletOutline/>} 
  description='A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  title='Online Shoping '
  children=''/>
   <Card
  icon={<IoWalletOutline/>} 
  description='A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  title='Credit/Debited'
  children=''/>
</div>
<div> <div className="py-20 px-8 md:px-16 bg-gray-50">
    

      <div 
      className="flex flex-col md:flex-row items-center gap-12 mb-24">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={logo}
            alt="About"
            className="rounded-2xl shadow-lg w-full md:w-4/5 h-120 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <h3 className="text-4xl md:text-5xl font-semibold leading-snug text-gray-800">
            We provide loan for any purpose
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Esteem spirit temper too say adieus who direct esteem. It esteems
            luckily or picture placing drawing. Apartments frequently or
            motionless on reasonable.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-2">
            <li>Loans with quick approval</li>
            <li>Customize a loan based on the amount</li>
            <li>Good credit profile and you have built your loan</li>
            <li>We provide online instant cash loans</li>
          </ul>

          <button className="bg-gray-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all w-fit">
            Apply For Loan
          </button>
        </div>
      </div>


    
    </div></div>
    </>
  )
}

export default Home