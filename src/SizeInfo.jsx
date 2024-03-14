import { arrowRight } from "./assets/icons"
import Button from "./components/Button"
import { Size } from "./components/Size"

export const SizeInfo = ({imgURL , name , price , sizes}) => {
  return (
    <section auto className=' pt-32 md:pl-20 lg:flex gap-24 max-container'>
            <div className=' flex focus:first-line:'>
                <img src={imgURL} alt={name} width={400} height={400} />
            </div>
            <div className='mt-5'>
                <h1 className='font-palanquin text-2xl'>{name}</h1>
                <p className='font-montserrat text-slate-black mt-3 font-bold leading-3' >MRP: {price}</p>
                <p className='text-slate-gray font-palanquin'>Incl. of taxes</p>                    
                <h1 className=' mt-4 font-bold'>Select Size</h1>
                <div className=' mt-4  grid  md:grid-cols-5 sm:grid-cols-4 grid-cols-3'>
                    {sizes.map((size) => (
                        <div > 
                            <Size size={size} />  
                        </div>                            
                    ))}
                </div>
                <div className='mt-4 w-full flex gap-2 max-sm:flex-col pb-10'>
                    <Button label='Buy Now'
                    iconURL={arrowRight}/>
                    <Button label='Add to Cart'
                    backgroundColor={`bg-white`}
                    borderColor={`border-black`}
                    textColor={`text-slate-black`}/>
                </div>
            </div>
        </section>
  )
}
