import React, { useEffect } from "react";
import { Recetas } from "../recetas/Recetas.jsx";
import { Sidebar } from "../sidebar/Sidebar.jsx";
import { CrearReceta } from "../CrearReceta/CrearReceta";
import styles from "../styles/Home.module.css"

export const Home = (props) => {
  useEffect(() => {
    window.setTimeout(() => {
      console.log("Estableciendo conexión...");
    }, 1000);
  }, []);

  return(
    <div className={styles.container}>
      <div className={styles.sidebarRow}>
        <div className={styles.sidebarColumn}>
          <Sidebar />
        </div>
        <CrearReceta />

        <div className={styles.recetasColumn}>
          <Recetas />
        </div>
      </div>
    </div>
  );
};
