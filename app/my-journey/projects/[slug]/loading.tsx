export default function ProjectDetailLoading() {
  return (
    <main className="min-h-screen bg-[#eae6dd] px-6 pb-24 pt-28 md:px-10 lg:px-14">
      <div className="mx-auto max-w-[92rem] animate-pulse space-y-5">
        <div className="h-10 w-44 bg-black/10" />
        <div className="h-32 w-full bg-black/10" />
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 h-56 bg-black/10 md:col-span-6" />
          <div className="col-span-12 h-56 bg-black/10 md:col-span-6" />
        </div>
      </div>
    </main>
  );
}
