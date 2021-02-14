import '../styles/siteone.scss';
import React, {useState, useEffect} from 'react';
//importing arrow icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import axios from 'axios';



const SiteOne = () => {
    
//needed to switch to [] b/c not using strings here
const [siteOneState, setSiteOneState] = useState([]);
const [currentCard, setCurrentCard] = useState(0);

//reset once it hits ends of []
const nextCard = () => {
    setCurrentCard(currentCard === siteOneState.length - 1 ? 0: currentCard + 1)
}
// console.log('next', currentCard)

const prevCard = () => {
    //if current card is greater than 0 subtract + go back one, else it stays at 0
    setCurrentCard(currentCard === 0 ? siteOneState.length-1 : currentCard - 1)
}
// console.log('prev', currentCard)

    useEffect(() => {
        axios.get('https://jeep-prices-repo-be.herokuapp.com/siteOne')
        .then(res => setSiteOneState(res.data))
        // .then(res => console.log(res))
        .catch(err => console.log(err))
    }, []);


    return(
        <>
        {siteOneState.map((data, i) => {
            
            return( 
                <> 
                { currentCard === i &&
                <div className='site-container' key={data.id}>
                 <FontAwesomeIcon icon="angle-left" className='left-arrow' onClick={prevCard} />
                <h2>Site One Name Here</h2>
                {/* price is one row centered*/}
                <div className='price-container'>
                <h3 >Price</h3>
                <p>{data.price}</p>
                </div>
                {/* both divs are in one row, two columns */}
                <div className='details-container'>
                <h3>Details</h3>
                <p><strong>Title:</strong> {data.title}</p>
                <p><strong>Vehicle Information:</strong> {data.deetz}</p>
                </div>
 
                <div className='vehicleImg-container'>
                <h3>Car Img</h3>
                <img src={data.img} alt='jeep img'></img>
                </div>
        
                <FontAwesomeIcon icon="angle-right" className='right-arrow' onClick={nextCard} />
                </div>  
        }  
                </>
            )

        })}
        </>
        
          
    )
    
}







export default SiteOne;