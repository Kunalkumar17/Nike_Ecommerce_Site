const Button = ( {label,iconURL , backgroundColor , textColor , borderColor , fullWidth}) => {
  return (
    <button className={`flex justify-center items-center px-7 py-4 font-montserrat text-lg leading-none
      ${backgroundColor ? backgroundColor : 'bg-coral-red'}
      ${textColor ? textColor : 'text-white'}
      ${borderColor ? borderColor : 'border-transparent'}
         rounded-full border-2   hover:border-black`}>
        {label}
        { iconURL &&
        <img src={iconURL} alt="Arror right icon" className="ml-2 rounded-full w-5 h-5"/>}
    </button>
  )
}

export default Button