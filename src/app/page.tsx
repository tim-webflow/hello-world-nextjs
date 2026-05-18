import { Counter } from "./Counter";

export default function Home() {
  const baseUrl = process.env.BASE_URL ?? "";
  const assetsPrefix = process.env.ASSETS_PREFIX ?? "";

  return (
    <div id="app">
      <div>
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          <img src="/next.svg" className="logo" alt="Next.js logo" />
        </a>
        <a
          href="https://webflow.com/cloud"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/webflow.svg" className="logo vanilla" alt="Webflow logo" />
        </a>
        <h1>Next.js + Webflow Cloud</h1>
        <div className="card">
          <Counter />
        </div>
        <dl className="env-vars">
          <dt>BASE_URL</dt>
          <dd>
            <code>{baseUrl || "(unset)"}</code>
          </dd>
          <dt>ASSETS_PREFIX</dt>
          <dd>
            <code>{assetsPrefix || "(unset)"}</code>
          </dd>
        </dl>
        <p className="read-the-docs">
          Click on the Next.js and Webflow logos to learn more
        </p>
      </div>
    </div>
  );
}
