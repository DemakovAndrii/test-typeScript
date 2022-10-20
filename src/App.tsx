import React from "react";
import Card, { CardVariant } from "./components/Card";
import EventsExample from "./components/EventsExample";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/users">Пользователи</NavLink>
        <NavLink to="/todos">Список дел</NavLink>
      </div>
      <Routes>
        <Route path="/users" element={<UserPage />} />
        <Route path="/todos" element={<TodosPage />} />
      </Routes>

      <EventsExample />
      <Card variant={CardVariant.outlined} width="200px" height="100px">
        <button>button</button>
        <div>text</div>
      </Card>
    </BrowserRouter>
  );
};

export default App;
