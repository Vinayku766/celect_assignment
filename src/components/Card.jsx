

const Card = ({cardData}) => {
  
  // const tag = cardData.cardData.tags.join(",");
  const tags = cardData.tags.split(", ");
  // console.log((tags));
  return (
     <div className="border-none rounded-[7px] shadow-lg shadow-[purple] w-[250px]"> 
      <img className="h-[120px] w-full rounded-[7px]" src={cardData.largeImageURL} alt="card-img"/>
      <div className="py-[12px] px-[8px] text-left font-semibold">
        <p>Views : {cardData.likes}</p>
        <p>Downloads : {cardData.downloads}</p>
        <p>Likes : {cardData.views}</p>
      </div>
      <div className="py-[12px] px-[9px] text-left">
       {tags.map((tag, id) => {
        return <span key={id} className={`bg-[purple] mx-[4px] text-white py-[2px] px-[4px] rounded-[4px]`}>#{tag} </span>
       })}
      </div>
     </div>
  )
}

export default Card;