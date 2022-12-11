import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { getByTitle } from "@testing-library/react";

function App() {
  let [title, setTitle] = useState([
    "강남 우동 맛집",
    "파주 우동 맛집",
    "일산 우동 맛집",
  ]);
  let [date, setDate] = useState([
    "2022년 12월 10일",
    "2022년 12월 11일",
    "2022년 12월 12일",
  ]);
  let [good, setGood] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modaltitle, setModaltitle] = useState(["강남", "파주", "일산"]);
  return (
    <div className="wrap">
      <div className="black-nav">ReactCoding</div>
      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <span
              onClick={() => {
                modal == false ? setModal(true) : setModal(false);
              }}
            >
              {title[i]}
            </span>
            <span>{date[i]}</span>
            <span
              onClick={() => {
                let goodCnt = [...good];
                goodCnt[i]++;
                setGood(goodCnt);
              }}
            >
              좋아요
            </span>
            <span>{good[i]}</span>
          </div>
        );
      })}
      {modal == true ? (
        <Modal
          title={title}
          modal={modal}
          modaltitle={modaltitle}
          date={date}
        />
      ) : (
        ""
      )}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[0]}</h4>
      <span>{props.date[0]}</span>
    </div>
  );
}
export default App;
