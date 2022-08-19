import { useEffect, useState } from "react";

const Clock = (props) => {
    const [locale, setLocale] = useState(new Date());

    const update = () => {
        setLocale(new Date());
    };

    useEffect(() =>  {
        const id = setTimeout(update, 200);

        return () => {
            clearTimeout(id);
        }
    });

    return (
        <div>
            <p>{locale.toTimeString()}</p>
        </div>
    );
};

export default Clock