import React, { useState } from 'react';
import { User, Users, BrainCircuit, SignalHigh, SignalMedium, SignalLow } from 'lucide-react';
import type { Difficulty } from '../types';

interface StartScreenProps {
  onStartGame: (mode: 'single' | 'multi', items: string[], themeName: string, difficulty: Difficulty) => void;
}

const PRESETS = [
  { id: 'fruits', name: 'Fruits', items: ["🍎", "🍌", "🍇", "🍓", "🍒", "🍑", "🍍", "🥝", "🍉", "🍋", "🍐", "🥥"] },
  { id: 'animals', name: 'Animals', items: ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮"] },
  { id: 'sports', name: 'Sports', items: ["⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🏉", "🎱", "🏓", "🏸", "🥊", "🥋"] },
  { id: 'space', name: 'Space', items: ["🚀", "🪐", "👽", "☄️", "🌑", "🔭", "🛰️", "🌟", "🌍", "☀️", "🌌", "👨‍🚀"] },
];

export const StartScreen: React.FC<StartScreenProps> = ({ onStartGame }) => {
  const [mode, setMode] = useState<'single' | 'multi'>('single');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');

  const handlePresetClick = (preset: typeof PRESETS[0]) => {
    onStartGame(mode, preset.items, preset.name, difficulty);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 animate-fade-in-up">
      <div className="text-center mb-10 md:mb-12">
        <div className="inline-flex items-center justify-center p-3 md:p-4 bg-indigo-500/10 rounded-3xl mb-4 border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
           <BrainCircuit className="w-12 h-12 md:w-16 md:h-16 text-indigo-400" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-100 to-indigo-400 tracking-tight mb-3">
          MindFlip 3D
        </h1>
        <p className="text-base md:text-xl text-slate-400 font-medium tracking-wide">The Ultimate Memory Challenge</p>
      </div>

      <div className="grid md:grid-cols-12 gap-6 md:gap-8">
        {/* Left Column: Game Settings */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-6 border border-white/5 shadow-xl">
             <h3 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4 flex items-center gap-2">
                <User size={14} /> Game Mode
             </h3>
             <div className="flex flex-col gap-3">
              <button
                onClick={() => setMode('single')}
                className={`flex items-center justify-between px-5 py-4 rounded-2xl font-bold transition-all duration-300 border ${
                  mode === 'single' 
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/25' 
                    : 'bg-slate-800/50 border-white/5 text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${mode === 'single' ? 'bg-white/20' : 'bg-slate-700/50'}`}>
                        <User size={20} />
                    </div>
                    <div className="text-left">
                        <div className="text-sm md:text-base">Solo Adventure</div>
                        <div className="text-[10px] md:text-xs opacity-60 font-medium">Beat the clock</div>
                    </div>
                </div>
                {mode === 'single' && <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />}
              </button>

              <button
                onClick={() => setMode('multi')}
                className={`flex items-center justify-between px-5 py-4 rounded-2xl font-bold transition-all duration-300 border ${
                  mode === 'multi' 
                    ? 'bg-pink-600 border-pink-500 text-white shadow-lg shadow-pink-500/25' 
                    : 'bg-slate-800/50 border-white/5 text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${mode === 'multi' ? 'bg-white/20' : 'bg-slate-700/50'}`}>
                        <Users size={20} />
                    </div>
                    <div className="text-left">
                        <div className="text-sm md:text-base">1v1 Duel</div>
                        <div className="text-[10px] md:text-xs opacity-60 font-medium">Challenge a friend</div>
                    </div>
                </div>
                {mode === 'multi' && <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />}
              </button>
             </div>
          </div>

          {/* Difficulty Selection (Solo Only) */}
          {mode === 'single' && (
             <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-6 border border-white/5 shadow-xl animate-fade-in">
               <h3 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4 flex items-center gap-2">
                  <SignalMedium size={14} /> Difficulty
               </h3>
               <div className="grid grid-cols-3 gap-3">
                  <button
                     onClick={() => setDifficulty('easy')}
                     className={`flex flex-col items-center justify-center gap-2 py-4 rounded-2xl border transition-all duration-300 ${
                         difficulty === 'easy'
                         ? 'bg-green-500/20 border-green-500/50 text-green-400 shadow-[0_0_20px_rgba(74,222,128,0.1)]'
                         : 'bg-slate-800/50 border-white/5 text-slate-500 hover:bg-slate-800 hover:text-slate-300'
                     }`}
                  >
                      <SignalLow size={24} />
                      <span className="text-xs font-bold">Easy</span>
                  </button>
                  <button
                     onClick={() => setDifficulty('medium')}
                     className={`flex flex-col items-center justify-center gap-2 py-4 rounded-2xl border transition-all duration-300 ${
                         difficulty === 'medium'
                         ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.1)]'
                         : 'bg-slate-800/50 border-white/5 text-slate-500 hover:bg-slate-800 hover:text-slate-300'
                     }`}
                  >
                      <SignalMedium size={24} />
                      <span className="text-xs font-bold">Medium</span>
                  </button>
                  <button
                     onClick={() => setDifficulty('hard')}
                     className={`flex flex-col items-center justify-center gap-2 py-4 rounded-2xl border transition-all duration-300 ${
                         difficulty === 'hard'
                         ? 'bg-red-500/20 border-red-500/50 text-red-400 shadow-[0_0_20px_rgba(248,113,113,0.1)]'
                         : 'bg-slate-800/50 border-white/5 text-slate-500 hover:bg-slate-800 hover:text-slate-300'
                     }`}
                  >
                      <SignalHigh size={24} />
                      <span className="text-xs font-bold">Hard</span>
                  </button>
               </div>
             </div>
          )}
        </div>

        {/* Right Column: Theme Selection */}
        <div className="md:col-span-7">
           <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl p-6 border border-white/5 shadow-xl h-full">
              <h3 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-6 flex items-center gap-2">
                  <BrainCircuit size={14} /> Select Theme
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handlePresetClick(preset)}
                    className="group relative overflow-hidden bg-slate-800/30 hover:bg-slate-800/80 border border-white/5 hover:border-indigo-500/50 rounded-2xl p-6 transition-all duration-300 text-left hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-150 duration-500">
                        <span className="text-6xl">{preset.items[0]}</span>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                          <span className="text-2xl">{preset.items[0]}</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-200 group-hover:text-white mb-1">{preset.name}</h4>
                      <p className="text-xs text-slate-500 group-hover:text-slate-400">12 Cards • Classic</p>
                    </div>
                  </button>
                ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};