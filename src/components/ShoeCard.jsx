export const ShoeCard = ({ imgURL , changeBigShoeImage , bigShoeImg}) => {

const handleClick = () => {
  if (bigShoeImg !== imgURL.bigShoe)
  {
    changeBigShoeImage(imgURL.bigShoe)
  }
}

  return (
    <div className={`border-2 rounded-full
        ${bigShoeImg === imgURL.bigShoe
          ? 'border-coral-red'
          : 'border-transparent'
        } cursor-pointer max-sm:flex-1
        `}
        onClick={handleClick}
        > 
        <div className="flex justify-center items-center bg-card bg-center bg-cover w-40 h-40 max-sm:w-28 max-sm:h-28 rounded-full object-contain"> 
          <img src={imgURL.bigShoe} width={100} height={90} className=" object-contain max-sm:w-[80px] max-sm:h-[70px]"/>
        </div>
    </div>
  )
}
