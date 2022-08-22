import react, { useState } from "react";
import Cards from "./Cards";
import axios from "axios";

const Main=()=> {	
		const [search, setSearch] = useState('');
		const [bookData, setData] = useState([]);
		const searchBook = (evt) => {
			if(evt.key==="Enter") {
				axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBQimsgTSUoPkTSt8n_xju34zj0ZqD2IWU'+'&maxResults=40')
				.then(res=>setData(res.data.items))
				.catch(err=>console.log(err))
			}		
	}
	return(
		<>
		<div className="header">
			<div className="row">
				<h2>Find your Book</h2>
				<div className="search">
					<input type="text" placeholder="Enter Your Book Name . . ."
					value={search} onChange={e=>setSearch(e.target.value)}
					onKeyPress={searchBook}/>
					<button><img src="./images/search.png" alt="search"/></button>

				</div>
				<img className="imgbooks" src="./images/shelf_book.png" alt="books"/>
			</div>
		</div>

		<div className="container">
			{
			<Cards book={bookData}/>
			}
		</div>


		</>
	)
}
export default Main;