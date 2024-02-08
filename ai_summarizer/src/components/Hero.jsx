import React from 'react'
import {logo} from'../assets';
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="logo" className='w-28 object-contain'/>
        <button type='button' onClick={()=> window.open('https://github.com')} className='black_btn'>
            Github
        </button>
        </nav>
        <h1 className='head_text'>Summarize Articles with <br className='max-md:hidden'/> <span className='orange_gradient'>Open AI GPT3.5</span></h1>

        <h2 className='desc'>
        SummAIze is your personal AI-powered text summarization assistant, designed to make digesting lengthy texts a breeze. Whether you're a busy professional, a student, or an avid reader, SummAIze empowers you to efficiently extract key insights and main points from articles, reports, documents, and more.
        </h2>
    </header>
  )
}

export default Hero