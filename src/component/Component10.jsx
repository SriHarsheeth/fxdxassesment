import '../styles/component10.css'
import Stars from '../images/stars.svg'
import Memoji from '../images/memoji.svg'
import Memoji1 from '../images/memoji1.svg'
import Memoji2 from '../images/memoji2.svg'

const Component10 = () => {
    return (
        <div className='component10-main-page'>
            <h1> Reviews from our platform users</h1>
            <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla
                facilisi nullam vehicula ipsum a arcu cursus vitae congue consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>
            <div className="layouts">
                <div className="layout">
                    <img src={Stars} alt="" />
                    <p>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                        libero et velit interdum, ac aliquet odio mattis.</p>
                    <div className='d-flex justify-content-between' style={{ width: "80px" }}>
                        <img src={Memoji} alt="" />
                        <div style={{ marginLeft: "15px", display: "flex", flexDirection: "column", marginTop: "20px" }}>
                            <h5>Abhijit</h5>
                            <h6>Trader</h6>
                        </div>
                    </div>
                </div>
                <div className="layout">
                    <img src={Stars} alt="" />
                    <p>Torem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className='d-flex justify-content-between' style={{ width: "80px" }}>
                        <img src={Memoji1} alt="" />
                        <div style={{ marginLeft: "15px", display: "flex", flexDirection: "column", marginTop: "20px" }}>
                            <h5>Thoufiq</h5>
                            <h6>Investor</h6>
                        </div>
                    </div>
                </div>
                <div className="layout">
                    <img src={Stars} alt="" />
                    <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    <div className='d-flex justify-content-between' style={{ width: "80px" }}>
                        <img src={Memoji2} alt="" />
                        <div style={{ marginLeft: "15px", display: "flex", flexDirection: "column", marginTop: "20px" }}>
                            <h5>Kumar</h5>
                            <h6>Investor</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Component10;