import React from 'react'
import { ModalDetails } from '../Modal/ModalDetails'
import '../Modal/ModalDetails.css'
import { useFetchData } from '../../Hooks/useFetchData';
import { ListItem } from '../ListItem/ListItem';

import './ListMusic.css'

export const ListMusic = ( { newSearch } ) => {

    const { listTracks, loading, error } = useFetchData( newSearch );

    return (
        <>
            { error ? 
                <span>{ error }</span> : 
                <span className='search'>Resultado de la búsqueda: {newSearch}</span> }
            {
                loading ?
                <span className='search'>Cargando ...</span>
                :            
                listTracks.length > 0  ?
                listTracks?.map( track => 
                <ListItem key={track.id}
                    {...track}>
                  </ListItem>
                )
                :
                <div className='notFound'>
                    <span className='text1'>No se ha encontrado ningún resultado para {newSearch}</span><br></br>
                    <span className='text2'>Por favor, asegúrate de que las palabras estén correctamente escritas o prueba con menos palabras o con otras distintas.</span>
                </div>
            }
            <ModalDetails ></ModalDetails>
        </>

    )
}
