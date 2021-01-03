import Panel from "./panel";
import StringUtils from "../utils/string-utils"
import variants from "../utils/variant-utils"

function SplitButtons() {

    const buttons = () => {

        return variants.map((variant, i) =>
            <div key={i} class="btn-group mr-2">
                <button type="button" class={`btn btn-${variant}`}>{StringUtils.capitalize(variant)}</button>
                <button type="button" class={`btn btn-${variant} dropdown-toggle dropdown-toggle-split`} data-toggle="dropdown">
                    <span class="sr-only">Toggle Dropdown</span>
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
    }

    return (
        <Panel title="Split Buttons">
            <Panel.Col12>
                {buttons()}
            </Panel.Col12>
        </Panel>
    );
}

export default SplitButtons;
