import { useEffect, useState } from "react"

const useInstument = () =>{
    const [instuments, setInstument] = useState([]);
    useEffect(() =>{
        fetch('review.json')
        .then(res => res.json())
        .then(data => setInstument(data));
    },[])
    return [instuments, setInstument] ;
}
export default useInstument;