import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了済みのTODO</p>
      <ul>
        {completeTodos.map((todo, idx) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(idx)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
