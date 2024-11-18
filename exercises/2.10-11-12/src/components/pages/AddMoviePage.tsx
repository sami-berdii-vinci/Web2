import { SyntheticEvent, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom"
import { CinemaContext } from "../../types";

const AddMoviePage = () => {
    const { addMovie }: CinemaContext = useOutletContext();

    const navigate = useNavigate();
    const [movie, setMovie] = useState("");
    const [director, setDirector] = useState("");
    const [duration, setDuration] = useState(0);
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState(0);

    const handleSubmit = (event: SyntheticEvent) => { 
        event.preventDefault();
        addMovie({ 
            title : movie, 
            director : director, 
            duration : duration, 
            imageUrl : image, 
            description : description, 
            budget : budget
        });
        navigate("/HomePage.tsx");
    }

    const handleMovieChange = (e: SyntheticEvent) => {
        const movieInput = e.target as HTMLInputElement;
        console.log("change in movieInput: ", movieInput.value);
        setMovie(movieInput.value);
    };

    const handleDirectorChange = (e: SyntheticEvent) => {
        const directorInput = e.target as HTMLInputElement;
        console.log("change in directorInput: ", directorInput.value);
        setDirector(directorInput.value);
    };

    const handleDurationChange = (e: SyntheticEvent) => {
        const durationInput = e.target as HTMLInputElement;
        console.log("change in durationInput: ", durationInput.value);
        setDuration(durationInput.valueAsNumber);
    };

    const handleImageChange = (e: SyntheticEvent) => {
        const imageInput = e.target as HTMLInputElement;
        console.log("change in imageInput: ", imageInput.value);
        setImage(imageInput.value);
    };

    const handleDescriptionChange = (e: SyntheticEvent) => {
        const descriptionInput = e.target as HTMLInputElement;
        console.log("change in descriptionInput: ", descriptionInput.value);
        setDescription(descriptionInput.value);
    };

    const handleBudgetChange = (e: SyntheticEvent) => {
        const budgetInput = e.target as HTMLInputElement;
        console.log("change in budgetInput: ", budgetInput.value);
        setBudget(budgetInput.valueAsNumber);
    };

    return (
        <div>
            <h1>Ajouter un film</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="movie">Titre</label>
                <input
                    value={movie}
                    type="text"
                    id="movie"
                    name="movie"
                    onChange={handleMovieChange}
                    required 
                />

                <label htmlFor="director">Directeur du film</label>
                <input
                    value={director}
                    type="text"
                    id="director"
                    name="director"
                    onChange={handleDirectorChange}
                    required 
                />

                <label htmlFor="duration">Durée du film</label>
                <input
                    value={duration}
                    type="number"
                    id="duration"
                    name="duration"
                    onChange={handleDurationChange}
                    required 
                />

                <label htmlFor="image">Image</label>
                <input
                    value={image}
                    type="image"
                    id="image"
                    name="image"
                    onChange={handleImageChange} 
                />

                <label htmlFor="description">Description du film</label>
                <input
                    value={description}
                    type="text"
                    id="description"
                    name="description"
                    onChange={handleDescriptionChange}
                />

                <label htmlFor="budget">Budget de réalisation du film (en millions)</label>
                <input
                    value={budget}
                    type="number"
                    id="budget"
                    name="budget"
                    onChange={handleBudgetChange}
                />

                <button type="submit">Ajouter le film</button>  
            </form>
        </div>
    );
};

export default AddMoviePage;