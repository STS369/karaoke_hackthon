// 役割: 最近聴いた曲1件の行表示。曲名/アーティスト/カバー画像 + コメントに追加ボタン
import React from "react";

export default function SongItem({ track, onQuickAdd, onAddSelected, onRemove }) {
  const artists = (track?.artists || []).map(a => a.name).join(", ");
  return (
    <div className="song-item">
      <img
  className="cover-sm"
  src={
    track?.album?.images?.[2]?.url ||
    track?.album?.images?.[1]?.url ||
    track?.album?.images?.[0]?.url ||
    ""
  }
  alt={track?.name}
/>
      <div className="info">
        <div className="title">{track?.name}</div>
        <div className="artist">{artists}</div>
      </div>
      <div className="actions" style={{ display: 'flex', gap: 8 }}>
        {onQuickAdd && (
          <button
            className="btn"
            onClick={() => onQuickAdd({ title: track?.name, artist: artists })}
          >
            コメントに追加
          </button>
        )}
        {onAddSelected && (
          <button
            className="btn primary"
            onClick={() => onAddSelected(track)}
          >
            リストに追加
          </button>
        )}
        {onRemove && (
          <button
            className="btn danger"
            onClick={() => onRemove(track?.id)}
          >
            取り除く
          </button>
        )}
      </div>
    </div>
  );
}
