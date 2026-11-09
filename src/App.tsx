import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Folder, FileCode2, Play, Save, Settings, Terminal, GitBranch, ChevronDown, X, Square, Minus } from "lucide-react";
const initialCode = `// Start creating something...\n`;
export default function App() {
 const [code,setCode]=useState(initialCode); const [showTerminal,setShowTerminal]=useState(true);
 return <main className="desktop">
 <header className="titlebar"><div className="app-mark">D</div><span className="app-title">Dood__le doo</span><div className="window-controls"><button aria-label="Minimize"><Minus size={14}/></button><button aria-label="Maximize"><Square size={12}/></button><button aria-label="Close" className="close"><X size={15}/></button></div></header>
 <nav className="menubar">{["File","Edit","View","Project","Build","Debug","Tools","Window","Help"].map(x=><button key={x}>{x}</button>)}</nav>
 <div className="toolbar"><button title="New file"><FileCode2/></button><button title="Open project"><Folder/></button><button title="Save"><Save/></button><span className="tool-separator"/><button title="Run"><Play size={15}/></button><button title="Terminal" onClick={()=>setShowTerminal(v=>!v)}><Terminal/></button><span className="toolbar-spacer"/><span className="status-label">Ready</span></div>
 <section className="workspace"><aside className="explorer"><div className="panel-heading"><span>Project Explorer</span><ChevronDown size={13}/></div><div className="panel-tabs"><button>Project</button><button>Files</button><button>Search</button></div><div className="tree-root"><ChevronDown size={13}/><Folder size={15}/> <span>Workspace</span></div><div className="tree-empty">No project opened</div><div className="explorer-bottom"><button><Settings size={15}/> Settings</button></div></aside>
 <section className="editor-area"><div className="document-tabs"><div className="document-tab"><FileCode2 size={14}/>Untitled<span className="tab-dot"/></div></div><div className="editor-wrap"><Editor height="100%" defaultLanguage="javascript" theme="vs" value={code} onChange={v=>setCode(v??"")} options={{fontSize:14,minimap:{enabled:false},automaticLayout:true,scrollBeyondLastLine:false,wordWrap:"on",padding:{top:12},lineNumbers:"on",glyphMargin:true,renderLineHighlight:"all"}}/></div>
 {showTerminal&&<div className="terminal-panel"><div className="terminal-heading"><div><Terminal size={14}/> Output</div><button onClick={()=>setShowTerminal(false)}><X size={14}/></button></div><div className="terminal-content">Build and run output will appear here.</div></div>}</section></section>
 <footer className="statusbar"><span><GitBranch size={13}/> main</span><span>Ready</span><span>UTF-8</span><span>JavaScript</span></footer></main>;
}