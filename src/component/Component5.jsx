import '../styles/component5.css'
import Downarrow from '../images/downarrow.svg'
import Downarrowgrey from '../images/downarrowgrey.svg'
import Uparrow from '../images/uparrow.svg'
import Uparrowwhite from '../images/uparrowwhite.svg'
import Chart from '../images/Chart.svg'
import Lock from '../images/lock.svg'
import Bitcoinlogo from '../images/bitcoinlogo.svg'

const Component5 = () => {
    return (
        <div className='component5-main-page'>
            <div className="left">
                <div className='ellipse'></div>
                <div className='main-box'>
                    <hr className='top'></hr>
                    <div className='content'>
                        <div>
                            <p className='buy'>Buy Summary</p>
                            <p>Liquidation Price</p>
                            <p>Impact</p>
                            <p>Spread</p>
                            <p>Open Fee</p>
                            <p>Price Impact</p>
                            <p>Amount</p>
                            <p>Price</p>
                        </div>
                        <div className='amount'>
                            <p className='symbol'><img src={Downarrow} alt="" /></p>
                            <p>$15.00</p>
                            <p>$5.00</p>
                            <p>0.5 %</p>
                            <p>$1.05</p>
                            <p>.05%</p>
                            <p>10</p>
                            <p>$210042.00</p>
                        </div>
                    </div>
                    <hr className='middlehr' />
                    <div className='total'>
                        <p>Total</p>
                        <p>$23.432,00</p>
                    </div>
                    <button className=" buybtc btn btn-primary " type="submit">Buy BTC</button>
                    <hr />
                    <div className='d-flex justify-content-between adv '>
                        <div>
                            <p>Advanced</p>
                            <p>Order Position</p>
                            <p>Exchange</p>
                        </div>
                        <div>
                            <p className='symbol'><img src={Uparrow} alt="" /></p>
                            <p className='symbol'><img src={Uparrow} alt="" /></p>
                            <p className='symbol'><img src={Uparrow} alt="" /></p>
                        </div>
                    </div>
                </div>
                <div className='container2'>
                    <div>
                        <div className='open'>
                            <p>Open New Position</p>
                            <p className='symbol'><img src={Uparrowwhite} alt="" /></p>
                        </div>
                        <div className="bitcoin">
                            <img style={{ height: "30px", width: "30px" }} src={Bitcoinlogo} alt="" />
                            <div className='d-flex flex-column  justify-content-between'>
                                <p>Bitcoin/USD</p>
                                <p>Today up to<span style={{ color: "#14C67A" }}>+ 5.34%</span></p>
                            </div>
                            <img style={{ height: "27px", width: "61px" }} src={Chart} alt="" />
                        </div>
                        <hr />
                        <div className='but'>
                            <button>Buy</button>
                            <p>Sell</p>
                        </div>
                        <div className="chamber">
                            <span>Amount</span>
                            <div className='innerchamber' >
                                <p ><img src={Lock} alt="" /> 10</p>
                                <p>BTC <span><img style={{ width: "17px", height: "17px" }} src={Downarrowgrey} alt="" /></span></p>
                            </div>
                        </div>
                        <div className="chamber">
                            <span>Price</span>
                            <div className='innerchamber' >
                                <p ><img src={Lock} alt="" /> 210042.00</p>
                                <p>USD <span><img style={{ width: "17px", height: "17px" }} src={Downarrowgrey} alt="" /></span></p>
                            </div>
                        </div>
                        <div className='bottom-potion'>
                            <p>5x</p>
                            <p>10x</p>
                            <p>15x</p>
                            <p>20x</p>
                            <p>25x</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <h1>Completely safe & secure</h1>
                <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Curabitur tempus urna at turpis condimentum lobortis.</p>
                <button>Learn More</button>
            </div>
        </div>
    )
}
export default Component5;