import { useEffect, useRef, useState } from "react";
import type { FormEvent, KeyboardEvent as ReactKeyboardEvent, ReactNode } from "react";
import { portfolioData, courses } from "../../data";

const BANNER = String.raw` ██████╗ ███╗   ███╗ █████╗ ██████╗
██╔═══██╗████╗ ████║██╔══██╗██╔══██╗
██║   ██║██╔████╔██║███████║██████╔╝
██║   ██║██║╚██╔╝██║██╔══██║██╔══██╗
╚██████╔╝██║ ╚═╝ ██║██║  ██║██║  ██║
 ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝`;

const VENN = String.raw`   ╭──────────────────────────╮
   │  DEV                     │
   │             ╭────────────┼─────────────╮
   │  React      │            │         OPS │
   │  Next.js    │  Docker    │             │
   │  JavaScript │  Git       │  Jenkins    │
   │  Go         │  GitHub    │  Ansible    │
   │  Python     │  Compose   │  Terraform  │
   │  Django     │  CI / CD   │  Linux      │
   │  FastAPI    │            │  Bash       │
   │  Gin        │            │             │
   ╰─────────────┼────────────╯             │
                 │                          │
                 ╰──────────────────────────╯`;

const BOOT_COMMANDS = ["whoami", "skills --venn"];

const COMMANDS = [
  "help",
  "whoami",
  "skills",
  "projects",
  "certs",
  "contact",
  "resume",
  "banner",
  "neofetch",
  "theme",
  "echo",
  "clear",
] as const;

interface HistoryEntry {
  id: number;
  node: ReactNode;
}

interface TerminalProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

function Prompt() {
  return (
    <span className="shrink-0 select-none">
      <span className="text-emerald-500 dark:text-emerald-400 font-semibold">
        omar@portfolio
      </span>
      <span className="text-primary/50 dark:text-neutral-500">:</span>
      <span className="text-blue-500 dark:text-blue-400 font-semibold">~</span>
      <span className="text-primary/50 dark:text-neutral-500">$</span>
    </span>
  );
}

function AsciiArt({ children }: { children: string }) {
  return (
    <div className="overflow-x-auto">
      <pre className="text-[10px] leading-none sm:text-xs md:text-sm text-primary/70 dark:text-neutral-300 w-max">
        {children}
      </pre>
    </div>
  );
}

