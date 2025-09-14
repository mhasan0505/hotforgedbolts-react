import ASME from "@/components/Nuts/ASME";
import DIN934 from '@/components/Nuts/DIN934';
import DIN6915 from '@/components/Nuts/DIN6915';
import DIN935 from '@/components/Nuts/DIN935';
import DIN936 from '@/components/Nuts/DIN936';
// import NutNavigator from '../components/NutNavigator';

const Nut = () => {
  return (
    <div className="bg-[#F5F5F5] ">
      {/* <NutNavigator/> */}
      <ASME />
      <DIN934/>
      <DIN935/>
      <DIN936/>
      <DIN6915/>
    </div>
  );
};

export default Nut;
