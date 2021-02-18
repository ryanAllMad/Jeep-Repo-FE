import '../styles/sitetwo.scss';
//importing arrow icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useData from './UseData';


const SiteTwo = () => {

    const {siteState, currentCard, nextCard, prevCard} = useData('https://jeep-prices-repo-be.herokuapp.com/siteTwo');


    return(
        <>
        {siteState.map((data, i) => {
            
            return(
                <> 
                { currentCard === i &&
                <div className='site-container-two'>
                <FontAwesomeIcon icon="angle-left" className='left-arrow-two' onClick={prevCard} />
                {/* <h2>Site two goes here.</h2> */}

                <div className='miles-container'>
                <h3>Mileage</h3>
                <hr></hr>
                <p>{data.mileage}</p>
                </div>

                 <div className='listPrice-container'>
                 <h3>List Price</h3>
                 <hr></hr>
                 <p>{data.listPrice}</p>
                 </div>

                <div className='monthlyPrice-container'>
                <h3>Monthly Price</h3>
                <hr></hr>
                <p>{data.monthlyPrice}</p>
                </div>

                <div className='vehicleDetails-container'>
                <h3>Details</h3>
                <hr></hr>
                <p><strong>Vehicle Information:</strong>{"\n"} {data.deetz}</p>
                </div>

                <div className='vehicleImg-two-container'>
                <h3>Vehicle Image</h3>
                <hr></hr>
                <img src={data.img} alt='jeep img'></img>
                </div>

                <FontAwesomeIcon icon="angle-right" className='right-arrow-two' onClick={nextCard} />
                </div>
                  }
                </>
            )
        })}
        </>
    )
}





export default SiteTwo;
