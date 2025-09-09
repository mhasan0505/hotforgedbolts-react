import DIN2510 from '../components/Stud_Bolts/DIN2510';
import DIN529 from "../components/Stud_Bolts/DIN529";
import DIN939 from "../components/Stud_Bolts/DIN939";
import DIN976 from "../components/Stud_Bolts/DIN976";
import J_Bolt from '../components/Stud_Bolts/J_Bolt';

const StudBolt = () => {
  return (
    <div>
      <DIN529 />
      <DIN939 />
      <DIN976 />
      <DIN2510 />
      <J_Bolt />
    </div>
  );
};

export default StudBolt;
