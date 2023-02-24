import "./styles.css";
import { useEffect } from "react";
import Content from "./Content";

// callback luon dược gọi sau khi component mount
export default function App() {
  return (
    <div className="App">
      <Content />
    </div>
  );
}
