import Card from './Card';
import useCounter from "./customHooks/use-counter";

const ForwardCounter = () => {
    const counter = useCounter(true);

    return <Card>{counter}</Card>;
};

export default ForwardCounter;
