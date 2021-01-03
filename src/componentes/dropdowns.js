import Panel from "./panel";
import StringUtils from "../utils/string-utils"
import variants from "../utils/variant-utils"

function Dropdowns() {

    const getButton = (i, type, variant) => (
        <div key={i} class="btn-group mr-2">
            <button type="button" class={`btn ${type}-${variant} dropdown-toggle`} data-toggle="dropdown">
                {StringUtils.capitalize(variant)}
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
            </div>
        </div>
    );

    const getButtonsWithAllVariants = (type) => {

        return variants.map((variant, i) =>
            getButton(i, type, variant)
        );
    }

    return (
        <div>
            <Panel title="Default Dropdowns">
                <Panel.Col12>
                    {getButtonsWithAllVariants("btn")}
                </Panel.Col12>
                <Panel.Col12>
                    {getButtonsWithAllVariants("btn-outline")}
                </Panel.Col12>
            </Panel>
        </div>
    );
}

export default Dropdowns;
