import Image from "next/image";
import { runWieldAttribution } from "@/data/profile";
import { ExternalLink } from "./ExternalLink";

export function RunWieldAttribution({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={`runwield ${compact ? "runwield--compact" : ""}`} {...{ "box-": "square" }}>
      <div className="logo-row" aria-label="Built using RunWield and Vercel">
        <Image src="/runwield-logo.svg" alt="RunWield" width={54} height={54} />
        <span aria-hidden="true">+</span>
        <Image src="/vercel-logo.svg" alt="Vercel" width={54} height={54} />
      </div>
      <div>
        <p className="eyebrow">{runWieldAttribution.command}</p>
        <h2>Built using RunWield + Vercel</h2>
        {!compact && <p>{runWieldAttribution.copy}</p>}
      </div>
      <ExternalLink className="button-like" href={runWieldAttribution.href}>
        RunWield
      </ExternalLink>
    </aside>
  );
}
