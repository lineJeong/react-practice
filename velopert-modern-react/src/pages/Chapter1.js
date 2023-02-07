import React, { useRef, useState } from "react";
import Counter from "../components/Counter";
import CreateUser from "../components/CreateUser";
import Hello from "../components/Hello";
import InputSample from "../components/InputSample";
import UserList from "../components/UserList";
import Wrapper from "../components/Wrapper";

function Chapter1() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <h1>Chaper1</h1>

      <Wrapper>
        <h2>1.1~1.6</h2>
        <Hello />
        <Hello name="name props 전달 O" isSpecial />
        <div className="gray-box"></div>
      </Wrapper>

      <Wrapper>
        <h2>1.7</h2>
        <Counter />
      </Wrapper>

      <Wrapper>
        <h2>1.8~1.10</h2>
        <InputSample />
      </Wrapper>

      <Wrapper>
        <h2>1.11~</h2>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      </Wrapper>
    </>
  );
}

export default Chapter1;
