import Panel from "./panel";
import variants from "../utils/variant-utils"

function Colors() {

    const colors = () => {

        return variants.map((variant, i) =>
            <li key={i} class={`text-${variant}`}>{`.text-${variant}`}</li>
        );
    }

    return (
        <Panel title="Colors">
            <Panel.Col12>
                <ul>
                    {colors()}
                </ul>
            </Panel.Col12>
        </Panel>
    );
}

export default Colors;
