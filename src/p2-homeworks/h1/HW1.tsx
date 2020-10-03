import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";


type PropsType= {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData = {
    avatar: "",
    name: "Kote",
    message: "Where is my mouse?",
    time: "01:00",
};

function HW1() {
    return (
        <div>
            <hr />
            homeworks 1
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            {/*<hr/>*/}
        </div>
    );
}

export default HW1;
