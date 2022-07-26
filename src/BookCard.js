import './App.css'


function BookCard (props) {

    return (
        <div className="card">
           <img src={props.image} alt=""/>
           <div className='card-col'>
            <h2>{props.title}</h2>
            <h3>By: {props.author}</h3>
            <h3>Published By: {props.publisher}</h3>
            <a className="more-btn" href={props.link}>See This Book</a>
           </div>
        </div>
    )
}

export default BookCard;