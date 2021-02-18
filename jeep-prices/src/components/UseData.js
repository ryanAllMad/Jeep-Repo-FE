import React, {useState, useEffect} from 'react';
import axios from 'axios';

//created custom hook to pass state + reuseable functions
const useData = (myUrl) => {

const [siteState, setSiteState] = useState([]);
const [currentCard, setCurrentCard] = useState(0);

//reset once it hits ends of []
const nextCard = () => {
    setCurrentCard(currentCard === siteState.length - 1 ? 0: currentCard + 1)
}
// console.log('next', currentCard)

const prevCard = () => {
    //if current card is greater than 0 subtract + go back one, else it stays at 0
    setCurrentCard(currentCard === 0 ? siteState.length-1 : currentCard - 1)
}
// console.log('prev', currentCard)

    useEffect(() => {
        axios.get(myUrl)
        .then(res => setSiteState(res.data))
        // .then(res => console.log(res))
        .catch(err => console.log(err))
    }, []);


    return { siteState, currentCard, nextCard, prevCard}
}







export default useData;