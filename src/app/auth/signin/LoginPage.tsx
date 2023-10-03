"use client";
import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../store/features/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(login({ emailOrUsername, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="emailOrUsername">Email/Никнейм:</label>
        <input
          type="text"
          id="emailOrUsername"
          value={emailOrUsername}
          onChange={(event) => setEmailOrUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginPage;