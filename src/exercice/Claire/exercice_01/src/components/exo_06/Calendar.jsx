import { useState } from "react";


function Calendar() {

    const [today, setToday] = useState(new Date())

    return (
        <>
            <p>Date: {today.toLocaleDateString("fr-FR", {day: '2-digit', month: '2-digit', year:'numeric'})}</p>
        </>
    );
}
export default Calendar;