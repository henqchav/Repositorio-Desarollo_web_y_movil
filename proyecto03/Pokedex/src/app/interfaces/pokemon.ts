interface Abilities{
    name: string;
}

interface stat{
    base_stat: string;
    name: string
}

interface Pokemon{
    abilities: Abilities[];
    base_experience: string;
    height: string;
    id: string;
    sprite: string;
    stats: stat[];
}