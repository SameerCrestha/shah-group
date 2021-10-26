import Image from "next/image";
import Layout from '../components/layout';
import styles from '../styles/services.module.css';
import checkSquare from "../public/logos/check-square.png"
import FeatureCard from "../components/featureCard";
import pics from "../public/services/exporter";
export default function aboutUs(){
    return (
        <Layout page={4}>
        <section className={styles.section1}>
            <div className={styles.sec1Container}>
                <h2>Our services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus morbi scelerisque id tellus eu elit.</p>
            </div>
        </section>
        <section className={styles.section2}>
            <h3 className={styles.sec2Header}>Features</h3>
            <div className={styles.sec2Container}>
                <div>
                <FeatureCard pic={checkSquare} title="Quality Assurance" detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit ipsum lacinia id ultrices vel. Lectus et consequat, ut ullamcorper."/>
                </div>
                <div>
                <FeatureCard pic={checkSquare} title="Quality Assurance" detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit ipsum lacinia id ultrices vel. Lectus et consequat, ut ullamcorper."/>
                </div>
                <div>
                <FeatureCard pic={checkSquare} title="Quality Assurance" detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit ipsum lacinia id ultrices vel. Lectus et consequat, ut ullamcorper."/>
                </div>
                <div>
                <FeatureCard pic={checkSquare} title="Quality Assurance" detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit ipsum lacinia id ultrices vel. Lectus et consequat, ut ullamcorper."/>
                </div>
            </div>
        </section>
        <section className={styles.section3}>
            <h3>More about our services</h3>
            <p>
            <div className={styles.pic1}>
                <Image src={pics.sec3pic1} layout="responsive"/>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nunc id cursus elit. Volutpat etiam lectus mi dis pretium, amet, facilisis lacinia adipiscing. Turpis dolor justo, volutpat, lacinia id dictumst. Metus fames imperdiet tristique massa. Amet non dolor nunc sapien porttitor eu, in.
Aliquam, non feugiat dui feugiat odio molestie semper. Quam ullamcorper pellentesque adipiscing et arcu, cursus. A in a ut facilisis facilisis aliquam adipiscing. Turpis lectus fusce ullamcorper at. Vitae lobortis tortor risus lectus orci, sed nunc arcu a. Sed tincidunt justo, sodales libero feugiat malesuada porttitor donec et. Consequat quis magna amet, lectus faucibus sed congue augue. Habitasse ultricies ut mattis etiam pellentesque facilisi euismod. Eros sodales elit eu nulla. Eget sem quis orci ac tortor. Justo netus elit et ultrices sit faucibus arcu, fames. Sit non adipiscing sed placerat viverra. Massa facilisi risus est, nunc at. Eget tempor lectus erat erat magnis tempor. Tristique est facilisis scelerisque cras sit.
            </p>
            
            <p>
            <div className={styles.pic2}>
                <Image src={pics.sec3pic2} layout="responsive"/>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nunc id cursus elit. Volutpat etiam lectus mi dis pretium, amet, facilisis lacinia adipiscing. Turpis dolor justo, volutpat, lacinia id dictumst. Metus fames imperdiet tristique massa. Amet non dolor nunc sapien porttitor eu, in.
Aliquam, non feugiat dui feugiat odio molestie semper. Quam ullamcorper pellentesque adipiscing et arcu, cursus. A in a ut facilisis facilisis aliquam adipiscing. Turpis lectus fusce ullamcorper at. Vitae lobortis tortor risus lectus orci, sed nunc arcu a. Sed tincidunt justo, sodales libero feugiat malesuada porttitor donec et. Consequat quis magna amet, lectus faucibus sed congue augue. Habitasse ultricies ut mattis etiam pellentesque facilisi euismod. Eros sodales elit eu nulla. Eget sem quis orci ac tortor. Justo netus elit et ultrices sit faucibus arcu, fames. Sit non adipiscing sed placerat viverra. Massa facilisi risus est, nunc at. Eget tempor lectus erat erat magnis tempor. Tristique est facilisis scelerisque cras sit.
            </p>
        </section>
        </Layout>
       );
}