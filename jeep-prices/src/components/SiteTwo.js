import '../styles/sitetwo.scss';
import React, {useState, useEffect} from 'react';
//importing arrow icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import axios from 'axios';



const SiteTwo = () => {

    const [siteTwoState, setSiteTwoState] = useState([]);
    const [currentCard, setCurrentCard] = useState(0);


    const nextCard = () => {
    setCurrentCard(currentCard === siteTwoState.length - 1 ? 0: currentCard + 1)
}
// console.log('next', currentCard)

const prevCard = () => {
    //if current card is greater than 0 subtract + go back one, else it stays at 0
    setCurrentCard(currentCard === 0 ? siteTwoState.length-1 : currentCard - 1)
}
    useEffect(() => {
        axios.get('https://jeep-prices-repo-be.herokuapp.com/siteTwo')
        .then(res => setSiteTwoState(res.data))
        // .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }, [])


    return(
        <>
        {siteTwoState.map((data, i) => {
            
            return(
                <> 
                { currentCard === i &&
                <div className='site-container'>
                <FontAwesomeIcon icon="angle-left" className='left-arrow-two' onClick={prevCard} />
                <h2>Site two goes here.</h2>

                <div className='miles-container'>
                <h3>Mileage</h3>
                <p>{data.mileage}</p>
                </div>

                 <div className='listPrice-container'>
                 <h3>List Price</h3>
                 <p>{data.listPrice}</p>
                 </div>

                <div className='monthlyPrice-container'>
                <h3>Monthly Price</h3>
                <p>{data.monthlyPrice}</p>
                </div>

                <div className='vehicleDetails-container'>
                <h3>Vehicle Details</h3>
                <p>{data.deetz}</p>
                </div>

                <div className='vehicleImg-container'>
                <h3>Car Img</h3>
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
