import { star } from "../assets/icons"


const PopularProductCard = ({imgURL , name , price }) => {
  return (
      <div className="flex flex-col w-full max-sm:w-full">
          <img src={imgURL} alt={name} className="w-[240px] h-[240px]"/>
          <div className="flex mt-8 justify-start gap-2.5">
              <img src={star} alt="star" width={24} height={24} className=""/>
              <p className=" font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
          </div>
          <h3 className="mt-3 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
          <p className="mt-2 text-coral-red font-semibold font-montserrat text-2xl leading-normal">{price}</p>
      </div>
  )
}
export default PopularProductCard