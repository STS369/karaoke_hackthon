import React from 'react';
// BrowserRouter as Router のインポートは不要になります
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 各ページコンポーネントをインポートします
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import AddPage from './pages/AddPage';
import HistoryPage from './pages/HistoryPage';

function App() {
  return (
    <>
      {/* <Router> を削除し、<Routes> から始めます */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/history" element={<HistoryPage />} />
        {/* 未定義のパスはトップページにリダイレクト */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* 通知メッセージを表示するためのコンテナ */}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;