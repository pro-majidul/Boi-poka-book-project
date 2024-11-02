import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(bookItem => bookItem.bookId === id);

    return (
        <div className='min-h-[calc(90vh-230px)] py-5 my-10' >
            <div className='flex gap-5 '>
                <div className='bg-gray-300 w-full p-12 rounded-xl flex items-center justify-center'>
                    <img src={book.image} alt={book.name} />
                </div>
                <div className='w-full'>
                    <h3 className='font-semibold text-3xl'>{book.bookName}</h3>
                    <p className='font-semibold my-3 text-gray-500 '>By : {book.author}</p>
                    <div className='divider'></div>
                    <h3 className='text-gray-500'>{book.category}</h3>
                    <div className='divider'></div>
                    <p> <span className='font-bold'>Review</span> <span className='text-gray-500'>{book.review}</span> </p>
                    <div className='flex gap-5 my-3 py-3'>
                        <p className='font-semibold'>Tags</p>
                        <div>
                            {book.tags.map((tag, index) => <button className='ml-6 bg-green-100 text-green-500     py-1 px-2 rounded-xl'>#{tag}</button>)}
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div className='flex flex-col space-y-5'>
                    <p className='font-semibold'><span className='text-gray-500  inline-flex  '>Number Of Pages</span> : <span>{book.totalPages}</span> </p>
                    <p className='font-semibold'><span className='text-gray-500 '>Publisher</span> : {book.publisher}</p>
                    <p className='font-semibold'><span className='text-gray-500 '>Year Of Publishing</span> : {book.yearOfPublishing}</p>
                    <p className='font-semibold'><span className='text-gray-500 '>Ratting</span> : {book.rating}</p>
                    </div>
                    <div className='py-3 my-4'>
                        <button className='btn btn-outline font-bold mr-4'>Read</button>
                        <button className='btn btn-accent'>Wishlist</button>
                    </div>
                   
                </div>

            </div>
        </div>
    );
};

export default BookDetails;