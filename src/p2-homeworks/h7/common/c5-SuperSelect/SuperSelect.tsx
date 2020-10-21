import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import style from "./SuperSelect.module.css";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((t, index) => {
            return <option key={index}> {t}</option>
        })
        : [];  // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        let item = e.currentTarget.value;
        onChange && onChange(e);
        onChangeOption && onChangeOption(item)
    }

    return (
        <select className={style.select} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    );
}

export default SuperSelect;
