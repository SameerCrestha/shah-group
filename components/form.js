import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "./form.module.css";
export default function Form(){
    
    
    return(
        <form className={styles.container} action="https://formsubmit.co/ddav.crestha@gmail.com" method="POST" >
        {/* {success?<div className={styles.message}>Message sent</div>:""} */}
        <input type="hidden" name="_subject" value="Enquiry"/>
        <input type="hidden" name="_next" value="https://localhost:3000/thankyou"/>
        <input type="hidden" name="_captcha" value="false"/>
        <input type="hidden" name="_template" value="table"/>
        <input type="text" name="_honey" className={styles.hide}/>
        <div className={styles.formRow1}>
            <div className={styles.formCell}>
            <label htmlFor="fname">First name</label>
            <input type="text" id="fname" name="First Name"/>
            </div>
            <div className={styles.formCell}>
            <label htmlFor="lname">Last name</label>
            <input type="text" id="lname" name="Last Name"/>    
            </div>
        </div>
        <div className={styles.formCell}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="Email"/>
        </div>
        <div className={styles.formCell}>
        <label htmlFor="message">Message</label>
        <input type="text" id="message" name="Message" />
        </div>
        <div className={styles.formCell}>
        <label htmlFor="detail">Additional Details</label>
        <textarea id="detail" name="Additional Details" rows="10" />
        </div>
        <div className={styles.formRowLast}>
        <button type="submit">Send Message</button>
        </div>
    </form>
    );
}