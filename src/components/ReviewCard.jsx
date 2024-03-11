import { star } from "../assets/icons"


const ReviewCard = ({imgURL , customerName , feedback , rating}) => {
  return (
    <div className="flex gap-10 ">
        <div className="flex flex-col justify-center items-center">
            <img src={imgURL} alt={customerName} width={200} height={200} className="rounded-full shadow-2xl shadow-slate-gray" />
            <h3 className="text-black text-xl font-bold mt-4">{customerName}</h3>
        </div>
        
        <div className="flex-1 mt-6c">
            <p className="text-xl flex font-montserrat font-semibold">
        <img src={star} alt="star" width={20} height={20}></img>({rating})
            </p>
            <p className=" info-text">{feedback}</p>
        </div>
    </div>
  )
}

export default ReviewCard