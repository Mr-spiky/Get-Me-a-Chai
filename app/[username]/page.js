import Paymentpage from '@/component/Paymentpage';
import React from 'react'
import {notFound} from "next/navigation";
import { fetchuser } from '@/actions/useractions';

export async function generateMetadata({ params }) {
  const user = await fetchuser(params.username);
  
  if (!user) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: `${ params.username || user.name } - Get Me A Chai`,
    description: user.bio || `Support ${user.name || params.username} on Get Me A Chai`,
  };
}
const Username = async ({ params }) => {
        //If the username is not present in database , show 404 page
        const CheckUser = await fetchuser(params.username);
        if (!CheckUser) {
            notFound();
        }
    return (
        <>
        <Paymentpage username={params.username} />
        </>
    )
}

export default Username;

