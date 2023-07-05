import React, { useState } from "react";
import { useTodoContext } from "@/context/TodoContext";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  const { todo, changeTodo } = useTodoContext();
  const [text, setText] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (text?.length > 3) {
      if (todo) {
        changeTodo([...todo, { title: text, complete: false }]);
      } else {
        changeTodo([{ title: text, complete: false }]);
      }
      setText("");
    } else {
      alert("Todo must be above 3 characters.");
    }
  };

  const completeHandler = (currentIndex) => {
    const result = todo.filter((item, index, currentArr) => {
      return [item, (currentArr[currentIndex].complete = true)];
    });
    changeTodo(result);

    // const newTodos = [...todo];
    // newTodos[currentIndex].complete = true;
    // changeTodo(newTodos);
  };

  const deleteHandler = (currentIndex) => {
    const result = todo.filter((item, index) => index !== currentIndex);
    changeTodo(result);
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl text-red-500 text-center my-5 font-bold uppercase tracking-wider underline">
        Todo List
      </h1>
      <form
        className="flex flex-col items-center my-5"
        onSubmit={addTodoHandler}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border-2 border-slate-500 w-full p-3 rounded-md bg-white my-5"
          type="text"
          placeholder="Enter New Todo"
          autoFocus={true}
        />
        <button className="bg-amber-500 p-2 px-7 text-white rounded-md">
          Add
        </button>
      </form>

      <div className="container">
        {todo &&
          todo.map((item, index) => (
            <div
              key={index}
              className="w-full flex p-5 bg-slate-200 shadow-lg rounded-lg my-3"
            >
              <div className="flex flex-1 items-center">
                <p className={item.complete ? "line-through" : ""}>
                  {item.title}
                </p>
              </div>
              <div className="flex flex-1 justify-end">
                <button
                  className="p-3 px-4 rounded-md bg-cyan-500 text-white mx-3 hover:bg-cyan-400"
                  onClick={() => completeHandler(index)}
                >
                  <i className="fa-solid fa-check"></i>
                </button>
                <button
                  className="p-3 px-4 rounded-md bg-red-500 text-white mx-3 hover:bg-red-400"
                  onClick={() => deleteHandler(index)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
