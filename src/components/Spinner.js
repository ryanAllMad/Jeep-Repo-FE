import React, {useState, useEffect} from 'react';
import Loader from "react-loader-spinner";
import '../styles/spinner.scss';

const Spinner = () => {

    return (
      <div className='site-container'>
     <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={200}
        width={200}
        className='loader'
      />
      </div>
    )
}




export default Spinner;