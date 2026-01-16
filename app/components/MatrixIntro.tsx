"use client";
import React, { useEffect, useRef, useState } from 'react';
import './MatrixIntro.css';

interface MatrixIntroProps {
    onAnimationComplete: () => void;
}

type AnimationStage = 'initial' | 'fold' | 'recenter' | 'expand' | 'fade';

export default function MatrixIntro({ onAnimationComplete }: MatrixIntroProps) {
    const [stage, setStage] = useState<AnimationStage>('initial');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Matrix Background Effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d')!;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const columns = Math.floor(canvas.width / 20);
        const drops = Array(columns).fill(1);

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#00ff41';
            ctx.font = '15px monospace';

            drops.forEach((y, i) => {
                const char = Math.random() > 0.5 ? "1" : "0";
                ctx.fillText(char, i * 20, y * 20);
                if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            });
        };

        const interval = setInterval(draw, 35);
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resize);
        };
    }, []);

    // Stage Controller
    // Stage Controller (SAFE)
    useEffect(() => {
        let cancelled = false;

        // Strict-mode guard: don't run twice in dev
        // (runs once per real mount)
        const timeouts: number[] = [];

        const set = (ms: number, fn: () => void) => {
            const id = window.setTimeout(() => {
                if (!cancelled) fn();
            }, ms);
            timeouts.push(id);
        };

        set(1200, () => setStage("fold"));
        set(2200, () => setStage("recenter")); // 1200 + 1000
        set(3000, () => setStage("expand"));   // + 800
        set(5500, () => setStage("fade"));     // + 2500
        set(6500, () => onAnimationComplete()); // + 1000

        return () => {
            cancelled = true;
            timeouts.forEach(clearTimeout);
        };
    }, [onAnimationComplete]);


    return (
        <div className={`matrix-intro-root ${stage === 'fade' ? 'matrix-exit' : ''}`}>
            <canvas ref={canvasRef} className="matrix-canvas-layer" />

            <div className={`matrix-name-box stage-${stage}`}>

                <div className="name-wrapper">
                    {/* LEFT SECTION */}
                    <div className="letter-anchor">
                        <span className="initial-letter">J</span>
                        <span className="expand-jeffery">effery</span>
                    </div>

                    {/* THE DYNAMIC GAP */}
                    <span className="name-space">&nbsp;</span>

                    {/* RIGHT SECTION */}
                    <div className="letter-anchor">
                        <span className="initial-letter">A</span>
                        {/* FIX: React physically deletes this as soon as 'expand' hits */}
                        {(stage === 'initial' || stage === 'fold' || stage === 'recenter') && (
                            <span className="hinge-text">chamfuor</span>
                        )}
                        <span className="expand-achamfuor">chamfuor</span>
                    </div>
                </div>

            </div>
        </div>
    );
}