import {useEffect} from "react";
import {Ajax} from "../utils/ajaxWrapper";

const ExampleApi = ({ id }) =>
{
    useEffect(() =>
    {
        Ajax.get(`users/${id}`)
            .then(({data}) =>
            {
                console.log(data);
            });
    }, [])

    return (
        <>
            <p>hello</p>
        </>
    )
}

export default ExampleApi;
