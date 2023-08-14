import '../styles/component2.css'
import Graph from '../images/graph.png'


const Component2=()=>{
    return(
        <div className="component2-main-container">
        <div className="left">
            <p className='firstpara'>Development Of Our Best Platform</p>
            <p className='secondpara'>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
             interdum, ac aliquet odio mattis.</p>
             <div className='content'>
             <div className='first'><p>Our Users</p><h1>500K+</h1></div>
             <div className='second'><p>Active Transaction</p><h1>10M+</h1></div>
             <div className='first'><p>Brand Partner</p><h1>300+</h1></div>
             </div>
             <button>know more</button>
        </div>
        <div className="right">
           <div className='ellipse'></div>
           <div className='graph' ><img src={Graph} alt="" /></div>
        </div>
        </div>
    )
}
export default Component2;