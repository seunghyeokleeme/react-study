const React = require("react");
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState("이승혁");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(e.target.children.word.value);
    if (word[word.length - 1] === e.target.children.word.value[0]) {
      setResult("딩동댕");
      setWord(e.target.children.word.value);
      e.target.children.word.value = "";
      inputRef.current.focus();
    } else {
      setResult("땡");
      inputRef.current.focus();
      e.target.children.word.value = "";
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input id="word" ref={inputRef} />
        <button type="submit">입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
