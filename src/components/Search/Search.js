import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './Search.css'

export const Search = ( {setNewsearch} ) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = ( e ) => {
        e.preventDefault()
        if( inputValue.trim().length > 3 ){
            setNewsearch( inputValue );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={inputValue}
                onChange={ handleInputChange }
                placeholder='Escriba su búsqueda'
                ></input>
        </form>
    )
}

Search.propTypes = {
    setNewsearch: PropTypes.func.isRequired
}
