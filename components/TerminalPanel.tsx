import type { ReactNode } from "react";

type TerminalPanelProps = {
  title?: string;
  command?: string;
  children: ReactNode;
  className?: string;
};

export function TerminalPanel({ title, command, children, className = "" }: TerminalPanelProps) {
  return (
    <section className={`terminal-panel ${className}`} {...{ "box-": "square" }}>
      {(title || command) && (
        <header className="terminal-panel__header">
          <span className="terminal-dot" aria-hidden="true" />
          {title && <span className="terminal-panel__title">{title}</span>}
          {command && <code className="terminal-panel__command">$ {command}</code>}
        </header>
      )}
      <div className="terminal-panel__body">{children}</div>
    </section>
  );
}
