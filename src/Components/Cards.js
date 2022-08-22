import react from "react";

const Cards = ({book}) => {
	console.log(book)
	return(
		<>
		{
			book.map((item)=>{
				let thumbnail=item.volumeInfo.imageLinks.smallThumbnail;
				return(
					<>
					<div className="cards">
						<img src={thumbnail} alt="card"/>
						<div className="bottom">
							<h3 className="title">My Book</h3>
							<p className="amount">&#8377;3290</p>
						</div>
					</div>
					</>
				)
			})
		}
		
		
		</>
	)
}
export default Cards;