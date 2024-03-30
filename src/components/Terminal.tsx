
// import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
// import '../styles/Terminal.css';

// const TerminalContext = createContext();
// const useTerminal = () => useContext(TerminalContext);

// const TerminalProvider = ({ children }) => {
//   const [input, setInput] = useState('');
//   const [responses, setResponses] = useState([]);

//   const commands = {
//     cd: "Changed directory to",
//     ls: "start.sh\nREADME.txt\ndirectory1\ndirectory2",
//     la: "drwxr-xr-x  user  group  size  date  file1.txt\n-rw-r--r--  user  group  size  date  file2.txt",
//     pwd: "/home/user",
//     whoami: "user",
// 	"cat README.txt": "you should never start a file that you dont know the consequences",
//     stdout: "Standard output message",
//     cat: "File contents are displayed here",
//     help: "Available commands: cd, ls, la, pwd, whoami, stdout, cat, help, sh",
//     "start.sh": "Transmitting IP..................done.\nRouter model......done.\nRouter MAC address.............done.\nYou've Been PWNED"
//   };

//   const handleCommand = (command) => {
//     const response = commands[command] || `Command not found: ${command}`;
//     setResponses((prevResponses) => [...prevResponses, response]);
//   };

//   return (
//     <TerminalContext.Provider value={{ input, setInput, responses, handleCommand }}>
//       {children}
//     </TerminalContext.Provider>
//   );
// };

// const Terminal = () => {

// const [input, setInput] = useState('');
// const [commands, setCommands] = useState([]);
// const endOfTerminalRef = useRef(null);

// const executeCommand = (e) => {
//   if (e.key === 'Enter') {
// 	setCommands([...commands, input]);
// 	setInput('');
//   }
// };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && input.trim()) {
//       handleCommand(input);
//       setInput('');
//     }
//   };

//   useEffect(() => {
//     endOfTerminalRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [commands]);

//   return (
//     <div className="terminal-window">
//       <div className="terminal-output">
//         {commands.map((cmd, index) => (
//           <div key={index}> {cmd}</div>
//         ))}
//         <div ref={endOfTerminalRef} />
//       </div>
//       <div className="terminal-input-line">
//         <span className="terminal-prefix">  </span>
//         <input
//           type="text"
//           className="terminal-input"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={executeCommand}
//         />
//       </div>
//     </div>
//
import React, { useState, useEffect, useRef } from 'react';
import '../styles/Terminal.css'; // Ensure the CSS path is correct

const Terminal = () => {
  const [input, setInput] = useState('');
  const [commands, setCommands] = useState([]);
  const outputRef = useRef(null);



  const commandResponses = {
    cd: "Changed directory to...",
    ls: "start.sh README.txt directory1 directory2",
    la: "All files and directories listed with permissions",
    pwd: "Current directory path: /home/user",
    whoami: "Current user: user",
    "cat README.txt": "README file content...",
    stdout: "Standard output message here",
    cat: "Display file content",
    help: "Available commands: cd, ls, la, pwd, whoami, cat, stdout, help, start.sh",
    "start.sh": "Transmitting IP...done. Router model...done. Router MAC address...done. You've Been PWNED",
  };

  const executeCommand = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      const response = commandResponses[input] || `Command not found: ${input}`;
      setCommands((prev) => [...prev, `> ${input}`, response]);
      setInput('');

      // Scroll the output area to the bottom
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Whenever commands update, scroll to the bottom of the output
    outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [commands]);

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-btn close-btn"></div>
        <div className="terminal-btn minimize-btn"></div>
        <div className="terminal-btn maximize-btn"></div>
      </div>
      <div className="terminal-content" ref={outputRef}>
        {commands.map((cmd, index) => (
          <div key={index}>{cmd}</div>
        ))}
      </div>
      <div className="terminal-input-line">
        <span className="terminal-prefix"></span>
        <input
          className="terminal-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={executeCommand}
          placeholder="Type command..."
        />
      </div>
    </div>
  );
};

export default Terminal;
