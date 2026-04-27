import type { Job } from "@/data/mockJobs";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import styles from "./JobRow.module.scss";

type Props = {
  job: Job;
};

import nextLogo from "../../public/images/next.png";
import victoriaSecretLogo from "../../public/images/victoria-secret.png";
import joulesLogo from "../../public/images/joules.png";
import gapLogo from "../../public/images/gap.png";
import lipsyLogo from "../../public/images/lipsy.png";
import cathKidstonLogo from "../../public/images/cath-kidston.png";
import madeLogo from "../../public/images/made.png";

const getBrandLogo = (brand: Job["brand"]): StaticImageData | null => {
  switch (brand) {
    case "NEXT":
      return nextLogo;
    case "Victoria’s Secret":
      return victoriaSecretLogo;
    case "JOULES":
      return joulesLogo;
    case "GAP":
      return gapLogo;
    case "LIPSY":
      return lipsyLogo;
    case "Cath Kidston":
      return cathKidstonLogo;
    case "MADE":
      return madeLogo;
    default:
      return null;
  }
};

export function JobRow({ job }: Props) {
  const brandLogo: StaticImageData | null = getBrandLogo(job.brand);
  return (
    <div className={styles.row}>
      <div className={styles.left}>
        <div className={styles.title}>{job.title}</div>
        <div className={styles.team}>{job.team}</div>
      </div>
      <div className={styles.brand}>
        {brandLogo ? (
          <Image className={styles.logo} src={brandLogo} alt={job.brand} />
        ) : (
          job.brand
        )}
      </div>
      <div className={styles.location}>{job.location}</div>
      <div className={styles.action}>
        <Link
          className={styles.viewJob}
          href={job.link}
          aria-label={`View job: ${job.title}`}
        >
          View job
        </Link>
      </div>
    </div>
  );
}
