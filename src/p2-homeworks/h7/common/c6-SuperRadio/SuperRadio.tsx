import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import style from "./SuperRadio.module.css";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let item = e.currentTarget.value;
        onChange && onChange(e);
        onChangeOption && onChangeOption(item)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + "-" + i}>
            <input
                className={style.radio}
                type={"radio"}
                name={name}
                value={o}
                onChange={onChangeCallback}
                checked={o === value}
                // name, checked, value, onChange
            />
            <span className={style.radioButton}>{o}</span>
        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
