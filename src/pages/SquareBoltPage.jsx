import BoltNavigator from "@/components/BoltNavigator";
import Din262 from "../components/DIIN/SquareBolts/Din262";
import Din480 from "../components/DIIN/SquareBolts/Din480";

const SquareBoltPage = () => {
  return (
    <div className="mt-28 px-4 sm:px-6 lg:px-8">
      <BoltNavigator />

      <div className="container mx-auto max-w-7xl">
        <Din262 />

        <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden mt-12">
          <Din480 />
        </div>
      </div>
    </div>
  );
};

export default SquareBoltPage;
