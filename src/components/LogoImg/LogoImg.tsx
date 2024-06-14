import './LogoImg.css';
import logo from '/images/logo.svg';

export const LogoImg = () => {
    return(
        <div className='logoImg'>
          <img src={logo} alt="logo" className="logo-img" />
        </div>
    )
}