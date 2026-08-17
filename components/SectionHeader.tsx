export default function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="whitespace-nowrap font-mono text-lg font-bold text-gray-100">
        <span className="text-indigo-400">//</span> {label}
      </h2>
      <div className="h-px w-full bg-gradient-to-r from-white/15 to-transparent" />
    </div>
  );
}
