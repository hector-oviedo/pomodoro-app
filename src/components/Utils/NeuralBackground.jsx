class NeuralNetworkBackground {
    constructor(id, dotCount = 50, maxDistance = 150) {
        this.container = document.getElementById(id);
        if (!this.container) {
            console.error(`Element with ID "${id}" not found.`);
            return;
        }
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);
        this.dotCount = dotCount;
        this.maxDistance = maxDistance;
        this.dots = [];
        this.resizeCanvas(); // Initialize canvas size
        this.initDots(); // Initialize dots
        this.animate();

        window.addEventListener('resize', () => this.resizeCanvas());
    }

    initDots() {
        this.dots = [];
        for (let i = 0; i < this.dotCount; i++) {
            this.dots.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: 2 + Math.random() * 3,
                dx: (Math.random() - 0.5) * 0.3,
                dy: (Math.random() - 0.5) * 0.3,
            });
        }
    }

    resizeCanvas() {
        this.canvas.width = this.container.offsetWidth;
        this.canvas.height = this.container.offsetHeight;
    }

    drawDots() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'rgba(230, 215, 82, 0.5)';
        for (const dot of this.dots) {
            this.ctx.beginPath();
            this.ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    drawLines() {
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        for (let i = 0; i < this.dots.length; i++) {
            for (let j = i + 1; j < this.dots.length; j++) {
                const dx = this.dots[i].x - this.dots[j].x;
                const dy = this.dots[i].y - this.dots[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < this.maxDistance) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.dots[i].x, this.dots[i].y);
                    this.ctx.lineTo(this.dots[j].x, this.dots[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }

    updateDots() {
        for (const dot of this.dots) {
            dot.x += dot.dx;
            dot.y += dot.dy;

            if (dot.x < 0 || dot.x > this.canvas.width) dot.dx *= -1;
            if (dot.y < 0 || dot.y > this.canvas.height) dot.dy *= -1;
        }
    }

    animate() {
        this.drawDots();
        this.drawLines();
        this.updateDots();
        requestAnimationFrame(() => this.animate());
    }
}

import React, { useEffect } from 'react';

export const NeuralBackground = ({ id, dotCount = 50, maxDistance = 150 }) => {
    useEffect(() => {
        new NeuralNetworkBackground(id, dotCount, maxDistance);
    }, [id, dotCount, maxDistance]);

    return <div id={id} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}></div>;
};
