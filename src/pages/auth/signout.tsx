import { signOut } from 'next-auth/react';

export default function SignOut() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1>Sign Out</h1>
      <button
        onClick={() => signOut({ callbackUrl: '/' })}
        style={{ padding: '10px 20px', marginTop: '20px', background: '#ff4757', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}
      >
        Sign Out
      </button>
    </div>
  );
}
