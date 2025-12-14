// 役割: 最近聴いた曲のリスト表示（コメントへクイック追加ボタン付き）
import React from "react";
import SongItem from "./SongItem";

export default function RecentPlayList({ tracks, onQuickAdd, onAddSelected }) {
  if (!tracks?.length) return <div>最近聴いた曲がありません。</div>;
  return (
    <div className="list">
      {tracks.map(t => (
        <SongItem key={t.id} track={t} onQuickAdd={onQuickAdd} onAddSelected={onAddSelected} />
      ))}
    </div>
  );
}
