
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export type TremrProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Tremr: React.FC<{ tremr: TremrProps }> = ({ tremr }) => {
  const authorName = tremr.author ? tremr.author.name : "Unknown author";
  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${tremr.id}`)}>
      <h2>{tremr.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown>
        {tremr.content }
      </ReactMarkdown>
    </div>
  );
};

export default Tremr;
