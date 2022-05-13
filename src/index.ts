import { createApp } from "vue"
import { formatDogWang } from "@/utils"
import App from "./App.vue"
import "@/style/index.less"
import "@/style/rect.less"

formatDogWang()

createApp(App).mount("#app")
