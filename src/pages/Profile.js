import React from "react";
import Navbar from "../component/Navbar";
import Breadcrumb from "../component/breadcrump";
import Footer from "../component/Footer";
import Header from "../component/profileHeader";
import UpDates from "../component/UpDates";
import Detailes from "../component/Detailes";
import { BreadcrumbItem } from 'react-dynamic-breadcrumb';
const Profile = () => {
    return(
        <div className='bg-masajed'>
            <Navbar />
            <Breadcrumb />
            <Header />
            <Detailes />
            <UpDates />
            <Footer />
            <BreadcrumbItem to="/" >Home</BreadcrumbItem>
            <BreadcrumbItem>Profile</BreadcrumbItem>
        </div>
    )
}
export default Profile;