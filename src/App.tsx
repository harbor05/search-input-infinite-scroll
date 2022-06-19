import "./App.css";
import FetchManager from "./utils/fetchManager";
import SearchInput from "./components/SearchInput";

function App() {
  // [테스트] 투두 리스트 조회
  const getTodoList = async () => {
    let params = { q: "maecenas", page: 1, limit: 10 };
    try {
      let res = await FetchManager.fetch("get", "/search", params);
      console.log("return", res);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={getTodoList}
        >
          Request
        </button>
        <SearchInput />
      </header>
    </div>
  );
}

export default App;
