import Loader from "react-loader-spinner";
import '../styles/_spinner.scss';

const Spinner = () => {

    return (
      <div className='site-container'>
     <Loader
        type="ThreeDots"
        color="rgb(255, 186, 0)"
        height={500}
        width={500}
        className='loader'
      />
      </div>
    )
}




export default Spinner;
