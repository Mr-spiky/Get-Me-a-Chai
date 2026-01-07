import Paymentpage from '@/component/Paymentpage';
import React from 'react'
import {notFound} from "next/navigation";
import { fetchuser } from '@/actions/useractions';

export async function generateMetadata({ params }) {
  try {
    // Decode the username from URL
    const decodedUsername = decodeURIComponent(params.username);
    const user = await fetchuser(decodedUsername);
    
    if (!user) {
      return {
        title: "User Not Found",
      };
    }

    return {
      title: `${decodedUsername || user.name} - Get Me A Chai`,
      description: user.bio || `Support ${user.name || decodedUsername} on Get Me A Chai`,
    };
  } catch (error) {
    console.error("❌ Error generating metadata:", error);
    return {
      title: "Error - Get Me A Chai",
    };
  }
}
const Username = async ({ params }) => {
    try {
        // Decode the username from URL
        const decodedUsername = decodeURIComponent(params.username);
        console.log("🔍 Looking for user:", decodedUsername);
        
        //If the username is not present in database, show 404 page
        const CheckUser = await fetchuser(decodedUsername);
        if (!CheckUser) {
            console.log("❌ User not found:", decodedUsername);
            notFound();
        }
        
        return (
            <>
            <Paymentpage username={decodedUsername} />
            </>
        )
    } catch (error) {
        console.error("❌ Error in Username page:", error);
        notFound();
    }
}

export default Username;

