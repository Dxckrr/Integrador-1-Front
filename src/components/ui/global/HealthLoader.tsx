const HealthLoader = () => {
  return (
    <div className="loading flex justify-center items-center h-screen">
      <svg className="w-16 h-12" viewBox="0 0 64 48">
        <polyline
          points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          style={{
            fill: "none",
            stroke: "rgba(255, 77, 80, 0.2)",
            strokeWidth: 3,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          id="back"
        ></polyline>
        <polyline
          points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
          style={{
            fill: "none",
            stroke: "#ff4d4f",
            strokeWidth: 3,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "48, 144",
            strokeDashoffset: 192,
            animation: "dash_682 1.4s linear infinite",
          }}
          id="front"
        ></polyline>
      </svg>

      {/* Keyframes for animation */}
      <style>{`
        @keyframes dash_682 {
          72.5% {
            opacity: 0;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default HealthLoader;
