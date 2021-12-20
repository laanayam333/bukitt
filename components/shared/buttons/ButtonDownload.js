export default function ButtonDownload({ btnLinkText, btnURL }) {
  return (
    <button
      type="button"
      className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-base uppercase font-bold rounded shadow-sm text-white tw-bg-hover tw-transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      <a href={`${btnURL}?dl=`}>{btnLinkText}</a>
    </button>
  );
}
