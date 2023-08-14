import '../styles/component4.css'
import Logo1 from '../images/logo1.svg'
import Logo2 from '../images/logo2.svg'
import Logo3 from '../images/logo3.svg'
import Logo4 from '../images/logo4.svg'
import Logo5 from '../images/logo5.svg'
import Logo6 from '../images/logo6.svg'


const Component4 = () => {
    return (
        <div className="component4-main-page">
            <div className="container">
                <p className='first'>Why trust us over others?</p>
                <p className='second'><i>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam
                    vehicula ipsum a arcu cursus  vitae congue</i></p>
                <div className='card'>
                    <div className='cards'>
                        <img src={Logo1} alt="" />
                        <p className='logofirstpara'>Low transaction fees</p>
                        <p className='logosecondpara'>Worem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='cards'>
                        <img src={Logo2} alt="" />
                        <p className='logofirstpara'>Low transaction fees</p>
                        <p className='logosecondpara'>Worem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='cards'>
                        <img src={Logo3} alt="" />
                        <p className='logofirstpara'>Low transaction fees</p>
                        <p className='logosecondpara'>Worem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='cards'>
                        <img src={Logo4} alt="" />
                        <p className='logofirstpara'>Low transaction fees</p>
                        <p className='logosecondpara'>Worem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='cards'>
                        <img src={Logo5} alt="" />
                        <p className='logofirstpara'>Low transaction fees</p>
                        <p className='logosecondpara'>Worem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='cards'>
                        <img src={Logo6} alt="" />
                        <p className='logofirstpara'>Low transaction fees</p>
                        <p className='logosecondpara'>Worem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Component4;