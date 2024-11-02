
const getToDBMarksRead =() =>{
    const storedRead = localStorage.getItem('marks_read');
    if(storedRead){
        const storedItem = JSON.parse(storedRead);
        return storedItem;
    }else{
        return [];
    }
}

const setToDBMarksRead =(id)=>{
    const StoredItem = getToDBMarksRead();
    if(StoredItem.includes(id)){
        return alert(`${id} already added `)
    } else{
    StoredItem.push(id);
    const setItems = JSON.stringify(StoredItem)
    localStorage.setItem('marks_read' , setItems)
    
    }
}

const getToDBWishList = () =>{
    const storeWishList = localStorage.getItem('wish-list');
    if(storeWishList){
        const storedWishId =JSON.parse(storeWishList);
        return storedWishId;
    }else{
        return []
    }
}

const setToDBWishList = (id) =>{
    const storedWishListData = getToDBWishList();
    if(storedWishListData.includes(id)){
        return alert(`${id}  already added `)
    }else{
        storedWishListData.push(id);
        const setWishList = JSON.stringify(storedWishListData);
        localStorage.setItem('wish-list' , setWishList)
    }
}

export {setToDBMarksRead , setToDBWishList}