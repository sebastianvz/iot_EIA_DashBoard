import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Header.module.css";

import { BsCheckAll } from "react-icons/bs";

export default function Message(props) {
  return (
    <div className={styles.continer_message} key={props.key}>
      <BsCheckAll
        key={props.key + "svg" + 1}
        className="icon_bar"
        style={{ color: "black", marginRight: "10px" }}
      ></BsCheckAll>
      <div className={styles.client_test} key={props.key + "test" + 1}>
        {props?.sender}:
      </div>
      <div className={styles.text_message} key={props.key + "mes" + 2}>
        {props?.message}
      </div>
    </div>
  );
}
