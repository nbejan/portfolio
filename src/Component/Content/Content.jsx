import css from './Content.module.css'
import About from './Fragment/About';



function Content() {
    return ( 
        <div className={css.content}>
            <About />
        </div>
     );
}

export default Content;