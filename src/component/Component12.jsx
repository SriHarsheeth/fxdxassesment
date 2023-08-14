import '../styles/component12.css'
import Logo from '../images/newlogo.svg'
import Rightarrow from '../images/rightarrow.svg'
import Phone from '../images/phone.svg'
import Mail from '../images/mail.svg'

const Component12 = () => {
    return (
        <div className="component12-main-page">
            <div className="container">
                <img src={Logo} alt="" />
                <div className='main'>
                    <div className='first'>
                        <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Jorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc vulputate libero et velit interdum, ac
                        </p>
                    </div>
                    <div className='second'>
                        <h6>MENU</h6>
                        <p>Home</p>
                        <p>Stats</p>
                        <p>Add Liquidity</p>
                        <p>Guide</p>
                    </div>
                    <div className='third'>
                        <h6>Docs</h6>
                        <p>Terms of use</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className='fourth'>
                        <h6>RESOURSES</h6>
                        <p>Analytics</p>
                        <p>Earn Dashboard</p>
                        <p>Whitepaper</p>
                        <p>Github</p>
                        <p>Fees</p>
                    </div>
                </div>
                <div className="footer">
                    <div className="footerleft">
                        <input type="text" placeholder='Enter Your Email' />
                        <button > Get Started  <img src={Rightarrow} alt="" /></button>
                    </div>
                    <div className="footerright">
                        <p>Contact :</p>
                        <span><h1><img src={Phone} alt="" />+91 9876 543 21</h1>
                            <h1><img src={Mail} alt="" /> reach@fxdx.com</h1></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Component12
