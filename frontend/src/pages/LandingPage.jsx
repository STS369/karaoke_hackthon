"use client"
import LoginButton from "../components/LoginButton"

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* 背景エフェクト */}
      <div className="background-effects">
        <div className="glow-orb purple"></div>
        <div className="glow-orb yellow"></div>
        <div className="glow-orb pink"></div>
        <div className="glow-orb purple-2"></div>
        <div className="glow-orb yellow-2"></div>
        <div className="glow-orb pink-2"></div>
      </div>

      {/* メインコンテンツ */}
      <div className="landing-content">
        <div className="music-note-icon">♪</div>
        <h1 className="landing-title">KaraPoke</h1>
        <p className="landing-subtitle">カラオケリストを作って、より快適に歌おう</p>
        <div className="landing-button">
          <LoginButton />
        </div>
      </div>

      <style jsx>{`
        .landing-page {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(135deg, #1a0a2e 0%, #16213e 50%, #0f0f23 100%);
        }

        .background-effects {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          animation: float 8s ease-in-out infinite;
        }

        .glow-orb.purple {
          width: 450px;
          height: 450px;
          background: #a855f7;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .glow-orb.purple-2 {
          width: 400px;
          height: 400px;
          background: #8b5cf6;
          bottom: 20%;
          right: 15%;
          animation-delay: 4s;
        }

        .glow-orb.yellow {
          width: 500px;
          height: 500px;
          background: #fbbf24;
          top: 50%;
          right: 10%;
          animation-delay: 2s;
        }

        .glow-orb.yellow-2 {
          width: 380px;
          height: 380px;
          background: #fcd34d;
          bottom: 10%;
          left: 50%;
          animation-delay: 5s;
        }

        .glow-orb.pink {
          width: 420px;
          height: 420px;
          background: #ec4899;
          top: 30%;
          left: 40%;
          animation-delay: 3s;
        }

        .glow-orb.pink-2 {
          width: 350px;
          height: 350px;
          background: #f472b6;
          top: 60%;
          right: 30%;
          animation-delay: 6s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .landing-content {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 2rem;
          max-width: 800px;
        }

        .music-note-icon {
          font-size: 8rem;
          margin-bottom: 1rem;
          background: linear-gradient(
            135deg,
            #a855f7 0%,
            #ec4899 50%,
            #fbbf24 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 30px rgba(168, 85, 247, 0.8));
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 30px rgba(168, 85, 247, 0.8));
          }
          50% {
            transform: scale(1.05);
            filter: drop-shadow(0 0 40px rgba(236, 72, 153, 0.9));
          }
        }

        .landing-title {
          font-size: 5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          background: linear-gradient(
            135deg,
            #a855f7 0%,
            #ec4899 50%,
            #fbbf24 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.6));
        }

        .landing-subtitle {
          font-size: 1.5rem;
          color: #e5e7eb;
          margin-bottom: 3rem;
          font-weight: 400;
          line-height: 1.8;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .landing-button {
          display: inline-block;
        }

        @media (max-width: 768px) {
          .music-note-icon {
            font-size: 5rem;
          }

          .landing-title {
            font-size: 3rem;
          }

          .landing-subtitle {
            font-size: 1.125rem;
            margin-bottom: 2rem;
          }

          .glow-orb {
            filter: blur(60px);
          }

          .glow-orb.purple,
          .glow-orb.yellow,
          .glow-orb.pink {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </div>
  )
}
