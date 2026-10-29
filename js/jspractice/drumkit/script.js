
const drums = document.querySelectorAll(".drum");
const message = document.getElementById("message");

let audioContext;

function getAudioContext() {
    if (!audioContext) {
        audioContext = new (
            window.AudioContext || window.webkitAudioContext
        )();
    }

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }

    return audioContext;
}

// Play a synthesized drum sound
function playSound(key) {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    if (key === "a") {
        // Kick drum
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(150, now);
        oscillator.frequency.exponentialRampToValueAtTime(
            35, now + 0.35
        );

        gain.gain.setValueAtTime(1, now);
        gain.gain.exponentialRampToValueAtTime(
            0.001, now + 0.4
        );

        oscillator.start(now);
        oscillator.stop(now + 0.4);

    } else if (key === "s" || key === "j" ||
               key === "w" || key === "k") {
        // Snare, hi-hat, crash and ride use noise
        const bufferSize = ctx.sampleRate * 1;
        const buffer = ctx.createBuffer(
            1, bufferSize, ctx.sampleRate
        );
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = ctx.createBufferSource();
        const filter = ctx.createBiquadFilter();
        const noiseGain = ctx.createGain();

        noise.buffer = buffer;
        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(ctx.destination);

        if (key === "j") {
            // Hi-hat
            filter.type = "highpass";
            filter.frequency.value = 8000;
            noiseGain.gain.setValueAtTime(0.35, now);
            noiseGain.gain.exponentialRampToValueAtTime(
                0.001, now + 0.08
            );
            noise.start(now);
            noise.stop(now + 0.09);

        } else if (key === "s") {
            // Snare
            filter.type = "highpass";
            filter.frequency.value = 1000;
            noiseGain.gain.setValueAtTime(0.7, now);
            noiseGain.gain.exponentialRampToValueAtTime(
                0.001, now + 0.2
            );
            noise.start(now);
            noise.stop(now + 0.21);

        } else {
            // Crash and ride
            filter.type = "highpass";
            filter.frequency.value = key === "w" ? 2500 : 4000;
            noiseGain.gain.setValueAtTime(0.45, now);
            noiseGain.gain.exponentialRampToValueAtTime(
                0.001, now + (key === "w" ? 0.9 : 0.45)
            );
            noise.start(now);
            noise.stop(now + (key === "w" ? 0.9 : 0.45));
        }

    } else if (key === "d") {
        // Tom drum
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(220, now);
        oscillator.frequency.exponentialRampToValueAtTime(
            80, now + 0.25
        );

        gain.gain.setValueAtTime(0.8, now);
        gain.gain.exponentialRampToValueAtTime(
            0.001, now + 0.3
        );

        oscillator.start(now);
        oscillator.stop(now + 0.3);

    } else if (key === "l") {
        // Clap: two quick noise bursts
        const buffer = ctx.createBuffer(
            1, ctx.sampleRate * 0.2, ctx.sampleRate
        );
        const data = buffer.getChannelData(0);

        for (let i = 0; i < data.length; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = ctx.createBufferSource();
        const filter = ctx.createBiquadFilter();
        const clapGain = ctx.createGain();

        noise.buffer = buffer;
        filter.type = "highpass";
        filter.frequency.value = 1200;

        noise.connect(filter);
        filter.connect(clapGain);
        clapGain.connect(ctx.destination);

        clapGain.gain.setValueAtTime(0.7, now);
        clapGain.gain.setValueAtTime(0.7, now + 0.025);
        clapGain.gain.exponentialRampToValueAtTime(
            0.001, now + 0.18
        );

        noise.start(now);
        noise.stop(now + 0.19);
    }
}

// Visual animation
function animateDrum(key) {
    const drum = document.querySelector(
        `.drum[data-key="${key}"]`
    );

    if (!drum) return;

    drum.classList.add("playing");
    setTimeout(() => drum.classList.remove("playing"), 120);

    message.textContent = `PLAYING: ${key.toUpperCase()}`;
}

// Mouse / touch controls
drums.forEach((drum) => {
    drum.addEventListener("click", () => {
        const key = drum.dataset.key;
        playSound(key);
        animateDrum(key);
    });
});

// Keyboard controls
document.addEventListener("keydown", (event) => {
    if (event.repeat) return;

    const key = event.key.toLowerCase();

    if ("wasdjkl".includes(key)) {
        playSound(key);
        animateDrum(key);
    }
});

                                                          
                                                                                            
                                                                                     
                             






























                                       
                                                                    