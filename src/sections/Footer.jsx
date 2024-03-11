import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { FooterCard } from "../components/FooterCard"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="flex flex-col ">
      <div className="md:flex gap-10 items-center justify-around">
        <div className="flex flex-col items-center">
            <div className="flex flex-col">
              <img src={footerLogo} width={150} height={46}/> 
            </div>
            <div className="flex flex-row gap-5 mt-10">
              {socialMedia.map((social) => (
                <div className="flex justify-center items-center bg-white w-12 h-12 rounded-full">
                  <img src={social.src} alt={social.alt} width={24} height={24}/>
                </div>
              ))}
            </div>
          </div>
            <div className="flex flex-row justify-between mt-10 gap-20">
              {footerLinks.map((foot) => (
                <FooterCard {...foot}{...foot.links}/>
              ))}
            </div>
      </div>
      <div className="flex font-montserrat mt-16">
        <div className="flex flex-1 gap-2">
          <img src={copyrightSign} alt="copyright" width={20} height={20} className="rounded-full m-0"/>
          <p>Copyright. All Rights reserved</p>
        </div>
        <p>Terms & Conditions Apply</p>
      </div>
    </footer>
  )
}

export default Footer