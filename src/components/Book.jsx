import './style.css'
function Book(props){
    return(
        <div className="book-card">
        <img src={props.bookDetails.coverImage} alt="" width="200px" height="200px" className='bookcover'/>
        <div className="bokk-details">
            <h2 className="book-title">{props.bookDetails.title}</h2>
            <p className="book-author">{props.bookDetails.author}</p>
            <p className="book-description">{props.bookDetails.Description}</p>
        </div>
        </div>
    )
}
export default Book;
