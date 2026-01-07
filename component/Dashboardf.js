"use client"
import React from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboardf = () => {
    const { data: session, status, update } = useSession();
    const router = useRouter();
    const [form, setForm] = React.useState({});
    const [currentUsername, setCurrentUsername] = React.useState("");

    React.useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        }
        if (status === 'authenticated') {
            getData();
        }
    }, [status, router]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const getData = async () => {
        // Use session.user.username if available, otherwise use session.user.name, or currentUsername from state
        const username = session.user.username || session.user.name || currentUsername;
        console.log("🔍 Fetching user data for:", username);
        let u = await fetchuser(username);
        console.log("📦 Received user data:", u);
        if (u) {
            setForm(u);
            setCurrentUsername(u.username); // Store the username in state
        } else {
            // Initialize form with session data if user doesn't exist yet
            setForm({
                name: session.user.name || "",
                email: session.user.email || "",
                username: username || "",
            });
        }
    }

    const handleSubmit = async (e) => {
        e?.preventDefault();
        console.log("💾 Saving profile data:", form);
        const username = session.user.username || session.user.name || currentUsername || session.user.email?.split("@")[0];
        console.log("🔑 Using username for save:", username);
        const result = await updateProfile(form, username);
        console.log("✅ Save result:", result);
        if (result?.error) {
            alert("Error: " + result.error);
        } else {
            await update(); // Update session data
            toast.success('🎉 Profile Updated Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            // Reload data with the new username
            let u = await fetchuser(form.username);
            console.log("🔄 Reloaded user data:", u);
            if (u) {
                setForm(u);
                setCurrentUsername(u.username); // Update stored username
            }
        }
    }

    // Show loading state
    if (status === 'loading') {
        return <div className="text-white text-center py-20">Loading...</div>;
    }

    // Don't render if not authenticated
    if (status === 'unauthenticated') {
        return null;
    }

    return (<>
        <div>
            <div className="dash bg-gray-900 w-full md:w-[60%] lg:w-[40%] text-white mx-auto p-8">
                <h1 className='text-3xl font-bold text-center my-10 border-l-2 border-white-600 w-fit mx-auto p-2'>Dashboard Page</h1>
                <p className='text-center mb-10'>Welcome to the Dashboard page🎉</p>
                {/* Create Form to fill user details */}
                <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="name" className='block text-lg font-medium  '>Name:</label>
                        <input value={form.name ? form.name : ""} onChange={handleChange} type="text" placeholder="Enter your name" id="name" name="name" required className='mt-1 block w-full outline-0  border border-gray-300 rounded-md shadow-sm p-2' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-lg font-medium  '>Email:</label>
                        <input value={form.email ? form.email : ""} onChange={handleChange} type="email" placeholder={session.user.email

                        } id="email" name="email" required className='mt-1 block w-full outline-0  border border-gray-300 rounded-md shadow-sm p-2' disabled />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="username" className='block text-lg font-medium  '>Username:</label>
                        <input value={form.username ? form.username : ""} onChange={handleChange} type="text" placeholder="Enter your Username" id="username" name="username" required className='mt-1 block w-full outline-0  border border-gray-300 rounded-md shadow-sm p-2' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="profilePic" className='block text-lg font-medium  '>Profile Picture:</label>
                        <input value={form.profilePic ? form.profilePic : ""} onChange={handleChange} type="text" placeholder="Paste your Profile Picture URL" id="profilePic" name="profilePic" className='mt-1 block w-full outline-0  border border-gray-300 rounded-md shadow-sm p-2' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="coverPic" className='block text-lg font-medium  '>Cover Picture:</label>
                        <input value={form.coverPic ? form.coverPic : ""} onChange={handleChange} type="text" placeholder="Paste your Cover Picture URL" id="coverPic" name="coverPic" className='mt-1 block w-full outline-0  border border-gray-300 rounded-md shadow-sm p-2' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="razorpayId" className='block text-lg font-medium  '>RazorPay ID:</label>
                        <input value={form.razorpayId ? form.razorpayId : ""} onChange={handleChange} type="text" placeholder="Enter your RazorPay ID" id="razorpayId" name="razorpayId" required className='mt-1 block w-full outline-0  border border-gray-300 rounded-md shadow-sm p-2' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="razorpaySecret" className='block text-lg font-medium  '>RazorPay Secret:</label>
                        <input value={form.razorpaySecret ? form.razorpaySecret : ""} onChange={handleChange} type="text" placeholder="Enter your RazorPay Secret" id="razorpaySecret" name="razorpaySecret" required className='mt-1 block w-full outline-0  border border-gray-300 rounded-md shadow-sm p-2' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="bio" className='block text-lg font-medium  '>Bio:</label>
                        <textarea value={form.bio ? form.bio : ""} onChange={handleChange} id="bio" name="bio" required className='mt-1 block w-full outline-0  border border-gray-300 rounded-md shadow-sm p-2'></textarea>
                    </div>
                    <button type="submit " className='w-full bg-blue-500 text-white font-bold py-2 px-4 rounded'>Save</button>
                </form>
            </div>
        </div>
    </>);

}

export default Dashboardf;
