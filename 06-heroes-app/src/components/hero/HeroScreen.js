import React, { useState, useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'
export const HeroScreen = () => {
    const { heroeId } = useParams()
    const navigate = useNavigate()
    const hero = useMemo(() => getHeroById(heroeId), [ heroeId ])
    if (!hero) return <Navigate to="/" />
    const imgPath = `/assets/${hero.id}.jpg`
    const { alter_ego, superhero, publisher, id, first_appearance, characters } = hero
    const handleReturn = () => {
        navigate(-1)
    }
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    src={imgPath}
                    alt={superhero}></img>
            </div>
            <div className="col-8 animate__animated animate__fadeInLeft">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>alter ego:  </b>{alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher:  </b>{publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First appearance:  </b>{first_appearance}
                    </li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{characters}</p>
                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}>
                    Regresar
                </button>
            </div>
        </div>
    )
}
