import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import AddTodo from './pages/Add/Add';
import Main from './pages/Main/Main';
import Update from './pages/Update/Update';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/update" element={<Update />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
