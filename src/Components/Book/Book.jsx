import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const {yearOfPublishing,totalPages, bookName,bookId, author, image, tags, category, rating } = book

    return (
        <Link to={`/book/${bookId}`}>
            <div className="card bg-base-100 border p-6 shadow-xl">
                <figure className='bg-gray-400 py-6 rounded-xl'>
                    <img className='h-96 '
                        src={image} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-10'>
                        {
                            tags.map((tag , index) => <div key={index} className="bg-green-50 text-lg text-green-400 py-1 px-3 rounded-xl">{tag}</div>)
                        }

                    </div>
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p>By : {author}</p>
                    <div className='border-t-2 border-dashed my-4'>

                    </div>
                    <div className="card-actions justify-between">
                        <p>{category}</p>
                        <div className='flex gap-2'>
                            <p className='text-xl'>{rating}</p>
                            <div className='rating'>
                                <input type="radio" name="rating-1" className="mask mask-star" />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                    <p>Pages : {totalPages}</p>
                    <p>Publish Date : {yearOfPublishing}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;