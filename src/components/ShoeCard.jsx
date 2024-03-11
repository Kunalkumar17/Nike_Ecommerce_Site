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
        <div className="flex justify-center items-center bg-card bg-center bg-cover w-40 h-40 max-sm:w-32 max-sm:h-32 rounded-full object-contain"> 
          <img src={imgURL.bigShoe} width={127} height={90} className=" object-contain max-sm:w-[60%] hover:w-[137px] max-sm:hover:w-[70%]"/>
        </div>
    </div>
  )
}
