import styles from "./form.module.css";
export default function Form(){
    return(
        <form className={styles.container}>
        <div className={styles.formRow1}>
            <div className={styles.formCell}>
            <label htmlFor="fname">First name</label>
            <input type="text" id="fname" name="fname"/>
            </div>
            <div className={styles.formCell}>
            <label htmlFor="lname">Last name</label>
            <input type="text" id="lname" name="lname"/>    
            </div>
        </div>
        <div className={styles.formCell}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email"/>
        </div>
        <div className={styles.formCell}>
        <label htmlFor="message">Message</label>
        <input type="text" id="message" name="message" />
        </div>
        <div className={styles.formCell}>
        <label htmlFor="detail">Additional Details</label>
        <textarea id="detail" name="detail" rows="10" />
        </div>
        <div className={styles.formRowLast}>
        <button type="submit">Send Message</button>
        </div>
    </form>
    );
}