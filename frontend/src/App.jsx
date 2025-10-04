import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast"; // react-hot-toast に変更

// 各ページコンポーネントをインポートします
import LandingPage from "./pages/LandingPage"; // LoginPage の代わりにLandingPageを使用
import MainPage from "./pages/MainPage";
import AddPage from "./pages/AddPage";
import HistoryPage from "./pages/HistoryPage";
import { fetchMe } from "./api/spotify"; // ユーザー情報を取得する関数

// ログイン状態によってアクセスを制御する保護コンポーネント
function ProtectedRoute({ user, children }) {
  if (!user) {
    // ユーザー情報がなければ最初の画面にリダイレクトします
    return <Navigate to="/" replace />;
  }
  return children;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // アプリの初回読み込み時にユーザー情報を取得します
  useEffect(() => {
    fetchMe()
      .then(userData => setUser(userData))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  // ユーザー情報取得中はローディング画面を表示します
  if (loading) {
    return <div>読み込み中...</div>;
  }

  return (
    <>
      {/* 通知コンポーネントをToasterに変更 */}
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <Routes>
        {/* 「一番最初の画面」のルート */}
        <Route
          path="/"
          // 未ログインならLandingPageを、ログイン済ならメインページへ移動
          element={user ? <Navigate to="/main" replace /> : <LandingPage />}
        />

        {/* 保護されたページ */}
        <Route
          path="/main"
          element={<ProtectedRoute user={user}><MainPage /></ProtectedRoute>}
        />
        <Route
          path="/add"
          element={<ProtectedRoute user={user}><AddPage /></ProtectedRoute>}
        />
        <Route
          path="/history"
          element={<ProtectedRoute user={user}><HistoryPage /></ProtectedRoute>}
        />

        {/* それ以外のURLはすべて一番最初の画面へリダイレクト */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}