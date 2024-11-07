import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import { registerMicroApps, start } from "qiankun";

const apps = [
  {
    name: "flow-graph",
    entry: "http://localhost:3002/",
    container: "#subApp",
    activeRule: "/flow-graph",
  },
  {
    name: "data-soruce",
    entry: "http://localhost:3001/",
    container: "#subApp",
    activeRule: "/data-source",
  },
];

registerMicroApps(apps);
// start();

const app = createApp(App);
app.use(ElementPlus);

app.mount("#app");
