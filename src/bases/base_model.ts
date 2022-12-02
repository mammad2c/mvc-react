import axios from "axios";

export class BaseModel<T> {
  public resource = "";
  public modelName: string;

  /**
   * @param {string} modelName -  modelName used for queryKey.
   */
  constructor(modelName: string) {
    this.modelName = modelName;
  }

  public async all() {
    const response = await axios<T[]>({
      url: `https://jsonplaceholder.typicode.com/${this.resource}`,
    });
    return response.data;
  }

  public async find(id: number | string) {
    const response = await axios<T>({
      url: `https://jsonplaceholder.typicode.com/${this.resource}/${id}`,
    });

    return response.data;
  }

  public async create(data: T) {
    const response = await axios<T>({
      method: "POST",
      data,
      url: `https://jsonplaceholder.typicode.com/${this.resource}`,
    });

    return response.data;
  }

  public async update(id: number | string, data: Partial<T>) {
    const response = await axios<T>({
      method: "PUT",
      data,
      url: `https://jsonplaceholder.typicode.com/${this.resource}/${id}`,
    });

    return response.data;
  }

  public async delete(id: number | string) {
    const response = await axios<T>({
      method: "DELETE",
      url: `https://jsonplaceholder.typicode.com/${this.resource}/${id}`,
    });

    return response.data;
  }
}
