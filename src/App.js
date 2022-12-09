import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남우동맛집";
  let [글제목, 글변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [logo, setLogo] = useState("ReactBlog");
  let [date, setDate] = useState("2월 17일 발행");
  let [good, setGood] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span
            onClick={function () {
              setGood(good + 1);
            }}
          >
            좋아요
          </span>{" "}
          {good}
        </h4>
        <p>{date}</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>{date}</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>{date}</p>
        <button
          onClick={() => {
            let copy = [...글제목];
            copy[0] = "여자코트 추천";
            글변경(copy);
          }}
        >
          글바꾸기
        </button>
        <button
          onClick={() => {
            let copy = [...글제목];
            copy = copy.sort();
            글변경(copy);
          }}
        >
          가나다순정렬
        </button>
      </div>
    </div>
  );
}

export default App;
