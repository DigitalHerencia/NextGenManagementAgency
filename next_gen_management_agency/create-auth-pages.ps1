# Set the base project directory
$projectDir = "H:\DigitalHerencia\.environments\NextGenManagementAgency_WEBSITE\src"

# Create directories if they don't exist
$authDir = "$projectDir\pages\auth"
$pagesDir = "$projectDir\pages"

if (-Not (Test-Path $authDir)) {
    New-Item -ItemType Directory -Path $authDir -Force
}
if (-Not (Test-Path $pagesDir)) {
    New-Item -ItemType Directory -Path $pagesDir -Force
}

# Create signin.tsx for the /auth/signin route
$signinFile = "$authDir\signin.tsx"
$signinContent = @"
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
"@

# Write the signin page content to the file
Set-Content -Path $signinFile -Value $signinContent


# Create signout.tsx for the /auth/signout route (optional, you can also handle this with NextAuth)
$signoutFile = "$authDir\signout.tsx"
$signoutContent = @"
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
"@

# Write the signout page content to the file
Set-Content -Path $signoutFile -Value $signoutContent


# Create register.tsx for the /auth/register route (assuming sign-up functionality is needed)
$registerFile = "$authDir\register.tsx"
$registerContent = @"
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
"@

# Write the register page content to the file
Set-Content -Path $registerFile -Value $registerContent


# Create index.tsx for the homepage route (where users are redirected after sign out)
$indexFile = "$pagesDir\index.tsx"
$indexContent = @"
export default function HomePage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1>Welcome to NextGen Management Agency</h1>
      <p>Manage your talent and clients efficiently!</p>
    </div>
  );
}
"@

# Write the index page content to the file
Set-Content -Path $indexFile -Value $indexContent

# Output confirmation message
Write-Host "Signin, Signout, Register, and Homepage files have been successfully created!"
