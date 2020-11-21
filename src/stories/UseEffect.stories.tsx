import React, {useEffect, useState} from 'react'

export default {
  title: "useEffect"
}

export const useEffectSimpleExample = () => {
  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1)

// Если передали [], то сработает *только* один раз, при вмонтировании компоненты. like componentDidMount
// Если нет даже [], то запускается при *каждом* рендере.

// useEffect работает после return, т.е. когда JSX уже отобразился!

  useEffect(() => {
    console.log("useEffect runs on *every* render")
    document.title = counter.toString()
  }) // нет '[]', работает после return, т.е. когда JSX уже отобразился

  useEffect(() => {
    console.log("useEffect runs only on first render (like componentDidMount)")
    document.title = counter.toString()
  }, [])

  useEffect(() => {
    console.log("useEffect runs on first render and every *counter* change")
    document.title = counter.toString()
  }, [counter]) // (можно в componentDidMount), но гараздо *правильнее* в componentDidUpdate

  return <div>
      Hello, counter: {counter} | fake: {fake}
      <button onClick={() => setCounter(counter + 1)} className={"border m-3 p-3 bg-blue-100"}>+</button>
      <button onClick={() => setFake(fake + 1)} className={"border m-3 p-3 bg-blue-100"}>+</button>
    </div>
}

export const setTimeoutExample = () => {
  const [counter, setCounter] = useState(1)

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("setTimeout runs")
  //     setCounter(counter + 1)
  //   }, 1000)
  // }, [counter])

  useEffect(() => {
    setInterval(() => {
      console.log("setInterval runs")
      setCounter((prev) => prev + 1)
    }, 1000)
  }, [])

  return <div>
    counter: {counter}
  </div>
}