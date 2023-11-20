import CardsContainer from "./_components/CardsContainer";
import StatsHeader from "./_components/StatsHeader";

const Stats = () => {
  return (
    <div className="flex flex-col overflow-scroll no-scrollbar h-screen" >
      <StatsHeader />
      <CardsContainer />
    </div>
  );
};

export default Stats;
