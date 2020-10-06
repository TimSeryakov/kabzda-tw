import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClickMyFn: () => void
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendered")
        return (
            <div className="px-3 bg-gray-200 border-4 border-black rounded-md">
                <AccordionTitle title={props.titleValue} onClick = {props.onClickMyFn}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        );
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 className="p-3 text-xl font-bold cursor-pointer" onClick={props.onClick} >{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul className="pb-3 font-bold text-left">
            <li className="py-1">✔ Cандерс Баскет оригинальный</li>
            <li className="py-1">✔ Шефбургер де Люкс оригинальный</li>
            <li className="py-1">✔ Твистер оригинальный</li>
        </ul>
    );
}
