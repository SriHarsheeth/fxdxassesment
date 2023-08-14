
import './styles/app.css'
import Header from './component/Header';
import Component2 from './component/Component2'
import Component3 from './component/Component3.jsx'
import Component4 from './component/Component4.jsx'
import Component5 from './component/Component5.jsx'
import Component6 from './component/Component6.jsx'
import Component7 from './component/Component7.jsx'
import Component8 from './component/Component8.jsx'
import Component9 from './component/Component9.jsx'
import Component10 from './component/Component10.jsx'
import Component11 from './component/Component11.jsx'
import Component12 from './component/Component12.jsx'

function App() {
  return (
    <div className="App">
      <div className='app'><Header />
        <div className='comp2'><Component2 /></div>
        <div className='comp3'><Component3 /></div>
        <div className='comp4'><Component4 /></div>
        <div className='comp5'><Component5 /></div>
        <div className='comp6'><Component6 /></div>
        <div className='comp7'><Component7 /></div>
        <div className='comp8'><Component8 /></div>
        <div className='comp9'><Component9 /></div>
        <div className='comp10'><Component10 /></div>
        <div className='comp11'><Component11 /></div>
        <div className='comp12'><Component12 /></div>

      </div>



    </div>
  );
}

export default App;
