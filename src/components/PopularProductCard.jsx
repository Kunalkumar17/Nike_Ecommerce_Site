import { useContext } from "react"
import { star } from "../assets/icons"
import { ShopContext } from "../context/ShopContext"


const PopularProductCard = ({image , name , price }) => {

    const { currency } = useContext(ShopContext);

  return (
      <div className="flex flex-col w-full max-sm:w-full">
          <img src={image[0]} alt={name} className="w-[240px] h-[300px]"/>
          <div className="flex mt-2 justify-start">
              <img src={star} alt="star" width={24} height={24} className=""/>
              <p className=" font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
          </div>
          <h3 className="text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
          <p className="mt-2 text-coral-red font-semibold font-montserrat text-2xl leading-normal">{currency}{price}</p>
      </div>
  )
}
export default PopularProductCard