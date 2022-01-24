import { Recipe } from "../models/recipe";
import { RecipeALEX} from "../models/recipe"



interface Props {
    recipe: RecipeALEX;
}

export function Result({recipe}: Props) {
   
    return(
        <div className="Result">
                <h2 id="Recipe-Name">{recipe.name}</h2>
                <img src={recipe.img} alt="" id="Recipe-Thumbnail"/>
                <p id="Recipe-Description">{recipe.text}</p>
                <img src="http://cdn.onlinewebfonts.com/svg/img_92354.png" alt="" id="Star-Icon" />
                <br></br>
                <p></p>
        </div>
    )
}