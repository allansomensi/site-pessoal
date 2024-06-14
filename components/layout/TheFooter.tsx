export default function TheFooter() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="flex min-h-14 w-full items-center justify-center bg-neutral-200 text-lg dark:bg-slate-700 dark:text-white">
      <p>{year} - RS</p>
    </div>
  );
}
