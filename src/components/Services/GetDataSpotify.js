

export const getDataSpotify = async ( newSearch ) =>{
    const token = await getNewToken();
    let error = false;
    let data = [];
    const url = `https://api.spotify.com/v1/search?type=album,artist,track&include_external=audio&q=${ encodeURI( newSearch ) }`;
    const resp = await fetch( url, { 
        headers: new Headers({
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json'
        })
    })
    .then(items => {
        if(items.status !== 200){
            error = 'Token Inválido'
        } else {
            return items.json()
        }
    })
    .catch( e => {
        error = 'Error en la petición'
    });

    if(!error){
        const {tracks} = resp;
        if(tracks.items.length > 0){
            const data = tracks.items.map(track  => {
                return {
                    id: track.id,
                    name: track.name,
                    artists: track.artists[0].name,
                    duration: track.duration_ms,
                    href: track.href,
                    preview_url: track.preview_url
                }
            })
            return {data, error};
        }
    }
    return {data, error};
}

export const getNewToken = async () => {
    const url = `https://msspotify.herokuapp.com/`;
    const resp = await fetch( url )
    .then(token => token.json())

    return resp.token;

}