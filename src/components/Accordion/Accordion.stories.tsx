import React, {useState} from 'react';
import './../../styles/index.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
  title: 'Accordion stories',
  component: Accordion,
};

const AccordionItems = [
  {title: "Cандерс Баскет оригинальный", value: 1},
  {title: "Шефбургер де Люкс оригинальный", value: 2},
  {title: "Твистер оригинальный", value: 3}
]

const callbackFn = action('Clicked!')
const onclickCb = action('Some item was clicked!')

export const accordionOpen = () => <Accordion titleValue={"Accordion Open"} collapsed={false} onChange={callbackFn} items={AccordionItems} onClickFn={onclickCb}/>
export const accordionClosed = () => <Accordion titleValue={"Accordion Closed"} collapsed={true} onChange={callbackFn} items={[]} onClickFn={onclickCb}/>

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion titleValue={"Accordion in Action"} collapsed={value} onChange={() => setValue(!value)}
                    items={AccordionItems}
                    onClickFn={(value) => alert(`user with ID ${value}`)}/>
};