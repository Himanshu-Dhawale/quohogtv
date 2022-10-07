import React, { StrictMode } from "react";
import "./index.css";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./contexts/auth-context";
import {BrowserRouter} from "react-router-dom";
import {VideosProvider} from "./contexts/videoContext"
import { LikeProvider } from "./contexts/like-context";
import { WatchProvider } from "./contexts/watchlater-context";
import { PlaylistProvider } from "./contexts/playlist-context";
import { HistoryProvider } from "./contexts/history-context";
// Call make Server
makeServer();
const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <VideosProvider>
      <LikeProvider>
        <WatchProvider>
          <PlaylistProvider>
            <HistoryProvider>
          <App />
          </HistoryProvider>
          </PlaylistProvider>
          </WatchProvider>
          </LikeProvider>
      </VideosProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);

