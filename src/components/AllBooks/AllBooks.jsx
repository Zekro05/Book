import React from 'react'
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Book4 from "../../assets/website/crime.png";
import Book5 from "../../assets/website/war.png"
import Book6 from "../../assets/website/white.png";
import { FaStar } from 'react-icons/fa6';
const BooksData = [
    {
        id: "1",
        img: Book4,
        title: "Crime and Punishment",
        rating: 5.0,
        author: "Fyodor Dostoevsky"
    },
    {
        id: "2",
        img: Book5,
        title: "War and Peace",
        rating: 4.5,
        author: "Leo Tolstoy",
    },
    {
        id: "3",
        img: Book6,
        title: "White Nights",
        rating: 4.7,
        author: "Fyodor Dostoevsky"
    },
    {
        id: "4",
        img: Book2,
        title: "His Life",
        rating: 4.4,
        author: "Frank Gogol"
    },
    {
        id: "5",
        img: Book1,
        title: "Who's There",
        rating: 4.5,
        author: "Snoopy"
    }
]


const AllBooks = () => {
  return <>
    <div className="py-10">
        <div className="container placeholder-gray-100">
            {/* Header naman to */}
            <div 
            data-aos="slide-up"
            className="text-center mb-20 max-w-[400px] mx-auto">
                <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                >Top Books For You</p>
                <h1 className="text-3xl font-bold">Top Books</h1>
                <p className="text-xs text-gray-400">"Handpicked just for you! Discover the most captivating stories, 
                  thought-provoking classics, and must-read masterpieces that deserve a spot on your bookshelf."    {" "}
                 </p>
            </div>
            {/* Card Section to */}
            <div
            data-aos="slide-up"
            >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
                lg:grid-cols-5 place-items-center gap-5">
                    {BooksData.map((data) => (
                      <div className="space-y-3">
                        <img src={data.img} alt="" 
                        className="h-[220px] w-[150px] object-cover rounded-md"
                        />
                        <div>
                            <h2 className="font-semibold">
                                {data.title}</h2>
                            <p className="text-sm text-gray-700 dark:text-gray-400 ">{data.author}</p>
                            <div className="flex items-center gap-1">
                                <FaStar className="text-yellow-500"/>
                                <span>{data.rating}</span>
                            </div>
                        </div>
                       </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2
                    px-5 rounded-full">View All Books</button>
                </div>
             </div>  
        </div>
    </div>
  </>
  
}

export default AllBooks