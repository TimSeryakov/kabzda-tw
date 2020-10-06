import React from "react";

type PropsType = {
    value: boolean
    setOnOffValue: () => void
}


export function OnOff(props: PropsType) {


  const onStyle = `cursor-pointer mx-3 w-16 h-16 border-4 border-black inline-block pt-4 rounded-md ${props.value ? "bg-green-500" : "bg-white"}`
  const offStyle = `cursor-pointer mx-3 w-16 h-16 border-4 border-black inline-block pt-4 rounded-md ${props.value ? "bg-white" : "bg-red-500"}`
  const indicatorStyle = `mx-3 text-5xl` // ${props.value ? "bg-green-800" : "bg-red-600"}



    return (
        <div className="inline-block mb-16 font-bold text-center">
            <div className={onStyle} onClick={props.setOnOffValue}>On</div>
            <div className={offStyle} onClick={props.setOnOffValue}>Off</div>
            <div className={indicatorStyle}>{props.value ? "🔊" : "🔈"}</div>
        </div>
    )
}

export default OnOff;