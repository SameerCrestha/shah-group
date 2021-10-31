import Image from "next/image";
import styles from "./profileCard.module.css";
export default function ProfileCard({name,post,detail,pic}){
    return(
            <div className={styles.container}>
               <div className={styles.pic}>
                  <Image src={pic} layout="responsive" alt="profile pic"  />
               </div>
               <div className={styles.info}>
               <span>{name}</span><br/>
               <small>{post}</small>
               <p>
                {detail}
               </p>
               </div>  
            </div>
    );
}