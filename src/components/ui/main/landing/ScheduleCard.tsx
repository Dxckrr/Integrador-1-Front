interface ScheduleCardProps {
  days: string;
  hours: string;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ days, hours }) => {
  return (
    <div className="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2 scale-75 sm:scale-90 xl:scale-100">
      <div className="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12 before:rounded-2xl before:absolute before:content[''] before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
        <span className="text-2xl font-bold">{days}</span>
        <p className="text-aux-1-yellow font-thin">{hours}</p>
      </div>
    </div>
  );
};
export default ScheduleCard;
