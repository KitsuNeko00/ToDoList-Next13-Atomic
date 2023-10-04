import styles from "./Loading.module.scss";
import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

function Loading() {
  return (
    <div className={styles.container}>
      <FadeLoader color="#36d7b7" className={styles.loading} />
      <div className={styles.loadingText}>로딩중입니다...</div>
    </div>
  );
}

export default Loading;
