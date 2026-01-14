export type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
};


export type Pokemon_ = {
  pokemon: {
    id: number;
    name: string;
  }
}