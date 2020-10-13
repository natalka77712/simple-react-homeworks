import React, {ChangeEvent, KeyboardEventHandler} from "react";
import style from "./Greeting.module.css";
import {KeyboardEvent} from 'react';

type GreetingPropsType = {
    name:string
    setNameCallback:(e:ChangeEvent<HTMLInputElement>) => void
    addUser:() => void
    error:string
    totalUsers:number
}

// презентационная компонента (для верстальщика)
const Greeting:React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? style.error : style.correct;

    const onKeyPress = (e:KeyboardEvent<HTMLElement>) => {
        if (e.charCode === 13) {
            addUser()
        }
    }

    return (
        <div className={style.greetingWrapper}>
            <div className={style.greetingInfo}>
                <span className={style.errorInfo}>{error}</span>
                <input value={name}
                       onChange={setNameCallback} onKeyPress={onKeyPress}
                       className={inputClass}/>
                <button className={style.addButton} onClick={addUser}>add</button>
                <span>Total users: {totalUsers}</span>
            </div>
        </div>
    );
}

export default Greeting;
