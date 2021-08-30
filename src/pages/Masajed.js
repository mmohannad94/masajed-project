import React from "react";
import Navbar from "../component/Navbar";
import Breadcrumb from "../component/breadcrump";
import Footer from "../component/Footer";
import MasajedList from "../component/MasajedList";
import { BreadcrumbItem } from 'react-dynamic-breadcrumb';
const masajed = () => {
    return(
        <div>
            <Navbar />
            <Breadcrumb />
            <MasajedList />
            <Footer />
            <BreadcrumbItem to="/" >Home</BreadcrumbItem>
            <BreadcrumbItem>Masajed</BreadcrumbItem>
        </div>
    )
}
export default masajed;