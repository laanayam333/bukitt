export default function PrimaryButton({ label, link }) {
  return (
    <button
      type="button"
      className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-heading font-bold rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary tw-transition"
    >
      {label}
    </button>
  );
}
