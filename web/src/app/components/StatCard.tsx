type StatCardProps = {
  title: string;
  value: string;
  icon: string;
};

export default function StatCard({
  title,
  value,
  icon,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <div className="text-5xl mb-4">{icon}</div>

      <h3 className="text-xl font-semibold text-gray-700">
        {title}
      </h3>

      <p className="text-4xl font-bold mt-3">
        {value}
      </p>
    </div>
  );
}