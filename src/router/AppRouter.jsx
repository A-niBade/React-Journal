import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      //* LOGIN Y REGISTRO
      <Route path="/auth/*" element={<AuthRoutes />} />
      //* JOURNALAPP
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
