import ASME from "@/components/Nuts/ASME";
import DIN934 from '@/components/Nuts/DIN934';
import DIN6915 from '@/components/Nuts/DIN6915';

const Nut = () => {
  return (
    <div>
      <ASME />
      <DIN934/>
      <DIN6915/>
    </div>
  );
};

export default Nut;
