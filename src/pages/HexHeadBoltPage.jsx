import BoltNavigator from "../components/BoltNavigator";
import DIN6914 from "../components/HexHeadBolts/DIN6914";
import Din7990 from "../components/HexHeadBolts/Din7990";
import Din931 from "../components/HexHeadBolts/Din931";
import Din933 from "../components/HexHeadBolts/Din933";
import Din960 from "../components/HexHeadBolts/Din960";
import Din961 from "../components/HexHeadBolts/Din961";

const HexHeadBoltPage = () => {
  return (
    <div className="mt-28 px-4 sm:px-6 lg:px-8">
      <BoltNavigator />

      <div className="container mx-auto max-w-7xl">
        <Din960 />

        <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden mt-12">
          <Din961 />

          <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden mt-12">
            <Din7990 />
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden mt-12">
            <Din931 />
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden mt-12">
            <Din933 />
          </div>
          <div>
            <DIN6914 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HexHeadBoltPage;
