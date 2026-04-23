import React, { useState } from 'react';

const MiniTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'AditiOS v1.0.0 (tty1)' },
    { type: 'output', text: 'Type "help" to see available commands.' }
  ]);


  const [secretNumber, setSecretNumber] = useState(null);

  const addLine = (text, type = 'output') => {
    setHistory((prev) => [...prev, { type, text }]);
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      addLine(`guest@aditi:~$ ${input}`, 'input');

      
      if (secretNumber !== null && !isNaN(cmd)) {
        const guess = Number(cmd);
        if (guess === secretNumber) {
          addLine('🎉 Correct! You guessed the number.');
          setSecretNumber(null);
        } else if (guess < secretNumber) {
          addLine('Too low ⬇️');
        } else {
          addLine('Too high ⬆️');
        }
        setInput('');
        return;
      }

      switch (cmd) {
        case 'help':
          addLine('Available commands: whoami, skills, projects, clear, sudo');
          addLine('Fun commands: game, guess, rps');
          break;

        case 'whoami':
          addLine('Aditi | 3rd Year B.Tech CSE @ BIT Mesra');
          addLine('Status: LeetCode Knight ⚔️ | Full Stack & AI Dev');
          break;

        case 'skills':
          addLine('► React, Node.js, FastAPI, Python, C/C++');
          addLine('► AI/ML: Transformers, LLMs, Fuzzy Logic');
          break;

        case 'projects':
          addLine('1. Traitors (AI Multi-Agent Game)');
          addLine('2. LagFree (Mamdani FIS Optimizer)');
          addLine('3. Misinfo Drift Detector');
          addLine('4. DripTrack (MERN Wardrobe)');
          break;

        case 'game':
          addLine('🎮 Available games:');
          addLine('• guess  -> Number Guessing Game');
          addLine('• rps    -> Rock Paper Scissors');
          break;

        case 'guess':
          const num = Math.floor(Math.random() * 10) + 1;
          setSecretNumber(num);
          addLine('I picked a number between 1 and 10. Try to guess!');
          break;

        case 'rps': {
          const options = ['rock', 'paper', 'scissors'];
          const bot = options[Math.floor(Math.random() * 3)];
          addLine('Type rock, paper, or scissors');
          setSecretNumber(null);
          break;
        }

        case 'rock':
        case 'paper':
        case 'scissors': {
          const options = ['rock', 'paper', 'scissors'];
          const bot = options[Math.floor(Math.random() * 3)];
          addLine(`You chose: ${cmd}`);
          addLine(`Bot chose: ${bot}`);

          if (cmd === bot) addLine('Draw 🤝');
          else if (
            (cmd === 'rock' && bot === 'scissors') ||
            (cmd === 'paper' && bot === 'rock') ||
            (cmd === 'scissors' && bot === 'paper')
          )
            addLine('You win 🎉');
          else addLine('Bot wins 🤖');
          break;
        }

        case 'sudo':
          addLine('Nice try. This incident will be reported. 🚨');
          break;

        case 'clear':
          setHistory([]);
          setInput('');
          return;

        case '':
          break;

        default:
          addLine(`bash: ${cmd}: command not found`);
      }

      setInput('');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-black border-4 border-black rounded-2xl shadow-neo overflow-hidden flex flex-col font-mono text-sm sm:text-base">
     
      <div className="bg-gray-200 border-b-4 border-black px-4 py-2 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-custom-red border-2 border-black"></div>
          <div className="w-3 h-3 rounded-full bg-custom-yellow border-2 border-black"></div>
          <div className="w-3 h-3 rounded-full bg-custom-green border-2 border-black"></div>
        </div>
        <span className="font-bold text-black text-xs tracking-widest">root@aditi:~</span>
        <div className="w-10"></div>
      </div>

     
      <div className="p-4 h-64 overflow-y-auto bg-black text-custom-blue custom-scrollbar">
        {history.map((line, index) => (
          <div
            key={index}
            className={`mb-1 ${line.type === 'input' ? 'text-white' : 'text-custom-blue'}`}
          >
            {line.text}
          </div>
        ))}

        <div className="flex items-center mt-2">
          <span className="text-custom-green mr-2">guest@aditi:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent border-none outline-none text-custom-blue caret-custom-blue"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
};

export default MiniTerminal;