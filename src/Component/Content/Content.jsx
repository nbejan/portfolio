import css from './Content.module.css'
import pic from '../img/pic.png'



function Content() {
    return ( 
        <div className={css.content}>
            <div className={css.about}>
                <img className={css.about_img} src={pic} alt="pic" />
                <div className={css.cont_abt_info}>
                    <h1 className={css.cont_abt_info_title}>Webflow Expert</h1>
                </div>
            </div>
        </div>
     );
}

export default Content;