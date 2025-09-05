import {simpsons} from "../../data/data.ts";
import {CharacterComponent} from "../CharacterComponent/CharacterComponent.tsx";


export const FamilyComponent = () => {
    return (
        <div>
            {simpsons.map((item, index) => <CharacterComponent item={item} key={index}>
                {item.info}
                </CharacterComponent>
            )}
        </div>
    )
}