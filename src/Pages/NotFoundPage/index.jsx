import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import NotFoundPageImg from '../../Assets/Images/notfound.png';
import './index.css'

const NotFoundPage = () => {
    return (
        <>
            <Header />
            <div className="text-center">
                <img src={NotFoundPageImg} alt="Page not found" className="w-90 text-center not-found-img" />
            </div>
            <Footer />
        </>
    );
};

export default NotFoundPage;
