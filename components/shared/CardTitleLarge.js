export default function CardTitleLarge({ children }) {
  return (
    <h3 className="text-2xl sm:text-5xl font-mono font-bold uppercase text-white">
      {children}
    </h3>
  );
}