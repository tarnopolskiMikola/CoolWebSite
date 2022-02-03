 
import "./main.css"
import Icon from '../icon/icon';
import Map from '../map/map';
import Header from '../header/Header';
 
function Main(){

    return (
     
        <>
         <Header />
    <Icon />
    <Map />
        <a id="about" className="about" href="/about">About.</a>
        <a className="work" href="/work">Work</a>
        <a className="skill" href="/skill">Skill.</a>
        </>
      );
}
export default  Main;