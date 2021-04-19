import useData from './UseData';
import Spinner from './Spinner';


const Favorites = () => {


    const {siteState, isLoading} = useData('https://jeep-prices-repo-be.herokuapp.com/my-favorites');

  


    return(
        <>
        {!isLoading ? (
            <>
        {siteState.map(data => {
            return(
                <div>
                    <p>{data.title}</p>
                    <p>{data.deetz}</p>
                    <p>{data.img}</p>
                    <p>{data.price}</p>
                </div>
            )
        })}
            </>
 )        : (< Spinner />) }
        </>
    )
}




export default Favorites;