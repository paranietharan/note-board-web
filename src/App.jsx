import React, { useState } from "react";
import "./App.css";

function App() {
  const [mode, setMode] = useState("get"); // 'get' or 'set'
  const [id, setId] = useState("");
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = (typeof process !== 'undefined' && process.env?.REACT_APP_URL_KEY) || "http://localhost:8080";

  const handleGet = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch(`${API_URL}/?id=${encodeURIComponent(id)}`);
      if (!res.ok) throw new Error("Clipboard not found");
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSet = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch(`${API_URL}/?id=${encodeURIComponent(id)}&value=${encodeURIComponent(value)}`, {
        method: "POST",
      });
      if (!res.ok) throw new Error("Failed to set clipboard");
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="clipboard-app">
      <h1>Simple Clipboard App</h1>
      <div className="mode-toggle">
        <button
          className={mode === "get" ? "active" : ""}
          onClick={() => setMode("get")}
        >
          Get Clipboard
        </button>
        <button
          className={mode === "set" ? "active" : ""}
          onClick={() => setMode("set")}
        >
          Set Clipboard
        </button>
      </div>
      <form onSubmit={mode === "get" ? handleGet : handleSet} className="clipboard-form">
        <label>
          Clipboard ID:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </label>
        {mode === "set" && (
          <label>
            Value:
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
            />
          </label>
        )}
        <button type="submit" disabled={loading}>
          {mode === "get" ? "Get" : "Set"}
        </button>
      </form>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {result && (
        <div className="result">
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
