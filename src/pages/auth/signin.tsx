import { signIn } from 'next-auth/react';

export default function SignIn() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1>Sign In to NextGen Management</h1>
      <button
        onClick={() => signIn('auth0')}
        style={{ padding: '10px 20px', marginTop: '20px', background: '#1DA1F2', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}
      >
        Sign in with Auth0
      </button>
    </div>
  );
}
