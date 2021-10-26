import Image from "next/image";
import styles from "./featureCard.module.css";
export default function FeatureCard({title,detail,pic}){
    return(
        <div className={styles.container}>
            <div className={styles.pic}>
                <Image src={pic} alt="logo" layout="responsive" width="400"/>
            </div>
            <div className={styles.detail}>
                <h6>{title}</h6>
                <p>
               {detail}
                </p>
            </div>
        </div>
    )
}