import Themeroutes from "./routes/Router";
import { useRoutes } from "react-router-dom";

const App = () => {
  const routing = useRoutes(Themeroutes);
  console.log("🚀 ~ App ~ routing:", routing)

  return <div className="dark">{routing}</div>;
};

export default App;
