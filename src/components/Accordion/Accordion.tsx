import React from "react";
type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
  items: Array<AccordionBodyItemsType>
  onClickFn: (value: any) => void
}

type AccordionBodyType = {
  items: Array<AccordionBodyItemsType>
  onClickFn: (value: any) => void
}

type AccordionBodyItemsType = {
  title: string
  value: any
}

export const Accordion = React.memo(AccordionSecret)

export function AccordionSecret(props: AccordionPropsType) {
  return (
      <div className="px-3 bg-gray-200 border-4 border-black rounded-md">
        <AccordionTitle title={props.titleValue} onClick={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClickFn={props.onClickFn}/>}
      </div>
  );
}

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
      <h3 className="select-none p-3 text-xl font-bold cursor-pointer text-center" onClick={props.onClick}>{props.title}</h3>
  )
}

function AccordionBody(props: AccordionBodyType) {
  return (
      <ul className="pb-3 font-bold text-left">
        {props.items.map((i, index) => {
          return (
              <li
                  key={index}
                  className="py-2 px-2"
                  onClick={() => {props.onClickFn(i.value)}}
              >
                  ✔ {i.title}
              </li>)
          })
        }
      </ul>
  );
}
