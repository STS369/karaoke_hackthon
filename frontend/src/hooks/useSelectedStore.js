import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast"; // 1. 通知ライブラリをインポート

// zustand を使って状態管理ストアを作成します
const useSelectedStore = create(
  // persist を使うと、選択した曲がリロードしても消えなくなります
  persist(
    (set, get) => ({
      // state: 選択された曲のリスト
      selected: [],

      // action: 曲を選択リストに追加する関数
      addSelected: (track) => {
        // すでに同じ曲IDがリストに存在するかチェックします
        if (get().selected.some((t) => t.id === track.id)) {
          // 存在する場合、エラー通知を出して処理を中断します
          toast.error(`「${track.name}」はすでに追加されています`);
          return;
        }

        // 存在しない場合、リストに曲を追加します
        set((state) => ({ selected: [...state.selected, track] }));

        // 成功したことを通知します
        toast.success(`「${track.name}」を選択に追加しました！`);
      },

      // action: 曲を選択リストから削除する関数
      removeSelected: (trackId) => {
        set((state) => ({
          selected: state.selected.filter((t) => t.id !== trackId),
        }));
        // 削除したことを通知します
        toast.success("選択から削除しました");
      },
      
      // action: 選択リストをすべて空にする関数
      clearSelected: () => {
        if (get().selected.length > 0) {
          set({ selected: [] });
          toast.success("すべての選択をクリアしました");
        }
      },
    }),
    {
      // localStorageに保存する際のキー名
      name: "karaoke-selected-storage",
    }
  )
);

export default useSelectedStore;