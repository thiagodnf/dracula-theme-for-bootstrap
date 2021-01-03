import Panel from "./panel";
import StringUtils from "../utils/string-utils"
import variants from "../utils/variant-utils"

function Buttons() {

    const getButton = (i, type, variant, state) => (
        <button key={i} type="button" class={`btn ${type}-${variant} ${state} mr-2`}>{StringUtils.capitalize(variant)}</button>
    );

    const getButtonsWithAllVariants = (type, state) => {

        return variants.map((variant, i) =>
            getButton(i, type, variant, state)
        );
    }

    const getDefaultButtons = (type, states) => {

        return states.map((state, i) =>
            getButtonsWithAllVariants(type, state)
        );
    }

    return (
        <div>
            <Panel title="Buttons">
                <Panel.Col12>
                    <p>Styles</p>
                </Panel.Col12>
                <Panel.Col12>
                    {getDefaultButtons("btn", ["", "disabled", "active"])}
                </Panel.Col12>

            </Panel>
            <Panel title="Outline Buttons">
                {getDefaultButtons("btn-outline", ["", "disabled", "active"])}
            </Panel>
        </div>
    );

}

export default Buttons;
