import React, { memo, useCallback, useRef } from "react";
// rsi fucntion react
const Input = memo(({ onAdd }) => {
  const inputRef = useRef();
  const onSubmit = useCallback((e) => {
    // e = > input.value
    e.preventDefault(); // preventDefault = > input.value를 유지해준다. preventDefault를 안해줄 시 유지가 되지 않고 사라진다.
    const name = inputRef.current.value;
    name && onAdd(name);
    inputRef.current.value = "";
    inputRef.current.focus();
  });
  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
        <input
          ref={inputRef}
          className="add-input"
          type="text"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    </>
  );
});
export default Input;
