import { useState } from "react";
import "./App.css";
import Button from "./assets/components/button";
import { FaCalculator } from "react-icons/fa";

const App = () => {
  const [count, setCount] = useState(10);

  return (
    <>
      <header>
        <div>
          <FaCalculator color="#5c48d3" />
          <p>React Counter</p>
        </div>
      </header>
      <main>
        <div>
          <div className="buton-box">
            {count > 0 && (
              <Button
                className="decrement-button"
                functionOnClick={() => {
                  setCount(count - 1);
                }}
                title="-"
              />
            )}
          </div>
          <div className="count-box">{count}</div>
          <div className="buton-box">
            {count < 10 && (
              <Button
                className="increment-button"
                functionOnClick={() => {
                  setCount(count + 1);
                }}
                title="+"
              />
            )}
          </div>
        </div>
        <div>
          <Button
            className="reset-button"
            functionOnClick={() => {
              setCount(0);
            }}
            title="Reset"
          />
        </div>
      </main>
      <footer>
        <div className="container">
          This exercice was made with <span> React </span> by
          <a href="https://github.com/TimBERNIC"> TimBERNIC </a> with
          <a href="https://www.lereacteur.io/"> LE REACTEUR </a>
        </div>
      </footer>
    </>
  );
};

export default App;
