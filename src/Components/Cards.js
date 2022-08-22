import react, { useState } from "react";
import Modal from "./Modal";

const Cards = ({book}) => {
	
	const [show, setShow] = useState(false);
	const [bookItem, setItem] = useState();

	// console.log(book);
	return(
		<>
		{
			book.map(( item )=>{
				let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
				let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
				let title = item.volumeInfo && item.volumeInfo.title;				
				if(thumbnail !== undefined && amount !== undefined) {
					return(
						<>
						<div className="cards" onClick={() => {setShow(true); setItem(item)}}>
							<img src={thumbnail} alt="card"/>
							<div className="bottom">
								<h4 className="title">{title}</h4>
								<p className="amount">&#0036; {amount}</p>
							</div>
						</div>
						<Modal show = {show} item = {bookItem} onClose = {()=> setShow(false)}/>
						</>
					)
				}
				
			})
		}
		
		
		</>
	)
}
export default Cards;