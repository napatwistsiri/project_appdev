import logoo from './assets/logo.png'
import Button from './botton'
import {Link} from "react-router-dom"
function Home(){
    return(<>
    
    
    <div className="hi">    
        <h2 className="w1">welcome to</h2>
        <h1 className="w2">MUSTODE CLEAN FOOD</h1>
        <Link to="/login"><Button/></Link>
                 
    </div>
    <img className="logo" src={logoo} alt="logo"></img>
   
</>
    );
}
export default Home