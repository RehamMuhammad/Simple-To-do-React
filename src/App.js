import { EditPage, HomePage } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage />
        }
      />
      <Route
        path="/edit/:id"
        element={
          <EditPage />}
      />
    </Routes>
  );
}

export default App;
