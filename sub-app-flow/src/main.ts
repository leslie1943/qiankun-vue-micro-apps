import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let app: any;
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  createApp(App) /**.use(router).use(ElementPlus).use(createPinia()) */
    .mount("#app");
} else {
  renderWithQiankun({
    mount(props) {
      console.log("--mount");

      app = createApp(App);
      app
        // .use(router)
        // .use(ElementPlus)
        // .use(createPinia())
        .mount(
          (props.container
            ? props.container.querySelector("#app")
            : document.getElementById("app")) as Element
        );
    },
    bootstrap() {
      console.log("--bootstrap");
    },
    update() {
      console.log("--update");
    },
    unmount() {
      console.log("--unmount");
      app?.unmount();
    },
  });
}
