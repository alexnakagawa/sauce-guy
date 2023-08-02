import { MaterialType } from "./materials"

interface IngredientType {
    material: MaterialType;
    quantity: string;

}

interface MandatoryIngredientType extends IngredientType {
    optional: true;
}

interface OptionalIngredientType extends IngredientType {
    optional: false;
}

export type RecipeType = {
    name: string;
    ingredients: Array<MandatoryIngredientType | OptionalIngredientType>;
    description: string;
    type: string;
    foodPairings: string[];
}

export const recipes: Array<RecipeType> = [
    {
        name: "Fry Sauce",
        ingredients: [
            {
                material: {
                    id: 4,
                    name: "Ketchup"
                },
                quantity: "1 part",
                optional: false,
            },
            {
                material: {
                    id: 5,
                    name: "Mayo"
                },
                quantity: "2 parts",
                optional: false,
            },
        ],
        description: "A different take on a sauce to dip your fries into. ",
        type: "Dip",
        foodPairings: [
            "French Fries"     
        ]
    }
]