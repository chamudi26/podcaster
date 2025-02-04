import React from 'react'
import { Link } from 'react-router-dom';

const Categories = () => {
    const cat=[
        {
            name:"Comedy",
            color:"bg-zinc-400",
            to:"/categories/Comedy",
            img:"https://img.freepik.com/free-vector/hand-drawn-laughing-cartoon-illustration_52683-115895.jpg"
        },
        {
            name:"Business",
            color:"bg-zinc-400",
            to:"/categories/Business",
            img:"https://img.freepik.com/free-vector/business-analytics-concept-illustration_114360-4224.jpg?semt=ais_hybrid"
        },
        {
            name:"Education",
            color:"bg-zinc-400",
            to:"/categories/Education",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNs0n5Z7_V9-mdOqAGxOG5R9VLfl4AAZuoA&s"
        },
        {
            name:"Hobbies",
            color:"bg-zinc-400",
            to:"/categories/Hobbies",
            img:"https://img.freepik.com/free-vector/i-stay-home-quarantine-things_23-2148480951.jpg"
        },
        {
            name:"Government",
            color:"bg-zinc-400",
            to:"/categories/Government",
            img:"https://img.freepik.com/free-vector/election-campaign-scenes_23-2148686748.jpg?semt=ais_hybrid"
        },
        
    ];
  return (
    
    <div className='w-full h-screen lg:h-[78vh] bg-violet-200'>
       <div className='px-4 lg:px-20 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {cat.map((items,i)=>(
            <Link to={items.to} key={i} className={`rounded px-12 py-4 text-xl font-semibold ${items.color} hover:scale-105 shadow-xl transition-all duration-300 relative h-[22vh] overflow-hidden `}>
               <div>{items.name}</div>
               <div className='w-[100%] flex items-center justify-end absolute -bottom-2 -right-2'>
                <img src={items.img} alt="category" className='rounded rotate-12 h-[15vh] md:h-[17vh] lg:h-[18vh]' />
               </div>
            </Link>
        ))}

       </div>
    </div>
    
  );
};

export default Categories