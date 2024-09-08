"use client";
import React, { useEffect, useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchTodo = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const result = await response.json();
        setTodo(result);
      } catch (error) {
        console.error("Failed to fetch todo:", error);
      }
    };

    fetchTodo(); // Call the async function
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <div>
        <h1>{todo.title}</h1>
      </div>
    </>
  );
}
