import React, { useState } from "react";
import { styled } from "styled-components";

import { LayoutStyle } from "../Styles/Layout";
import Input from "../Components/Input";
import Button from "../Components/Button";

const ToDo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const handleAdd = () => {
    // setTodos(() => {
    //   const newTodo = [...todos, input];
    //   return newTodo;
    // });
    setTodos(() => [...todos, input]);
    setInput("");
  };

  return (
    <ToDoLayout>
      <Input
        data-testid="new-todo-input"
        value={input}
        onChange={handleInput}
        width="330px"
        margin="0 30px 30px 0"
      />
      <Button
        data-testid="new-todo-add-button"
        onClick={() => {
          handleAdd();
        }}
        width="115px"
      >
        추가
      </Button>
      <ul>
        {todos.map((el, i) => {
          return (
            <li key={i}>
              <label>
                <input
                  type="checkbox"
                  style={{ marginRight: "25px", marginBottom: "25px" }}
                />
                <span>{el}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </ToDoLayout>
  );
};

const ToDoLayout = styled.div`
  ${LayoutStyle}
`;

const Li = styled.li``;
export default ToDo;
