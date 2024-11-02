import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getToDBMarksRead, getToDBWishList } from '../../Utilities/AddToDb';
import Book from '../Book/Book';

const ListedBooks = () => {

    const AllBooks = useLoaderData();
    const [sort, setSort] = useState([])


    const [readlist, setReadlist] = useState([])
    const [wishlist, setWishlist] = useState([])

    useEffect(() => {


        const storelist = getToDBMarksRead();
        const storelistInt = storelist.map(id => parseInt(id));

        const ReadBooklist = AllBooks.filter(book => storelistInt.includes(book.bookId))

        setReadlist(ReadBooklist);
    }, []);

    useEffect(() => {
        const wishLished = getToDBWishList();
        const wishLishedBooks = AllBooks.filter(books => wishLished.includes(books.bookId));
        setWishlist(wishLishedBooks)
    }, [])

    const handelSort = item => {
        setSort(item)
        if (item === 'Ratting') {
            const RattingSort = [...readlist].sort((a, b) => a.rating - b.rating)
            setReadlist(RattingSort)
        } if(item === 'Number of pages'){
            const PagesSort = [...readlist].sort((a ,b)=> a.totalPages - b.totalPages);
            setReadlist(PagesSort)
        }
        if(item==='Publisher Date'){
            const PublishSort = [...readlist].sort((a,b)=> a.yearOfPublishing - b.yearOfPublishing);
            setReadlist(PublishSort)
        }
    }


    // console.log(readlist);
    return (
        <div className='min-h-[calc(90vh-320px)]'>

            <h3 className='font-bold text-3xl  py-2 my-3 text-center'>Listed Books</h3>
            <div className='flex justify-center items-center py-5 my-3'>
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn bg-green-500 m-1">{sort ? `Sort by ${sort}` : 'Sort by'}</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a onClick={() => handelSort('Ratting')}>Ratting</a></li>
                        <li><a onClick={() => handelSort('Number of pages')}>Number Of Pages</a></li>
                        <li><a onClick={() => handelSort("Publisher Date")}>Publisher Year</a></li>
                    </ul>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wished List</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-5 my-5 py-4'>
                        {
                            readlist.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-5 my-5 py-4'>
                        {
                            wishlist.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;