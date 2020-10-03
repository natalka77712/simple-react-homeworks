import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import style from "./../h2/Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data:  Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter("all")};
    const setHigh = () => {props.setFilter("high")};
    const setMiddle = () => {props.setFilter("middle")};
    const setLow = () => {props.setFilter("low")};

    return (
        <div className={style.secondBlock}>
            {mappedAffairs}
            <div className={style.buttonsWrapper}>
                <button className={style.button} onClick={setAll}>All</button>
                <button className={style.button} onClick={setHigh}>High</button>
                <button className={style.button} onClick={setMiddle}>Middle</button>
                <button className={style.button} onClick={setLow}>Low</button>
            </div>
        </div>
    );
}

export default Affairs;
