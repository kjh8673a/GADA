import { RecoilRoot } from "recoil";
import Maple from "./components/maple/Maple";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">안녕하세요!</header>
        {/* 나중에 router로 경로 수정 필요, localhost:3000/maple */}
        <Maple />
      </div>
    </RecoilRoot>
  );
}

export default App;

