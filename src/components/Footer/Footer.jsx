import React from 'react'
import { 
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLinkedinIn,
    FaLocationArrow,
    FaMobileAlt,
} from 'react-icons/fa';
import footerLogo from "../../assets/website/logo.png";

const FooterLinks = [
    {
        title: "Home",
        link: "/#",  
    },
    {
        title: "About",
        link: "/#about",  
    },
    {
        title: "Contact",
        link: "/#contact",  
    },
    {
        title: "Blog",
        link: "/#blog",  
    },
]

const ExploreLinks = [
    {
        title: "Shop",
        link: "/#shop",  
    },
    {
        title: "Best Sellers",
        link: "/#bestsellers",  
    },
    {
        title: "New Arrivals",
        link: "/#newarrivals",  
    },
    {
        title: "Genres",
        link: "/#genres",  
    },
]

const OtherLinks = [
    {
        title: "Gift Cards",
        link: "/#giftcards",  
    },
    {
        title: "FAQS",
        link: "/#faq",  
    },
    {
        title: "Terms & Conditions",
        link: "/#terms",  
    },
    {
        title: "Privacy Policy",
        link: "/#privacy",  
    },
]

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
        <div className="container">
            <div className="grid md:grid-cols-3 py-5">
                {/* Eto Details ng Company  */}
                <div className="py-8 px-4">
                    <h1 className="sm:text-3xl text-xl font-bold sm:text-left 
                    justfiy mb-3">Books Store
                    </h1>
                    <p>"Your one-stop shop for the best books across all genres. 
                        Discover timeless classics, bestsellers, and hidden gems waiting to be explored!"
{""}
                    </p>
                    <br />
                    {/* Social Links  */}
                    <div className="flex items-center gap-3">
                        <FaLocationArrow/>
                        <p>Philippines, Tanza Cavite</p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                        <FaMobileAlt/>
                        <p>+63 9054288094</p>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                        <a href="#">
                            <FaInstagram className="text-3xl"/>
                        </a>
                        <a href="#">
                            <FaFacebook className="text-3xl"/>
                        </a>
                        <a href="#">
                            <FaLinkedinIn className="text-3xl"/>
                        </a>
                    </div>
                </div>
                {/* Eto naman sa links  */}
                <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="sm:text-xl font-bold sm:text-left text-justify mb-3">
                                Important Links
                            </h1>
                            <ul className="flex flex-col gap-3">
                                {
                                 FooterLinks.map((data) => (
                                    <li
                                    className="cursor-pointer hover:translate-x-1 duration-300 
                                    hover:text-primary space-x-1 text-gray-500"
                                    >
                                        <span>&#11162;</span>
                                        <span>{data.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="sm:text-xl font-bold sm:text-left text-justify mb-3">
                                Explore Links
                            </h1>
                            <ul className="flex flex-col gap-3">
                                {
                                 ExploreLinks.map((data) => (
                                    <li
                                    className="cursor-pointer hover:translate-x-1 duration-300 
                                    hover:text-primary space-x-1 text-gray-500"
                                    >
                                        <span>&#11162;</span>
                                        <span>{data.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="sm:text-xl font-bold sm:text-left text-justify mb-3">
                                Other Links
                            </h1>
                            <ul className="flex flex-col gap-3">
                                {
                                 OtherLinks.map((data) => (
                                    <li
                                    className="cursor-pointer hover:translate-x-1 duration-300 
                                    hover:text-primary space-x-1 text-gray-500"
                                    >
                                        <span>&#11162;</span>
                                        <span>{data.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* eto naman copyright section */}
            <div>
                <div className="border-t-2 border-gray-300/50">
                    <p className="text-center py-5">Copyright &copy; 2025 Book Haven. All Rights Reserved. || Made by Josh Andrei Bolante</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer