import { useState } from "react";

const link='https://digitialize-portfolio-default-rtdb.firebaseio.com/'

const useHttp = (collection,request) =>{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetchData(body){
        console.log(body)
        try{
            setIsLoading(true);
            const response = await fetch(link+collection+'.json', {
                method:request.method,
                body:request.method==='POST'?JSON.stringify(body):undefined,
                headers: {
                    'Content-Type': 'application/json',
                  },
            });
            if(!response.ok) throw new Error(response.body);
            setIsLoading(false);
            return (await response.json());
        }
        catch(error){
            setIsLoading(false);
            setError(error);
            console.log(error);
        }
    }

    return{
        fetchData,
        isLoading,
        error,
    }

}

export default useHttp;