const Book=({books,subbooks})=>{
   
  
return(
    <>
     <div className={(typeof books === "string")?" flex justify-center": "grid gap-1.5 gap-y-4 grid-cols-2 md:grid-cols-4 h-full "}>
        {
            (subbooks.length)?
             subbooks.map(book=>(
          <div key={book.id} className="border-4 hover:scale-110 transition-all ease-out bg-amber-100 flex gap-4 p-1 flex-col justify-center text-center">
            <img src={book.image} alt="not available" />
            <div>
                 <h2 className="font-bold text-md">{book.title || ""}</h2>
             <div className="flex justify-center gap-7">
                <h3 className="font-semibold text-sm"> <span className="text-xs">~author</span> {book.author || ""}</h3>
             <p className="font-semibold">🌟{book.rating || ""}</p>
             </div>
            </div>

          </div> 
        )): <h2 className="font-bold text-xl md:text-2xl p-2 border rounded bg-blue-100 lg:text-3xl ">The book you are looking for is not available.</h2>
        }
     </div>
    </>
)
}
export default Book;