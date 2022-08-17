import pic from '../../img/pic.png'
import { Button } from 'react-bootstrap';
import css from './About.module.css'


function About() {
    return (
        <div>
            <div className={css.about}>
                <img className={css.about_img} src={pic} alt="pic" />
                <div className={css.cont_abt_info}>
                    <h3 className={css.cont_abt_info_title}>Webflow Expert</h3>
                    <h1 className={css.cont_abt_info_h1}>Making Digital Products</h1>
                    <p className={css.cont_abt_info_p}>Agency provides a full service range including technical<br /> skills, design, business understanding.</p>
                    <button className={css.cont_abt_info_btn + " " + css.exp} >Explore Work</button>
                    <Button className={css.btn} variant="outline-light">Contact me</Button>
                </div>

                
            </div>
        </div>
    );
}

export default About;