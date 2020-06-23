/**
 * basic flow: 
 * Once a purchase is made, it goes here
 * Once a unit is painted and the color schemes and weapons of a model have been chosen, it gets added to the models list with a photo.  
 * The SC: Space MArines, doesn't really matter what unit until I give it a paint scheme and choose weapons, then it would be entered as something like "Raven Guard Interceptors"
 */



module.exports = [
  {  
    title: 'base set terrain',
    faction: null,
    type: ['terrain'],
    game: 'Warcry',
    painted: false
  },
  { 
    title: 'Iron Golems',
    faction: 'irongolems',
    type: ['unit', 'warband'],
    game: 'Warcry',
    painted: false
  },
  {  
    title: 'Untamed Beasts',
    faction: 'untamedbeasts',
    type: ['unit', 'warband'],
    game: 'Warcry',
    painted: false
  },
  {  
    title: 'Corvus Cabal',
    faction: 'Corvus Cabal',
    type: ['unit', 'warband'],
    game: 'Warcry',
    painted: false
  },
  {  
    title: 'Splintered Fang',
    faction: 'splinteredfang',
    type: ['unit', 'warband'],
    game: 'Warcry',
    painted: false
  },
  {  
    title: 'Chaotic Beasts',
    faction: null,
    type: ['enemy'],
    game: 'Warcry',
    painted: false
  },
  {  
    title: 'Start Collecting: Fyreslayers',
    faction: 'fyreslayers',
    type: ['army', 'unit'],
    game: 'Warhammer: Age of Sigmar',
    painted: false
  },
  {  
    title: 'Doomseeker',
    faction: 'fyreslayers',
    type: ['single', 'fyreslayers'],
    game: 'Warhammer: Age of Sigmar',
    painted: false
  },
  {  
    title: 'Start Collecting: Space Marines',
    type: ['army', 'spacemarines', 'adeptusastartes'],
    game: 'Warhammer: 40k',
    painted: false
  },
  {  
    title: 'Apothecary',
    faction: 'Space Marines',
    type: ['single', 'spacemarines', 'adeptusastartes'],
    game: 'Warhammer: 40k',
    painted: false
  }

];
