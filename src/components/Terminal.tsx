import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import styled from 'styled-components';

const TerminalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 500px;
  background-color: #000;
  color: #fff;
  font-family: monospace;
  border-radius: 5px;
  overflow: hidden;
`;

const TerminalHeader = styled.div`
  height: 30px;
  background-color: #222;
  display: flex;
  align-items: center;
  padding: 20px 10px;
  border-bottom: 1px solid #333;
`;

const TerminalButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 5px;
`;

const CloseButton = styled(TerminalButton)`
  background-color: #e74c3c;
`;

const MinimizeButton = styled(TerminalButton)`
  background-color: #f1c40f;
`;

const MaximizeButton = styled(TerminalButton)`
  background-color: #2ecc71;
`;

const TerminalContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
  background-color: #121212;
`;

const TerminalInputLine = styled.div`
  display: flex;
  padding: 10px;
  background-color: #222;
`;

const TerminalInput = styled.input`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 5px;
  margin-left: 5px;
  width: 90%;
`;

const TerminalPrefix = styled.span`
  user-select: none;
`;

interface CommandResponses {
  [key: string]: string;
}

const Terminal = () => {
  const [input, setInput] = useState('');
  const [commands, setCommands] = useState<string[]>([]);
  const outputRef = useRef<HTMLDivElement>(null);

  const commandResponses: CommandResponses = {
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

  const executeCommand = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      const response = commandResponses[input] || `Command not found: ${input}`;
      setCommands(prev => [...prev, `> ${input}`, response]);
      setInput('');

      if (outputRef.current) {
        outputRef.current.scrollTop = outputRef.current.scrollHeight;
      }
    }
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [commands]);

  return (
    <TerminalContainer>
      <TerminalHeader>
        <CloseButton />
        <MinimizeButton />
        <MaximizeButton />
      </TerminalHeader>
      <TerminalContent ref={outputRef}>
        {commands.map((cmd, index) => (
          <div key={index}>{cmd}</div>
        ))}
      </TerminalContent>
      <TerminalInputLine>
        <TerminalPrefix>-</TerminalPrefix>
        <TerminalInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={executeCommand}
          placeholder="Type command..."
        />
      </TerminalInputLine>
    </TerminalContainer>
  );
};

export default Terminal;
