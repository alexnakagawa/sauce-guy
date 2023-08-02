import { materials } from '../../data/materials'
import { For } from 'solid-js';

function MaterialList() {
    // TODO: signal needed here?
    // const [materials, setMaterials] = createSignal(m);
    return (
        <div class="flex flex-col">
            <For each={materials}>
                {(material, _) =>
                <label class="flex gap-2">
                    <div>
                        <svg width="12" height="12"><circle cx="6" cy="6" r="4" stroke="currentColor" stroke-width="1" fill="transparent"></circle></svg>
                    </div>
                    <div>{material.id}: {material.name}</div>
                </label>}
            </For>
        </div>
    )
}

export default MaterialList