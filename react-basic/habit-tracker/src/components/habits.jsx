import React, { memo } from "react";
import Habit from "./habit";
import Input from "./input";
const Habits = memo(
  ({ habits, onIncrement, onDecrement, onDelete, onReset, onAdd }) => {
    return (
      <>
        <div className="habits">
          <Input onAdd={onAdd} />
        </div>
        <ul>
          {habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
            />
          ))}
        </ul>
        <button className="habits-reset " onClick={onReset}>
          Reset All
        </button>
      </>
    );
  }
);

export default Habits;
