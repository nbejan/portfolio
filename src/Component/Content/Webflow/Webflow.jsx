import css from './Webflow.module.css'
import img from "../../img/webflow.png";
function Webflow() {
    return (
        <div className={css.webflow}>
            <img src={img} alt="webflow" className={css.webflow_img} />
            <div className={css.webflow_info}>
                <span className={css.webflow_info_title}>About Webflow</span>
                <h1 className={css.webflow_info_head}>Website Without The Dev Time</h1>
                <b className={css.webflow_info_stext}>Provides a full service range</b>
                <p className={css.webflow_info_text}>Ability to put themselves in the merchant's shoes. It is {<br/>} meant to partner on the long run, and work as an extension{<br/>} of the merchant's team.</p>
            </div>
        </div>
    );
}

export default Webflow;