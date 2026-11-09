import { contextBridge } from "electron";
contextBridge.exposeInMainWorld("desktop",{platform:process.platform,appName:"Dood__le doo"});