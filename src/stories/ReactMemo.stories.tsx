import React, {useState} from 'react'

export default {
  title: "React.memo"
}

const NewMessagesCounter = (props: { count: number }) => {
  return <div>{props.count}</div>
}
const Users = (props: {users: Array<string> }) => {
  return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const UsersMemoized = React.memo(Users)

export const ReactMemoHOC = () => {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(["merry", "flatten", "formal", "hurry", "bribe"])

  const addUser = () => {
    const newUsers = [...users, 'succeed ' + new Date().getTime()]
    setUsers(newUsers)
  }

  return <div>
      <button onClick={() => {setCounter(counter + 1)}} className={"border m-3 p-3"}>+</button>
      <button onClick={addUser} className={"border m-3 p-3"}>add user</button>
      <NewMessagesCounter count={counter}/>
      <UsersMemoized users={users}/>
    </div>
}