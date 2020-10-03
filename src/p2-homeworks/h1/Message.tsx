import React from "react";
import kote from "./../../img/kote.png"
import style from "./Message.module.css"

type messageDataPropsType = {
    avatar:string;
    name:string;
    message:string;
    time:string;
};


function Message(props:messageDataPropsType) {
    return (
        <div className={style.app}>
            <div className={style.avatar}>
                <img src={kote} alt="the best cat in the world"/>
                {props.avatar}
            </div>
            <div className={style.messageWrapper}>
                <span className={style.tooltip}></span>
                {/*{`${styleContainer.container} ${style.headerContainer}` }*/}
                <p>{props.name}</p>
                <p>{props.message}</p>
                <div className={style.time}>
                    {props.time}
                </div>
            </div>
        </div>
    );
}

export default Message;
