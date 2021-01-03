import Panel from "./panel";
import StringUtils from "../utils/string-utils"
import variants from "../utils/variant-utils"

function Badges() {

    const defaultBadges = () => {

        return variants.map((variant, i) =>
            <span class={`badge badge-${variant} mr-2`}>{StringUtils.capitalize(variant)}</span>
        );
    }

    const pillBadges = () => {

        return variants.map((variant, i) =>
            <span class={`badge badge-pill badge-${variant} mr-2`}>{StringUtils.capitalize(variant)}</span>
        );
    }

    return (
        <Panel title="Badges">
            <Panel.Col12>
                {defaultBadges()}
            </Panel.Col12>
            <Panel.Col12>
                {pillBadges()}
            </Panel.Col12>
        </Panel>
    );
}

export default Badges;
