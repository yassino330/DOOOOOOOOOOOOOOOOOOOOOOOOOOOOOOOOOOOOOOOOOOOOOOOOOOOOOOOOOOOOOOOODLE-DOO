import { app, BrowserWindow, shell } from "electron";
import { join } from "path";
function createWindow() {
 const win = new BrowserWindow({width:1280,height:820,minWidth:900,minHeight:600,title:"Dood__le doo",backgroundColor:"#c0c0c0",webPreferences:{preload:join(__dirname,"../preload/index.js"),contextIsolation:true,nodeIntegration:false,sandbox:true}});
 win.webContents.setWindowOpenHandler(({url})=>{if(url.startsWith("https://")) void shell.openExternal(url);return {action:"deny"};});
 if(process.env.ELECTRON_RENDERER_URL) void win.loadURL(process.env.ELECTRON_RENDERER_URL); else void win.loadFile(join(__dirname,"../renderer/index.html"));
}
app.whenReady().then(()=>{createWindow();app.on("activate",()=>{if(BrowserWindow.getAllWindows().length===0)createWindow();});});
app.on("window-all-closed",()=>{if(process.platform!=="darwin")app.quit();});