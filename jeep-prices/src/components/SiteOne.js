import '../styles/siteone.scss';
import React, {useState, useEffect} from 'react';
//importing arrow icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import axios from 'axios';



const SiteOne = () => {
    
//needed to switch to [] b/c not using strings here
const [siteOneState, setSiteOneState] = useState([]);

    useEffect(() => {
        axios.get('https://jeep-prices-repo-be.herokuapp.com/siteOne')
        .then(res => setSiteOneState(res.data))
        // .then(res => console.log(res))
        .catch(err => console.log(err))
    }, []);

    return(

        <>
        {siteOneState.map((data, index) => {
           
            return(
              
                <div className='site-container'>
         

                 <FontAwesomeIcon icon="angle-left" className='left-arrow' />
                <h2>Site Name Here</h2>
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
 
                <div className='vehicle-img-container'>
                <h3>Car Img</h3>
                <p>{data.img}</p>
                </div>
                <FontAwesomeIcon icon="angle-right" className='right-arrow' />
         
      
                 
                </div>    
               
            )
        })}

        </>
        
        
            
    )
}







export default SiteOne;