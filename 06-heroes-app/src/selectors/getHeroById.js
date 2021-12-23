import { heroes } from "../data/heroes"

export const getHeroById = (id = '') => {
    console.log('getHeroById call')
    return heroes.find( hero => id === hero.id )    
}
