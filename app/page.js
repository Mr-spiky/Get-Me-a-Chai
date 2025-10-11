'use client'
import Image from 'next/image';
import React from 'react'


export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-2 h-[44vh] ">
        <div className="text-5xl font-bold flex justify-center items-center "> Get Me A Chai <span><Image src="/image/teajump.webp" alt="Project Image" width={90} height={90} className="mx-auto" />
        </span></div>
        <div className="text-2xl text-center my-4  ">
          <p className="mb-4 ">
            A crowdfunding platform for creators to fund their projects with chai
            Start now!
          </p>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-2 ">Start Now!</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center  opacity-10 border-2">
      </div>

      <div className="container mx-auto text-center  pb-20 pt-10">
        <h2 className="text-3xl font-bold "> Fund Your Projects With Chai </h2>
        <div className="flex justify-around mt-18  ">
          <div className="items-center justify-center space-y-3 text-center w-64">
            <Image className="mx-auto border-2 rounded-full bg-gray-400" src="/image/cat.webp" alt="Project Image" width={90} height={90} />
            <p>Fund yourself</p>
          </div>
          <div className="items-center justify-center space-y-3 text-center w-64">
            <Image className="mx-auto border-2 rounded-full bg-gray-400" src="/image/coin1.gif" alt="Project Image" width={90} height={90} />
            <p>Fund yourself</p>
          </div>
          <div className="items-center justify-center space-y-3 text-center w-64 ">
            <div className='rounded-full  w-24 h-24 flex items-center object-contain justify-center mx-auto overflow-hidden'>
              <Image className="mx-auto border-2  bg-gray-400   " src="/image/group.gif" alt="Project Image" width={390} height={390} />
            </div>
            <p className='font-bold'>Fans want to Help!</p>
            <p>Your fans are available for you to help you</p>
          </div>
        </div>

      </div>

      <div className="flex flex-col items-center justify-center  opacity-10 border-2">
      </div>

      <div className=" container mx-auto text-center  pb-30 pt-15">
        <h2 className="text-3xl font-bold "> Learn More About us</h2>
        <iframe 
          className='mx-auto my-10' 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/NCBiwGKh50w?si=iqXQaYiabaNhG5AQ" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
