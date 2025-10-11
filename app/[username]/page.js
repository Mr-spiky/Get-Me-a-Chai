import Image from 'next/image'
import React from 'react'


const Username = ({ params }) => {
    return (
        <>
            {params.username}
            <div className='cover w-full relative'>
                <img className='object-cover w-full h-auto' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/6636969/8384aecd15df47979539051cad81a543/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/4.jpg?token-hash=uRWL2LI0X06hxevuLmH1Kr6f072B4ZVGo1fRP5eVS4k%3D&token-time=1759536000" alt="" />
                <div className='absolute w-[140px] left-[45.5%] bottom-[-60px] '>
                    <img className='border-2 rounded-2xl' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/6636969/0efd6991b560492789f97975480c4f85/eyJoIjozNjAsInciOjM2MH0%3D/1.JPG?token-hash=K01it-TZ5qqrwDysXqvpmQFKkgfj6U-utmsQVKAYDUU%3D&token-time=1760486400" alt="" />
                </div>
            </div>
            <div className='info text-center mt-16'>
                <div>
                    <h2>
                        {params.username}
                    </h2>
                </div>
                <div className='text-gray-400'>
                    creating Podcasts, Videos and exclusive content for Horror lover
                </div>
                <div className='text-gray-400'>
                    9,807 members . 884 posts  . $15,678/release
                </div>

            </div>
            <div className="payment flex gap-3 w-[80%]  mx-auto my-20 ">
                <div className="supporters w-1/2 border-2 bg-slate-900 rounded-lg p-3">
                    <h1 className='text-2xl mb-4 text-blue-500'>Supporters</h1>
                    <ul className=' mx-5 text-lg'>
                        <li className='flex gap-2 items-center mb-2'>
                            {/* insert img from public/image/avatar.gif */}
                            <Image className="border-2 rounded-full  bg-gray-400   " src="/image/avatar.gif" alt="Project Image" width={30} height={30} />
                            <span>
                                Spiky donat <span className="font-bold">$30</span> and these messaged by him "Great Work keep it up "
                            </span>
                        </li>
                        
                        
                    </ul>
                </div>

                <div className="makePayment w-1/2 border-2 bg-slate-900 rounded-lg p-3">
                    <h2 className='text-2xl mb-4 text-blue-500'>Make a Payment</h2>
                    <form action="">
                        {/* enter name  , message and amount */}
                        <input type="text" placeholder='Enter Name' className='border-2 bg-slate-800 rounded-lg p-2 w-full my-2' />
                        <input type="text" placeholder='Enter Message' className='border-2 bg-slate-800 rounded-lg p-2 w-full my-2' />
                        <input type="text" placeholder='Enter Amount' className='border-2 bg-slate-800 rounded-lg p-2 w-full my-2' />
                        <button type="button" class="text-white w-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
                    </form>
                    {/* select btn of for autofill pay $5 , pay $10 , pay $20 */}
                    <div className='my-4  flex gap-2'>
                        <button type="button " className='border-2 bg-slate-800 rounded-lg p-2 '>Pay $5</button>
                        <button type="button " className='border-2 bg-slate-800 rounded-lg p-2 '>Pay $10</button>
                        <button type="button " className='border-2 bg-slate-800 rounded-lg p-2 '>Pay $20</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Username
