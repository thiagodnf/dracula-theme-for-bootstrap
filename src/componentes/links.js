import Panel from "./panel";
import variants from "../utils/variant-utils"

function Links() {

    const links = () => {

        return variants.map((variant, i) =>
            <li key={i}>This is a <a href="#" class={`text-${variant}`}>{variant}</a> link</li>
        );
    }

    return (
        <Panel title="Links">
            <Panel.Col12>
                <ul>
                    {links()}
                </ul>
            </Panel.Col12>
        </Panel>
    );
}

export default Links;
