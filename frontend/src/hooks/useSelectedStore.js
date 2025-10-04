// Simple localStorage-backed selected tracks store
import { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify"; // ★ 1. toastをインポート

const LS_KEY = "selected_tracks";

function load() {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || "[]"); } catch { return []; }
}

function save(list) {
  localStorage.setItem(LS_KEY, JSON.stringify(list));
}

export default function useSelectedStore() {
  const [selected, setSelected] = useState(load);

  useEffect(() => { save(selected); }, [selected]);

  const addSelected = useCallback((track) => {
    if (!track || !track.id) return;

    // ★ 2. 状態を更新する前に、すでに追加済みかチェック
    const isAlreadyAdded = selected.some(item => item.id === track.id);

    if (isAlreadyAdded) {
      // ★ 3. すでに追加されている場合は、警告メッセージを表示
      toast.warn(`「${track.name}」はすでに追加されています`);
      return; // ここで処理を終了
    }

    setSelected(prev => {
      // この重複除去ロジックは元のコードのまま活かします
      const seen = new Set();
      const out = [];
      const next = [track, ...prev];
      for (const t of next) {
        const id = t && t.id;
        if (id && !seen.has(id)) { seen.add(id); out.push(t); }
      }
      return out;
    });

    // ★ 4. 成功メッセージを表示
    toast.success(`「${track.name}」を選択に追加しました！`);

  }, [selected]); // ★ 5. selectedを依存配列に追加

  const removeSelected = useCallback((id) => {
    setSelected(prev => prev.filter(t => t && t.id !== id));
    // お好みで削除時にも通知を出すことができます
    // toast.info("選択から削除しました");
  }, []);

  const clearSelected = useCallback(() => setSelected([]), []);

  return { selected, addSelected, removeSelected, clearSelected };
}