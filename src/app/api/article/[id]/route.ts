import { NextResponse } from "next/server";
import db from "@/db";

interface IParams {
  params: {
    id: string;
    title: string;
    content: string;
  };
}

// 删除某一个 /api/article/:id
// posts是数据库中的内容 params是请求参数
export async function DELETE(request: Request, { params }: IParams) {
  await db.update(({ posts }) => {
    const idx = posts.findIndex((item) => item.id === params.id);
    posts.splice(idx, 1);
  });

  return NextResponse.json({
    code: 0,
    msg: "delete success",
  });
}

// 更改某一个  /api/article/:id
export async function PATCH(request: Request, { params }: IParams) {
  const data = await request.json();
  let idx = -1;
  await db.update(({ posts }) => {
    idx = posts.findIndex((item) => item.id === params.id);
    posts[idx] = {
      ...posts[idx],
      ...data,
    };
  });

  return NextResponse.json({
    code: 0,
    msg: "update success",
    data: db.data.posts[idx],
  });
}
// 获取某一个 Get /api/article/:id
export async function GET(request: Request, { params }: IParams) {
  const post = db.data.posts.find((item) => item.id === params.id);

  return NextResponse.json({
    code: 0,
    msg: "get success",
    data: post,
  });
}
