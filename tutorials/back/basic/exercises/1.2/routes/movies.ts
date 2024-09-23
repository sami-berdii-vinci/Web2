import { Router } from "express";
import { Movie } from "../types"

const router = Router();

const movies: Movie[] = [
    {
        id : 1,
        title : "Les Schtroumpfs",
        director : "Peyo",
        duration : 93
    },
    {
        id : 2,
        title : "Le diner de cons",
        director : "Louis de Funès",
        duration : 102
    },
    {
        id : 3,
        title : "Avengers : Endgame",
        director : "Marvel",
        duration : 117
    }

]

router.get("/", (_req, res) => {
    return res.json(movies);
  });

export default router;