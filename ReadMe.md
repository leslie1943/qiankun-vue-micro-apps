### 使用 qiankun 搭建微前端过程

### 1. 在主应用 安装 qiankun 插件
- `npm install qiankun`
- `npm install --save-dev @types/qiankun`
- 在主程序的 `main.ts`里面引入 `qiankun` 并注册子应用. 并启动主应用.
- 配置子应用的时候, 要指定`entry` 和 `container`, `container`是子应用的容器, `activeRule`是子应用的激活规则.
- 执行 `registerMicroApps`方法
```js

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
```
- 在主应用的`App.vue`或者是其他组件中处理`qiankun`启动的flag
```js
import { start } from 'qiankun';
import { onMounted } from 'vue';

onMounted(() => {
  if (!window.qiankunStarted) {
    window.qiankunStarted = true;
    start({ sandbox: { experimentalStyleIsolation: true } });
  }
});
```

- 在主应用的 `App.vue` 或者是其他组件中定义 挂在子应用的容器
```html
 <div class="content">
    <div id="subApp" class="sub-app-container" />
</div>
```

### 2. 在子应用的配置文件 `vite.config.ts` 中进行设置
- 安装并引入 `vite-plugin-qiankun` 插件
- 设置`qiankun`的配置

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

// https://vite.dev/config/
export default defineConfig({
  base: "http://localhost:3001/",
  server: {
    port: 3001,
    cors: true,
    origin: "http://localhost:3001",
  },
  plugins: [
    vue(),
    qiankun("data-source", {
      useDevMode: true,
    }),
  ],
});
```

### 3. 在子应用的配置文件 `main.ts` 中进行设置
- 引入`vite-plugin-qiankun/dist/helper`包中的方法`renderWithQiankun`和`qiankunWindow`对象
- 根据 ```qiankunWindow.__POWERED_BY_QIANKUN__``` 判断是否是子应用的环境, 如果是子应用的环境, 则调用`renderWithQiankun`方法, 如果不是子应用的环境, 则调用`createApp`方法.
```js
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
      app = createApp(App);
      app /*.use(router).use(ElementPlus).use(createPinia())*/
        .mount(
          (props.container
            ? props.container.querySelector("#app")
            : document.getElementById("app")) as Element
        );
    },
    bootstrap() {},
    update() {},
    unmount() {
      app?.unmount();
    },
  });
}
```

