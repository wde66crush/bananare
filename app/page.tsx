

import { getAllTremrs } from "@/lib/utils";
import Tremr, { TremrProps } from "./components/Tremr";

async function getTremrs() {
  const res = await fetch(`${process.env.PRISMA_URL}/api/tremrs}`);
  if (!res.ok) {
    console.log(res, "res isn't ok my guy");
    throw new Error(res.statusText);
  }
  return res.json();
}

const page: React.FC<TremrProps[]> = async (props) => {
  const tremrs = await getTremrs(); // Rename tremr to tremrs
  console.log(tremrs, "tremrs");
  return (
    <div className="page">
      <h1>Public Feed</h1>
        {tremrs && tremrs.map((tremr) => (
          <button key={tremr.id}>
            {tremr.title}
            </button>
        ))}
    </div>
  );
};

export default page;
