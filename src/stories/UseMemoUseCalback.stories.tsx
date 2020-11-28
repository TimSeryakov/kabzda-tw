// useCallback
// https://youtu.be/VE2WbZtCfdY

import React, {useCallback, useMemo, useState} from "react";

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




const Users = (props: {users: Array<string>}) => { // UserSecret
  return <div>{props.users.map((user, i) => <div key={i}>{user}</div>)}</div>
}



const Books = (props: {/*books: Array<string>, */addBook: () => void}) => { // BooksSecret
  return <div>
    {/*{props.books.map((book, i) => <div key={i}>{book}</div>)}*/}
    <button onClick={props.addBook} className={"border m-3 p-3"}>add</button>
  </div>
}

const UsersMemoized = React.memo(Users)
const BooksMemoized = React.memo(Books)

export const HelpsToReactMemo = () => {
  console.log("HelpsToReactMemo")
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(["Marry", "John", "Max", "Bob", "Harry"])

  // Мемоизация результата, для того, что бы не пересчитывать, если ничего не поменялось
  const newArr = useMemo(() => users.filter(u => u.indexOf("a") !== -1), [users]) // зависимости!

  const addUser = () => {
    const newUsers = [...users, 'Jack ' + new Date().getTime()]
    setUsers(newUsers)
  }


  return <div>
    <button onClick={() => {setCounter(counter + 1)}} className={"border m-3 p-3"}>+</button>
    <button onClick={addUser} className={"border m-3 p-3"}>add</button>
    {counter}
    <Users users={newArr}/>
  </div>
}



export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "Redux", "HTML", "CSS"])

   // Мемоизация результата, для того, что бы не пересчитывать, если ничего не поменялось
   const newArr = useMemo(() => books.filter(u => u.indexOf("a") !== -1), [books]) // зависимости!

   const addBook = () => {
     const newBooks = [...books, 'JS ' + new Date().getTime()]
     setBooks(newBooks)
   }

  const addBookMemoized = useMemo(() => {
    return addBook
  }, [books])


  const addBookMemoized2 = useCallback(() => {addBook()}, [books])



   return <div>
      <button onClick={() => {setCounter(counter + 1)}} className={"border m-3 p-3"}>+</button>

      {counter}
      <Books addBook={addBookMemoized}/>
    </div>
  }
