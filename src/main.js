import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faBars,
  faEnvelope,
  faKey,
  faFish,
  faUserCircle,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle,faGithub } from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";
import router from "./router";
import "@/assets/index.css";

library.add([
  faGoogle,
  faGithub,
  faBars,
  faEnvelope,
  faKey,
  faFish,
  faUserCircle,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faInfoCircle
]);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
