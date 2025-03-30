import React from 'react'
import Img1 from "../../assets/website/war.png";
import Img2  from "../../assets/website/white.png";
import Img3 from "../../assets/website/crime.png";
import {FaStar} from "react-icons/fa";

const BooksData = [
    {
        id: 1,
        img: Img1,
        title: "War and Peace",
        description: "An 1867 novel set between the years 1805 and 1813. It follows several different Russians and their families and the events leading up to and during the 1812 invasion of Russia by France. " +
        "The three main families are the Rostovs, the Bolkonskys, and the Bezukhovs",
    },
    {
        id: 2,
        img: Img2,
        title: "White Nights",
        description: "White Nights is a short story by Fyodor Dostoevsky that was " +
        "published in 1848. Set in St. Petersburg, it is the story of a young man fighting his inner restlessness. A light and tender narrative, it delves into the torment and guilt of unrequited love",
    },
    {
        id: 3,
        img: Img3,
        title: "Crime And Punishment",
        description: "Crime and Punishment" + " by Fyodor Dostoevsky is a psychological novel exploring morality, guilt, and redemption, following the " +
        "impoverished ex-student Rodion Raskolnikov as he grapples with the consequences of a murder he commits after formulating a theory of moral justification.",
    }
    
]

const BestBooks = ({handleOrderPopup}) => {
  return( 
   <>
    <div className="py-10">
        <div className="container">
            {/*Eto Header*/}
            <div className="text-center mb-20 max-w-[400px] mx-auto">
                <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                >Trending Books</p>
                <h1 className="text-3xl font-bold">Best Books</h1>
                <p className="text-xs text-gray-400">Discover timeless literary masterpieces that have shaped storytelling and philosophy. These books offer deep insights into human nature, society, and the complexities of life. Explore our top picks and immerse yourself in these unforgettable reads!"

 {" "}
                    </p>
            </div>
            {/*Eto Card Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center gap-20">
                {BooksData.map((book) => (
                    <div 
                    data-aos="zoom-in"
                    className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary 
                    hover:text-white relative shadow-xl duration-high group max-w-[300px]">
                        <div className="h-[100px]">
                            <img src={book.img} alt="" 
                            className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <div className="w-full flex items-center justify-center">
                                <FaStar 
                                className="text-yellow-500"/>
                                <FaStar 
                                className="text-yellow-500"/>
                                <FaStar 
                                className="text-yellow-500"/>
                                <FaStar 
                                className="text-yellow-500"/>
                                <FaStar 
                                className="text-yellow-500"/>
                            </div>
                            <h1 className="text-xl font-bold">{book.title}</h1>
                            <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{book.description}</p>
                            <button 
                            onClick={handleOrderPopup}
                            className="bg-primary to-secondary text-white px-4 py-2 rounded-full mt-4
                            hover:scale-105 duration-200 group-hover:bg-white group-hover:text-primary">Order Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  </>
  );
}

export default BestBooks