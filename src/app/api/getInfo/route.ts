import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

export async function GET(req: Request) {
  return new Response("{ message: 'Get request' }");
  // res.status(200).json({ message: "Get request" });
}
export async function POST(req: Request) {
  let data = await fs.promises.readdir("./contactData/");
  console.log(req)
  fs.writeFile(
    `contactData/${data.length + 1}.json`,
    JSON.stringify(req.body),
    () => { }
  );

  // res.status(200).json(req.body);
  return new Response(req.body);
}
