import Layout from '../components/layout';
import styles from '../styles/contact-us.module.css';
export default function aboutUs(){
    return (
        <Layout page={5}>
            <section className={styles.section1}>
                <div className={styles.sec1Card1}>
                    <h2>Contact us</h2>
                    <p>Your <span>connection</span> to Shah group.</p>
                </div>
            </section>
        </Layout>
       );
}