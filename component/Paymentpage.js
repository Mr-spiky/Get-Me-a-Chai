"use client"
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSearchParams, useRouter } from 'next/navigation'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notFound} from "next/navigation";

// Format date for recent supporters
const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
};

const Paymentpage = ({ username }) => {
    // Get session
    const { data: session } = useSession();
    const [currentUser, setCurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const [loading, setLoading] = useState(true)

    const [paymentform, setpaymentform] = useState({
        name: "",
        message: "",
        amount: ""
    })

    const handleChange = (e) => {
        setpaymentform({
            ...paymentform,
            [e.target.name]: e.target.value
        });
    };

    const SearchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        getData()
    }, [username])

    useEffect(() => {
        if (SearchParams.get("paymentdone") === "true") {
            toast('🎉 Payment has been made successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            // Remove the query parameter from URL after showing toast
            router.replace(`/${username}`);
        }
    }, [SearchParams])


    const getData = async () => {
        try {
            setLoading(true);
            let u = await fetchuser(username);
            setCurrentUser(u || {});
            let dbpayments = await fetchpayments(username);
            setPayments(dbpayments || []);
        } catch (error) {
            console.error("Error fetching data:", error);
            setPayments([]);
        } finally {
            setLoading(false);
        }
    }

    const pay = async (amount) => {
        try {
            // Validate inputs
            if (!amount || amount <= 0) {
                alert("Please enter a valid amount");
                return;
            }

            if (!paymentform.name) {
                alert("Please enter your name");
                return;
            }

            console.log("Creating payment order...");

            // Create Razorpay order
            let order = await initiate(amount, username, paymentform);

            if (!order || !order.id) {
                alert("Failed to create payment order. Please try again.");
                console.error("Invalid order:", order);
                return;
            }

            console.log("Order created successfully:", order.id);
            let orderId = order.id;

            var options = {
                "key": currentUser.razorpayId, // Enter the Key ID generated from the Dashboard
                "amount": amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Get Me A Chai", //your business name
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
                "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                    "name": paymentform.name || "Guest",
                    "email": session?.user?.email || "guest@example.com",
                    "contact": "+919876543210" //Provide the customer's phone number for better conversion rates
                },
                "notes": {
                    "username": username,
                    "message": paymentform.message,
                    "amount": amount
                },
                "theme": {
                    "color": "#3399cc"
                }
            };

            if (typeof Razorpay !== 'undefined') {
                var rzp1 = new Razorpay(options);
                rzp1.open();
            } else {
                console.error("Razorpay SDK not loaded");
                alert("Payment system not loaded. Please refresh the page.");
            }
        } catch (error) {
            console.error("❌ Payment error:", error);
            alert("Payment failed: " + error.message);
        }
    }


    const totalRaised = payments.reduce((total, p) => total + p.amount, 0);

    return (
        <article itemScope itemType="https://schema.org/ProfilePage">
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            {/* Hero Section with Cover */}
            {loading ? (
                <div className='w-full relative h-[350px] md:h-[420px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
                    <div className='h-full w-full flex items-center justify-center'>
                        <div className='flex flex-col items-center gap-4'>
                            <div className="w-12 h-12 border-4 border-slate-600 border-t-amber-500 rounded-full animate-spin"></div>
                            <p className='text-slate-400 text-sm tracking-wide'>Loading profile...</p>
                        </div>
                    </div>
                </div>
            ) : (
                <section className='relative'>
                    {/* Cover Image with Overlay */}
                    <div className='h-[280px] sm:h-[340px] md:h-[400px] w-full overflow-hidden relative'>
                        <img 
                            className='object-cover w-full h-full transform scale-105 hover:scale-100 transition-transform duration-700' 
                            src={currentUser.coverPic || "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1920&q=80"} 
                            alt={`${currentUser.name || username}'s cover`}
                            itemProp="image"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-slate-950/30"></div>
                    </div>
                    
                    {/* Profile Picture */}
                    <div className='absolute left-1/2 -translate-x-1/2 -bottom-16 md:-bottom-20'>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-2xl opacity-75 group-hover:opacity-100 blur transition-all duration-300"></div>
                            <img 
                                className='relative w-[100px] md:w-[140px] aspect-square object-cover rounded-2xl border-4 border-slate-900' 
                                src={currentUser.profilePic || "https://www.shutterstock.com/image-vector/single-icon-user-not-found-260nw-2651872881.jpg"} 
                                alt={`${currentUser.name || username}'s profile picture`}
                                itemProp="image"
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* Profile Info Section */}
            <header className='text-center mt-20 md:mt-24 px-4'>
                <h1 className='text-3xl md:text-4xl font-bold text-white tracking-tight' itemProp="name">
                    {currentUser.name || username}
                </h1>
                <p className='text-slate-400 mt-1 text-sm'>@{username}</p>
                
                <p className='text-slate-300 mt-4 max-w-md mx-auto leading-relaxed' itemProp="description">
                    {currentUser.bio || `Support ${currentUser.name || username} by buying them a chai. Every contribution helps creators continue their work.`}
                </p>

                {/* Stats Row */}
                <div className='flex justify-center items-center gap-8 mt-8'>
                    <div className="text-center">
                        <p className='text-2xl md:text-3xl font-bold text-white'>{payments.length}</p>
                        <p className='text-xs text-slate-500 uppercase tracking-wider mt-1'>Supporters</p>
                    </div>
                    <div className="w-px h-12 bg-slate-700"></div>
                    <div className="text-center">
                        <p className='text-2xl md:text-3xl font-bold text-amber-500'>₹{totalRaised.toLocaleString('en-IN')}</p>
                        <p className='text-xs text-slate-500 uppercase tracking-wider mt-1'>Raised</p>
                    </div>
                </div>
            </header>

            {/* Main Content Grid */}
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-5 gap-8">
                    
                    {/* Supporters Section */}
                    <section className="md:col-span-2 order-2 md:order-1">
                        <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 overflow-hidden">
                            <div className="px-6 py-5 border-b border-slate-800">
                                <h2 className='text-lg font-semibold text-white flex items-center gap-2'>
                                    <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    Recent Supporters
                                </h2>
                            </div>
                            <div className='supporters-list max-h-[420px] overflow-y-auto'>
                                {payments.length === 0 ? (
                                    <div className="px-6 py-12 text-center">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-800 flex items-center justify-center">
                                            <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                            </svg>
                                        </div>
                                        <p className='text-slate-400'>No supporters yet</p>
                                        <p className='text-slate-500 text-sm mt-1'>Be the first to support!</p>
                                    </div>
                                ) : (
                                    <ul className='divide-y divide-slate-800/50'>
                                        {payments.map((payment, i) => (
                                            <li key={i} className='px-6 py-4 hover:bg-slate-800/30 transition-colors duration-200'>
                                                <div className='flex items-start gap-3'>
                                                    <Image 
                                                        className="rounded-full ring-2 ring-slate-700 flex-shrink-0" 
                                                        src="/image/avatar.gif" 
                                                        alt={`${payment.name}'s avatar`} 
                                                        width={40} 
                                                        height={40} 
                                                    />
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center justify-between gap-2">
                                                            <span className="font-medium text-white truncate">{payment.name}</span>
                                                            <span className="text-amber-500 font-semibold whitespace-nowrap">₹{payment.amount}</span>
                                                        </div>
                                                        {payment.message && (
                                                            <p className="text-slate-400 text-sm mt-1 line-clamp-2">"{payment.message}"</p>
                                                        )}
                                                        <p className="text-slate-600 text-xs mt-2">{formatDate(payment.createdAt)}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* Payment Form Section */}
                    <section className="md:col-span-3 order-1 md:order-2">
                        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
                            <div className="px-6 py-5 border-b border-slate-800 bg-gradient-to-r from-amber-500/10 to-orange-500/10">
                                <h2 className='text-xl font-semibold text-white'>Support {currentUser.name || username}</h2>
                                <p className='text-slate-400 text-sm mt-1'>Buy them a chai to show your appreciation</p>
                            </div>
                            
                            <div className="p-6">
                                {/* Quick Amount Selection */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-slate-300 mb-3">Select Amount</label>
                                    <div className='grid grid-cols-3 gap-3'>
                                        {[50, 100, 500].map((amount) => (
                                            <button 
                                                key={amount}
                                                type="button" 
                                                onClick={() => setpaymentform(prev => ({...prev, amount: amount.toString()}))}
                                                className={`relative py-4 rounded-xl font-semibold transition-all duration-200 ${
                                                    paymentform.amount === amount.toString()
                                                        ? 'bg-amber-500 text-slate-900 ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-900' 
                                                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700 hover:border-slate-600'
                                                }`}
                                            >
                                                <span className="block text-lg">₹{amount}</span>
                                                <span className="block text-xs opacity-75 mt-0.5">
                                                    {amount === 50 ? '1 Chai' : amount === 100 ? '2 Chai' : '10 Chai'}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <form className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name *</label>
                                        <input 
                                            id="name"
                                            name="name" 
                                            onChange={handleChange} 
                                            value={paymentform.name} 
                                            type="text" 
                                            placeholder='Enter your name'
                                            required
                                            className='w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-200' 
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message <span className="text-slate-500">(optional)</span></label>
                                        <input 
                                            id="message"
                                            name="message" 
                                            onChange={handleChange} 
                                            value={paymentform.message} 
                                            type="text" 
                                            placeholder='Say something nice...'
                                            className='w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-200' 
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="amount" className="block text-sm font-medium text-slate-300 mb-2">Amount (₹) *</label>
                                        <input 
                                            id="amount"
                                            name="amount" 
                                            onChange={handleChange} 
                                            value={paymentform.amount} 
                                            type="number" 
                                            min="1"
                                            placeholder='Enter custom amount'
                                            required
                                            className='w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-200' 
                                        />
                                    </div>
                                    
                                    <button 
                                        type="button" 
                                        onClick={() => pay(paymentform.amount)} 
                                        disabled={!paymentform.amount || !paymentform.name} 
                                        className="w-full py-4 mt-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 font-bold rounded-xl transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:from-amber-500 disabled:hover:to-orange-500 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:shadow-xl"
                                    >
                                        Support with ₹{paymentform.amount || '0'}
                                    </button>
                                </form>

                                {/* Trust Indicators */}
                                <div className="mt-8 pt-6 border-t border-slate-800">
                                    <div className="flex items-center justify-center gap-6 text-slate-500 text-xs">
                                        <span className="flex items-center gap-1.5">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            Secure Payment
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                            100% goes to creator
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </article>
    )
}


export default Paymentpage;
