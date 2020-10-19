import React, {useState} from 'react';
import './../../styles/index.css'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Select} from "./Select";

export default {
  title: 'Select stories',
  component: Select,
};




export const WithValue = () => {
  const [selectValue, setSelectValue] = useState("1")
  return <Select onChange={setSelectValue}
          value={selectValue}
          items={[
            {value: "1", title: "Minsk"},
            {value: "2", title: "Moscow"},
            {value: "3", title: "Kiev"}
          ]}
  />
}

export const WithoutValue = () => {
  const [selectValue, setSelectValue] = useState(null)
  return <Select onChange={setSelectValue}
                 value={selectValue}
                 items={[
                   {value: "1", title: "Minsk"},
                   {value: "2", title: "Moscow"},
                   {value: "3", title: "Kiev"}
                 ]}
  />
}