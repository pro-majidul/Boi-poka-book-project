import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getToDBMarksRead } from '../../Utilities/AddToDb';
import Book from '../Book/Book';

const ListedBooks = () => {

    const AllBooks = useLoaderData();

    const [readlist, setReadlist] = useState([])

    useEffect(() => {

        const storelist = getToDBMarksRead();

        const storelistInt = storelist.map(id => parseInt(id));

        const ReadBooklist = AllBooks.filter(book => storelistInt.includes(book.bookId))

        setReadlist(ReadBooklist)
    }, [])


    console.log(readlist);
    return (
        <div className='min-h-[calc(90vh-320px)]'>
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
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;