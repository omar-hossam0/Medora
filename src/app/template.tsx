export default function Template({ children }: { children: React.ReactNode }) {
  // Re-mounts on every navigation, so the destination page plays a soft
  // fade + subtle upward slide (defined by `.page-enter` in globals.css).
  // CSS-only, so it runs on first paint with no JS/hydration delay.
  return <div className="page-enter">{children}</div>;
}
