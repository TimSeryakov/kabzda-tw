import React, {useState} from 'react';
import './../../styles/index.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
  title: 'Accordion stories',
  component: Accordion,
};

const callbackFn = action('Clicked!')

export const accordionOpen = () => <Accordion titleValue={"Accordion Open"} collapsed={false} onClickMyFn={callbackFn}/>
export const accordionClosed = () => <Accordion titleValue={"Accordion Closed"} collapsed={true} onClickMyFn={callbackFn}/>

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion titleValue={"Accordion in Action"} collapsed={value} onClickMyFn={() => setValue(!value)}/>
};