import { Router } from "@common-module/app";
import Home from "./Home.js";

export default async function init() {
  Router.route("", Home);
}
