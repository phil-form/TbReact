import {useState} from "react";

const BtnDemo = () =>
{
    const [day, setDay] = useState(false);
    // let day = false;
    console.log("UPDATE");

    const handleBtnClick = () =>
    {
        setDay(prevState => {
            return !prevState;
        });
        // day = !day;

        // Attention la mise à jours de day est en asyncrone.
        // day sera donc toujours à l'ancienne valeur.
        if(day)
        {
            console.log("DAY");
        }
    }

    return (
        <div>
            <h1> { day ? 'Jour' : 'Nuit' }</h1>
            <button onClick={handleBtnClick}>Jour - Nuit!</button>
        </div>
    );
}

export default BtnDemo;
