import { recipes } from '../../data/recipes'
import { For } from 'solid-js';

function RecipeList() {
    // TODO: need signal here?
    // const [recipes, setRecipes] = createSignal(r);
    return (
        <div class="flex flex-col">
            <For each={recipes}>
                {(recipe, _) =>
                <label class="flex gap-2">
                    <div>
                        <svg width="12" height="12"><circle cx="6" cy="6" r="4" stroke="currentColor" stroke-width="1" fill="transparent"></circle></svg>
                    </div>
                    <div>{recipe.name}</div>
                </label>}
            </For>
        </div>
    )
}

export default RecipeList