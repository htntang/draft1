import { Outlet } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(){
    return(
        <main>
            <Header />
            <NavigationBar />
            <Outlet />
            <Footer />
        </main>
    )
}