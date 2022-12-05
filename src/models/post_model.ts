import { BaseModel } from "@/bases/base_model";

export interface PostSchema {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export class Post extends BaseModel<PostSchema> {
  public resource = "posts";
}
