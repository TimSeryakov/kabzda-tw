import React, {useMemo, useState} from "react";

export default {
  title: 'useMemo'
}

export const ExampleNormal = () => {

  const [a, setA] = useState<number>(5)
  const [b, setB] = useState<number>(5)

  let resultA = 1
  let resultB = 1

  for (let i = 1; i <= a; i++) resultA = resultA * i
  for (let i = 1; i <= b; i++) resultB = resultB * i

  return <>
      <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
      <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
      <hr/>

      <div>
        Results for A: {resultA}
      </div>
      <div>
        Results for B: {resultB}
      </div>
    </>
}

export const ExampleFakeLoad = () => {

  const [a, setA] = useState<number>(5)
  const [b, setB] = useState<number>(5)

  let resultA = 1
  let resultB = 1

  resultA = useMemo(() => {
    let tempResultA = 1
    for (let i = 1; i <= a; i++) {
      let fake = 0
      while (fake < 10000000) {
        fake++
        const tempResultA = Math.random()
      }
      resultA = resultA * i
    }
      return tempResultA
  }, [a])

  for (let i = 1; i <= b; i++) resultB = resultB * i

  return <>
    <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
    <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
    <hr/>

    <div>
      Results for A: {resultA}
    </div>
    <div>
      Results for B: {resultB}
    </div>
  </>
}




  const UsersSecret = (props: {users: Array<string> }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
  }

  const Users = React.memo(UsersSecret)

 export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["merry", "flatten", "formal", "hurry", "bribe"])

   // Мемоизация результата, для того, что бы не пересчитывать, если ничего не поменялось
   const newArr = useMemo(() => users.filter(u => u.indexOf("a") !== -1), [users]) // зависимости!

   const addUser = () => {
     const newUsers = [...users, 'Sveta ' + new Date().getTime()]
     setUsers(newUsers)
   }


   return <div>
      <button onClick={() => {setCounter(counter + 1)}} className={"border m-3 p-3"}>+</button>
      <button onClick={addUser} className={"border m-3 p-3"}>add</button>
      {counter}
      <Users users={newArr}/>
    </div>
  }
