import { useState } from "react"
import { arrowRight } from "./assets/icons"
import Button from "./components/Button"
import { Size } from "./components/Size"

export const SizeInfo = ({imgURL , name , price , sizes}) => {

    const [hide , setHide] = useState('hidden')
    
    const changeHidden = () => {
        if(hide === 'hidden'){
            setHide('nothidden')
            setarrow('&#8743;')
        } else {
            setHide('hidden')
            setarrow
        }
    }

  return (
    <section auto className=' pt-32 md:pl-20 lg:flex gap-20 max-container'>
            <img src={imgURL} alt={name} className="w-[340px] h-[340px] md:sticky md:top-10"/>
            <div className='max-sm:mt-5'>
                <h1 className='font-palanquin text-2xl'>{name}</h1>
                <p className='font-montserrat text-slate-black mt-3 font-bold leading-3' >MRP: {price}</p>
                <p className='text-slate-gray font-palanquin'>Incl. of taxes</p>                    
                <h1 className=' mt-4 font-bold'>Select Size</h1>
                <div className=' mt-4 grid xl:grid-cols-7 md:grid-cols-4 grid-cols-3  '>
                    {sizes.map((size) => (
                        <div > 
                            <Size size={size} />  
                        </div>                            
                    ))}
                </div>
                <div className='mt-4 w-full flex gap-2 max-sm:flex-col pb-10'>
                    <Button label='Add to Bag'
                    backgroundColor={`bg-white`}
                    borderColor={`border-black`}
                    textColor={`text-slate-black`}/>
                    <Button label='Favourite 🤍'
                    backgroundColor={'bg-black'} />
                </div>
                <p className=" text-wrap text-xl flex mt-4">We didn't invent the remix—but considering the material we get to sample, this one's a no-brainer. We took elements from the AJ6, 7 and 8, making them into a completely new shoe that celebrates MJ's first 3-peat championship run. With leather, textile and nubuck details, these sneakers honour one legacy while encouraging you to cement your own.</p>
                <ul className="text-xl mt-10">
                    <li>Colour Shown: White/Neutral Grey/Industrial Blue </li>
                    <li className="mt-3">Style: DZ4475-101</li>
                </ul>
                <div className="font-semibold">
                    <hr className="mt-14 border-black"/>
                    <p className="flex justify-between mt-10 text-xl">Delivery & Returns
                    <span className="flex cursor-pointer font-bold" onClick={() =>(changeHidden())}>&#8744;</span></p>
                    <ul className={`${hide} mt-8 ml-3`}>
                            <li>All purchases are subject to delivery fees.</li><br/>
                            <li>• Standard delivery 4–9 business days </li><br/>
                            <li>Orders are processed and delivered Monday–Friday (excluding public holidays)</li><br/>
                            <li>Nike Members enjoy free returns.</li>
                    </ul>
                    <hr className="mt-10 border-black"/>
                    <p className="flex justify-between mt-10 text-xl">30 Days Return Policy<span className="flex cursor-pointer font-bold">&#8744;</span></p>
                    <hr className="mt-10 border-black"/>
                </div>
            </div>
            
        </section>
  )
}