export function Terminal({ isDarkMode, onToggleTheme }: TerminalProps) {
  const { personalInfo, projects, technicalSkills, conceptualSkills } =
    portfolioData;

  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [typed, setTyped] = useState("");
  const [bootIndex, setBootIndex] = useState(0);
  const [booted, setBooted] = useState(false);
  const [input, setInput] = useState("");
  const [commandLog, setCommandLog] = useState<string[]>([]);
  const [logPos, setLogPos] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const entryId = useRef(0);
  const hintShown = useRef(false);

  const pushEntries = (nodes: ReactNode[]) => {
    setHistory((prev) => [
      ...prev,
      ...nodes.map((node) => ({ id: entryId.current++, node })),
    ]);
  };

  const commandLine = (command: string) => (
    <p className="flex items-baseline gap-2 flex-wrap">
      <Prompt />
      <span className="text-primary dark:text-white">{command}</span>
    </p>
  );

  const helpOutput = (
    <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-primary/70 dark:text-neutral-300">
      {[
        ["whoami", "who I am"],
        ["skills", "my skills (--venn for the diagram)"],
        ["projects", "featured projects"],
        ["certs", "certification summary"],
        ["contact", "how to reach me"],
        ["resume", "download my resume"],
        ["banner", "big ascii banner"],
        ["neofetch", "system info"],
        ["theme", "toggle light / dark mode"],
        ["echo", "echo text back"],
        ["clear", "clear the terminal"],
      ].map(([cmd, desc]) => (
        <div key={cmd} className="contents">
          <span className="text-blue-500 dark:text-blue-400 font-semibold">
            {cmd}
          </span>
          <span>{desc}</span>
        </div>
      ))}
    </div>
  );

  const whoamiOutput = (
    <div className="space-y-3">
      <AsciiArt>{BANNER}</AsciiArt>
      <p className="text-primary dark:text-white font-semibold">
        Omar El-Dardery — {personalInfo.role}
      </p>
      <p className="text-primary/60 dark:text-neutral-400">
        {personalInfo.tagline}
      </p>
    </div>
  );

  const skillsListOutput = (
    <div className="space-y-2 text-primary/70 dark:text-neutral-300">
      <p>
        <span className="text-blue-500 dark:text-blue-400 font-semibold">
          technical:
        </span>{" "}
        {technicalSkills.map((skill) => skill.name).join(" · ")}
      </p>
      <p>
        <span className="text-blue-500 dark:text-blue-400 font-semibold">
          concepts:
        </span>{" "}
        {conceptualSkills.map((skill) => skill.name).join(" · ")}
      </p>
      <p className="text-primary/50 dark:text-neutral-500">
        tip: run `skills --venn` for the diagram
      </p>
    </div>
  );

  const vennOutput = (
    <div className="space-y-2">
      <AsciiArt>{VENN}</AsciiArt>
      <p className="text-primary/50 dark:text-neutral-500">
        where dev meets ops — that overlap is where I live.
      </p>
    </div>
  );

  const projectsOutput = (
    <div className="space-y-1 text-primary/70 dark:text-neutral-300">
      {projects.map((project) => (
        <p key={project.title}>
          <span className="text-blue-500 dark:text-blue-400">▸</span>{" "}
          <span className="font-semibold text-primary dark:text-white">
            {project.title}
          </span>{" "}
          — {project.description}
        </p>
      ))}
      <p className="text-primary/50 dark:text-neutral-500 pt-1">
        see the Projects tab below for details.
      </p>
    </div>
  );

  const certsOutput = (() => {
    const providers = new Map<string, number>();
    courses.forEach((course) => {
      providers.set(course.provider, (providers.get(course.provider) ?? 0) + 1);
    });
    const specializations = courses.filter(
      (course) => course.type === "specialization",
    ).length;

    return (
      <div className="space-y-1 text-primary/70 dark:text-neutral-300">
        <p>
          {courses.length} certificates · {specializations} specializations
        </p>
        {Array.from(providers.entries()).map(([provider, count]) => (
          <p key={provider}>
            <span className="text-blue-500 dark:text-blue-400">▸</span>{" "}
            {provider}: {count}
          </p>
        ))}
        <p className="text-primary/50 dark:text-neutral-500 pt-1">
          see the Certificates tab below to browse them all.
        </p>
      </div>
    );
  })();

  const contactOutput = (
    <div className="space-y-1 text-primary/70 dark:text-neutral-300">
      <p>
        <span className="text-blue-500 dark:text-blue-400">email</span>{" "}
        <a
          href={`mailto:${personalInfo.email}`}
          className="underline underline-offset-4 hover:text-primary dark:hover:text-white"
        >
          {personalInfo.email}
        </a>
      </p>
      <p>
        <span className="text-blue-500 dark:text-blue-400">linkedin</span>{" "}
        <a
          href="https://www.linkedin.com/in/omar-el-dardery-96924b2a2"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 hover:text-primary dark:hover:text-white"
        >
          in/omar-el-dardery
        </a>
      </p>
      <p>
        <span className="text-blue-500 dark:text-blue-400">github</span>{" "}
        <a
          href="https://github.com/OmarDardery"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 hover:text-primary dark:hover:text-white"
        >
          OmarDardery
        </a>
      </p>
    </div>
  );

  const neofetchOutput = (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
      <AsciiArt>{BANNER}</AsciiArt>
      <div className="space-y-0.5 text-primary/70 dark:text-neutral-300">
        <p className="font-semibold">
          <span className="text-emerald-500 dark:text-emerald-400">omar</span>
          <span className="text-primary/50 dark:text-neutral-500">@</span>
          <span className="text-blue-500 dark:text-blue-400">portfolio</span>
        </p>
        <p className="text-primary/40 dark:text-neutral-600">─────────────</p>
        {[
          ["role", personalInfo.role],
          ["stack", "Go · Python · TypeScript · React"],
          ["ops", "Docker · Jenkins · Linux"],
          ["shell", "zsh"],
          ["editor", "the one that's open"],
          ["theme", isDarkMode ? "dark" : "light"],
        ].map(([key, value]) => (
          <p key={key}>
            <span className="text-blue-500 dark:text-blue-400 font-semibold">
              {key}
            </span>
            <span className="text-primary/50 dark:text-neutral-500">: </span>
            {value}
          </p>
        ))}
      </div>
    </div>
  );

  const runCommand = (raw: string) => {
    const trimmed = raw.trim();
    const [name, ...args] = trimmed.split(/\s+/);

    if (!name) {
      pushEntries([commandLine("")]);
      return;
    }

    if (name === "clear") {
      setHistory([]);
      return;
    }

    const outputs: ReactNode[] = [commandLine(trimmed)];

    switch (name) {
      case "help":
        outputs.push(helpOutput);
        break;
      case "whoami":
        outputs.push(whoamiOutput);
        break;
      case "skills":
        outputs.push(args.includes("--venn") ? vennOutput : skillsListOutput);
        break;
      case "projects":
      case "ls":
        outputs.push(projectsOutput);
        break;
      case "certs":
      case "certificates":
        outputs.push(certsOutput);
        break;
      case "contact":
        outputs.push(contactOutput);
        break;
      case "resume":
      case "cv":
        outputs.push(
          <p className="text-primary/70 dark:text-neutral-300">
            downloading{" "}
            <a
              href="/resume/Omar_Dardir_Resume.pdf"
              download
              className="underline underline-offset-4 text-blue-500 dark:text-blue-400"
            >
              Omar_Dardir_Resume.pdf
            </a>
            …
          </p>,
        );
        window.open("/resume/Omar_Dardir_Resume.pdf", "_blank");
        break;
      case "banner":
        outputs.push(<AsciiArt>{BANNER}</AsciiArt>);
        break;
      case "neofetch":
        outputs.push(neofetchOutput);
        break;
      case "theme":
        onToggleTheme();
        outputs.push(
          <p className="text-primary/70 dark:text-neutral-300">
            switched to {isDarkMode ? "light" : "dark"} mode ✦
          </p>,
        );
        break;
      case "echo":
        outputs.push(
          <p className="text-primary/70 dark:text-neutral-300">
            {args.join(" ")}
          </p>,
        );
        break;
      case "sudo":
        outputs.push(
          <p className="text-red-500 dark:text-red-400">
            omar is not in the sudoers file. this incident will be reported.
          </p>,
        );
        break;
      case "exit":
        outputs.push(
          <p className="text-primary/70 dark:text-neutral-300">
            nice try — scroll down instead :)
          </p>,
        );
        break;
      default:
        outputs.push(
          <p className="text-primary/70 dark:text-neutral-300">
            <span className="text-red-500 dark:text-red-400">
              command not found:
            </span>{" "}
            {name} — type{" "}
            <span className="text-blue-500 dark:text-blue-400">help</span> to
            see what I can do
          </p>,
        );
    }

    pushEntries(outputs);
  };

  // Boot sequence: auto-type the intro commands one character at a time.
  useEffect(() => {
    if (bootIndex >= BOOT_COMMANDS.length) {
      setBooted(true);
      if (hintShown.current) return;
      hintShown.current = true;
      pushEntries([
        <p key="hint" className="text-primary/50 dark:text-neutral-500">
          this terminal is interactive — type{" "}
          <span className="text-blue-500 dark:text-blue-400">help</span> to
          explore.
        </p>,
      ]);
      return;
    }

    const command = BOOT_COMMANDS[bootIndex]!;
    let charIndex = 0;
    let timeoutId: number | undefined;

    const intervalId = window.setInterval(() => {
      charIndex += 1;
      setTyped(command.slice(0, charIndex));

      if (charIndex >= command.length) {
        window.clearInterval(intervalId);
        timeoutId = window.setTimeout(() => {
          setTyped("");
          runCommand(command);
          setBootIndex((index) => index + 1);
        }, 350);
      }
    }, 40);

    return () => {
      window.clearInterval(intervalId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bootIndex]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history, typed, booted]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const value = input;
    setInput("");
    setLogPos(-1);
    if (value.trim()) {
      setCommandLog((log) => [value, ...log]);
    }
    runCommand(value);
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      const next = Math.min(logPos + 1, commandLog.length - 1);
      if (next >= 0 && commandLog[next] !== undefined) {
        setLogPos(next);
        setInput(commandLog[next]!);
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = logPos - 1;
      if (next < 0) {
        setLogPos(-1);
        setInput("");
      } else {
        setLogPos(next);
        setInput(commandLog[next]!);
      }
    } else if (event.key === "Tab") {
      event.preventDefault();
      const partial = input.trimStart();
      if (!partial) return;
      const match = COMMANDS.find((cmd) => cmd.startsWith(partial));
      if (match) setInput(match + " ");
    }
  };

  const focusInput = () => {
    if (window.getSelection()?.toString()) return;
    inputRef.current?.focus();
  };

  return (
    <div
      className="rounded-3xl border border-primary/10 dark:border-white/10 bg-white dark:bg-dark-surface shadow-sm overflow-hidden flex flex-col h-[65vh] min-h-[420px] max-h-[760px]"
      onClick={focusInput}
    >
      <div className="flex items-center justify-between px-4 md:px-5 py-3 border-b border-primary/10 dark:border-white/10 bg-primary/5 dark:bg-white/5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-3 text-[10px] font-black uppercase tracking-[0.3em] text-primary/50 dark:text-neutral-400">
            omar@portfolio: ~
          </span>
        </div>
        <a
          href="/resume/Omar_Dardir_Resume.pdf"
          download
          onClick={(event) => event.stopPropagation()}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 dark:border-white/10 text-primary/70 dark:text-neutral-200 font-bold text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Resume
        </a>
      </div>

      <div
        ref={scrollRef}
        className="p-4 sm:p-6 md:p-8 font-mono text-xs sm:text-sm md:text-base text-primary/80 dark:text-neutral-200 flex-1 overflow-y-auto cursor-text space-y-4"
      >
        {history.map((entry) => (
          <div key={entry.id}>{entry.node}</div>
        ))}

        {!booted && (
          <p className="flex items-baseline gap-2">
            <Prompt />
            <span className="text-primary dark:text-white">
              {typed}
              <span className="inline-block h-4 w-2 translate-y-0.5 bg-primary/60 dark:bg-white/70 animate-pulse" />
            </span>
          </p>
        )}

        {booted && (
          <form onSubmit={handleSubmit} className="flex items-baseline gap-2">
            <Prompt />
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 min-w-0 bg-transparent outline-none border-none font-mono text-primary dark:text-white caret-blue-500 placeholder:text-primary/30 dark:placeholder:text-neutral-600"
              placeholder="type a command… (help)"
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              aria-label="Terminal command input"
            />
          </form>
        )}
      </div>
    </div>
  );
}
