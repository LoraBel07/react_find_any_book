import react, { useState } from "react";
import Cards from "./Cards";
import axios from "axios";

const Main=()=>{
	const Main = () => {
		const [mySearch, setMySearch] = useState("");
		const searchBook = (evt) => {
			if(evt.key==="Enter")
			{
				console.log("hello");
			}
		}
	}
	return(
		<>
		<div className="header">
			<div className="row">
				<h2>Find your Book</h2>
				<div className="search">
					<input type="text" placeholder="Enter Your Book Name . . ."
					value={mySearch} onChange={e=>setMySearch(e.target.value)}
					onKeyPress={searchBook}/>
					<button><img src="./images/search.png" alt="search"/></button>

				</div>
				<img className="imgbooks" src="./images/shelf_book.png" alt="books"/>
			</div>
		</div>

		<div className="container">
			<Cards/>
			<Cards/>
			<Cards/>
			<Cards/>
			<Cards/>
			<Cards/>
			<Cards/>
			<Cards/>
			<Cards/>
			<Cards/>
			<Cards/>
			<Cards/>

		</div>


		</>
	)
}
export default Main;