import { Link } from 'react-router-dom';
import './MenuBar.css';
import {FcHome, FcAbout, FcBusinessContact} from "react-icons/fc"
import {PiWhatsappLogoFill} from "react-icons/pi"

function MenuBar() {
  const whatsapplink = "https://wa.me/5519"
  return (
    <>
    <div className="menu-bar">
      <Link to="/" className="menu-item"><FcHome style={{fontSize:"1.5em"}}/><span> Home</span></Link>
      <Link to="/sobre-nos" className="menu-item"><FcAbout style={{fontSize:"1.5em"}} /><span>Sobre Nós</span></Link>
      <Link to="/contato" className="menu-item"><FcBusinessContact style={{fontSize:"1.5em"}} /><span>Contato</span></Link>
    </div>
    <Link to={whatsapplink}>
    <div className='whatsapp'><span className='whatsapp'>Fale conosco!</span><PiWhatsappLogoFill style={{fontSize:"2em", color: "green"}} /></div>
    </Link>
    </>
  );
}


export default MenuBar;
