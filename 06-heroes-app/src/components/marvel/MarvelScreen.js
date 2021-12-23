import React from 'react'
import { heroes } from '../../data/heroes'
import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
            <h1>MarvelScreen</h1>
            <hr />
            <HeroList publisher='Marvel Comics'></HeroList>
        </div>
    )
}
