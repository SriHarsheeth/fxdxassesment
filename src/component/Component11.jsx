import '../styles/component11.css'
import Graph from '../images/component11graph.png'
const Component10 = () => {
    return (
        <div className='component11-main-page'>
            <div className="left">
                <div className='left-container'>
                    <h1>Learn Additional Information In Our Transactions</h1>
                    <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    <button>See our videos</button>
                </div>
            </div>
            <div className="right">
                <img src={Graph} alt="" />
            </div>
        </div>
    )
}
export default Component10;