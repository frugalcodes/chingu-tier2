import './searchArea.css'

function SearchAera  (props) {

    return (
        <div className='form-cont'>
            <form role = "search" className="form" onSubmit={props.searchBook} action="">
                <input placeholder="Search..." id="search" type="search" onChange={props.handleSearch} required/>     
                <button className="search-btn" type="submit">GO</button>      
          </form>
        </div>
    )
}

export default SearchAera;