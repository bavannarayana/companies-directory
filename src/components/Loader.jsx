export default function Loader() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="bg-white h-44 rounded-xl animate-pulse" />
      ))}
    </div>
  );
}
