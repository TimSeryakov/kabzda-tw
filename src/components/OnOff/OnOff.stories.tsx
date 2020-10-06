import React, {useState} from 'react';
import './../../styles/index.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
  title: 'OnOff stories',
  component: OnOff,
};

const callbackFn = action('Clicked!')

export const OnMode = () => <OnOff value={true} setOnOffValue={callbackFn}/>
export const OffMode = () => <OnOff value={false} setOnOffValue={callbackFn}/>

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true)
  return <OnOff value={value} setOnOffValue={() => setValue(!value)}/>
}