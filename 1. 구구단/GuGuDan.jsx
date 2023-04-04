const React = require("react");

const GuGuDan = () => {
  const [first, setFrist] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");
  const inputRef = React.useRef(null);

  const onChangeInput = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (parseInt(value, 10) === first * second) {
      setResult("정답" + value);
      setFrist(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputRef.current.focus(); // 함수 컨포넌트 ref 사용법
    } else {
      setResult("땡");
      setValue("");
      inputRef.current.focus();
    }
  };
  console.log("hello");
  return (
    <>
      <div>
        {first} 곱하기 {second}는?
      </div>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="number"
          value={value}
          onChange={onChangeInput}
        />
        <button type="submit">입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = GuGuDan;
