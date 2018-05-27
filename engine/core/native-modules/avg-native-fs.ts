import Axios from "axios";

export class AVGNativeFS {
  public static __dirname = "./";

  public static async readFileSync(
    filename: string,
    options?: { encoding: string; flag?: string }
  ) {
    let responseData = "";

    console.log("Request ", filename);

    const response = await Axios.get(this.__dirname + filename);
    return response.data;
  }

  public static async readFile(
    filename: string,
    options?: { encoding: string; flag?: string }
  ) {
    return new Promise((resolve, reject) => {
      Axios.get(this.__dirname + filename)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          console.log(error);
        });
    });
  }

  public static async writeFileSync(
    filename: string,
    options?: { encoding: string; flag?: string }
  ) {
    let responseData = "";

    console.log("Request {0} ...", filename);

    const response = await Axios.get(this.__dirname + filename);
    return response.data;
  }
}
