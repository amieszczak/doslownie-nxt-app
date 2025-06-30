/* import styles from "./metricUnit.module.css";
import classes from "../../page.module.css"; */
import Image from "next/image";

export default function Metric({ src, alt, title, description}: {src: string, alt: string, title: string, description: string}) {
  return (
    <div className="flex flex-col items-center">
      <div /* className={styles.metricIcon} */>
        <Image src={src} alt={alt} width={70} height={70} />
      </div>
      <div /* className={styles.metricInfo} */ className="flex flex-col items-center">
        <h2 /* className={classes.paragraphPrimary} */ className="text-xl font-bold py-5">{title}</h2>
        <p /* className={classes.paragraphTertiary} */>{description}</p>
      </div>
    </div>
  );
}