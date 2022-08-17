import css from './Content.module.css'
import About from './Fragment/About';
import CardFeatures from './Fragment/AboutCards/CardFeatures';
import CardPro from "./Fragment/AboutCards/CardPro";
import CardAcces from "./Fragment/AboutCards/CardAcces";
import Webflow from './Webflow/Webflow';

function Content() {
    return ( 
        <div className={css.content}>
            <About />
            <div className={css.about_card}>
                    <CardFeatures />
                    <CardPro />
                    <CardAcces />
            </div>
            <Webflow />
        </div>
     );
}

export default Content;