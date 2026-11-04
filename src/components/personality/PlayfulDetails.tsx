import { useEffect, useRef, useState } from "react";

function Gear({ size = 88 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="2">
        {Array.from({ length: 12 }, (_, i) => (
          <path
            key={i}
            d="M44 15 L44 5 L56 5 L56 15"
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="35" />
        <circle cx="50" cy="50" r="12" />
        {[0, 90, 180, 270].map((r) => (
          <path key={r} d="M50 23V33" transform={`rotate(${r} 50 50)`} />
        ))}
      </g>
    </svg>
  );
}
export function ScrollGears({ playing }: { playing: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!playing) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      root.current?.style.setProperty(
        "--gear-turn",
        `${window.scrollY * 0.12}deg`,
      );
      const max = document.documentElement.scrollHeight - window.innerHeight;
      root.current?.style.setProperty(
        "--progress",
        `${max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0}%`,
      );
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
      cancelAnimationFrame(frame);
    };
  }, [playing]);
  return (
    <div
      ref={root}
      className={`scroll-machinery ${playing ? "" : "is-paused"}`}
      aria-hidden="true"
    >
      <div className="gear-rail left">
        <div className="gear-main">
          <Gear />
        </div>
        <div className="gear-small">
          <Gear size={56} />
        </div>
        <span>scroll-powered</span>
      </div>
      <div className="gear-rail right">
        <div className="gear-main">
          <Gear />
        </div>
        <div className="gear-small">
          <Gear size={56} />
        </div>
        <div className="gear-progress" />
      </div>
    </div>
  );
}
const streams = Array.from({ length: 18 }, (_, i) =>
  Array.from({ length: 30 }, (_, j) =>
    "01{}<>/[]".charAt((i * 7 + j * 3) % 9),
  ).join("\n"),
);
export function MatrixRain({ playing }: { playing: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(Boolean(entry?.isIntersecting)),
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`matrix-rain ${playing && visible ? "is-running" : ""}`}
      aria-hidden="true"
    >
      {streams.map((text, i) => (
        <span
          key={i}
          style={{
            left: `${i * 5.8}%`,
            animationDelay: `${-i * 1.3}s`,
            animationDuration: `${13 + (i % 5) * 2}s`,
          }}
        >
          {text}
        </span>
      ))}
    </div>
  );
}
export function TinyTerminal() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState([
    "A tiny terminal. No root access, just personality.",
    "Try: help, whoami, stack, ship, lukat, clear",
  ]);
  function run(e: React.FormEvent) {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    const answers: Record<string, string> = {
      help: "whoami · stack · ship · lukat · sudo hire omar · clear",
      whoami:
        "Omar. Builds software, teaches Go, gives old laptops new responsibilities.",
      stack: "Docker + Compose · Git · Linux · Python · Go · React · NixOS",
      ship: "Brief → build → review → test → deploy → document. Then fix the thing nobody mentioned in the brief.",
      lukat:
        "A little wireless display with a lot of personality. Your headphones may now have hobbies.",
      "sudo hire omar":
        "Permission granted. Use the contact button; this shell is decorative.",
    };
    if (!cmd) return;
    setLines((old) =>
      cmd === "clear"
        ? []
        : [
            ...old,
            `$ ${input}`,
            answers[cmd] ?? `Command not found: ${input}. Try help.`,
          ].slice(-14),
    );
    setInput("");
  }
  return (
    <details className="tiny-terminal">
      <summary>
        <span aria-hidden="true">&gt;_</span> Try the terminal
      </summary>
      <div className="terminal-body">
        <div className="terminal-output" role="log" aria-live="polite">
          {lines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <form onSubmit={run}>
          <label htmlFor="personality-command">visitor@omar:~ $</label>
          <input
            id="personality-command"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
            spellCheck={false}
            maxLength={100}
            placeholder="help"
          />
          <button type="submit">Run ↵</button>
        </form>
      </div>
    </details>
  );
}
