import "./app.css";
import Habits from "./components/habits";
import Nav from "./components/nav";
import React, { useCallback } from "react";
import { useState } from "react";

const App = (props) => {
  const [habits, setHabits] = useState([]);

  const handleIncrement = useCallback(
    (habit) =>
      setHabits((habits) =>
        habits.map((item) => {
          {
            if (item.id === habit.id) {
              return { ...habit, count: habit.count + 1 };
            } else {
              return item;
            }
          }
        })
      ),
    []
  );
  const handleDecrement = useCallback(
    (habit) =>
      setHabits((habits) =>
        habits.map((item) => {
          if (item.id === habit.id) {
            const count = habit.count - 1;
            return { ...habit, count: count < 0 ? 0 : count };
          } else {
            return item;
          }
        })
      ),
    []
  );

  const handleDelete = useCallback((habit) => {
    setHabits((habits) => habits.filter((item) => item.id !== habit.id));
  }, []);

  const handleReset = useCallback(() => {
    setHabits((habits) =>
      habits.map((item) => {
        if (item.count === 0) {
          return item;
        } else {
          return { ...item, count: 0 };
        }
      })
    );
  });
  const handleAdd = useCallback((name) => {
    setHabits((habits) => [...habits, { id: Date.now(), name, count: 0 }]);
  });
  return (
    <>
      <Nav totalCount={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
};
export default App;
