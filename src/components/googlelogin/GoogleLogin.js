// GoogleLogin.js
import React from 'react';
import { useAuth } from '../../AuthContext';
import { Navigate, RouterProvider, useNavigate } from 'react-router-dom';

const CLIENT_ID = "991499326705-d32po3qov8tsb32uju97ejaj6nmrn29e.apps.googleusercontent.com";
const REDIRECT_URI = "https://fe.akarms.tech/oauth2callback"; // or your production URL
const scopes = ['https://www.googleapis.com/auth/drive.file'];


const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${encodeURIComponent(scopes)}&access_type=offline&prompt=consent`;



function GoogleLogin() {
  const navigate = useNavigate()
  const { login } = useAuth();
  const handleLogin = async() => {
    await login()   
    window.location.href = authUrl;
  };

  function handleTorrent(){
    //Rederie to Torrent Downloader
    navigate('/torrentDownloader');
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button onClick={handleLogin} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Sign in with Google 🚀
      </button>
      <button onClick={handleTorrent} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Download With Torrent
      </button>
    </div>
  );
}

export default GoogleLogin;