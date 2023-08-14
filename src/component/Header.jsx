import React from 'react'
import Logo from '../images/newlogo.png.png'
import '../styles/header.css'
import Binance from '../images/binance.svg'
import Bitfinex from '../images/bitfinex.svg'
import Coinbase from '../images/coinbase.svg'
import Ripple from '../images/ripple.svg'
import Bitcoin from '../images/bitcoin.svg'
import Monero from '../images/monero.svg'
import Steemit from '../images/steemit.svg'
import Tether from '../images/tether.svg'

const Header = () => {
    return (
        <div className='header-main-container'>
            <div className='container'>
                <nav>
                    <img src={Logo} alt='img' />
                    <div className='nav-list'>
                        <ul>
                            <li>
                                <a href='/'><u style={{ textUnderlineOffset: "9px", color: "#F1F1F1" }} ><span className='menu '>Menu</span></u> </a>
                            </li>
                            <li><a href='/'>Stat</a></li>
                            <li><a href='/'>Community</a></li>
                            <li><a href='/'>Add Liquidity</a></li>
                            <li><a href='/'>Guide</a></li>
                            <li><a href='/'>Contact</a></li>
                        </ul>
                    </div>
                    <button>FXDX on Algorand</button>
                </nav>
                <section className='main-section'>
                    <section className='section-one'>
                        <p><b>DECENTRALISED INFRASTRUCTURE FOR <br></br>
                            PERPETUAL FUTURES WITH <span style={{ color: "#0267FF" }}>LIMITLESS LIQUIDITY</span></b></p>
                    </section>
                    <section className='section-two'>
                        <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                            ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.v Curabitur tempus urna at turpis
                            condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</p>
                    </section>
                    <button className="bottom btn btn-primary " type="submit">Get Started</button>
                </section>
                <div className='main-page-footer'>
                    <img src={Binance} alt='images' />
                    <img src={Ripple} alt='images' />
                    <img src={Coinbase} alt='images' />
                    <img src={Bitcoin} alt='images' />
                    <img src={Bitfinex} alt='images' />
                    <img src={Monero} alt='images' />
                    <img src={Tether} alt='images' />
                    <img src={Steemit} alt='images' />
                </div>
            </div>
        </div>
    )
}

export default Header