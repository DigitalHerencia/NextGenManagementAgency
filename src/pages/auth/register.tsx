import { signIn } from 'next-auth/react';

export default function Register() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1>Create a New Account</h1>
      <p>Use Auth0 to register for a new account.</p>
      <button
        onClick={() => signIn('auth0', { screen_hint: 'signup' })}
        style={{ padding: '10px 20px', marginTop: '20px', background: '#1DA1F2', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}
      >
        Register with Auth0
      </button>
    </div>
  );
}
