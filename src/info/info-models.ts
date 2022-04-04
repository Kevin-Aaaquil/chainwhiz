export type INFO = {
    'starship' ?: STARSHIP;
    'crew'?: number;
    'isLeiaOnPlanet'?:boolean
}

type STARSHIP = {
    name?:string;
    class?:string;
    model?:string;
}