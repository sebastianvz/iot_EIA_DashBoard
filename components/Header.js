import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Header.module.css";

import { BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <div className={styles.container_header}>
      <BsBellFill
        className="icon_bar"
        style={{ color: "black", marginRight: "10px" }}
      ></BsBellFill>
      <FaUser className="icon_bar" style={{ color: "black" }}></FaUser>
    </div>
  );
}
