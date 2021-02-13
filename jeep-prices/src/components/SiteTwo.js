import '../styles/sitetwo.scss';
//importing arrow icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const SiteTwo = () => {
    return(
        <div className='site-container'>
        <FontAwesomeIcon icon="angle-left" className='left-arrow-two' />
        <h2>Site two goes here.</h2>


        <div className='miles-container'>
        <h3>Mileage</h3>
        <p>Mileage Placeholder</p>
        </div>

        <div className='listPrice-container'>
        <h3>List Price</h3>
        <p>List Price Placeholder</p>
        </div>

        <div className='monthlyPrice-container'>
        <h3>Monthly Price</h3>
        <p>Monthly Price Placeholder</p>
        </div>

        <div className='test'>
            <h3>Vehicle Details</h3>
            <p>Vehicle Details Here</p>
        </div>

        <div className='vehicleImg-container'>
            <h3>Car Img</h3>
        </div>

        <FontAwesomeIcon icon="angle-right" className='right-arrow-two' />
        </div>
    )
}





export default SiteTwo;
