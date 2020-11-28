// useEffect - разбор компоненты Clock
// https://docs.google.com/document/d/1OXdTdFP5t-z-eDRWxI8WaV4oZ4rWvC4mOGLBqxmaKcY/edit

import React, {useEffect, useState} from "react";


export const Clock: React.FC = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => { // like componentWillUnmount() чистка мусора за собой
      clearInterval(intervalID)
    }
  }, [])

  return <div>
    <span>{date.getHours().toString().padStart(2, '0')}</span> : <span>{date.getMinutes().toString().padStart(2, '0')}</span> : <span>{date.getSeconds().toString().padStart(2, '0')}</span>
  </div>
}