"use client";

import { Checkbox } from "@mui/material";
import styles from "./ListContent.module.scss";
import { useEffect, useState } from "react";
import { useUpdateIsDoneMutation } from "@/services/home/mutations/useHomeMutations";
import useHandleIsDoneChange from "@/hooks/useHandleIsDoneChange/useHandleIsDoneChange";

interface IProps {
  toDo: IToDo;
}

function ListContent({ toDo }: IProps): JSX.Element {
  const { checked, handleChange } = useHandleIsDoneChange(toDo);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>To do</div>
          <div className={styles.toDoConatiner}>
            <div className={styles.toDO}>{toDo.toDo}</div>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
              className={styles.checkBox}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ListContent;
