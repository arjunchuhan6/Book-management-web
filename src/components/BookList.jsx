import Book from "./Book";
import "./style.css"
function BookList(props){
    console.log("props", props);
    return (
        <div className="book-list">
        {props.booksData.map((data)=><Book key={data.id}bookDetails={data}></Book>)}
        
        </div>

    );
}
export default BookList