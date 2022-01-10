import { useEffect, useState } from "react"
import { getDataSpotify } from "../components/Services/GetDataSpotify";

export const useFetchData = ( newSearch ) => {

    const [state, setstate] = useState({
        listTracks:[],
        loading: true,
        error: false
    });

    useEffect(() => {
        getDataSpotify( newSearch )
            .then( ( {data, error} ) => {
                setstate(
                    {
                        listTracks: data,
                        loading: false,
                        error
                    }
                    )
                }
            )
    }, [newSearch])

    return state;

}
