import React from "react";
import Navbar from "../component/Navbar";
import Breadcrumb from "../component/breadcrump";
import GalleryA from "../component/Gallery";
import Overviw from "../component/Overviw";
import FeaturedJop from "../component/FeaturedJop";
import Footer from "../component/Footer";
import { BreadcrumbItem } from 'react-dynamic-breadcrumb';
const Home = () => {
    return(
        <div>
            <Navbar />
            <Breadcrumb />
            <GalleryA />
            <Overviw />
            <FeaturedJop />
            <Footer />
            <BreadcrumbItem to="/" >Home</BreadcrumbItem>
            
        </div>
    )
}
export default Home;