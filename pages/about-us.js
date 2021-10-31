import Layout from '../components/layout';
import styles from '../styles/about-us.module.css';
import ProfileCard from '../components/profileCard';
import profiles from '../public/about-us/profiles';
import bgsec1 from "../public/about-us/section1.png";
import Image from "next/image";
export default function aboutUs() {
  return (
    <Layout page={2}>
      <section className={styles.section1}>
      <Image src={bgsec1} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur"/>
        <div className={styles.sec1Container}>
          <div className={styles.sec1Row1}>
            <h2>
              Hi! We are <span className={styles.green}>Shah Group</span>
            </h2>
          </div>
          <div className={styles.sec1Row2}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
              aliquam dignissim urna porttitor egestas.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Ultricies aliquam dignissim
              urna porttitor egestas.
            </p>
          </div>
          <q className={styles.sec1Row3}>
            Lorem ipsum dolor sit amet, consectetur aascing elit.
          </q>
        </div>
      </section>
      <section className={styles.section2}>
        <h3>Our Story</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
          habitasse amet tortor, felis tristique. Placerat tortor consequat,
          rhoncus nunc. Nibh orci aliquam congue amet sapien elit nec eget ut.
          Mauris libero, enim, varius eget commodo ultricies. At porttitor
          pellentesque in nisl.
        </p>
        <p>
          Nunc a nisi, felis augue at ornare sed scelerisque cras. Vulputate leo
          id suspendisse nullam. Enim aenean posuere fringilla ipsum quam. Urna
          turpis scelerisque tempor vulputate risus quisque porta ut. In
          pellentesque quam id ipsum ullamcorper quam integer id.
        </p>
      </section>
      <section className={styles.section3}>
        <h3>What we bring to you</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
          habitasse amet tortor, felis tristique. Placerat tortor consequat,
          rhoncus nunc. Nibh orci aliquam congue amet sapien elit nec eget ut.
          Mauris libero, enim, varius eget commodo ultricies. At porttitor
          pellentesque in nisl.
        </p>
        <p>
          Nunc a nisi, felis augue at ornare sed scelerisque cras. Vulputate leo
          id suspendisse nullam. Enim aenean posuere fringilla ipsum quam. Urna
          turpis scelerisque tempor vulputate risus quisque porta ut. In
          pellentesque quam id ipsum ullamcorper quam integer id.
        </p>
      </section>
      <section className={styles.section4}>
        <h3>Meet the team</h3>
        <div>
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              post={profile.post}
              detail={profile.detail}
              pic={profile.pic}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
