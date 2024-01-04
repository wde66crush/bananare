
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import prisma from "../../lib/prisma";
import { TremrProps } from "../components/Tremr";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  console.log(post, "heyo post")
  return {
    props: post,
  };
};

const Post: React.FC<TremrProps> = (props) => {
  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  return (
      <div>
        <h2>{title}</h2>
        <p>By {props?.author?.name || "Unknown author"}</p>
      <ReactMarkdown>
        {props.content}
      </ReactMarkdown>
      </div>
  
  );
}

export default Post;
