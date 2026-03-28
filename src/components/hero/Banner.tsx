export default function Banner() {
  return (
    <div className="relative h-44 bg-background overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3f3f46 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
}
