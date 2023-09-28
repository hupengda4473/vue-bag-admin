import {createApp} from "vue"
import App from "./App.vue"
import "animate.css"
import "@/packages/style/reset.less"
import setupIcons from "@/packages/config/icon.ts"
createApp(App).use(setupIcons).mount("#app")
