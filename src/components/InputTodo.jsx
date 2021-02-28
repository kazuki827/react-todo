import React from 'react';

const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="input-area">
      <input disabled={disabled} type="text" placeholder="TODO入力" value={todoText} onChange={onChange} />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};

export default InputTodo;
