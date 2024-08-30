
import { getServerSession } from "next-auth";
import LeftSideBar from "../components/LeftSideBar";
import NavBar from "../components/NavBar";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation'
import { runReport } from "../action/analytics";



export default async function Layout({ children }) {
  const session = await getServerSession(authOptions);
   if(!session){
    redirect('/api/auth/signin');
   }
    return (
    <>
    <div className="max-h-screen lg:overflow-y-hidden">
        <NavBar/>
        <div className="flex p-4">
        <LeftSideBar/>
        {children}
        </div>
    </div>
  </>
);
}