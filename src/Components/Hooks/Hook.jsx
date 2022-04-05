import { useEffect, useState } from "react"

const useInstument = () =>{
    const [instument, setInstument] = useState([]);
    useEffect(() =>{
        fetch('review.json')
        .then(res => res.json())
        .then(data => setInstument(data));
    },[])
    return [instument, setInstument] ;
}
export default useInstument;