import { type } from "@testing-library/user-event/dist/type";
import $api from "../index.ts";

export default class getData {

  static async fetchData() {
    const responce = await $api.get("./getusers");
    return responce.data.data;
  }

}
