import '../styles/component9.css'
import Courtney from '../images/courtney.svg'
import Arthur from '../images/arthur.svg'
import Leslie from '../images/leslie.svg'
import Arlene from '../images/arlene.svg'
import Marjo from '../images/marjo.svg'
import Darell from '../images/darell.svg'

const Component9 = () => {
    return (
        <div className='component9-main-page'>
            <p>Participants in Our Community</p>
            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis </h6>
            <button>Join Community</button>
            <div className='users-container'>
                <div className='users-one'>
                    <div className='user'>
                        <img src={Courtney} alt="" />
                        <p>Courtney</p>
                    </div>
                    <div className='user'>
                        <img src={Arthur} alt="" />
                        <p>Arthur</p>
                    </div>
                    <div className='user'>
                        <img src={Leslie} alt="" />
                        <p>Leslie</p>
                    </div>
                    <div className='user'>
                        <img src={Arthur} alt="" />
                        <p>Mitchell</p>
                    </div>
                    <div className='user'>
                        <img src={Leslie} alt="" />
                        <p>Philip</p>
                    </div>
                </div>
                <div className='users-two'>
                    <div className='user'>
                        <img src={Arlene} alt="" />
                        <p>Arlene</p>
                    </div>
                    <div className='user'>
                        <img src={Marjo} alt="" />
                        <p>Marjorie</p>
                    </div>
                    <div className='user'>
                        <img src={Courtney} alt="" />
                        <p>Angel</p>
                    </div>
                    <div className='user'>
                        <img src={Marjo} alt="" />
                        <p>Gladys</p>
                    </div>
                    <div className='user'>
                        <img src={Courtney} alt="" />
                        <p>Courtney</p>
                    </div>
                </div>
                <div className='users-three'>
                    <div className='user'>
                        <img src={Courtney} alt="" />
                        <p>Courtney</p>
                    </div>
                    <div className='user'>
                        <img src={Arlene} alt="" />
                        <p>Arlene</p>
                    </div>
                    <div className='user'>
                        <img src={Darell} alt="" />
                        <p>Darrell</p>
                    </div>
                    <div className='user'>
                        <img src={Arlene} alt="" />
                        <p>Colleen</p>
                    </div>
                    <div className='user'>
                        <img src={Darell} alt="" />
                        <p>Darlene</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Component9;