const FeatureItem = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) =>{
  return (
    <div className="border-t pt-6 mt-6 flex gap-5">
      <div className="w-14 h-14 bg-[#e8ecea] shrink-0 flex items-center justify-center text-green-700">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-[#0b3d2e] mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default FeatureItem;