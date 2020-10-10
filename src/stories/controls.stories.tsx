import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes, useRef, useState} from 'react'

export default {
  title: "controls"
}
export const UncontrolledInput = () => <input className="border border-orange-500 rounded-sm"/>

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("")
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

  return <><input className="border" onChange={onChangeHandler}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const save = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }
  return <>
    <input className="bg-blue-500 p-1 rounded-md"
      ref={inputRef}
    /> - <button onClick={save} className="bg-orange-500 p-1 rounded-md">
    Save
  </button> - {value}</>
}

export const ControlledInput = () => {
  const [valueFromParent, setValueFromParent] = useState<string>("")
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValueFromParent(e.currentTarget.value)
  }

  return <input className={"border"} value={valueFromParent} onChange={onChangeHandler} />
}

export const ControlledCheckbox = () => {
  const [valueFromParent, setValueFromParent] = useState<boolean>(false)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValueFromParent(e.currentTarget.checked)
  }

  return <input type="checkbox" checked={valueFromParent} onChange={onChangeHandler} />
}

export const ControlledSelect = () => {
  const [valueFromParent, setValueFromParent] = useState<string | undefined>(undefined)
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setValueFromParent(e.currentTarget.value)
  }

  return <select value={valueFromParent} onChange={onChangeHandler}>
    <option>none</option>
    <option value="1">Minsk</option>
    <option value="2">Moscow</option>
    <option value="3">Kiev</option>
  </select>
}



export const ControlledInputWithFixedValue = () => <input className="border"/>