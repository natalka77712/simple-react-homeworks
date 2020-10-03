import React from "react";
import {AffairType} from "./HW2";
import style from "./../h2/Affair.module.css"

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id);
    }
        return (
            <div className={style.affairWrapper}>
                <div className={style.affair}>{props.affair.name}</div>
                <button className={style.deleteButton} onClick={deleteCallback}>X</button>
            </div>
        );
    }

export default Affair;
