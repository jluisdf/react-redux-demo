import React, { useEffect } from 'react'

// hooks react redux
import { useDispatch, useSelector } from 'react-redux'
// importamos la acción
import { retrieveData } from '../redux/testDuck'

const Listado = (props) => {

    // declaramos displach para llamar a la acción o acciones
    const dispatch = useDispatch()
    const { loading, array, error } = useSelector(store => store.ejemplo)

    useEffect(() => {
        dispatch(retrieveData())
    }, [])

    useEffect(() => {
        console.log(loading, array, error);
    }, [array])

    return(
        <div>
            <h3>Listado</h3>
            { loading && <span>Cargando...</span> }
            { (error && array.length === 0) && <span>Valio barriga!</span> }
            { (!error && array.length > 0) && <span>Mostrar informacion!!!</span> }
        </div>
    )
}
export default Listado
