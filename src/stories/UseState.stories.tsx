import React, {useState} from 'react'

export default {
  title: "useState"
}

function generateDifficultData() {
  console.log("generating difficult data")
  return 1 // very difficult computed data
}

export const useStateExample = () => {
  const [counter, setCounter] = useState(generateDifficultData) // Сложный обсчёт данных только один раз

  // const changer = (state: number) => state + 1


  return <div>
      <button onClick={() => {setCounter(state => state + 1)}} className={"border m-3 p-3"}>+</button>
      {counter}
    </div>
}