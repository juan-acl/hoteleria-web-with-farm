import { defineConfig } from "@farmfe/core";
import path from "path";

const root = path.resolve(__dirname, "src");

export default defineConfig({
    compilation: {
        resolve: {
            alias: {
                "~assets": path.resolve(root, "assets"),
                "~components": path.resolve(root, "components"),
                "~constants": path.resolve(root, "constants"),
                "~hooks": path.resolve(root, "hooks"),
                "~pages": path.resolve(root, "pages"),
                "~redux": path.resolve(root, "redux"),
                "~routes": path.resolve(root, "routes"),
                "~types": path.resolve(root, "types"),
                "~utils": path.resolve(root, "utils"),
            },
        },
    },
    plugins: ["@farmfe/plugin-react"],
});
