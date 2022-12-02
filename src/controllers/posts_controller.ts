import { useState } from "react";
import { BaseController } from "../bases/base_controller";
import { PostSchema, Post } from "../models/post_model";

class Controller extends BaseController<PostSchema> {
  constructor(model: Post) {
    super(model);
  }

  public handleCounter() {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
      setCounter((state) => state + 1);
    };

    const decreaseCounter = () => {
      setCounter((state) => state - 1);
    };

    return {
      counter,
      increaseCounter,
      decreaseCounter,
    };
  }
}

export const PostController = new Controller(new Post());
