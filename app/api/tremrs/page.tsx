import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../prisma/client";


type Data = {
  title: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    try {
      const tremrs = prisma.post.findMany()
      return res.status(200).json(tremrs)
    } catch (err) {
      console.log(err, "err")
    }
  }
}