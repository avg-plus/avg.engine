import Axios from "axios";

export class AVGNativeFS {
  public static async readFileSync(
    filename: string,
    options?: { encoding: string; flag?: string }
  ) {
    let responseData = "";

    console.log("Request {0} ...", filename);

    const response = await Axios.get(this.__dirname + filename);
    console.log(response.data);

    return response.data;

    // return new Promise<string>((resolve, reject) => {
    //   http.get(filename, res => {
    //     res.on("data", buf => {
    //       responseData += buf;
    //     });

    //     res.on("end", () => {
    //       resolve(responseData);
    //     });
    //   });
    // });
  }

  public static __dirname = "./";
}
