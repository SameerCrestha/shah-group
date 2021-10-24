import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/contact-us.module.css';
import icons from '../public/logos/exporter';
import Form from "../components/form";
export default function aboutUs(){
    return (
        <Layout page={5}>
            <section className={styles.section1}>
                <div className={styles.sec1Card1}>
                    <h2>Contact us</h2>
                    <p>Your <span>connection</span> to Shah group.</p>
                </div>
                <ul className={styles.sec1Card2}>
                        <li><Image src={icons.mail} width={18} height={18} alt="icon"/><a href="fb.com" target="_blank">contact@gmail.com</a></li>
                        <li><Image src={icons.fb} width={18} height={18} alt="icon"/><a href="fb.com" target="_blank">Facebook</a></li>
                        <li><Image src={icons.twitter} width={18} height={18} alt="icon"/><a href="fb.com" target="_blank">Twitter</a></li>
                        <li><Image src={icons.linkedin} width={18} height={18} alt="icon"/><a href="fb.com" target="_blank">LinkedIn</a></li>
                        <li><Image src={icons.insta} width={18} height={18} alt="icon"/><a href="fb.com" target="_blank">Instagram</a></li>
                        <li><Image src={icons.phone} width={18} height={18} alt="icon"/><a href="fb.com" target="_blank">9856669377</a></li>
                </ul>
            </section>
            <section className={styles.section2}>
                <div className={styles.sec2Card1}>
                    <div className={styles.sec2Card1Line1}>For enquiries ,please send us the form below</div>
                    <Form/>
                </div>
            </section>
        </Layout>
       );
}