import React, { useEffect, useRef } from 'react';

const ParticleEffect = ({text = '', cl=['#8d99ae', '#edf2f4', '#ffffff']}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor(effect, x, y, color) {
        this.effect = effect;
        this.x = Math.round(Math.random()) * this.effect.canvasWidth;
        this.y = Math.random() * this.effect.canvasHeight;
        this.color = color;
        this.originX = x;
        this.originY = y;
        this.size = this.effect.gap;
        this.dx = 0;
        this.dy = 0;
        this.vx = 0;
        this.vy = 0;
        this.force = 0;
        this.angle = 0;
        this.distance = 0;
        this.friction = Math.random() * 0.6 + 0.15;
        this.ease = Math.random() * 0.1 + 0.005;
      }
      draw() {
        this.effect.context.fillStyle = this.color;
        this.effect.context.fillRect(this.x, this.y, this.size, this.size);
      }
      update() {
        this.dx = this.effect.mouse.x - this.x;
        this.dy = this.effect.mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        this.force = -this.effect.mouse.radius / this.distance;

        if (this.distance < this.effect.mouse.radius) {
          this.angle = Math.atan2(this.dy, this.dx);
          this.vx += this.force * Math.cos(this.angle);
          this.vy += this.force * Math.sin(this.angle);
        }

        this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
        this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
      }
    }

    class Effect {
      constructor(context, canvasWidth, canvasHeight) {
        this.context = context;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.textX = this.canvasWidth / 2;
        this.textY = this.canvasHeight / 2;
        this.fontSize = 200;
        this.lineHeight = this.fontSize * 0.95;
        this.maxTextWidth = this.canvasWidth * 0.8;
        this.particles = [];
        this.gap = 2;
        this.mouse = {
          radius: 20000,
          x: 0,
          y: 0
        };
        window.addEventListener('mousemove', (e) => {
          this.mouse.x = e.x;
          this.mouse.y = e.y + 100;
        });
      }

      wrapText(text) {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0.3, cl[0]);
        gradient.addColorStop(0.5, cl[1]);
        gradient.addColorStop(0.7, cl[2]);
        this.context.fillStyle = gradient;
        this.context.font = this.fontSize + 'px Helvetica';
        this.context.textAlign = 'center';

        let linesArray = [];
        let words = text.split(' ');
        let lineCounter = 0;
        let line = ' ';
        for (let i = 0; i < words.length; i++) {
          let testLine = line + words[i] + ' ';
          if (this.context.measureText(testLine).width > this.maxTextWidth) {
            line = words[i] + ' ';
            lineCounter++;
          } else {
            line = testLine;
          }
          linesArray[lineCounter] = line;
        }
        console.log(linesArray)
        let textHeight = this.lineHeight * lineCounter;
        this.textY = this.canvasHeight / 2 - textHeight / 2;
        linesArray.forEach((el, index) => {
          this.context.fillText(el, this.textX, this.textY + index * this.lineHeight);
        });
        this.convertToParticles();
      }

      convertToParticles() {
        this.particles = [];
        const pixels = this.context.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data;
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        for (let y = 0; y < this.canvasHeight; y += this.gap) {
          for (let x = 0; x < this.canvasWidth; x += this.gap) {
            const index = (y * this.canvasWidth + x) * 4;
            const alpha = pixels[index + 3];
            if (alpha > 0) {
              const red = pixels[index];
              const green = pixels[index + 1];
              const blue = pixels[index + 2];
              const color = `rgb(${red},${green},${blue})`;
              this.particles.push(new Particle(this, x, y, color));
            }
          }
        }
      }

      render() {
        this.particles.forEach((particle) => {
          particle.update();
          particle.draw();
        });
      }
    }

    const effect = new Effect(ctx, canvas.width, canvas.height);
    effect.wrapText(text);
    effect.render();

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      effect.render();
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} id="canvas1" style={{height: '50vh'}}></canvas>;
};

export default ParticleEffect;
