import '../styles/_siteone.scss';
//importing arrow icons
import useData from './Hooks/UseData';
// import useFaves from './Hooks/useFaves';
import Spinner from './Spinner';
import { Route, NavLink, Link, Redirect} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';






const SiteOne = () => {

    

    const {siteState, setSiteState, currentCard, nextCard, prevCard, isLoading, isFavorite, setFavorite, faveState, setFaveState} = useData('https://jeep-prices-repo-be.herokuapp.com/siteOne'); 
    
    // console.log('site state', siteState)
    // console.log('fave state', faveState)
 

    const addFavorite = () => {

    


        console.log('site state', siteState)
        console.log('fave state', faveState)

    }
            


    
        

  
    return(
        <>
        {!isLoading ? (
        <>
        {siteState.map((data, i) => {
            return( 
                <> 
                {currentCard === i &&
                <div className='site-container-one' key={data._id}>
                <h3 className='prev' onClick={prevCard}>Previous Page</h3>
                <h3 className='next' onClick={nextCard}>Next Page</h3>
                <FontAwesomeIcon icon="heart" className='heart-icon' onClick={addFavorite(data)}  />
                {/* <h2>Site One Name Here</h2> */}
                {/* price is one row centered*/}
                <div className='price-container'>
                <h3 >Price</h3>
                <hr></hr>
                <p>{data.price}</p>
                </div>
                {/* both divs are in one row, two columns */}
                <div className='details-container'>
                <h3>Details</h3>
                <hr></hr>
                <p className='title'><strong>Title:</strong> {data.title}</p>
                <p><strong>Vehicle Information:</strong>{"\n"} {data.deetz}</p>
                </div>
 
                <div className='vehicleImg-container'>
                <h3>Vehicle Image</h3>
                <hr></hr>
                <a href={data.img}><img src={data.img} alt='jeep img'></img></a>
                </div>
                </div>  
        }  
                </>
            )
    
        })}
        </>
        )  : (< Spinner />) }
        </>
    
    )
  
}


export default SiteOne;