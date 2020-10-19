import React, {KeyboardEvent, useEffect, useState} from 'react'

type ItemType = {
  title: string
  value: any
}

type SelectPropsType = {
  value?: any
  onChange: (value: any) => void
  items: Array<ItemType>
}

export function Select (props: SelectPropsType) {
  const [active, setActive] = useState(false)
  const toggleItems = () => setActive(!active)
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

  useEffect( () => {
    setHoveredElementValue(props.value)
  }, [props.value])

  const onItemClickHandler = (value: any) => {
    props.onChange(value);
    toggleItems()
  }
  const selectedItem = props.items.find(i => i.value === props.value)
  const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElementValue) {
          const potentialElement = e.key === "ArrowDown"
          ? props.items[i + 1]
          : props.items[i - 1]

          if (potentialElement) {
            props.onChange(potentialElement.value)
            return
          }
        }
      }
      if (!selectedItem) {
        props.onChange(props.items[0].value)
      }
    }

    if (e.key === "Enter" || e.key === "Escape") {
      setActive(false)
    }
  }

  return (

        <div className="relative inline-block w-32 mx-1 text-xl rounded-md rounded-b-none" onKeyUp={onKeyUp} tabIndex={0}>

          <h4
              onClick={toggleItems}
              className={`select-none cursor-pointer px-3 py-1 bg-red-400 rounded-md ${active && "rounded-b-none"} ${!selectedItem && "text-red-400"}`}>
              {selectedItem ? selectedItem.title : "-- none --"}
          </h4>

          { active &&
            <div
                className={`absolute w-full bg-gray-100 py-1 rounded-md block ${active && "rounded-t-none"}`}>
                {props.items.map(i => <div
                                           className={`px-3 py-1 w-full cursor-pointer select-none border-t border-b border-gray-100
                                                      ${(hoveredItem === i) && "bg-red-200 border-t border-b border-dashed border-red-300"}`}
                                           key={i.value}
                                           onMouseEnter={() => {setHoveredElementValue(i.value)}}
                                           onClick={() => {onItemClickHandler(i.value)}}
                                       >
                                          {i.title}
                                      </div>)}
            </div>
          }
        </div>

  )
}