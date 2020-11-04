import React, {useState} from 'react'

export default {
  title: "React.memo.demo"
}

const NewMessagesCounter = (props: { count: number }) => {
  return <div>{props.count}</div>
}
const UsersSecret = (props: {users: Array<string> }) => {
  return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const ReactMemoHOC = () => {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(["merry", "flatten", "formal", "hurry", "bribe"])

  const addUser = () => {
    const newUsers = [...users, 'Sveta ' + new Date().getTime()]
    setUsers(newUsers)
  }

  return <div>
      <button onClick={() => {setCounter(counter + 1)}} className={"border m-3 p-3"}>+</button>
      <button onClick={addUser} className={"border m-3 p-3"}>add user</button>
      <NewMessagesCounter count={counter}/>
      <Users users={users}/>
    </div>
}