import '../styles/component7.css'
import Maxc from '../images/maxc.png.svg'
import Rectangle from '../images/reactanglegrad.png'

import Dollar from '../images/dollarimage.png'



const Component7 = () => {
    return (
        <div className='component7-main-page'>
            <div className="container">
                <div className='left'>
                    <p>BUY USDC ON </p>
                    <p>ALGORAND</p>
                    <div className='d-flex justify-content-start align-items-center'>
                        <h5>Powered by </h5>
                        <img src={Maxc} alt="" />
                    </div>
                    <button><b>BUY</b></button>
                </div>
                <div className="right">
                    <img className='rec' src={Rectangle} alt="" />
                    <img className=" dollar" src={Dollar} alt="" />
                    <div className='ellipse'></div>
                </div>
            </div>
        </div>
    )
}
export default Component7;