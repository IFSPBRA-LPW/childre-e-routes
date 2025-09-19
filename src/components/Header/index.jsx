import { Link } from "react-router-dom";
import style from "./header.module.css";

export function Header({ title = "" }) {
  return (
    <div className={style.header_container}>
      <h1>{title}</h1>
      <nav>
        <ul className={style.links_list}>
          <li className={style.link_item}>
            <Link to="/">Home</Link>
          </li>
          <li className={style.link_item}>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li className={style.link_item}>
            <Link className={style.text_link} to="/contato">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
