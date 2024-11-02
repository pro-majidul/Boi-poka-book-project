
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
        return alert(`${id} , "already added "`)
    } else{
    StoredItem.push(id);
    const setItems = JSON.stringify(StoredItem)
    localStorage.setItem('marks_read' , setItems)
    
    }
}

export {setToDBMarksRead}