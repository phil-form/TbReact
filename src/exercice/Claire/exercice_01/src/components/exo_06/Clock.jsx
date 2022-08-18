import { useEffect, useState } from "react";


function Clock() {

    const [time, setTime] = useState(new Date());

    function tick() {
        setTime(new Date())
    }

    useEffect(() => {
        console.log("Setting interval to update the time.");
        const intervalId = setInterval(tick, 200);

        return () => {
            console.log("Unregister from component.");
            clearInterval(intervalId);
        }
    }, []);

    return (
        <>
            <p>Time: {time.toLocaleTimeString()}</p>
        </>
    );
}
export default Clock;