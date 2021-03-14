import '../styles/siteone.scss';
//importing arrow icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useData from './UseData';
import Spinner from './Spinner';





const SiteOne = () => {

    const {siteState, currentCard, nextCard, prevCard, isLoading} = useData('https://jeep-prices-repo-be.herokuapp.com/siteOne');


    return(
        <>
        {!isLoading ? (
       
        <>
        {siteState.map((data, i) => {
            return( 
                <> 
                {currentCard === i &&
                <div className='site-container-one' key={data.id}>
                 <FontAwesomeIcon icon="angle-left" className='left-arrow' onClick={prevCard} />
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
                <img src={data.img} alt='jeep img'></img>
                </div>
        
                <FontAwesomeIcon icon="angle-right" className='right-arrow' onClick={nextCard} />
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


// return(
     
//     <>

//     {siteState.map((data, i) => {

//         return( 
//             <> 
//             {currentCard === i &&
//             <div className='site-container-one' key={data.id}>
//              <FontAwesomeIcon icon="angle-left" className='left-arrow' onClick={prevCard} />
//             {/* <h2>Site One Name Here</h2> */}
//             {/* price is one row centered*/}
//             <div className='price-container'>
//             <h3 >Price</h3>
//             <hr></hr>
//             <p>{data.price}</p>
//             </div>
//             {/* both divs are in one row, two columns */}
//             <div className='details-container'>
//             <h3>Details</h3>
//             <hr></hr>
//             <p className='title'><strong>Title:</strong> {data.title}</p>
//             <p><strong>Vehicle Information:</strong>{"\n"} {data.deetz}</p>
//             </div>

//             <div className='vehicleImg-container'>
//             <h3>Vehicle Image</h3>
//             <hr></hr>
//             <img src={data.img} alt='jeep img'></img>
//             </div>
    
//             <FontAwesomeIcon icon="angle-right" className='right-arrow' onClick={nextCard} />
//             </div>  
//     }  
//             </>
//         )

//     })}
//     </>
    
      
// )

// }






export default SiteOne;