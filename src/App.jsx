export function App() {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>未完了のTODO</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>完了済みのTODO</p>
        <ul>
          <div>
            <li>未完了のTODO</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
}