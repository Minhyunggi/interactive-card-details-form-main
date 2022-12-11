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
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]}</h4>
        <p>{date}</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>{date}</p>
      </div>
      <div className="list">
        <h4
          onClick={
            modal == false
              ? function () {
                  setModal(true);
                }
              : function () {
                  setModal(false);
                }
          }
        >
          {글제목[2]}
        </h4>
        <p>{date}</p>
      </div>
      {modal == true ? <Modal 글변경={글변경} 글제목={글제목} /> : ""}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.글제목];
          copy[0] = "여자 코트 추천";
          props.글변경(copy);
        }}
      >
        첫번째 글 변경
      </button>
    </div>
  );
}

export default App;
