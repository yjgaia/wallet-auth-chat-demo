import { Router } from "@common-module/app";
import AppView from "./AppView.js";

export default async function init() {
  Router.add("/", AppView);
}
