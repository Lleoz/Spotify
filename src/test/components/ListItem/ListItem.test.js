import React from 'react'
import { shallow } from "enzyme"
import { ListItem } from '../../../components/ListItem/ListItem';
import { Provider } from 'react-redux';
import { store } from '../../../store/store'
import { useDispatch } from 'react-redux'

describe('Prueba en <ListItem></ListItem>', () => {


    const track = {
        id: '123',
        name: 'Iron',
        preview_url: 'https://github.com/',
        artists: 'Iron Maiden'
    }

    const wrapper = shallow(
            <Provider store={store}>
                <ListItem {...track}/>
            </Provider>).dive();

    test('Se debe cargar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();

    })

})