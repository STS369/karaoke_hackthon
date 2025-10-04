import SongItem from "./SongItem"

export default function SelectedList({ tracks, onRemove }) {
  if (!tracks?.length) return <div>まだ選択された曲がありません。</div>
  return (
    <div className="list">
      {tracks.map((t) => (
        <SongItem key={t.id} track={t} onRemove={onRemove} />
      ))}
    </div>
  )
}
