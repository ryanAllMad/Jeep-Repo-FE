import React from 'react';
import '../styles/siteone.scss';
//importing arrow icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const SiteOne = () => {
    return(
        
        <div className='site-container'> 
        <FontAwesomeIcon icon="angle-left" className='left-arrow' />
        <h2>Site Name Here</h2>
         {/* price is one row centered*/}
         <div className='price-container'>
        <h3 >Price</h3>
        <p>Placeholder Price</p>
        </div>
        {/* both divs are in one row, two columns */}
        <div className='details-container'>
        <h3>Details</h3>
        <p><strong>Title:</strong> Title Placeholder Here</p>
        <p><strong>Vehicle Information:</strong> Vehile Information Placeholder Here</p>
        </div>

        <div className='vehicle-img-container'>
        <h3>Car Img</h3>
        </div>
        <FontAwesomeIcon icon="angle-right" className='right-arrow' />
        </div>        
    )
}







export default SiteOne;