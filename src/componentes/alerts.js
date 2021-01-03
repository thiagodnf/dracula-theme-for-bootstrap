import Panel from "./panel";
import StringUtils from "../utils/string-utils"
import variants from "../utils/variant-utils"

function Alerts() {

    const getSimpleAlert = (i, variant) => (
        <div key={i} class={`alert alert-${variant}`} role="alert">
            A simple {variant} alert—check it out!
        </div>
    );

    const getAlertsWithAllVariants = () => {

        return variants.map((variant, i) =>
            getSimpleAlert(i, variant)
        );
    }

    return (
        <Panel title="Alerts">
            <Panel.Col12>
                <p>Simple</p>
                {getAlertsWithAllVariants()}
            </Panel.Col12>
        </Panel>
    );
}

export default Alerts;
