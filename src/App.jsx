import { useEffect, useState } from "react";
import Book from "./components/book";
import Search from "./components/search";

const App=()=>{
 const [books, setbooks] = useState([])
 const [subbooks, setsubBooks]= useState(books)
 const [searchWord, setSearchWord]=useState()
 
useEffect(() => {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchWord}`)
    .then(res => res.json())
    .then(data => {
      // Transform API data into the shape your app expects
      const formatted = data.items.map(item => ({
        id: item.id,
        image: item.volumeInfo.imageLinks?.thumbnail || "https://placehold.co/30",
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors?.[0] || "Unknown",
        rating: item.volumeInfo.averageRating || 0
      }));
      setbooks(formatted);
      setsubBooks(formatted)
      
    });
}, [searchWord]);
 
 
  return (
    <>
      <div className="flex flex-col justify-center gap-5 p-2">
        <div className="Input">
          <Search subbooks={subbooks} setsubBooks={setsubBooks} books={books} setbooks={setbooks} setSearchWord={setSearchWord} />
        </div>
        <div>
         <Book subbooks={subbooks} books={books} />
        </div>
      </div>
    </>
  )
}
export default App;