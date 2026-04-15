"use client";

import { useRef, useState, useEffect } from "react";
import { Icon } from "./Icon";

const AUDIO_FILE = "ElevenLabs_2026-01-30T18_04_38_Michelle - Direct and Natural_pvc_sp100_s50_sb100_v3.mp3";
const AUDIO_SRC = `/${encodeURIComponent(AUDIO_FILE)}`;

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function DemoSection() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioError, setAudioError] = useState<string | null>(null);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      return;
    }

    try {
      setAudioError(null);
      await audio.play();
    } catch {
      setIsPlaying(false);
      setAudioError("Audio couldn't play. Please try again.");
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
    };
    const onLoadedMetadata = () => {
      setDuration(audio.duration);
    };
    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => setAudioError("Audio file failed to load.")}
        preload="metadata"
      />
    <section
      id="demo"
      className="overflow-hidden bg-white pt-24 pb-24 relative scroll-mt-20"
      aria-labelledby="demo-heading"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full pointer-events-none"
        aria-hidden
      >
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70" />
      </div>

      <div className="z-10 max-w-4xl lg:max-w-2xl mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-10">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-8 text-xs font-medium text-white bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 border border-white/10 rounded-full shadow-lg shadow-slate-200/50">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-wide uppercase text-[10px] font-bold">
              Interactive Demo
            </span>
          </div>

          <h2
            id="demo-heading"
            className="md:text-5xl text-4xl font-semibold tracking-tight leading-[1.2] pb-2 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 mb-6"
          >
            Engineering You Can Hear.
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-slate-500 font-normal">
            Most AI sounds robotic. Ours sounds like a local. Click below to
            experience the natural tone, breath pauses, and genuine Donegal
            cadence.
          </p>
        </div>

        <div className="relative bg-slate-900 rounded-2xl lg:rounded-xl p-6 md:p-8 lg:p-6 shadow-2xl shadow-slate-900/50 border border-slate-800 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-[300px] lg:w-[240px] h-[300px] lg:h-[240px] bg-emerald-600/10 rounded-full blur-[80px] lg:blur-[60px] -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:bg-emerald-600/20 transition-colors duration-700" />

          <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-6 z-10">
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-20 animate-pulse" />
              <button
                type="button"
                onClick={togglePlay}
                className="relative w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl shadow-black/20 group/btn border-2 lg:border border-slate-900/10"
                aria-label={isPlaying ? "Pause agent introduction" : "Play agent introduction"}
              >
                <Icon
                  icon={isPlaying ? "solar:pause-bold" : "solar:play-bold"}
                  className={`text-2xl md:text-3xl lg:text-2xl text-slate-900 group-hover/btn:text-emerald-600 transition-colors ${isPlaying ? "" : "ml-0.5"}`}
                  width={28}
                />
              </button>
            </div>

            <div className="flex-grow w-full text-center md:text-left min-w-0">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4 lg:mb-3 gap-2">
                <div>
                  <h3 className="text-xl lg:text-lg font-medium text-white tracking-tight mb-0.5">
                    Agent Introduction
                  </h3>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-xs lg:text-[13px] text-slate-400 font-medium">
                    <Icon
                      icon="solar:user-circle-linear"
                      className="text-lg text-emerald-400"
                    />
                    <span>Voice: Michelle (Donegal)</span>
                  </div>
                </div>
                <span className="font-mono text-xs font-semibold text-emerald-400 bg-emerald-950/30 px-3 py-1.5 rounded-lg border border-emerald-500/20 shadow-inner">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div
                className="flex items-end justify-center md:justify-start gap-1 h-12 lg:h-10 opacity-90 [&>*]:animate-sound"
                aria-hidden
              >
                {[
                  { d: "1.2s", c: "bg-emerald-500" },
                  { d: "0.8s", delay: "0.1s", c: "bg-white" },
                  { d: "1.5s", delay: "0.2s", c: "bg-emerald-400" },
                  { d: "1.1s", delay: "0.3s", c: "bg-emerald-300" },
                  { d: "1.3s", delay: "0.1s", c: "bg-white" },
                  { d: "0.9s", delay: "0.4s", c: "bg-emerald-500" },
                  { d: "1.6s", delay: "0.2s", c: "bg-emerald-400" },
                  { d: "1.0s", delay: "0.5s", c: "bg-white" },
                  { d: "1.4s", delay: "0.1s", c: "bg-emerald-300" },
                  { d: "1.1s", delay: "0.3s", c: "bg-emerald-500" },
                ].map((bar, i) => (
                  <div
                    key={i}
                    className={`w-1.5 ${bar.c} rounded-full`}
                    style={{
                      animationDuration: bar.d,
                      animationDelay: bar.delay ?? "0s",
                    }}
                  />
                ))}
                <div
                  className="w-1.5 bg-white/50 rounded-full hidden sm:block"
                  style={{ animationDuration: "1.7s", animationDelay: "0.2s" }}
                />
                <div
                  className="w-1.5 bg-white/30 rounded-full hidden sm:block"
                  style={{ animationDuration: "1.2s", animationDelay: "0.4s" }}
                />
                <div
                  className="w-1.5 bg-white/10 rounded-full hidden sm:block"
                  style={{ animationDuration: "1.5s", animationDelay: "0.1s" }}
                />
              </div>
              {audioError ? (
                <p className="mt-3 text-xs text-rose-300">{audioError}</p>
              ) : null}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800/50">
            <div
              className="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-white shadow-[0_0_15px_rgba(16,185,129,0.6)] rounded-r-full transition-[width] duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
