import { mockJobs } from "@/data/mockJobs";

import styles from "./JobListing.module.scss";
import { JobRow } from "../JobRow/JobRow";

export function JobListing() {
  return (
    <main className={styles.page}>
      <div className={styles.list} role="list">
        {mockJobs.map((job) => (
          <div key={job.id} role="listitem">
            <JobRow job={job} />
          </div>
        ))}
      </div>
    </main>
  );
}
