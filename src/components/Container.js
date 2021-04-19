// import completed components into this file
import '../styles/_container.scss';
import SiteOne from './SiteOne';
import SiteTwo from './SiteTwo';
import Menu from './Menu/Menu';
import { Route, NavLink} from 'react-router-dom';



const Container = () => {

    return(
        <div> 
        <Menu />
        {/* <h1>Please Select a Site</h1> */}
        <Route exact path={`/site-one`} component={SiteOne} />
        <Route exact path={`/site-two`} component={SiteTwo} /> 
    </div> 
    )}
    
        
    




export default Container;