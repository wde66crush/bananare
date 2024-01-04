


import { getAllTremrs } from "@/lib/utils";
import Tremr, { TremrProps } from "./components/Tremr";

const page: React.FC<TremrProps[]> = (props) => { // Fix type error by changing props to tremr
  const tremrs = getAllTremrs(); // Rename tremr to tremrs
  console.log(tremrs, "tremrs")
  return (
    <div className="page">
      <h1>Public Feed</h1>
      {/* <main>
        {tremrs.map((tremr) => ( // Change props to tremrs
          <div key={tremr.id} className="post">
            <Tremr tremr={tremr} />
          </div>
        ))}
      </main> */}
    </div>
  );
};

export default page;
