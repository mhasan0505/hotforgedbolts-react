import Din7990 from "@/components/DIIN/Din7990";
import Din961 from "@/components/DIIN/Din961";
import BoltNavigator from "../components/BoltNavigator";
import Din931 from "../components/DIIN/Din931";
import Din933 from "../components/DIIN/Din933";
import Din960 from "../components/DIIN/Din960";

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
        </div>
      </div>
    </div>
  );
};

export default HexHeadBoltPage;
