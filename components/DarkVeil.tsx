"use client";

/**
 * Dark Veil: subtle animated CPPN background (OGL).
 * From React Bits: https://reactbits.dev/backgrounds/dark-veil
 * Source: https://github.com/DavidHDev/react-bits
 */

import { useEffect, useRef } from "react";
import { Mesh, Program, Renderer, Triangle, Vec2 } from "ogl";
import { darkVeilFragment } from "./darkveil-fragment";

const vertex = /* glsl */ `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

export type DarkVeilProps = {
  className?: string;
  hueShift?: number;
  noiseIntensity?: number;
  scanlineIntensity?: number;
  speed?: number;
  scanlineFrequency?: number;
  warpAmount?: number;
  resolutionScale?: number;
};

export function DarkVeil({
  className = "",
  hueShift = 0,
  noiseIntensity = 0,
  scanlineIntensity = 0,
  speed = 0.5,
  scanlineFrequency = 0,
  warpAmount = 0,
  resolutionScale = 1,
}: DarkVeilProps) {
  const ref = useRef<HTMLCanvasElement>(null);
  const visibleRef = useRef(true);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      canvas,
    });

    const gl = renderer.gl;
    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex,
      fragment: darkVeilFragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Vec2() },
        uHueShift: { value: hueShift },
        uNoise: { value: noiseIntensity },
        uScan: { value: scanlineIntensity },
        uScanFreq: { value: scanlineFrequency },
        uWarp: { value: warpAmount },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      renderer.setSize(w * resolutionScale, h * resolutionScale);
      program.uniforms.uResolution.value.set(w, h);
    };

    const io = new IntersectionObserver(
      ([e]) => {
        visibleRef.current = e?.isIntersecting ?? true;
      },
      { root: null, rootMargin: "120px", threshold: 0 },
    );
    io.observe(parent);

    window.addEventListener("resize", resize);
    resize();

    const start = performance.now();
    let frame = 0;

    const loop = () => {
      if (visibleRef.current) {
        program.uniforms.uTime.value =
          ((performance.now() - start) / 1000) * speed;
        program.uniforms.uHueShift.value = hueShift;
        program.uniforms.uNoise.value = noiseIntensity;
        program.uniforms.uScan.value = scanlineIntensity;
        program.uniforms.uScanFreq.value = scanlineFrequency;
        program.uniforms.uWarp.value = warpAmount;
        renderer.render({ scene: mesh });
      }
      frame = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      io.disconnect();
      const lose = gl.getExtension("WEBGL_lose_context") as
        | { loseContext: () => void }
        | undefined;
      lose?.loseContext();
    };
  }, [
    hueShift,
    noiseIntensity,
    scanlineIntensity,
    speed,
    scanlineFrequency,
    warpAmount,
    resolutionScale,
  ]);

  return (
    <canvas
      ref={ref}
      className={`block h-full w-full ${className}`.trim()}
      aria-hidden
    />
  );
}
