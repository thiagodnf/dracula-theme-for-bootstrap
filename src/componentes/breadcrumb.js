import Panel from "./panel";

function Breadcrumb() {

    const getBreadcrumb = (background, separator, color, selected) => (
        <nav>
            <ol className={`breadcrumb ${background} `}>
                <li className="breadcrumb-item"><a className={color} href="#">Home</a></li>
                <li className={`breadcrumb-item ${separator}`}><a className={color} href="#">Library</a></li>
                <li className={`breadcrumb-item ${separator} active`}><span className={selected}>Data</span></li>
            </ol>
        </nav>
    );

    return (
        <Panel title="Breadcrumb">
            <Panel.Col12>
                {getBreadcrumb()}
                {getBreadcrumb("bg-dark", "text-light", "text-primary", "text-secondary")}
                {getBreadcrumb("bg-dark", "text-light", "text-success", "text-secondary")}
                {getBreadcrumb("bg-dark", "text-light", "text-pink", "text-secondary")}
                {getBreadcrumb("bg-dark", "text-light", "text-orange", "text-secondary")}
                {getBreadcrumb("bg-info", "text-danger", "text-success", "text-orange")}
                {getBreadcrumb("bg-secondary", "text-light", "text-danger", "text-light")}
            </Panel.Col12>
        </Panel>
    );
}

export default Breadcrumb;
