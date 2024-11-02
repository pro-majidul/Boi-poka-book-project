import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className='py-5 my-5'>
            <h3 className="text-3xl font-bold text-center">Books</h3>
            <div className='grid md:grid-cols-3 gap-5 content-center'>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;