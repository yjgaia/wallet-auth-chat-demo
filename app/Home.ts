import { BodyNode, el, View } from "@common-module/app";
import { Button } from "@common-module/app-components";

export default class Home extends View {
  constructor() {
    super();
    this.container = el(
      ".home-view",
      new Button({
        title: "Log in",
        onClick: async () => {
        },
      }),
    ).appendTo(BodyNode);
  }
}
