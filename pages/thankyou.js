import { useRouter } from 'next/router'
import { useEffect } from 'react';
import styles from "../styles/thankyou.module.css"
export default function Thankyou(){
    const router=useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/");
        },4000)
    },[]);
    return(
        <div className={styles.container}>
            <h1>Your form has been submitted</h1>
            <p>Redirecting to home page...</p>
        </div>
        );
    
}