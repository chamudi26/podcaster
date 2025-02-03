import React from 'react'

const Home = () => {
  return (
  <div className='bg-violet-200 px-12 h-screen lg:h-[89vh] flex flex-col items-center '>
    <div className='w-full flex items-center justify-betwen gap-4'>
      <div className='w-full lg:w-5/6 mt-20'>
      <h1 className='text-3xl md:text-5xl lg:text-7xl font-semi bold'>Discover, Listen, and Share<br/> Your Favorite Podcasts<br/> 
      <h1 className='flex items-end'> Anytime 
        {" "}<span>
        <img 
        src='https://cdn-icons-png.flaticon.com/512/9600/9600823.png'
        alt=''
        className=' h-14 md:h-10 lg:h-16 px-2'
        /></span> Anywhere
      !</h1></h1>
      <p className='text-xl mt-10 text-center lg:text-start '>Our app brings you a vast library of podcasts across various genres, tailored to your tastes.<br/> Whether you're on the go or relaxing at home, enjoy seamless streaming, personalized recommendations, and an intuitive interface that makes finding and enjoying your next episode effortless. Join a community of passionate listeners and content creators – where stories come to life.</p>
      </div>
      <div className='mt-10'><span>
        <img 
        src='https://cdn-icons-png.flaticon.com/512/6920/6920161.png'
        alt=''
        className='hidden lg:block h-95 w-120 px-2'
        /></span></div>
      <div className='hidden lg:block w-1/10'>
        <div className=' py-2 border border-black font-semibold rounded-full text-center rotate-90'>
        scroll down
        </div>
      </div>
    </div>
    <div className='w-full  flex flex-col lg:flex-row items-end justify-between bg-violet-200'>
      <div className='flex flex-col items-center lg:items-start justify-center'>
        <button className='px-12 lg:px-6 py-4 bg-teal-600 hover:bg-teal-200 hover:text-black  border hover:border-teal-600 text-white rounded-full mt-8 transition-all duration-300'>LOGIN TO LISTEN</button>
      </div>
      <div className='mt-8 lg:mt-0 mb-8 lg:mb-0'>
      <p className='text-110 text-zinc-500 font-semibold text-center lg:text-end'>Immerse yourself in a world of stories, insights, and inspiration—over 200 podcasts curated just for you! </p></div>
    </div>
    
  </div>
  );
}

export default Home
