import '../styles/component6.css'
import Chart from '../images/Chart.svg'
import Bitcoinlogo from '../images/bitcoinlogo.svg'
import Component6graph from '../images/component6graph.png'

const Component6 = () => {
    return (
        <div className='component6-main-page'>
            <div className="top">
                <p>Market Summary (Current)</p>
                <h6>Torem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
                    lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</h6>
            </div>
            <div className="containers">
                <div className="container">
                    <div className="bitcoin">
                        <img style={{ height: "30px", width: "30px" }} src={Bitcoinlogo} alt="" />
                        <div className='d-flex flex-column  justify-content-between'>
                            <p>Bitcoin/USD</p>
                            <p>Today up to<span style={{ color: "#14C67A" }}> + 5.34%</span></p>
                        </div>
                        <img style={{ height: "27px", width: "61px" }} src={Chart} alt="" />
                    </div>
                </div>
                <div className="container">
                    <div className="bitcoin">
                        <img style={{ height: "30px", width: "30px" }} src={Bitcoinlogo} alt="" />
                        <div className='d-flex flex-column  justify-content-between '>
                            <p>Bitcoin/USD</p>
                            <p>Today up to<span style={{ color: "#14C67A" }}> + 5.34%</span></p>
                        </div>
                        <img style={{ height: "27px", width: "61px" }} src={Chart} alt="" />
                    </div>
                </div>
                <div className="container">
                    <div className="bitcoin">
                        <img style={{ height: "30px", width: "30px" }} src={Bitcoinlogo} alt="" />
                        <div className='d-flex flex-column  justify-content-between '>
                            <p>Bitcoin/USD</p>
                            <p>Today up to<span style={{ color: "#14C67A" }}> + 5.34%</span></p>
                        </div>
                        <img style={{ height: "27px", width: "61px" }} src={Chart} alt="" />
                    </div>
                </div>
                <div className="container">
                    <div className="bitcoin">
                        <img style={{ height: "30px", width: "30px" }} src={Bitcoinlogo} alt="" />
                        <div className='d-flex flex-column  justify-content-between '>
                            <p>Bitcoin/USD</p>
                            <p>Today up to<span style={{ color: "#14C67A" }}> + 5.34%</span></p>
                        </div>
                        <img style={{ height: "27px", width: "61px" }} src={Chart} alt="" />
                    </div>
                </div>
            </div>
            <img className="graph" src={Component6graph} alt="" />
            <button>View all other market activity</button>
        </div>
    )
}
export default Component6;