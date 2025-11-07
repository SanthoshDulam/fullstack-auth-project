import { useState } from "react";
import { api } from "./api";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [profile, setProfile] = useState(null);

  async function handleRegister() {
    try {
      await api.register(username, password);
      setMessage("✅ Registered successfully!");
    } catch (err) {
      setMessage("❌ Registration failed.");
    }
  }

  async function handleLogin() {
    try {
      await api.login(username, password);
      setMessage("🔓 Logged in successfully!");
    } catch (err) {
      setMessage("❌ Login failed.");
    }
  }

  async function handleGetProfile() {
    try {
      const data = await api.getProfile();
      setProfile(data);
      setMessage("👤 Profile loaded!");
    } catch (err) {
      setMessage("⚠️ Failed to load profile (not logged in).");
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    setProfile(null);
    setMessage("🚪 Logged out.");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h2>🚀 Full-Stack Dashboard</h2>

      {!profile ? (
        <>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br /><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />
          <button onClick={handleRegister}>Register</button>{" "}
          <button onClick={handleLogin}>Login</button>
          <br /><br />
          <button onClick={handleGetProfile}>Get Profile</button>
        </>
      ) : (
        <>
          <h3>Welcome, {profile.username} 👋</h3>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
      <p>{message}</p>
    </div>
  );
}
