import React from 'react'
import { useDispatch } from 'react-redux'
import { modalOpen } from '../../actions/modal'
import PropTypes from 'prop-types'


import './ListItem.css'

export const ListItem = ( {id, name, preview_url, artists} ) => {

    const dispatch = useDispatch()

    const openModal = () => {
        dispatch(modalOpen({
            id,
            name,
            preview_url,
            artists
        }))
    }

    return (
        <>
            <div key={id} className='row song'>
                <div className='details col-lg-6'>
                    <span onClick={ openModal } className='name'>{name}</span>
                    <span className='artist'>{artists}</span>
                </div>
                <div className='audio col-lg-6'>
                    <audio className='col-12 float-end' id={name} src={preview_url} controls='1'>
                    </audio>
                </div>
            </div>
        </>
    )
}

ListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    preview_url: PropTypes.string.isRequired,
    artists: PropTypes.string.isRequired
}