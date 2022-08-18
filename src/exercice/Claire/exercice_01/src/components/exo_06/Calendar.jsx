import { useState } from "react";


function Calendar() {

    const [today, setToday] = useState(new Date())

    return (
        <>
            <p>Date: {today.toLocaleDateString()}</p>
        </>
    );
}
export default Calendar;