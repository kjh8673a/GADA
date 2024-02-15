import ReactDOM from "react-dom/client";
import ga4 from "react-ga4";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

if (process.env.REACT_APP_GOOGLE_ANALYTICS) {
  ga4.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
}

root.render(
  <>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </>
);

reportWebVitals();

