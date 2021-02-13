import '../styles/sitetwo.scss';
import React, {useState, useEffect} from 'react';
//importing arrow icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import axios from 'axios';

const SiteTwo = () => {

    const [siteTwoState, setSiteTwoState] = useState([]);


    useEffect(() => {
        axios.get('https://jeep-prices-repo-be.herokuapp.com/siteTwo')
        .then(res => setSiteTwoState(res.data))
        // .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }, [])


    return(
        <>
        {siteTwoState.map((data, index) => {
            return(
                <div className='site-container'>
                <FontAwesomeIcon icon="angle-left" className='left-arrow-two' />
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

                <div className='test'>
                <h3>Vehicle Details</h3>
                <p>{data.deetz}</p>
                </div>

                <div className='vehicleImg-container'>
                <h3>Car Img</h3>
                <img src={data.img} alt='jeep img'></img>
                </div>

                <FontAwesomeIcon icon="angle-right" className='right-arrow-two' />
                </div>


            )
        })}
        </>
    )
}





export default SiteTwo;
