import React, { useState } from 'react';
import SearchForms from './SearchForms';
import { ResultsList } from './ResultsList'
import { Recipe } from '../models/recipe';
import { RecipeALEX }  from '../models/recipe';
import { text } from 'node:stream/consumers';

const Main = () => {
    const [recipes, setRecipes] = useState<RecipeALEX[]>([
        { 
        name: "Chicken Vesuvio", 
        type: "American", 
        img: "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sunt beatae, error perspiciatis voluptatibus"
        },
        { 
        name: "Chicken Paprikash", 
        type: "Not American", 
        img: "https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sunt beatae, error perspiciatis voluptatibus"
        },
        { 
        name: "Baked Chicken", 
        type: "For the kiddos", 
        img: "https://www.edamam.com/web-img/01c/01cacb70890274fb7b7cebb975a93231.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sunt beatae, error perspiciatis voluptatibus"
        },
        { 
        name: "Chicken Vesuvio", 
        type: "American", 
        img: "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sunt beatae, error perspiciatis voluptatibus"
        },
        { 
        name: "Chicken Paprikash", 
        type: "Not American", 
        img: "https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sunt beatae, error perspiciatis voluptatibus"
        },
        { 
        name: "Baked Chicken", 
        type: "For the kiddos", 
        img: "https://www.edamam.com/web-img/01c/01cacb70890274fb7b7cebb975a93231.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sunt beatae, error perspiciatis voluptatibus"
        },
        { 
        name: "Chicken Vesuvio", 
        type: "American", 
        img: "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sunt beatae, error perspiciatis voluptatibus"
        },
        { 
        name: "Chicken Paprikash", 
        type: "Not American", 
        img: "https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sunt beatae, error perspiciatis voluptatibus"
        },
        { 
        name: "Baked Chicken", 
        type: "For the kiddos", 
        img: "https://www.edamam.com/web-img/01c/01cacb70890274fb7b7cebb975a93231.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sunt beatae, error perspiciatis voluptatibus"
        },
        { 
        name: "Chicken Vesuvio", 
        type: "American", 
        img: "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sunt beatae, error perspiciatis voluptatibus"
        },
        { 
        name: "Chicken Paprikash", 
        type: "Not American", 
        img: "https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sunt beatae, error perspiciatis voluptatibus"
        },
        { 
        name: "Baked Chicken", 
        type: "For the kiddos", 
        img: "https://www.edamam.com/web-img/01c/01cacb70890274fb7b7cebb975a93231.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sunt beatae, error perspiciatis voluptatibus"
        },
    ]);

    const handleSubmitForm = () => {

    }

    return (
        <div className="Fixed-Header">
            <h1 id="App-Name-Header">Recipe Rescue!</h1>
            <SearchForms  onSubmit={handleSubmitForm}/>
            <ResultsList recipes={recipes}/>
        </div>
    )
}

export default Main;