import style from "./header.module.css";

export function Header({title = ""}){
    return(
        <h1 className={style.header_container}>{title}</h1>
    )
}