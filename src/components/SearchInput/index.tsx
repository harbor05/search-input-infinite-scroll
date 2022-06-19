import { useState } from "react";

function SearchInput() {
  const [input, setInput] = useState("");

  const handleChange = (value: string) => {
    setInput(value);
  };

  return (
    <>
      <input
        className="bg-blue-50 text-black font-bold py-2 px-4 rounded"
        type="search"
        value={input}
        onChange={(event) => handleChange(event.target.value)}
      />
    </>
  );
}

export default SearchInput;
