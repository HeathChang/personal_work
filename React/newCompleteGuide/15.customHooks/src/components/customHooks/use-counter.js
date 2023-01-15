import {useEffect, useState} from "react";

const useCounter = (isForward = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isForward) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isForward]);
    //important:: the parameter should be new dependency because, it is not defined inside of the Effect function, but instead it is a value that we get as parameter.

    return counter;
}

export default useCounter;