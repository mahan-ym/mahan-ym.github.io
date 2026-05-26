import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css';

const SEQUENCE = [
    { type: 'cmd', text: 'python train.py --model transformer --epochs 10' },
    { type: 'out', text: 'Loading dataset... ████████████ 100%' },
    { type: 'out', text: 'Epoch  1/10  loss=0.842  acc=67.1%' },
    { type: 'out', text: 'Epoch  5/10  loss=0.341  acc=88.4%' },
    { type: 'out', text: 'Epoch 10/10  loss=0.127  acc=96.2%  ✓' },
    { type: 'cmd', text: 'python deploy.py --env production' },
    { type: 'out', text: '▸ Building Docker image...' },
    { type: 'out', text: '▸ Pushing to registry...   done' },
    { type: 'out', text: '▸ Service live at :8080   ✓' },
    { type: 'cmd', text: 'git log --oneline -3' },
    { type: 'out', text: 'a3f9c2e  Add transformer attention layer' },
    { type: 'out', text: 'b8e1d44  Optimize inference pipeline' },
    { type: 'out', text: 'c91f5a7  Initial model commit' },
    { type: 'cmd', text: 'python infer.py --prompt "Hello world"' },
    { type: 'out', text: '> Generating...  tokens=128  latency=48ms' },
    { type: 'out', text: '> "Hello! How can I assist you today?"' },
];

function Terminal() {
    const [lines, setLines] = useState([]);
    const [currentCmd, setCurrentCmd] = useState('');
    const [seqIdx, setSeqIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [phase, setPhase] = useState('typing');
    const bodyRef = useRef(null);

    useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }
    }, [lines, currentCmd]);

    useEffect(() => {
        if (phase === 'done') {
            const t = setTimeout(() => {
                setLines([]);
                setCurrentCmd('');
                setSeqIdx(0);
                setCharIdx(0);
                setPhase('typing');
            }, 2800);
            return () => clearTimeout(t);
        }

        const item = SEQUENCE[seqIdx];
        if (!item) { setPhase('done'); return; }

        if (item.type === 'cmd') {
            if (charIdx < item.text.length) {
                const t = setTimeout(() => {
                    setCurrentCmd(prev => prev + item.text[charIdx]);
                    setCharIdx(c => c + 1);
                }, 42 + Math.random() * 28);
                return () => clearTimeout(t);
            } else {
                const t = setTimeout(() => {
                    setLines(prev => [...prev, { type: 'cmd', text: item.text }]);
                    setCurrentCmd('');
                    setSeqIdx(i => i + 1);
                    setCharIdx(0);
                }, 380);
                return () => clearTimeout(t);
            }
        } else {
            const t = setTimeout(() => {
                setLines(prev => [...prev, { type: 'out', text: item.text }]);
                setSeqIdx(i => i + 1);
                setCharIdx(0);
            }, 260);
            return () => clearTimeout(t);
        }
    }, [phase, seqIdx, charIdx]);

    const nextItem = SEQUENCE[seqIdx];
    const showPrompt = nextItem?.type === 'cmd' && phase !== 'done';

    return (
        <div className="terminal">
            <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red"></div>
                <div className="terminal-dot terminal-dot-yellow"></div>
                <div className="terminal-dot terminal-dot-green"></div>
                <span className="terminal-title">mahan@ai-studio ~ </span>
            </div>
            <div className="terminal-body" ref={bodyRef}>
                {lines.map((line, i) => (
                    <div key={i} className={`terminal-line ${line.type === 'cmd' ? 'terminal-cmd-line' : 'terminal-out-line'}`}>
                        {line.type === 'cmd' && <span className="terminal-prompt">❯</span>}
                        <span>{line.text}</span>
                    </div>
                ))}
                {showPrompt && (
                    <div className="terminal-line terminal-cmd-line">
                        <span className="terminal-prompt">❯</span>
                        <span>{currentCmd}</span>
                        <span className="terminal-cursor">█</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Terminal;
