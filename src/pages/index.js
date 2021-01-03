import Navbar from "../componentes/navbar";
import Footer from "../componentes/footer";
import Buttons from "../componentes/buttons";
import Dropdowns from "../componentes/dropdowns";
import SplitButtons from "../componentes/split-buttons";
import Badges from "../componentes/badges";
import Colors from "../componentes/colors";
import Links from "../componentes/links";
import Tabs from "../componentes/tabs";
import Breadcrumb from "../componentes/breadcrumb";
import Pagination from "../componentes/pagination";
import Alerts from "../componentes/alerts";

const style = {
    marginTop: "70px",
};

function Index() {

    return (
        <div>
            <Navbar />
            <div class="container-fluid" style={style}>
                <Buttons />
                <Dropdowns/>
                <SplitButtons/>
                <Badges/>
                <Colors/>
                <Links/>
                <Tabs />
                <Breadcrumb />
                <Pagination />
                <Alerts />
            </div>
            <Footer/>
        </div>
    );
}

export default Index;
