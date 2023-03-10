import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [result, setResult] = useState([]);
    const [pending, setPending] = useState(true);
    const [err, setErr] = useState(null);

    const controller = new AbortController()

    useEffect(() => {
        const getResults = async () => {
            setPending(true)
    
            try {
               const res = await fetch(url , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                signal: controller.signal }) 
                if(!res.ok){
                    throw new Error('Could not fetch results')
                }
                const data = await res.json()
                setPending(false)
                setResult(data)
                setErr(null)
                console.log('Results fetched')
            } catch (error) {
                setPending(false)    
                setErr(error.message)
                console.log(err)
            }
           }
    
           getResults()
    }, [url])

    return { result, pending, err }
}

export default useFetch;