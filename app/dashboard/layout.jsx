
import LeftSideBar from "../components/LeftSideBar";
import NavBar from "../components/NavBar";


export default function Layout({ children }) {
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