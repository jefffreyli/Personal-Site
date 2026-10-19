/**
 * Contents of the admin modal. On mount it asks the server whether the session
 * cookie is still valid, then shows either the password form or the resume
 * upload form. All checks happen server-side; this is only the UI.
 */
"use client";

import { useEffect, useState } from "react";

type View = "checking" | "login" | "upload";

const inputClass =
  "w-full rounded-md border-notion-border text-sm focus:border-notion-accent focus:ring-notion-accent";
const buttonClass =
  "w-full rounded-md bg-notion-text px-3 py-2 text-sm text-white transition-opacity hover:opacity-90 disabled:opacity-50";

/**
 * Reads the error message from a failed API response.
 *
 * @param response the failed response
 * @returns the server's message, or a generic one
 */
async function readError(response: Response): Promise<string> {
  const body = await response.json().catch(() => null);
  return typeof body?.error === "string" ? body.error : "Something went wrong.";
}

/**
 * Renders the login or upload form.
 *
 * @returns the admin panel card
 */
export default function AdminPanel() {
  const [view, setView] = useState<View>("checking");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isBusy, setIsBusy] = useState(false);
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null);

  useEffect(() => {
    fetch("/api/admin/session")
      .then((response) => response.json())
      .then((body) => setView(body.loggedIn ? "upload" : "login"))
      .catch(() => setView("login"));
  }, []);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsBusy(true);
    setMessage(null);
    try {
      const response = await fetch("/api/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (response.ok) {
        setView("upload");
      } else {
        setMessage({ text: await readError(response), isError: true });
      }
    } catch {
      setMessage({ text: "Network error. Try again.", isError: true });
    } finally {
      setIsBusy(false);
      setPassword("");
    }
  };

  const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      return;
    }
    // Saved before awaiting, since React clears currentTarget after the handler returns.
    const formElement = event.currentTarget;
    setIsBusy(true);
    setMessage(null);
    const form = new FormData();
    form.append("file", file);
    try {
      const response = await fetch("/api/admin/resume", { method: "POST", body: form });
      if (response.ok) {
        formElement.reset();
        setFile(null);
        setMessage({ text: "Resume updated.", isError: false });
      } else {
        if (response.status === 401) {
          setView("login");
        }
        setMessage({ text: await readError(response), isError: true });
      }
    } catch {
      setMessage({ text: "Network error. Try again.", isError: true });
    } finally {
      setIsBusy(false);
    }
  };

  return (
    <div className="w-full max-w-xs rounded-xl bg-white p-6 text-notion-text shadow-xl">
      <h2 className="mb-4 font-display text-xl tracking-wide">Admin</h2>

      {view === "checking" && <p className="text-sm text-notion-muted">Checking session…</p>}

      {view === "login" && (
        <form onSubmit={handleLogin} className="space-y-3">
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            autoComplete="current-password"
            autoFocus
            className={inputClass}
          />
          <button type="submit" disabled={isBusy || !password} className={buttonClass}>
            {isBusy ? "Logging in…" : "Log in"}
          </button>
        </form>
      )}

      {view === "upload" && (
        <form onSubmit={handleUpload} className="space-y-3">
          <label className="block text-sm text-notion-muted">
            New resume (PDF, max 4 MB)
            <input
              type="file"
              accept="application/pdf"
              onChange={(event) => setFile(event.target.files?.[0] ?? null)}
              className="mt-2 block w-full text-sm file:mr-3 file:rounded-md file:border-0 file:bg-notion-gray-bg file:px-3 file:py-1.5 file:text-notion-text"
            />
          </label>
          <button type="submit" disabled={isBusy || !file} className={buttonClass}>
            {isBusy ? "Uploading…" : "Upload resume"}
          </button>
        </form>
      )}

      {message && (
        <p
          className={`mt-3 text-sm ${message.isError ? "text-notion-red" : "text-notion-green"}`}
          role="status"
        >
          {message.text}
        </p>
      )}
    </div>
  );
}
