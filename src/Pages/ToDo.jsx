import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import CreateToDoAPI from "../Utils/CreateToDoAPI";
import GetToDoAPI from "../Utils/GetToDoAPI";
import UpdateToDoAPI from "../Utils/UpdateToDoAPI";

import { LayoutStyle } from "../Styles/Layout";
import Input from "../Components/Input";
import Button from "../Components/Button";
import DeleteToDoAPI from "../Utils/DeleteToDoAPI";

const ToDo = () => {
  const navigate = useNavigate();

  const token = JSON.parse(window.localStorage.getItem("token"));
  const [input, setInput] = useState({
    todo: "",
    isCompleted: false,
  });
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState("");
  const [editItem, setEditItem] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleEditedInput = (e) => {
    setEditItem(e.target.value);
  };

  const handleAdd = async () => {
    const data = await CreateToDoAPI(token, input);
    setTodos((prevTodos) => [...prevTodos, data]);
    setInput({
      todo: "",
      isCompleted: false,
    });
  };

  const handleEdit = async (index) => {
    setEditIndex(index);
    setEditItem(todos[index]?.todo);
  };

  const handleUpdate = async (i) => {
    const data = await GetToDoAPI(token);
    const TodoId = data[i]?.id;

    const updatedInput = {
      ...input,
      todo: editItem,
      // isCompleted: false,
    };

    const result = await UpdateToDoAPI(TodoId, updatedInput, token);
    console.log("updated todo", result);

    const updatedTodos = todos.map((todo) =>
      todo?.id === result?.id ? result : todo
    );
    setTodos(updatedTodos);
    setEditIndex(null);
  };

  const handleCompleted = async (i) => {
    const data = await GetToDoAPI(token);
    const TodoId = data[i]?.id;

    const updatedInput = {
      ...input,
      todo: editItem ? editItem : data[i]?.todo,
      isCompleted: !data[i]?.isCompleted,
    };

    const result = await UpdateToDoAPI(TodoId, updatedInput, token);
    console.log(result);

    const updatedTodos = todos.map((todo) =>
      todo?.id === result?.id ? result : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = async (i) => {
    const data = await GetToDoAPI(token);
    const TodoId = data[i]?.id;
    await DeleteToDoAPI(token, TodoId);
    data.splice(i, 1);
    setTodos([...data]);
  };

  const CompletedStyle = (index) => ({
    width: "300px",
    textDecoration: "line-through",
    color: "var(--gray)",
  });

  const unCompletedStyle = () => ({
    width: "300px",
    textDecoration: "initial",
    color: "black",
  });

  useEffect(() => {
    const storedToken = window.localStorage.getItem("token");

    if (!storedToken) navigate("/signin");
  }, []);

  useEffect(() => {
    const getTodos = async () => {
      const res = await GetToDoAPI(token);
      setTodos(res);
    };
    getTodos();
  }, []);

  return (
    <ToDoLayout>
      <Input
        data-testid="new-todo-input"
        name="todo"
        value={input.todo}
        onChange={handleInput}
        width="330px"
        $margin="0 30px 30px 0"
      />
      <Button
        data-testid="new-todo-add-button"
        onClick={handleAdd}
        disabled={!input.todo}
        width="115px"
      >
        추가
      </Button>
      <ul>
        {todos &&
          todos.map((el, i) => {
            return editIndex === i ? (
              //제출, 취소 버튼
              <li key={i} style={{ display: "flex" }}>
                <label style={{ display: "flex" }}>
                  <input
                    type="checkbox"
                    name="isCompleted"
                    // value={el.isCompleted}
                    checked={el?.isCompleted}
                    style={{ marginRight: "25px", marginBottom: "25px" }}
                    onChange={handleCompleted}
                  />
                  <Input
                    data-testid="modify-input"
                    width="300px"
                    height="30px"
                    $padding="0"
                    value={editItem}
                    onChange={handleEditedInput}
                  />
                </label>
                <Button
                  data-testid="submit-button"
                  width="40px"
                  height="30px"
                  $margin="0 5px 0 15px"
                  $bg="#f1b098"
                  onClick={() => {
                    handleUpdate(i);
                  }}
                >
                  제출
                </Button>
                <Button
                  data-testid="cancel-button"
                  width="40px"
                  height="30px"
                  $bg="#f1b098"
                  onClick={() => handleEdit(null)}
                >
                  취소
                </Button>
              </li>
            ) : (
              //수정, 삭제 버튼
              <li key={i} style={{ display: "flex" }}>
                <label style={{ display: "flex" }}>
                  <input
                    type="checkbox"
                    checked={el?.isCompleted}
                    style={{ marginRight: "25px", marginBottom: "25px" }}
                    onChange={() => {
                      handleCompleted(i);
                    }}
                  />
                  <div
                    style={
                      el?.isCompleted ? CompletedStyle(i) : unCompletedStyle(i)
                    }
                  >
                    {el?.todo}
                  </div>
                </label>
                <Button
                  data-testid="modify-button"
                  width="40px"
                  height="30px"
                  $margin="0 5px 0 15px"
                  onClick={() => handleEdit(i)}
                  disabled={el?.isCompleted}
                >
                  수정
                </Button>
                <Button
                  data-testid="delete-button"
                  width="40px"
                  height="30px"
                  disabled={el?.isCompleted}
                  onClick={() => {
                    handleDelete(i);
                  }}
                >
                  삭제
                </Button>
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

export default ToDo;
