"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

const SAMPLE_AUDIO_SRC = "/isla-wilde-cara-demo.mp3";
const BARS = 56;

function fmt(ms: number) {
  if (!Number.isFinite(ms)) return "0:00";
  const s = Math.max(0, Math.floor(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

export function CaraVoicePlayer({ compact = false }: { compact?: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMs, setCurrentMs] = useState(0);
  const [duration, setDuration] = useState(0);
  const [levels, setLevels] = useState<number[]>(() =>
    Array.from(
      { length: BARS },
      (_, i) => 0.18 + Math.abs(Math.sin(i * 0.45)) * 0.22,
    ),
  );

  const ensureAnalyser = useCallback(() => {
    if (analyserRef.current || !audioRef.current) return;
    const AC =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    const ctx = new AC();
    const source = ctx.createMediaElementSource(audioRef.current);
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 256;
    source.connect(analyser);
    analyser.connect(ctx.destination);
    audioCtxRef.current = ctx;
    analyserRef.current = analyser;
  }, []);

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    ensureAnalyser();
    if (audioCtxRef.current?.state === "suspended") {
      await audioCtxRef.current.resume();
    }
    await audio.play();
    setIsPlaying(true);
  }, [ensureAnalyser]);

  const toggle = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }
    await play();
  }, [isPlaying, play]);

  useEffect(() => {
    if (!isPlaying || !analyserRef.current) return;
    let raf = 0;
    const data = new Uint8Array(analyserRef.current.frequencyBinCount);
    const tick = () => {
      analyserRef.current?.getByteFrequencyData(data);
      const step = Math.floor(data.length / BARS);
      const next: number[] = [];
      for (let i = 0; i < BARS; i++) {
        let sum = 0;
        for (let j = 0; j < step; j++) sum += data[i * step + j];
        next.push(Math.min(1, sum / step / 200));
      }
      setLevels(next);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrentMs(audio.currentTime * 1000);
    const onMeta = () => {
      if (Number.isFinite(audio.duration)) setDuration(audio.duration * 1000);
    };
    const onEnd = () => setIsPlaying(false);

    if (audio.readyState >= 1 && Number.isFinite(audio.duration)) {
      setDuration(audio.duration * 1000);
    } else {
      audio.load();
    }

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("durationchange", onMeta);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("durationchange", onMeta);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  const progress = duration > 0 ? currentMs / duration : 0;
  const playedBars = Math.floor(progress * BARS);

  const waveform = (
    <div
      className={
        compact
          ? "mt-0 flex h-8 items-end gap-px sm:h-10 sm:gap-[2px]"
          : "mt-0 flex h-10 items-end gap-px sm:h-16 sm:gap-[3px] lg:h-20 lg:gap-[4px]"
      }
      aria-hidden
    >
      {levels.map((v, i) => {
        const played = i <= playedBars && progress > 0;
        const h = Math.max(v * 100, 12);
        return (
          <span
            key={i}
            className="block flex-1 rounded-[2px] transition-colors"
            style={{
              height: `${h}%`,
              backgroundColor: played
                ? "rgb(52 211 153)"
                : "rgba(15, 23, 42, 0.12)",
            }}
          />
        );
      })}
    </div>
  );

  const times = (
    <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500 tabular-nums sm:mt-3 sm:text-[11px]">
      <span>{fmt(currentMs)}</span>
      <span>{duration > 0 ? fmt(duration) : "0:00"}</span>
    </div>
  );

  const playButton = (
    <div
      className={
        compact
          ? "flex flex-wrap items-center gap-3"
          : "mt-2.5 flex flex-wrap items-center gap-3 sm:mt-5 sm:gap-4"
      }
    >
      <button
        type="button"
        onClick={toggle}
        aria-label={isPlaying ? "Pause Cara sample" : "Play Cara sample"}
        className={
          compact
            ? "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-600 text-white shadow-md transition-transform hover:bg-slate-500 active:scale-95"
            : "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-600 text-white shadow-md transition-transform hover:bg-slate-500 active:scale-95 sm:h-16 sm:w-16"
        }
      >
        {isPlaying ? (
          <Pause className="size-5 sm:size-6" strokeWidth={2.5} />
        ) : (
          <Play className="ml-0.5 size-5 sm:size-6" strokeWidth={2.5} />
        )}
      </button>
      <div className="min-w-0 leading-tight">
        <p className="font-display text-[15px] font-semibold tracking-tight text-slate-900">
          {isPlaying ? "Playing Cara's voice" : "Play Cara's voice"}
        </p>
        <p className="mt-0.5 text-[12px] text-slate-500">
          What you hear is Cara. No effects. No edits.
        </p>
      </div>
    </div>
  );

  const audioEl = (
    <audio
      ref={audioRef}
      src={SAMPLE_AUDIO_SRC}
      preload="metadata"
      className="sr-only"
    />
  );

  if (compact) {
    return (
      <>
        <div className="min-w-0">
          {playButton}
          <div className="mt-4">{waveform}</div>
          {times}
        </div>
        {audioEl}
      </>
    );
  }

  return (
    <>
      <div className="min-w-0 space-y-0">
        <div className="min-w-0">
            <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-slate-500 sm:text-[11px] sm:tracking-[0.2em]">
              Irish English · 48&nbsp;kHz
              {duration > 0 ? ` · ${fmt(duration)}` : ""}
            </p>
            <h3 className="mt-2 bg-clip-text font-display text-[1.875rem] font-semibold leading-[1.16] tracking-tight text-transparent bg-gradient-to-br from-slate-950 via-slate-600 to-slate-400 sm:mt-4 sm:text-[40px] sm:leading-[1.16] lg:mt-4 lg:text-[48px]">
              Cara
            </h3>
            <p className="mt-1 text-xs text-slate-600 sm:mt-2 sm:text-sm">
              HelloCara&rsquo;s Irish AI voice agent
            </p>
            <blockquote className="mt-2.5 max-w-sm border-l-2 border-slate-200/90 pl-3 font-display text-[13px] leading-relaxed text-slate-800 sm:mt-6 sm:pl-5 sm:text-[15px] lg:mt-8 lg:text-base">
              &ldquo;Hiya, you&rsquo;re through to HelloCara. I&rsquo;m Cara, your
              AI receptionist. How can I help?&rdquo;
            </blockquote>
        </div>

        <div className="min-w-0 mt-0">
          {waveform}
          {times}
          {playButton}
        </div>
      </div>
      {audioEl}
    </>
  );
}
