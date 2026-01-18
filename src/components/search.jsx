

const Search=({books,setSearchWord, subbooks, setsubBooks})=>{
    
   
    const handleSearch=(e)=>{
        e.preventDefault()
        const searchedBook = e.target.value.trim()
           setSearchWord(searchedBook)
        if(searchedBook.length!==0){
           const filter =  books.filter(book=> book.title.toLowerCase().includes(searchedBook.toLowerCase()))
            setsubBooks(filter)
         
           
        }else{
            setsubBooks(books)
        }}
       const handleClick=(e)=>{
            e.preventDefault()
            const searchedBookForm = e.target.text.value.trim()
             setSearchWord(searchedBookForm)
           
        if(searchedBookForm.length!==0){
           const filterForm =  books.filter(book=> book.title.toLowerCase().includes(searchedBookForm.toLowerCase()))
            setsubBooks(filterForm) 
           
    } else{
        setsubBooks(books)
    }
          
            
        }
return(
    <>
     <div>
        <form onSubmit={(e)=>{
            handleClick(e)
        }}  className="flex justify-center gap-3">
            <input onChange={(e)=>{handleSearch(e)}} className="bg-gray-100 border rounded p-1 text-xl w-[50vw] text-center" placeholder="search your book here" name="text" />
            <button type="submit" className="border-2 bg-gray-200 p-2 px-3 hover:border-2 hover:bg-white rounded-full ">🔍︎</button>
        </form>
     </div>
    </>
)
}
export default Search