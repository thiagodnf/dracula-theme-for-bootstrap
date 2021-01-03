function Panel(props) {

    return (
        <div class="mt-5">
            <h3>{props.title}</h3>
            <hr class="bg-light"/>
            <div class="row mt-3">
                {props.children}
            </div>
        </div>
    );
}

Panel.Col12 = (props) => {
    return (
        <div class="col-12">
            {props.children}
        </div>
    );
}

export default Panel;
