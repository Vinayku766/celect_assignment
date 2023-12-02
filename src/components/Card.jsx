

const Card = ({cardData}) => {
  
  // const tag = cardData.cardData.tags.join(",");
  const tags = cardData.tags.split(", ");
  // console.log((tags));
  return (
     <div className="border-none rounded-[7px] shadow-lg shadow-[green] w-[250px]"> 
      <img className="h-[120px] w-full rounded-[7px]" src={cardData.largeImageURL} alt="card-img"/>
      <div className="py-[12px] px-[8px] text-left">
        <p>Views : {cardData.likes}</p>
        <p>Downloads : {cardData.downloads}</p>
        <p>Likes : {cardData.views}</p>
      </div>
      <div className="py-[12px] px-[9px] text-left">
       
       {tags.map((tag, id) => {
        return <span key={id} className={`bg-[green] mx-[4px] text-white py-[2px] px-[4px] rounded-[4px]`}>#{tag} </span>
       })}
       {/* {cardData.cardData.tags.map((tag, id) => {
        return <span key={id}>#{tag}</span>
       })} */}
      
      </div>
     </div>
  )
}

export default Card;