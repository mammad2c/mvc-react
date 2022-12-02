import { useMutation, useQuery } from "@tanstack/react-query";
import { BaseModel } from "./base_model";

export class BaseController<IModel = Record<string, any>> {
  protected Model: BaseModel<IModel>;

  constructor(Model: BaseModel<IModel>) {
    this.Model = Model;
  }

  public index() {
    return useQuery<IModel[], Error>({
      queryKey: ["Post.all"],
      queryFn: () => this.Model.all(),
    });
  }

  public show(id: number | string) {
    return useQuery<IModel, Error>({
      queryKey: ["Post.find"],
      queryFn: () => this.Model.find(id),
    });
  }

  public create(data: IModel) {
    return useMutation({
      mutationFn: () => this.Model.create(data),
    });
  }

  public update(id: number | string, data: Partial<IModel>) {
    return useMutation({
      mutationFn: () => this.Model.update(id, data),
    });
  }

  public destroy(id: number | string) {
    return useMutation({
      mutationFn: () => this.Model.delete(id),
    });
  }
}
