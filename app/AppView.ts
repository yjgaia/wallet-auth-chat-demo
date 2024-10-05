import { BodyNode, el, View } from "@common-module/app";
import { Button } from "@common-module/app-components";

export default class AppView extends View {
  constructor() {
    super();
    this.container = el(
      ".app-view",
      new Button({
        title: "Log in",
        onClick: async () => {
        },
      }),
    ).appendTo(BodyNode);
  }
}
