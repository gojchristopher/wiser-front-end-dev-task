import type { Job } from "@/data/mockJobs";
import Image from "next/image";
import Link from "next/link";

import styles from "./JobRow.module.scss";

type Props = {
  job: Job;
};

export function JobRow({ job }: Props) {
  return (
    <div className={styles.row}>
      <div className={styles.left}>
        <div className={styles.title}>{job.title}</div>
        <div className={styles.team}>{job.team}</div>
      </div>

      <div className={styles.logoContainer}>
        <Image
          className={styles.logo}
          src={job.logoUrl}
          alt={job.brand}
          width={126}
          height={30}
        />
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
