import React from 'react';

const Book = ({ book }) => {

    const { bookName, author, image } = book

    return (
        <div className="card bg-base-100 border p-6 shadow-xl">
            <figure className='bg-gray-400 py-6 rounded-xl'>
                <img className='h-96 '
                    src={image} />
            </figure>
            <div className="card-body">
                <div className="badge badge-secondary">NEW</div>
                <h2 className="card-title">
                    {bookName}
                </h2>
                <p>By : {author}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Book;