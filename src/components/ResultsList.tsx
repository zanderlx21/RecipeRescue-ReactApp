import { Recipe, RecipeALEX } from "../models/recipe";
import { Result } from "./Result";

interface Props {
    recipes: RecipeALEX[];
}

export function ResultsList({ recipes }: Props) {
// const [gif, setGif] = useState<Giphy[]>([]);

    return(
        <div className="ResultsList">
            <h2 id="ResultsHeader"> Here's some options for you...</h2>
            {recipes.map((recipe, i) => ( 
            <Result key={i} recipe={recipe}/>
            ))}
        </div>
    )
    }
