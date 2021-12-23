import React, { useEffect, useMemo } from 'react'
import queryString from 'query-string'
import { useNavigate, useLocation } from 'react-router-dom'
import { getHeroByName } from '../../selectors/getHeroByName'
import { HeroCard } from '../hero/HeroCard'
import { useForm } from '../hooks/useForm/useForm'

export const SearchScreen = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { q = '' } = queryString.parse(location.search)
    console.log('q => ', q)
    const [values, handlerInputChange, reset] = useForm({ searchText: q })
    const { searchText } = values
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('searchText => ', searchText)
        navigate(`?q=${searchText}`)
    }
    const heroesFiltered = useMemo(() => getHeroByName(q), [ q ])
    return (
        <>
            <h1>Busqueda</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Buscar heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            onChange={handlerInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block">Buscar</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />
                    {
                        (!q) 
                            ? <div className="alert alert-info">Buscar un Heroe</div>
                            : (!heroesFiltered.length) && <div className="alert alert-danger">No hay resultados: { q }</div>
                    }
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                { ...hero }></HeroCard>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
