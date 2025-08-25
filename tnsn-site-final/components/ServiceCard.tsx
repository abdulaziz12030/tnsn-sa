type Props = { title: string; desc: string };
export default function ServiceCard({ title, desc }: Props) {
  return (
    <div className="border rounded-2xl p-6 hover:shadow-sm transition">
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{desc}</p>
    </div>
  );
}