export const FooterCard = ({title , links}) => {
  return (
    <div className="">
        <h1 className="text-2xl font-bold">
            {title}
        </h1> 
       {links.map((link) => (
        <p className="mt-2 ">
            <a href={link.link} >{link.name}</a>
        </p>    
       ))}
    </div>
  )
}
