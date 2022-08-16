
const SimpleEvents = () =>
{
    const handleAction = () =>
    {
        console.log("BUTTON CLICKED");
    }

    const handleChange = (event) =>
    {
        const value = event.target.value;
        console.log(`la valeur est : ${value}`);
    }

    return (
        <div>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleAction}>
                Click me!
            </button>
        </div>
    );
}

export default SimpleEvents;
