import React, {useState, useEffect} from 'react';
import axios from 'axios';

//created custom hook to pass state + load spinner + reuseable functions to make a card carousel
const useData = (myUrl) => {

const [siteState, setSiteState] = useState([]);
const [currentCard, setCurrentCard] = useState(0);
const [isLoading, setLoading] = useState(true);



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
        .then(res => {
            setSiteState(res.data)
            setLoading(false)
        })
        .catch(err => console.log(err))
     
    }, []);


    return { siteState, setSiteState, currentCard, nextCard, prevCard, isLoading}
}







export default useData;