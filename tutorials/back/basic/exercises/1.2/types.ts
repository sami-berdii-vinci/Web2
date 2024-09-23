interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

interface Movie {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: string;
  imageURL?: string;
}

type NewPizza = Omit<Pizza, "id">;

export type { Pizza, NewPizza, PizzaToUpdate, Movie };