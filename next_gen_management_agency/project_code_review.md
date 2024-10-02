# Project Code Review

## File: .env
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/.env`

```javascript
DATABASE_URL="mongodb+srv://digitalherencia:q98ksKwbH56rakt5@cluster0.ygljk.mongodb.net/"
NEXTAUTH_SECRET="164fab940bcb04b3d1d640d506e4e2f8a02216e4ff5a2657d4419ea3e79e0b45"
AUTH0_CLIENT_ID="tIFnDAra4mHgrgGQM9HFX8FrE8isL7Gy"
AUTH0_CLIENT_SECRET="LqxONznjaBby_rBOtcLBrfZdBrsTVpXM9VaCZFg-GBTAiQ3T0ROYFS9ZS7qqcQG7"
AUTH0_DOMAIN="dev-wrf6egs1bskzk7n1.us.auth0.com"     

```

---

## File: .eslintrc.json
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/.eslintrc.json`

```javascript
{
  "extends": ["next/core-web-vitals", "next/typescript"]
}

```

---

## File: .gitignore
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/.gitignore`

```javascript
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

```

---

## File: next-env.d.ts
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/next-env.d.ts`

```javascript
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.

```

---

## File: next.config.mjs
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/next.config.mjs`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

```

---

## File: package-lock.json
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/package-lock.json`

```javascript
{
  "name": "next_gen_management_agency",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "next_gen_management_agency",
      "version": "0.1.0",
      "dependencies": {
        "@next-auth/prisma-adapter": "^1.0.7",
        "@prisma/client": "^5.20.0",
        "bcrypt": "^5.1.1",
        "next": "14.2.14",
        "next-auth": "^4.24.8",
        "react": "^18",
        "react-dom": "^18"
      },
      "devDependencies": {
        "@types/node": "^20",
        "@types/react": "^18",
        "@types/react-dom": "^18",
        "eslint": "^8",
        "eslint-config-next": "14.2.14",
        "postcss": "^8",
        "tailwindcss": "^3.4.1",
        "typescript": "^5"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@babel/runtime": {
      "version": "7.25.6",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.25.6.tgz",
      "integrity": "sha512-VBj9MYyDb9tuLq7yzqjgzt6Q+IBQLrGZfdjOekyEirZPHxXWoTSGUTMrpsfi58Up73d13NfYLv8HT9vmznjzhQ==",
      "license": "MIT",
      "dependencies": {
        "regenerator-runtime": "^0.14.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.4.0.tgz",
      "integrity": "sha512-1/sA4dwrzBAyeUoQ6oxahHKmrZvsnLCg4RfxW3ZFGGmQkSNQPFNLV9CUEFQP1x9EYXHTo5p6xdhZM1Ne9p/AfA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.3.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.11.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.11.1.tgz",
      "integrity": "sha512-m4DVN9ZqskZoLU5GlWZadwDnYo3vAEydiUayB9widCl9ffWx2IvPnp6n3on5rJmziJSw9Bv+Z3ChDVdMwXCY8Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-2.1.4.tgz",
      "integrity": "sha512-269Z39MS6wVJtsoUl10L60WdkhJVdPG24Q4eZTH3nnF6lpvSShEK3wQjDX9JRWAUPvPh7COouPpU9IrqaZFvtQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^9.6.0",
        "globals": "^13.19.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.0",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/js": {
      "version": "8.57.1",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-8.57.1.tgz",
      "integrity": "sha512-d9zaMRSTIKDLhctzH12MtXvJKSSUhaHcjV+2Z+GK+EEY7XKpP5yR4x+N3TAcHTcu963nIr+TMcCb4DBCYX1z6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      }
    },
    "node_modules/@humanwhocodes/config-array": {
      "version": "0.13.0",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.13.0.tgz",
      "integrity": "sha512-DZLEEqFWQFiyK6h5YIeynKx7JlvCYWL0cImfSRXZ9l4Sg2efkFGTuFf6vzXjK1cq6IYkU+Eg/JizXw+TD2vRNw==",
      "deprecated": "Use @eslint/config-array instead",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanwhocodes/object-schema": "^2.0.3",
        "debug": "^4.3.1",
        "minimatch": "^3.0.5"
      },
      "engines": {
        "node": ">=10.10.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/object-schema": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-2.0.3.tgz",
      "integrity": "sha512-93zYdMES/c1D69yZiKDBj0V24vqNzB/koF26KPaagAfd3P/4gUlh3Dys5ogAK+Exi9QyzlD8x/08Zt7wIKcDcA==",
      "deprecated": "Use @eslint/object-schema instead",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/@isaacs/cliui": {
      "version": "8.0.2",
      "resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
      "integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "string-width": "^5.1.2",
        "string-width-cjs": "npm:string-width@^4.2.0",
        "strip-ansi": "^7.0.1",
        "strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
        "wrap-ansi": "^8.1.0",
        "wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/ansi-regex": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz",
      "integrity": "sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/strip-ansi": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
      "integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.5.tgz",
      "integrity": "sha512-IzL8ZoEDIBRWEzlCcRhOaCupYyN5gdIK+Q6fbFdPDg6HqX6jpkItn7DFIpW9LQzXG6Df9sA7+OKnq0qlz/GaQg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/set-array": "^1.2.1",
        "@jridgewell/sourcemap-codec": "^1.4.10",
        "@jridgewell/trace-mapping": "^0.3.24"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/set-array": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.2.1.tgz",
      "integrity": "sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz",
      "integrity": "sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.25",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz",
      "integrity": "sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@mapbox/node-pre-gyp": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@mapbox/node-pre-gyp/-/node-pre-gyp-1.0.11.tgz",
      "integrity": "sha512-Yhlar6v9WQgUp/He7BdgzOz8lqMQ8sU+jkCq7Wx8Myc5YFJLbEe7lgui/V7G1qB1DJykHSGwreceSaD60Y0PUQ==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "detect-libc": "^2.0.0",
        "https-proxy-agent": "^5.0.0",
        "make-dir": "^3.1.0",
        "node-fetch": "^2.6.7",
        "nopt": "^5.0.0",
        "npmlog": "^5.0.1",
        "rimraf": "^3.0.2",
        "semver": "^7.3.5",
        "tar": "^6.1.11"
      },
      "bin": {
        "node-pre-gyp": "bin/node-pre-gyp"
      }
    },
    "node_modules/@next-auth/prisma-adapter": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/@next-auth/prisma-adapter/-/prisma-adapter-1.0.7.tgz",
      "integrity": "sha512-Cdko4KfcmKjsyHFrWwZ//lfLUbcLqlyFqjd/nYE2m3aZ7tjMNUjpks47iw7NTCnXf+5UWz5Ypyt1dSs1EP5QJw==",
      "license": "ISC",
      "peerDependencies": {
        "@prisma/client": ">=2.26.0 || >=3",
        "next-auth": "^4"
      }
    },
    "node_modules/@next/env": {
      "version": "14.2.14",
      "resolved": "https://registry.npmjs.org/@next/env/-/env-14.2.14.tgz",
      "integrity": "sha512-/0hWQfiaD5//LvGNgc8PjvyqV50vGK0cADYzaoOOGN8fxzBn3iAiaq3S0tCRnFBldq0LVveLcxCTi41ZoYgAgg==",
      "license": "MIT"
    },
    "node_modules/@next/eslint-plugin-next": {
      "version": "14.2.14",
      "resolved": "https://registry.npmjs.org/@next/eslint-plugin-next/-/eslint-plugin-next-14.2.14.tgz",
      "integrity": "sha512-kV+OsZ56xhj0rnTn6HegyTGkoa16Mxjrpk7pjWumyB2P8JVQb8S9qtkjy/ye0GnTr4JWtWG4x/2qN40lKZ3iVQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "glob": "10.3.10"
      }
    },
    "node_modules/@next/swc-darwin-arm64": {
      "version": "14.2.14",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-14.2.14.tgz",
      "integrity": "sha512-bsxbSAUodM1cjYeA4o6y7sp9wslvwjSkWw57t8DtC8Zig8aG8V6r+Yc05/9mDzLKcybb6EN85k1rJDnMKBd9Gw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-darwin-x64": {
      "version": "14.2.14",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-14.2.14.tgz",
      "integrity": "sha512-cC9/I+0+SK5L1k9J8CInahduTVWGMXhQoXFeNvF0uNs3Bt1Ub0Azb8JzTU9vNCr0hnaMqiWu/Z0S1hfKc3+dww==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-gnu": {
      "version": "14.2.14",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-14.2.14.tgz",
      "integrity": "sha512-RMLOdA2NU4O7w1PQ3Z9ft3PxD6Htl4uB2TJpocm+4jcllHySPkFaUIFacQ3Jekcg6w+LBaFvjSPthZHiPmiAUg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-musl": {
      "version": "14.2.14",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-14.2.14.tgz",
      "integrity": "sha512-WgLOA4hT9EIP7jhlkPnvz49iSOMdZgDJVvbpb8WWzJv5wBD07M2wdJXLkDYIpZmCFfo/wPqFsFR4JS4V9KkQ2A==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-gnu": {
      "version": "14.2.14",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-14.2.14.tgz",
      "integrity": "sha512-lbn7svjUps1kmCettV/R9oAvEW+eUI0lo0LJNFOXoQM5NGNxloAyFRNByYeZKL3+1bF5YE0h0irIJfzXBq9Y6w==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-musl": {
      "version": "14.2.14",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-14.2.14.tgz",
      "integrity": "sha512-7TcQCvLQ/hKfQRgjxMN4TZ2BRB0P7HwrGAYL+p+m3u3XcKTraUFerVbV3jkNZNwDeQDa8zdxkKkw2els/S5onQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-arm64-msvc": {
      "version": "14.2.14",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-14.2.14.tgz",
      "integrity": "sha512-8i0Ou5XjTLEje0oj0JiI0Xo9L/93ghFtAUYZ24jARSeTMXLUx8yFIdhS55mTExq5Tj4/dC2fJuaT4e3ySvXU1A==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-ia32-msvc": {
      "version": "14.2.14",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-ia32-msvc/-/swc-win32-ia32-msvc-14.2.14.tgz",
      "integrity": "sha512-2u2XcSaDEOj+96eXpyjHjtVPLhkAFw2nlaz83EPeuK4obF+HmtDJHqgR1dZB7Gb6V/d55FL26/lYVd0TwMgcOQ==",
      "cpu": [
        "ia32"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-x64-msvc": {
      "version": "14.2.14",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-14.2.14.tgz",
      "integrity": "sha512-MZom+OvZ1NZxuRovKt1ApevjiUJTcU2PmdJKL66xUPaJeRywnbGGRWUlaAOwunD6dX+pm83vj979NTC8QXjGWg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nolyfill/is-core-module": {
      "version": "1.0.39",
      "resolved": "https://registry.npmjs.org/@nolyfill/is-core-module/-/is-core-module-1.0.39.tgz",
      "integrity": "sha512-nn5ozdjYQpUCZlWGuxcJY/KpxkWQs4DcbMCmKojjyrYDEAGy4Ce19NN4v5MduafTwJlbKc99UA8YhSVqq9yPZA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.4.0"
      }
    },
    "node_modules/@panva/hkdf": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@panva/hkdf/-/hkdf-1.2.1.tgz",
      "integrity": "sha512-6oclG6Y3PiDFcoyk8srjLfVKyMfVCKJ27JwNPViuXziFpmdz+MZnZN/aKY0JGXgYuO/VghU0jcOAZgWXZ1Dmrw==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/panva"
      }
    },
    "node_modules/@pkgjs/parseargs": {
      "version": "0.11.0",
      "resolved": "https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",
      "integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@prisma/client": {
      "version": "5.20.0",
      "resolved": "https://registry.npmjs.org/@prisma/client/-/client-5.20.0.tgz",
      "integrity": "sha512-CLv55ZuMuUawMsxoqxGtLT3bEZoa2W8L3Qnp6rDIFWy+ZBrUcOFKdoeGPSnbBqxc3SkdxJrF+D1veN/WNynZYA==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=16.13"
      },
      "peerDependencies": {
        "prisma": "*"
      },
      "peerDependenciesMeta": {
        "prisma": {
          "optional": true
        }
      }
    },
    "node_modules/@rtsao/scc": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@rtsao/scc/-/scc-1.1.0.tgz",
      "integrity": "sha512-zt6OdqaDoOnJ1ZYsCYGt9YmWzDXl4vQdKTyJev62gFhRGKdx7mcT54V9KIjg+d2wi9EXsPvAPKe7i7WjfVWB8g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rushstack/eslint-patch": {
      "version": "1.10.4",
      "resolved": "https://registry.npmjs.org/@rushstack/eslint-patch/-/eslint-patch-1.10.4.tgz",
      "integrity": "sha512-WJgX9nzTqknM393q1QJDJmoW28kUfEnybeTfVNcNAPnIx210RXm2DiXiHzfNPJNIUUb1tJnz/l4QGtJ30PgWmA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@swc/counter": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/@swc/counter/-/counter-0.1.3.tgz",
      "integrity": "sha512-e2BR4lsJkkRlKZ/qCHPw9ZaSxc0MVUd7gtbtaB7aMvHeJVYe8sOB8DBZkP2DtISHGSku9sCK6T6cnY0CtXrOCQ==",
      "license": "Apache-2.0"
    },
    "node_modules/@swc/helpers": {
      "version": "0.5.5",
      "resolved": "https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.5.tgz",
      "integrity": "sha512-KGYxvIOXcceOAbEk4bi/dVLEK9z8sZ0uBB3Il5b1rhfClSpcX0yfRO0KmTkqR2cnQDymwLB+25ZyMzICg/cm/A==",
      "license": "Apache-2.0",
      "dependencies": {
        "@swc/counter": "^0.1.3",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@types/json5": {
      "version": "0.0.29",
      "resolved": "https://registry.npmjs.org/@types/json5/-/json5-0.0.29.tgz",
      "integrity": "sha512-dRLjCWHYg4oaA77cxO64oO+7JwCwnIzkZPdrrC71jQmQtlhM556pwKo5bUzqvZndkVbeFLIIi+9TC40JNF5hNQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "20.16.10",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.16.10.tgz",
      "integrity": "sha512-vQUKgWTjEIRFCvK6CyriPH3MZYiYlNy0fKiEYHWbcoWLEgs4opurGGKlebrTLqdSMIbXImH6XExNiIyNUv3WpA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.19.2"
      }
    },
    "node_modules/@types/prop-types": {
      "version": "15.7.13",
      "resolved": "https://registry.npmjs.org/@types/prop-types/-/prop-types-15.7.13.tgz",
      "integrity": "sha512-hCZTSvwbzWGvhqxp/RqVqwU999pBf2vp7hzIjiYOsl8wqOmUxkQ6ddw1cV3l8811+kdUFus/q4d1Y3E3SyEifA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/react": {
      "version": "18.3.10",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-18.3.10.tgz",
      "integrity": "sha512-02sAAlBnP39JgXwkAq3PeU9DVaaGpZyF3MGcC0MKgQVkZor5IiiDAipVaxQHtDJAmO4GIy/rVBy/LzVj76Cyqg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/prop-types": "*",
        "csstype": "^3.0.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "18.3.0",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-18.3.0.tgz",
      "integrity": "sha512-EhwApuTmMBmXuFOikhQLIBUn6uFg81SwLMOAUgodJF14SOBOCMdU04gDoYi0WOJJHD144TL32z4yDqCW3dnkQg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/react": "*"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "8.8.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-8.8.0.tgz",
      "integrity": "sha512-wORFWjU30B2WJ/aXBfOm1LX9v9nyt9D3jsSOxC3cCaTQGCW5k4jNpmjFv3U7p/7s4yvdjHzwtv2Sd2dOyhjS0A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/regexpp": "^4.10.0",
        "@typescript-eslint/scope-manager": "8.8.0",
        "@typescript-eslint/type-utils": "8.8.0",
        "@typescript-eslint/utils": "8.8.0",
        "@typescript-eslint/visitor-keys": "8.8.0",
        "graphemer": "^1.4.0",
        "ignore": "^5.3.1",
        "natural-compare": "^1.4.0",
        "ts-api-utils": "^1.3.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^8.0.0 || ^8.0.0-alpha.0",
        "eslint": "^8.57.0 || ^9.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "8.8.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-8.8.0.tgz",
      "integrity": "sha512-uEFUsgR+tl8GmzmLjRqz+VrDv4eoaMqMXW7ruXfgThaAShO9JTciKpEsB+TvnfFfbg5IpujgMXVV36gOJRLtZg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "@typescript-eslint/scope-manager": "8.8.0",
        "@typescript-eslint/types": "8.8.0",
        "@typescript-eslint/typescript-estree": "8.8.0",
        "@typescript-eslint/visitor-keys": "8.8.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "8.8.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-8.8.0.tgz",
      "integrity": "sha512-EL8eaGC6gx3jDd8GwEFEV091210U97J0jeEHrAYvIYosmEGet4wJ+g0SYmLu+oRiAwbSA5AVrt6DxLHfdd+bUg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.8.0",
        "@typescript-eslint/visitor-keys": "8.8.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "8.8.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-8.8.0.tgz",
      "integrity": "sha512-IKwJSS7bCqyCeG4NVGxnOP6lLT9Okc3Zj8hLO96bpMkJab+10HIfJbMouLrlpyOr3yrQ1cA413YPFiGd1mW9/Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/typescript-estree": "8.8.0",
        "@typescript-eslint/utils": "8.8.0",
        "debug": "^4.3.4",
        "ts-api-utils": "^1.3.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "8.8.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-8.8.0.tgz",
      "integrity": "sha512-QJwc50hRCgBd/k12sTykOJbESe1RrzmX6COk8Y525C9l7oweZ+1lw9JiU56im7Amm8swlz00DRIlxMYLizr2Vw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "8.8.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-8.8.0.tgz",
      "integrity": "sha512-ZaMJwc/0ckLz5DaAZ+pNLmHv8AMVGtfWxZe/x2JVEkD5LnmhWiQMMcYT7IY7gkdJuzJ9P14fRy28lUrlDSWYdw==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "@typescript-eslint/types": "8.8.0",
        "@typescript-eslint/visitor-keys": "8.8.0",
        "debug": "^4.3.4",
        "fast-glob": "^3.3.2",
        "is-glob": "^4.0.3",
        "minimatch": "^9.0.4",
        "semver": "^7.6.0",
        "ts-api-utils": "^1.3.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
      "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "8.8.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-8.8.0.tgz",
      "integrity": "sha512-QE2MgfOTem00qrlPgyByaCHay9yb1+9BjnMFnSFkUKQfu7adBXDTnCAivURnuPPAG/qiB+kzKkZKmKfaMT0zVg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.4.0",
        "@typescript-eslint/scope-manager": "8.8.0",
        "@typescript-eslint/types": "8.8.0",
        "@typescript-eslint/typescript-estree": "8.8.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "8.8.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-8.8.0.tgz",
      "integrity": "sha512-8mq51Lx6Hpmd7HnA2fcHQo3YgfX1qbccxQOgZcb4tvasu//zXRaA1j5ZRFeCw/VRAdFi4mRM9DnZw0Nu0Q2d1g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.8.0",
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@ungap/structured-clone": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.2.0.tgz",
      "integrity": "sha512-zuVdFrMJiuCDQUMCzQaD6KL28MjnqqN8XnAqiEq9PNm/hCPTSGfrXCOfwj1ow4LFb/tNymJPwsNbVePc1xFqrQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/abbrev": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      "license": "ISC"
    },
    "node_modules/acorn": {
      "version": "8.12.1",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.12.1.tgz",
      "integrity": "sha512-tcpGyI9zbizT9JbV6oYE477V6mTlXvvi0T0G3SNIYE2apm/G5huBa1+K89VGeovbg+jycCrfhl3ADxErOuO6Jg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/agent-base": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
      "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "4"
      },
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/any-promise": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
      "integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/aproba": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/aproba/-/aproba-2.0.0.tgz",
      "integrity": "sha512-lYe4Gx7QT+MKGbDsA+Z+he/Wtef0BiwDOlK/XkBrdfsh9J/jPPXbX0tE9x9cl27Tmu5gg3QUbUrQYa/y+KOHPQ==",
      "license": "ISC"
    },
    "node_modules/are-we-there-yet": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-2.0.0.tgz",
      "integrity": "sha512-Ci/qENmwHnsYo9xKIcUJN5LeDKdJ6R1Z1j9V/J5wyq8nh/mYPEpIKJbBZXtZjG04HiK7zV/p6Vs9952MrMeUIw==",
      "deprecated": "This package is no longer supported.",
      "license": "ISC",
      "dependencies": {
        "delegates": "^1.0.0",
        "readable-stream": "^3.6.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/arg": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
      "integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/aria-query": {
      "version": "5.1.3",
      "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.1.3.tgz",
      "integrity": "sha512-R5iJ5lkuHybztUfuOAznmboyjWq8O6sqNqtK7CLOqdydi54VNbORp49mb14KbWgG1QD3JFO9hJdZ+y4KutfdOQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "deep-equal": "^2.0.5"
      }
    },
    "node_modules/array-buffer-byte-length": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/array-buffer-byte-length/-/array-buffer-byte-length-1.0.1.tgz",
      "integrity": "sha512-ahC5W1xgou+KTXix4sAO8Ki12Q+jf4i0+tmk3sC+zgcynshkHxzpXdImBehiUYKKKDwvfFiJl1tZt6ewscS1Mg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.5",
        "is-array-buffer": "^3.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array-includes": {
      "version": "3.1.8",
      "resolved": "https://registry.npmjs.org/array-includes/-/array-includes-3.1.8.tgz",
      "integrity": "sha512-itaWrbYbqpGXkGhZPGUulwnhVf5Hpy1xiCFsGqyIGglbBxmG5vSjxQen3/WGOjPpNEv1RtBLKxbmVXm8HpJStQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.4",
        "is-string": "^1.0.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlast": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/array.prototype.findlast/-/array.prototype.findlast-1.2.5.tgz",
      "integrity": "sha512-CVvd6FHg1Z3POpBLxO6E6zr+rSKEQ9L6rZHAaY7lLfhKsWYUBBOuMs0e9o24oopj6H+geRCX0YJ+TJLBK2eHyQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlastindex": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/array.prototype.findlastindex/-/array.prototype.findlastindex-1.2.5.tgz",
      "integrity": "sha512-zfETvRFA8o7EiNn++N5f/kaCw221hrpGsDmcpndVupkPzEc1Wuf3VgC0qby1BbHs7f5DVYjgtEU2LLh5bqeGfQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flat": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/array.prototype.flat/-/array.prototype.flat-1.3.2.tgz",
      "integrity": "sha512-djYB+Zx2vLewY8RWlNCUdHjDXs2XOgm602S9E7P/UpHgfeHL00cRiIF+IN/G/aUJ7kGPb6yO/ErDI5V2s8iycA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.2.0",
        "es-abstract": "^1.22.1",
        "es-shim-unscopables": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flatmap": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/array.prototype.flatmap/-/array.prototype.flatmap-1.3.2.tgz",
      "integrity": "sha512-Ewyx0c9PmpcsByhSW4r+9zDU7sGjFc86qf/kKtuSCRdhfbk0SNLLkaT5qvcHnRGgc5NP/ly/y+qkXkqONX54CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.2.0",
        "es-abstract": "^1.22.1",
        "es-shim-unscopables": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.tosorted": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/array.prototype.tosorted/-/array.prototype.tosorted-1.1.4.tgz",
      "integrity": "sha512-p6Fx8B7b7ZhL/gmUsAy0D15WhvDccw3mnGNbZpi3pmeJdxtWsj2jEaI4Y6oo3XiHfzuSgPwKc04MYt6KgvC/wA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3",
        "es-errors": "^1.3.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/arraybuffer.prototype.slice": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/arraybuffer.prototype.slice/-/arraybuffer.prototype.slice-1.0.3.tgz",
      "integrity": "sha512-bMxMKAjg13EBSVscxTaYA4mRc5t1UAXa2kXiGTNfZ079HIWXEkKmkgFrh/nJqamaLSrXO5H4WFFkPEaLJWbs3A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.1",
        "call-bind": "^1.0.5",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.22.3",
        "es-errors": "^1.2.1",
        "get-intrinsic": "^1.2.3",
        "is-array-buffer": "^3.0.4",
        "is-shared-array-buffer": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/ast-types-flow": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/ast-types-flow/-/ast-types-flow-0.0.8.tgz",
      "integrity": "sha512-OH/2E5Fg20h2aPrbe+QL8JZQFko0YZaF+j4mnQ7BGhfavO7OpSLa8a0y9sBwomHdSbkhTS8TQNayBfnW5DwbvQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/available-typed-arrays": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/available-typed-arrays/-/available-typed-arrays-1.0.7.tgz",
      "integrity": "sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "possible-typed-array-names": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/axe-core": {
      "version": "4.10.0",
      "resolved": "https://registry.npmjs.org/axe-core/-/axe-core-4.10.0.tgz",
      "integrity": "sha512-Mr2ZakwQ7XUAjp7pAwQWRhhK8mQQ6JAaNWSjmjxil0R8BPioMtQsTLOolGYkji1rcL++3dCqZA3zWqpT+9Ew6g==",
      "dev": true,
      "license": "MPL-2.0",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/axobject-query": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-4.1.0.tgz",
      "integrity": "sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "license": "MIT"
    },
    "node_modules/bcrypt": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/bcrypt/-/bcrypt-5.1.1.tgz",
      "integrity": "sha512-AGBHOG5hPYZ5Xl9KXzU5iKq9516yEmvCKDg3ecP5kX2aB6UqTeXZxk2ELnDgDm6BQSMlLt9rDB4LoSMx0rYwww==",
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "@mapbox/node-pre-gyp": "^1.0.11",
        "node-addon-api": "^5.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/busboy": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/busboy/-/busboy-1.6.0.tgz",
      "integrity": "sha512-8SFQbg/0hQ9xy3UNTB0YEnsNBbWfhf7RtnzpL7TkBiTBRfrQ9Fxcnz7VJsleJpyp6rVLvXiuORqjlHi5q+PYuA==",
      "dependencies": {
        "streamsearch": "^1.1.0"
      },
      "engines": {
        "node": ">=10.16.0"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.7.tgz",
      "integrity": "sha512-GHTSNSYICQ7scH7sZ+M2rFopRoLh8t2bLSW6BbgrtLsahOIB5iyAVJf9GjWK3cYTDaMj4XdBpM1cA6pIS0Kv2w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "set-function-length": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/camelcase-css": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz",
      "integrity": "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001666",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001666.tgz",
      "integrity": "sha512-gD14ICmoV5ZZM1OdzPWmpx+q4GyefaK06zi8hmfHV5xe4/2nOQX3+Dw5o+fSqOws2xVwL9j+anOPFwHzdEdV4g==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/chokidar/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/chownr": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/chownr/-/chownr-2.0.0.tgz",
      "integrity": "sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ==",
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/client-only": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",
      "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==",
      "license": "MIT"
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/color-support": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-support/-/color-support-1.1.3.tgz",
      "integrity": "sha512-qiBjkpbMLO/HL68y+lh4q0/O1MZFj2RX6X/KmMa3+gJD3z+WwI1ZzDHysvqHGS3mP6mznPckpXmw1nI9cJjyRg==",
      "license": "ISC",
      "bin": {
        "color-support": "bin.js"
      }
    },
    "node_modules/commander": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
      "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "license": "MIT"
    },
    "node_modules/console-control-strings": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",
      "integrity": "sha512-ty/fTekppD2fIwRvnZAVdeOiGd1c7YXEixbgJTNzqcxJWKQnjJ/V1bNEEE6hygpM3WjwHFUVK6HTjWSzV4a8sQ==",
      "license": "ISC"
    },
    "node_modules/cookie": {
      "version": "0.5.0",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.5.0.tgz",
      "integrity": "sha512-YZ3GUyn/o8gfKJlnlX7g7xq4gyO6OSuhGPKaaGssGB2qgDUS0gPgtTvoyZLTt9Ab6dC4hfc9dV5arkvc/OCmrw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cross-spawn": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
      "integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/cssesc": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
      "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "cssesc": "bin/cssesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/csstype": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.1.3.tgz",
      "integrity": "sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/damerau-levenshtein": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/damerau-levenshtein/-/damerau-levenshtein-1.0.8.tgz",
      "integrity": "sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA==",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/data-view-buffer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/data-view-buffer/-/data-view-buffer-1.0.1.tgz",
      "integrity": "sha512-0lht7OugA5x3iJLOWFhWK/5ehONdprk0ISXqVFn/NFrDu+cuc8iADFrGQz5BnRK7LLU3JmkbXSxaqX+/mXYtUA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.6",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/data-view-byte-length": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/data-view-byte-length/-/data-view-byte-length-1.0.1.tgz",
      "integrity": "sha512-4J7wRJD3ABAzr8wP+OcIcqq2dlUKp4DVflx++hs5h5ZKydWMI6/D/fAot+yh6g2tHh8fLFTvNOaVN357NvSrOQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/data-view-byte-offset": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/data-view-byte-offset/-/data-view-byte-offset-1.0.0.tgz",
      "integrity": "sha512-t/Ygsytq+R995EJ5PZlD4Cu56sWa8InXySaViRzw9apusqsOO2bQP+SbYzAhR0pFKoB+43lYy8rWban9JSuXnA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.6",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/debug": {
      "version": "4.3.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.7.tgz",
      "integrity": "sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-equal": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/deep-equal/-/deep-equal-2.2.3.tgz",
      "integrity": "sha512-ZIwpnevOurS8bpT4192sqAowWM76JDKSHYzMLty3BZGSswgq6pBaH3DhCSW5xVAZICZyKdOBPjwww5wfgT/6PA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.0",
        "call-bind": "^1.0.5",
        "es-get-iterator": "^1.1.3",
        "get-intrinsic": "^1.2.2",
        "is-arguments": "^1.1.1",
        "is-array-buffer": "^3.0.2",
        "is-date-object": "^1.0.5",
        "is-regex": "^1.1.4",
        "is-shared-array-buffer": "^1.0.2",
        "isarray": "^2.0.5",
        "object-is": "^1.1.5",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.4",
        "regexp.prototype.flags": "^1.5.1",
        "side-channel": "^1.0.4",
        "which-boxed-primitive": "^1.0.2",
        "which-collection": "^1.0.1",
        "which-typed-array": "^1.1.13"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/define-data-property": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/define-data-property/-/define-data-property-1.1.4.tgz",
      "integrity": "sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/define-properties": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.2.1.tgz",
      "integrity": "sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.0.1",
        "has-property-descriptors": "^1.0.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/delegates": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",
      "integrity": "sha512-bd2L678uiWATM6m5Z1VzNCErI3jiGzt6HGY8OVICs40JQq/HALfbyNJmp0UDakEY4pMMaN0Ly5om/B1VI/+xfQ==",
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.0.3.tgz",
      "integrity": "sha512-bwy0MGW55bG41VqxxypOsdSdGqLwXPI/focwgTYCFMbdUiBAxLg9CFzG08sz2aqzknwiX7Hkl0bQENjg8iLByw==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/didyoumean": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",
      "integrity": "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/dlv": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",
      "integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/doctrine": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
      "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/eastasianwidth": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
      "integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/enhanced-resolve": {
      "version": "5.17.1",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.17.1.tgz",
      "integrity": "sha512-LMHl3dXhTcfv8gM4kEzIUeTQ+7fpdA0l2tUf34BddXPkz2A5xJ5L/Pchd5BL6rdccM9QGvu0sWZzK1Z1t4wwyg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.2.0"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/es-abstract": {
      "version": "1.23.3",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.23.3.tgz",
      "integrity": "sha512-e+HfNH61Bj1X9/jLc5v1owaLYuHdeHHSQlkhCBiTK8rBvKaULl/beGMxwrMXjpYrv4pz22BlY570vVePA2ho4A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.1",
        "arraybuffer.prototype.slice": "^1.0.3",
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.7",
        "data-view-buffer": "^1.0.1",
        "data-view-byte-length": "^1.0.1",
        "data-view-byte-offset": "^1.0.0",
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "es-set-tostringtag": "^2.0.3",
        "es-to-primitive": "^1.2.1",
        "function.prototype.name": "^1.1.6",
        "get-intrinsic": "^1.2.4",
        "get-symbol-description": "^1.0.2",
        "globalthis": "^1.0.3",
        "gopd": "^1.0.1",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.0.3",
        "has-symbols": "^1.0.3",
        "hasown": "^2.0.2",
        "internal-slot": "^1.0.7",
        "is-array-buffer": "^3.0.4",
        "is-callable": "^1.2.7",
        "is-data-view": "^1.0.1",
        "is-negative-zero": "^2.0.3",
        "is-regex": "^1.1.4",
        "is-shared-array-buffer": "^1.0.3",
        "is-string": "^1.0.7",
        "is-typed-array": "^1.1.13",
        "is-weakref": "^1.0.2",
        "object-inspect": "^1.13.1",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.5",
        "regexp.prototype.flags": "^1.5.2",
        "safe-array-concat": "^1.1.2",
        "safe-regex-test": "^1.0.3",
        "string.prototype.trim": "^1.2.9",
        "string.prototype.trimend": "^1.0.8",
        "string.prototype.trimstart": "^1.0.8",
        "typed-array-buffer": "^1.0.2",
        "typed-array-byte-length": "^1.0.1",
        "typed-array-byte-offset": "^1.0.2",
        "typed-array-length": "^1.0.6",
        "unbox-primitive": "^1.0.2",
        "which-typed-array": "^1.1.15"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.0.tgz",
      "integrity": "sha512-jxayLKShrEqqzJ0eumQbVhTYQM27CfT1T35+gCgDFoL82JLsXqTJ76zv6A0YLOgEnLUMvLzsDsGIrl8NFpT2gQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "get-intrinsic": "^1.2.4"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-get-iterator": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/es-get-iterator/-/es-get-iterator-1.1.3.tgz",
      "integrity": "sha512-sPZmqHBe6JIiTfN5q2pEi//TwxmAFHwj/XEuYjTuse78i8KxaqMTTzxPoFKuzRpDpTJ+0NAbpfenkmH2rePtuw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.2",
        "get-intrinsic": "^1.1.3",
        "has-symbols": "^1.0.3",
        "is-arguments": "^1.1.1",
        "is-map": "^2.0.2",
        "is-set": "^2.0.2",
        "is-string": "^1.0.7",
        "isarray": "^2.0.5",
        "stop-iteration-iterator": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-iterator-helpers": {
      "version": "1.0.19",
      "resolved": "https://registry.npmjs.org/es-iterator-helpers/-/es-iterator-helpers-1.0.19.tgz",
      "integrity": "sha512-zoMwbCcH5hwUkKJkT8kDIBZSz9I6mVG//+lDCinLCGov4+r7NIy0ld8o03M0cJxl2spVf6ESYVS6/gpIfq1FFw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3",
        "es-errors": "^1.3.0",
        "es-set-tostringtag": "^2.0.3",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "globalthis": "^1.0.3",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.0.3",
        "has-symbols": "^1.0.3",
        "internal-slot": "^1.0.7",
        "iterator.prototype": "^1.1.2",
        "safe-array-concat": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.0.0.tgz",
      "integrity": "sha512-MZ4iQ6JwHOBQjahnjwaC1ZtIBH+2ohjamzAO3oaHcXYup7qxjF2fixyH+Q71voWHeOkI2q/TnJao/KfXYIZWbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.0.3.tgz",
      "integrity": "sha512-3T8uNMC3OQTHkFUsFq8r/BwAXLHvU/9O9mE0fBc/MY5iq/8H7ncvO947LmYA6ldWw9Uh8Yhf25zu6n7nML5QWQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "get-intrinsic": "^1.2.4",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-shim-unscopables": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/es-shim-unscopables/-/es-shim-unscopables-1.0.2.tgz",
      "integrity": "sha512-J3yBRXCzDu4ULnQwxyToo/OjdMx6akgVC7K6few0a7F/0wLtmKKN7I73AH5T2836UuXRqN7Qg+IIUw/+YJksRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.0"
      }
    },
    "node_modules/es-to-primitive": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
      "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.1.4",
        "is-date-object": "^1.0.1",
        "is-symbol": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "8.57.1",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-8.57.1.tgz",
      "integrity": "sha512-ypowyDxpVSYpkXr9WPv2PAZCtNip1Mv5KTW0SCurXv/9iOpcrH9PaqUElksqEB6pChqHGDRCFTyrZlGhnLNGiA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.2.0",
        "@eslint-community/regexpp": "^4.6.1",
        "@eslint/eslintrc": "^2.1.4",
        "@eslint/js": "8.57.1",
        "@humanwhocodes/config-array": "^0.13.0",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@nodelib/fs.walk": "^1.2.8",
        "@ungap/structured-clone": "^1.2.0",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.2",
        "debug": "^4.3.2",
        "doctrine": "^3.0.0",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^7.2.2",
        "eslint-visitor-keys": "^3.4.3",
        "espree": "^9.6.1",
        "esquery": "^1.4.2",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^6.0.1",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "globals": "^13.19.0",
        "graphemer": "^1.4.0",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "is-path-inside": "^3.0.3",
        "js-yaml": "^4.1.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.4.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3",
        "strip-ansi": "^6.0.1",
        "text-table": "^0.2.0"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-config-next": {
      "version": "14.2.14",
      "resolved": "https://registry.npmjs.org/eslint-config-next/-/eslint-config-next-14.2.14.tgz",
      "integrity": "sha512-TXwyjGICAlWC9O0OufS3koTsBKQH8l1xt3SY/aDuvtKHIwjTHplJKWVb1WOEX0OsDaxGbFXmfD2EY1sNfG0Y/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@next/eslint-plugin-next": "14.2.14",
        "@rushstack/eslint-patch": "^1.3.3",
        "@typescript-eslint/eslint-plugin": "^5.4.2 || ^6.0.0 || ^7.0.0 || ^8.0.0",
        "@typescript-eslint/parser": "^5.4.2 || ^6.0.0 || ^7.0.0 || ^8.0.0",
        "eslint-import-resolver-node": "^0.3.6",
        "eslint-import-resolver-typescript": "^3.5.2",
        "eslint-plugin-import": "^2.28.1",
        "eslint-plugin-jsx-a11y": "^6.7.1",
        "eslint-plugin-react": "^7.33.2",
        "eslint-plugin-react-hooks": "^4.5.0 || 5.0.0-canary-7118f5dd7-20230705"
      },
      "peerDependencies": {
        "eslint": "^7.23.0 || ^8.0.0",
        "typescript": ">=3.3.1"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-import-resolver-node": {
      "version": "0.3.9",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-node/-/eslint-import-resolver-node-0.3.9.tgz",
      "integrity": "sha512-WFj2isz22JahUv+B788TlO3N6zL3nNJGU8CcZbPZvVEkBPaJdCV4vy5wyghty5ROFbCRnm132v8BScu5/1BQ8g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^3.2.7",
        "is-core-module": "^2.13.0",
        "resolve": "^1.22.4"
      }
    },
    "node_modules/eslint-import-resolver-node/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-import-resolver-typescript": {
      "version": "3.6.3",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-typescript/-/eslint-import-resolver-typescript-3.6.3.tgz",
      "integrity": "sha512-ud9aw4szY9cCT1EWWdGv1L1XR6hh2PaRWif0j2QjQ0pgTY/69iw+W0Z4qZv5wHahOl8isEr+k/JnyAqNQkLkIA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@nolyfill/is-core-module": "1.0.39",
        "debug": "^4.3.5",
        "enhanced-resolve": "^5.15.0",
        "eslint-module-utils": "^2.8.1",
        "fast-glob": "^3.3.2",
        "get-tsconfig": "^4.7.5",
        "is-bun-module": "^1.0.2",
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/unts/projects/eslint-import-resolver-ts"
      },
      "peerDependencies": {
        "eslint": "*",
        "eslint-plugin-import": "*",
        "eslint-plugin-import-x": "*"
      },
      "peerDependenciesMeta": {
        "eslint-plugin-import": {
          "optional": true
        },
        "eslint-plugin-import-x": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils": {
      "version": "2.12.0",
      "resolved": "https://registry.npmjs.org/eslint-module-utils/-/eslint-module-utils-2.12.0.tgz",
      "integrity": "sha512-wALZ0HFoytlyh/1+4wuZ9FJCD/leWHQzzrxJ8+rebyReSLk7LApMyd3WJaLVoN+D5+WIdJyDK1c6JnE65V4Zyg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^3.2.7"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependenciesMeta": {
        "eslint": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-import": {
      "version": "2.30.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-import/-/eslint-plugin-import-2.30.0.tgz",
      "integrity": "sha512-/mHNE9jINJfiD2EKkg1BKyPyUk4zdnT54YgbOgfjSakWT5oyX/qQLVNTkehyfpcMxZXMy1zyonZ2v7hZTX43Yw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rtsao/scc": "^1.1.0",
        "array-includes": "^3.1.8",
        "array.prototype.findlastindex": "^1.2.5",
        "array.prototype.flat": "^1.3.2",
        "array.prototype.flatmap": "^1.3.2",
        "debug": "^3.2.7",
        "doctrine": "^2.1.0",
        "eslint-import-resolver-node": "^0.3.9",
        "eslint-module-utils": "^2.9.0",
        "hasown": "^2.0.2",
        "is-core-module": "^2.15.1",
        "is-glob": "^4.0.3",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "object.groupby": "^1.0.3",
        "object.values": "^1.2.0",
        "semver": "^6.3.1",
        "tsconfig-paths": "^3.15.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/doctrine": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
      "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/eslint-plugin-jsx-a11y": {
      "version": "6.10.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-jsx-a11y/-/eslint-plugin-jsx-a11y-6.10.0.tgz",
      "integrity": "sha512-ySOHvXX8eSN6zz8Bywacm7CvGNhUtdjvqfQDVe6020TUK34Cywkw7m0KsCCk1Qtm9G1FayfTN1/7mMYnYO2Bhg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "aria-query": "~5.1.3",
        "array-includes": "^3.1.8",
        "array.prototype.flatmap": "^1.3.2",
        "ast-types-flow": "^0.0.8",
        "axe-core": "^4.10.0",
        "axobject-query": "^4.1.0",
        "damerau-levenshtein": "^1.0.8",
        "emoji-regex": "^9.2.2",
        "es-iterator-helpers": "^1.0.19",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^3.3.5",
        "language-tags": "^1.0.9",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "safe-regex-test": "^1.0.3",
        "string.prototype.includes": "^2.0.0"
      },
      "engines": {
        "node": ">=4.0"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-react": {
      "version": "7.37.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react/-/eslint-plugin-react-7.37.1.tgz",
      "integrity": "sha512-xwTnwDqzbDRA8uJ7BMxPs/EXRB3i8ZfnOIp8BsxEQkT0nHPp+WWceqGgo6rKb9ctNi8GJLDT4Go5HAWELa/WMg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.8",
        "array.prototype.findlast": "^1.2.5",
        "array.prototype.flatmap": "^1.3.2",
        "array.prototype.tosorted": "^1.1.4",
        "doctrine": "^2.1.0",
        "es-iterator-helpers": "^1.0.19",
        "estraverse": "^5.3.0",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^2.4.1 || ^3.0.0",
        "minimatch": "^3.1.2",
        "object.entries": "^1.1.8",
        "object.fromentries": "^2.0.8",
        "object.values": "^1.2.0",
        "prop-types": "^15.8.1",
        "resolve": "^2.0.0-next.5",
        "semver": "^6.3.1",
        "string.prototype.matchall": "^4.0.11",
        "string.prototype.repeat": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7"
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-4.6.2.tgz",
      "integrity": "sha512-QzliNJq4GinDBcD8gPB5v0wh6g8q3SUi6EFF0x8N/BL9PoVs0atuGc47ozMRyOWAKdwaZ5OnbOEa3WR+dSGKuQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0"
      }
    },
    "node_modules/eslint-plugin-react/node_modules/doctrine": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
      "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/eslint-plugin-react/node_modules/resolve": {
      "version": "2.0.0-next.5",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-2.0.0-next.5.tgz",
      "integrity": "sha512-U7WjGVG9sH8tvjW5SmGbQuui75FiyjAX72HX15DwBBwF9dNiQZRQAg9nnPhYy+TUnE0+VcrttuvNI8oSxZcocA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-core-module": "^2.13.0",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/eslint-plugin-react/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/eslint-scope": {
      "version": "7.2.2",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.2.2.tgz",
      "integrity": "sha512-dOt21O7lTMhDM+X9mB4GX+DZrZtCUJPL/wlcTqxyrx5IvO0IYtILdtrQGQp+8n5S0gwSVmOf9NQrjMOgfQZlIg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "9.6.1",
      "resolved": "https://registry.npmjs.org/espree/-/espree-9.6.1.tgz",
      "integrity": "sha512-oruZaFkjorTpF32kDSI5/75ViwGeZginGGy2NoOSg3Q9bnwlnmDm4HLnkl0RE3n+njDXR037aY1+x58Z/zFdwQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.9.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^3.4.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.6.0.tgz",
      "integrity": "sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-glob": {
      "version": "3.3.2",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.2.tgz",
      "integrity": "sha512-oX2ruAFQwf/Orj8m737Y5adxDQO0LAB7/S5MnxCdTNDd4p6BsyIVsv9JQsATbTSq8KHRpLwIHbVlUNatxd+1Ow==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.4"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fastq": {
      "version": "1.17.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.17.1.tgz",
      "integrity": "sha512-sRVD3lWVIXWg6By68ZN7vho9a1pQcN/WBFaAAsDDFzlJjvoGx0P8z7V1t72grFJfJhu3YPZBuu25f7Kaw2jN1w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz",
      "integrity": "sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^3.0.4"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-3.2.0.tgz",
      "integrity": "sha512-CYcENa+FtcUKLmhhqyctpclsq7QF38pKjZHsGNiSQF5r4FtoKDWabFDl3hzaEQMvT1LHEysw5twgLvpYYb4vbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.3",
        "rimraf": "^3.0.2"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/flatted": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.1.tgz",
      "integrity": "sha512-X8cqMLLie7KsNUDSdzeN8FYK9rEt4Dt67OsG/DNGnYTSDBG4uFAJFBnUeiV+zCVAvwFy56IjM9sH51jVaEhNxw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/for-each": {
      "version": "0.3.3",
      "resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.3.tgz",
      "integrity": "sha512-jqYfLp7mo9vIyQf8ykW2v7A+2N4QjeCeI5+Dz9XraiO1ign81wjiH7Fb9vSOWvQfNtmSa4H2RoQTrrXivdUZmw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.1.3"
      }
    },
    "node_modules/foreground-child": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.0.tgz",
      "integrity": "sha512-Ld2g8rrAyMYFXBhEqMz8ZAHBi4J4uS1i/CxGMDnjyFWddMXLVcDp051DZfu+t7+ab7Wv6SMqpWmyFIj5UbfFvg==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "cross-spawn": "^7.0.0",
        "signal-exit": "^4.0.1"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/fs-minipass": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-2.1.0.tgz",
      "integrity": "sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==",
      "license": "ISC",
      "dependencies": {
        "minipass": "^3.0.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/fs-minipass/node_modules/minipass": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
      "integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
      "license": "ISC",
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
      "license": "ISC"
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/function.prototype.name": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/function.prototype.name/-/function.prototype.name-1.1.6.tgz",
      "integrity": "sha512-Z5kx79swU5P27WEayXM1tBi5Ze/lbIyiNgU3qyXUOf9b2rgXYyF9Dy9Cx+IQv/Lc8WCG6L82zwUPpSS9hGehIg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.2.0",
        "es-abstract": "^1.22.1",
        "functions-have-names": "^1.2.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/functions-have-names": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/functions-have-names/-/functions-have-names-1.2.3.tgz",
      "integrity": "sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gauge": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/gauge/-/gauge-3.0.2.tgz",
      "integrity": "sha512-+5J6MS/5XksCuXq++uFRsnUd7Ovu1XenbeuIuNRJxYWjgQbPuFhT14lAvsWfqfAmnwluf1OwMjz39HjfLPci0Q==",
      "deprecated": "This package is no longer supported.",
      "license": "ISC",
      "dependencies": {
        "aproba": "^1.0.3 || ^2.0.0",
        "color-support": "^1.1.2",
        "console-control-strings": "^1.0.0",
        "has-unicode": "^2.0.1",
        "object-assign": "^4.1.1",
        "signal-exit": "^3.0.0",
        "string-width": "^4.2.3",
        "strip-ansi": "^6.0.1",
        "wide-align": "^1.1.2"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/gauge/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT"
    },
    "node_modules/gauge/node_modules/signal-exit": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
      "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
      "license": "ISC"
    },
    "node_modules/gauge/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.2.4.tgz",
      "integrity": "sha512-5uYhsJH8VJBTv7oslg4BznJYhDoRI6waYCxMmCdnTrcCrHA/fCFKoTFz2JKKE0HdDFUF7/oQuhzumXJK7paBRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "has-proto": "^1.0.1",
        "has-symbols": "^1.0.3",
        "hasown": "^2.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-symbol-description": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/get-symbol-description/-/get-symbol-description-1.0.2.tgz",
      "integrity": "sha512-g0QYk1dZBxGwk+Ngc+ltRH2IBp2f7zBkBMBJZCDerh6EhlhSR6+9irMCuT/09zD6qkarHUSn529sK/yL4S27mg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.5",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-tsconfig": {
      "version": "4.8.1",
      "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.8.1.tgz",
      "integrity": "sha512-k9PN+cFBmaLWtVz29SkUoqU5O0slLuHJXt/2P+tMVFT+phsSGXGkp9t3rQIqdz0e+06EHNGs3oM6ZX1s2zHxRg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "resolve-pkg-maps": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
      }
    },
    "node_modules/glob": {
      "version": "10.3.10",
      "resolved": "https://registry.npmjs.org/glob/-/glob-10.3.10.tgz",
      "integrity": "sha512-fa46+tv1Ak0UPK1TOy/pZrIybNNt4HCv7SDzwyfiOZkvZLEbjsZkJBPtDHVshZjbecAoAGSC20MjLDG/qr679g==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "foreground-child": "^3.1.0",
        "jackspeak": "^2.3.5",
        "minimatch": "^9.0.1",
        "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0",
        "path-scurry": "^1.10.1"
      },
      "bin": {
        "glob": "dist/esm/bin.mjs"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/glob/node_modules/brace-expansion": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
      "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/glob/node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/globals": {
      "version": "13.24.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-13.24.0.tgz",
      "integrity": "sha512-AhO5QUcj8llrbG09iWhPU2B204J1xnPeL8kQmVorSsy+Sjj1sk8gIyh6cUocGmH4L0UuhAJy+hJMRA4mgA4mFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "type-fest": "^0.20.2"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globalthis": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/globalthis/-/globalthis-1.0.4.tgz",
      "integrity": "sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.2.1",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gopd": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.0.1.tgz",
      "integrity": "sha512-d65bNlIadxvpb/A2abVdlqKqV563juRnZ1Wtk6s1sIR8uNsXR70xqIzVqxVf1eTqDunwT2MkczEeaezCKTZhwA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "get-intrinsic": "^1.1.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "license": "ISC"
    },
    "node_modules/graphemer": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/graphemer/-/graphemer-1.4.0.tgz",
      "integrity": "sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/has-bigints": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.0.2.tgz",
      "integrity": "sha512-tSvCKtBr9lkF0Ex0aQiP9N+OpV4zi2r/Nee5VkRDbaqv35RLYMzbwQfFSZZH0kR+Rd6302UJZ2p/bJCEoR3VoQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-property-descriptors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.2.tgz",
      "integrity": "sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-proto": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has-proto/-/has-proto-1.0.3.tgz",
      "integrity": "sha512-SJ1amZAJUiZS+PhsVLf5tGydlaVB8EdFpaSO4gmiUKUOxk8qzn5AIy4ZeJUmh22znIdk/uMAUT2pl3FxzVUH+Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.3.tgz",
      "integrity": "sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-unicode": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/has-unicode/-/has-unicode-2.0.1.tgz",
      "integrity": "sha512-8Rf9Y83NBReMnx0gFzA8JImQACstCYWUplepDa9xprwwtmgEZUF0h/i5xSA625zB/I37EtrswSST6OXxwaaIJQ==",
      "license": "ISC"
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/https-proxy-agent": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.1.tgz",
      "integrity": "sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==",
      "license": "MIT",
      "dependencies": {
        "agent-base": "6",
        "debug": "4"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
      "integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
      "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
      "license": "ISC",
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/internal-slot": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.0.7.tgz",
      "integrity": "sha512-NGnrKwXzSms2qUUih/ILZ5JBqNTSa1+ZmP6flaIp6KmSElgE9qdndzS3cqjrDovwFdmwsGsLdeFgB6suw+1e9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "hasown": "^2.0.0",
        "side-channel": "^1.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/is-arguments": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-arguments/-/is-arguments-1.1.1.tgz",
      "integrity": "sha512-8Q7EARjzEnKpt/PCD7e1cgUS0a6X8u5tdSiMqXhojOdoV9TsMsiO+9VLC5vAmO8N7/GmXn7yjR8qnA6bVAEzfA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.2",
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-array-buffer": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/is-array-buffer/-/is-array-buffer-3.0.4.tgz",
      "integrity": "sha512-wcjaerHw0ydZwfhiKbXJWLDY8A7yV7KhjQOpb83hGgGfId/aQa4TOvwyzn2PuswW2gPCYEL/nEAiSVpdOj1lXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.2",
        "get-intrinsic": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-async-function": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-async-function/-/is-async-function-2.0.0.tgz",
      "integrity": "sha512-Y1JXKrfykRJGdlDwdKlLpLyMIiWqWvuSd17TvZk68PLAOGOoF4Xyav1z0Xhoi+gCYjZVeC5SI+hYFOfvXmGRCA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bigint": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.0.4.tgz",
      "integrity": "sha512-zB9CruMamjym81i2JZ3UMn54PKGsQzsJeo6xvN3HJJ4CAsQNB6iRutp2To77OfCNuoxspsIhzaPoO1zyCEhFOg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-bigints": "^1.0.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-boolean-object": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.1.2.tgz",
      "integrity": "sha512-gDYaKHJmnj4aWxyj6YHyXVpdQawtVLHU5cb+eztPGczf6cjuTdwve5ZIEfgXqH4e57An1D1AKf8CZ3kYrQRqYA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.2",
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bun-module": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/is-bun-module/-/is-bun-module-1.2.1.tgz",
      "integrity": "sha512-AmidtEM6D6NmUiLOvvU7+IePxjEjOzra2h0pSrsfSAcXwl/83zLLXDByafUJy9k/rKK0pvXMLdwKwGHlX2Ke6Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.6.3"
      }
    },
    "node_modules/is-callable": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.7.tgz",
      "integrity": "sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.15.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.15.1.tgz",
      "integrity": "sha512-z0vtXSwucUJtANQWldhbtbt7BnL0vxiFjIdDLAatwhDYty2bad6s+rijD6Ri4YuYJubLzIJLUidCh09e1djEVQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-data-view": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-data-view/-/is-data-view-1.0.1.tgz",
      "integrity": "sha512-AHkaJrsUVW6wq6JS8y3JnM/GJF/9cf+k20+iDzlSaJrinEo5+7vRiteOSwBhHRiAyQATN1AmY4hwzxJKPmYf+w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-typed-array": "^1.1.13"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.5.tgz",
      "integrity": "sha512-9YQaSxsAiSwcvS33MBk3wTCVnWK+HhF8VZR2jRxehM16QcVOdHqPn4VPHmRK4lSr38n9JriurInLcP90xsYNfQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-finalizationregistry": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-finalizationregistry/-/is-finalizationregistry-1.0.2.tgz",
      "integrity": "sha512-0by5vtUJs8iFQb5TYUHHPudOR+qXYIMKtiUzvLIZITZUjknFmziyBJuLhVRc+Ds0dREFlskDNJKYIdIzu/9pfw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-generator-function": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/is-generator-function/-/is-generator-function-1.0.10.tgz",
      "integrity": "sha512-jsEjy9l3yiXEQ+PsXdmBwEPcOxaXWLspKdplFUVI9vq1iZgIekeC0L167qeu86czQaxed3q/Uzuw0swL0irL8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-map": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-map/-/is-map-2.0.3.tgz",
      "integrity": "sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-negative-zero": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.3.tgz",
      "integrity": "sha512-5KoIu2Ngpyek75jXodFvnafB6DJgr3u8uuK0LEZJjrU19DrMD3EVERaR8sjz8CCGgpZvxPl9SuE1GMVPFHx1mw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-number-object": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.0.7.tgz",
      "integrity": "sha512-k1U0IRzLMo7ZlYIfzRu23Oh6MiIFasgpb9X76eqfFZAqwH44UI4KTBvBYIZ1dSL9ZzChTB9ShHfLkR4pdW5krQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-regex": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.4.tgz",
      "integrity": "sha512-kvRdxDsxZjhzUX07ZnLydzS1TU/TJlTUHHY4YLL87e37oUA49DfkLqgy+VjFocowy29cKvcSiu+kIv728jTTVg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.2",
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-set": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-set/-/is-set-2.0.3.tgz",
      "integrity": "sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-shared-array-buffer": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/is-shared-array-buffer/-/is-shared-array-buffer-1.0.3.tgz",
      "integrity": "sha512-nA2hv5XIhLR3uVzDDfCIknerhx8XUKnstuOERPNNIinXG7v9u+ohXF67vxm4TPTEPU6lm61ZkwP3c9PCB97rhg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-string": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.0.7.tgz",
      "integrity": "sha512-tE2UXzivje6ofPW7l23cjDOMa09gb7xlAqG6jG5ej6uPV32TlWP3NKPigtaGeHNu9fohccRYvIiZMfOOnOYUtg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-tostringtag": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.4.tgz",
      "integrity": "sha512-C/CPBqKWnvdcxqIARxyOh4v1UUEOCHpgDa0WYgpKDFMszcrPcffg5uhwSgPCLD2WWxmq6isisz87tzT01tuGhg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typed-array": {
      "version": "1.1.13",
      "resolved": "https://registry.npmjs.org/is-typed-array/-/is-typed-array-1.1.13.tgz",
      "integrity": "sha512-uZ25/bUAlUY5fR4OKT4rZQEBrzQWYV9ZJYGGsUmEJ6thodVJ1HX64ePQ6Z0qPWP+m+Uq6e9UugrE38jeYsDSMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "which-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakmap": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/is-weakmap/-/is-weakmap-2.0.2.tgz",
      "integrity": "sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakref": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-weakref/-/is-weakref-1.0.2.tgz",
      "integrity": "sha512-qctsuLZmIQ0+vSSMfoVvyFe2+GSEvnmZ2ezTup1SBse9+twCCeial6EEi3Nc2KFcf6+qz2FBPnjXsk8xhKSaPQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakset": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-weakset/-/is-weakset-2.0.3.tgz",
      "integrity": "sha512-LvIm3/KWzS9oRFHugab7d+M/GcBXuXX5xZkzPmN+NxihdQlZUQ4dWuSV1xR/sq6upL1TJEDrfBgRepHFdBtSNQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "get-intrinsic": "^1.2.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/isarray": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-2.0.5.tgz",
      "integrity": "sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/iterator.prototype": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/iterator.prototype/-/iterator.prototype-1.1.2.tgz",
      "integrity": "sha512-DR33HMMr8EzwuRL8Y9D3u2BMj8+RqSE850jfGu59kS7tbmPLzGkZmVSfyCFSDxuZiEY6Rzt3T2NA/qU+NwVj1w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.2.1",
        "get-intrinsic": "^1.2.1",
        "has-symbols": "^1.0.3",
        "reflect.getprototypeof": "^1.0.4",
        "set-function-name": "^2.0.1"
      }
    },
    "node_modules/jackspeak": {
      "version": "2.3.6",
      "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-2.3.6.tgz",
      "integrity": "sha512-N3yCS/NegsOBokc8GAdM8UcmfsKiSS8cipheD/nivzr700H+nsMOxJjQnvwOcRYVuFkdH0wGUvW2WbXGmrZGbQ==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "@isaacs/cliui": "^8.0.2"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      },
      "optionalDependencies": {
        "@pkgjs/parseargs": "^0.11.0"
      }
    },
    "node_modules/jiti": {
      "version": "1.21.6",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-1.21.6.tgz",
      "integrity": "sha512-2yTgeWTWzMWkHu6Jp9NKgePDaYHbntiwvYuuJLbbN9vl7DC9DvXKOB2BC3ZZ92D3cvV/aflH0osDfwpHepQ53w==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "bin/jiti.js"
      }
    },
    "node_modules/jose": {
      "version": "4.15.9",
      "resolved": "https://registry.npmjs.org/jose/-/jose-4.15.9.tgz",
      "integrity": "sha512-1vUQX+IdDMVPj4k8kOxgUqlcK518yluMuGZwqlr44FS1ppZB/5GWh4rZG89erpOBOJjU/OBsnCVFfapsRz6nEA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/panva"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
      "integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.2.tgz",
      "integrity": "sha512-g1MWMLBiz8FKi1e4w0UyVL3w+iJceWAFBAaBnnGKOpNa5f8TLktkbre1+s6oICydWAm+HRUGTmI+//xv2hvXYA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "minimist": "^1.2.0"
      },
      "bin": {
        "json5": "lib/cli.js"
      }
    },
    "node_modules/jsx-ast-utils": {
      "version": "3.3.5",
      "resolved": "https://registry.npmjs.org/jsx-ast-utils/-/jsx-ast-utils-3.3.5.tgz",
      "integrity": "sha512-ZZow9HBI5O6EPgSJLUb8n2NKgmVWTwCvHGwFuJlMjvLFqlGG6pjirPhtdsseaLZjSibD8eegzmYpUZwoIlj2cQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.6",
        "array.prototype.flat": "^1.3.1",
        "object.assign": "^4.1.4",
        "object.values": "^1.1.6"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/language-subtag-registry": {
      "version": "0.3.23",
      "resolved": "https://registry.npmjs.org/language-subtag-registry/-/language-subtag-registry-0.3.23.tgz",
      "integrity": "sha512-0K65Lea881pHotoGEa5gDlMxt3pctLi2RplBb7Ezh4rRdLEOtgi7n4EwK9lamnUCkKBqaeKRVebTq6BAxSkpXQ==",
      "dev": true,
      "license": "CC0-1.0"
    },
    "node_modules/language-tags": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/language-tags/-/language-tags-1.0.9.tgz",
      "integrity": "sha512-MbjN408fEndfiQXbFQ1vnd+1NoLDsnQW41410oQBXiyXDMYH5z505juWa4KUE1LqxRC7DgOgZDbKLxHIwm27hA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "language-subtag-registry": "^0.3.20"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lilconfig": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-2.1.0.tgz",
      "integrity": "sha512-utWOt/GHzuUxnLKxB6dk81RoOeoNeHgbrXiuGk4yyF5qlRz+iIVWu56E2fqGHFrXz0QNUhLB/8nKqvRH66JKGQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/lines-and-columns": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "license": "MIT",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lru-cache": {
      "version": "10.4.3",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
      "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/make-dir": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
      "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
      "license": "MIT",
      "dependencies": {
        "semver": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/make-dir/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/minipass": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz",
      "integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/minizlib": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-2.1.2.tgz",
      "integrity": "sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==",
      "license": "MIT",
      "dependencies": {
        "minipass": "^3.0.0",
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/minizlib/node_modules/minipass": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
      "integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
      "license": "ISC",
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/mkdirp": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
      "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
      "license": "MIT",
      "bin": {
        "mkdirp": "bin/cmd.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/mz": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
      "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "any-promise": "^1.0.0",
        "object-assign": "^4.0.1",
        "thenify-all": "^1.0.0"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.7",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.7.tgz",
      "integrity": "sha512-eSRppjcPIatRIMC1U6UngP8XFcz8MQWGQdt1MTBQ7NaAmvXDfvNxbvWV3x2y6CdEUciCSsDHDQZbhYaB8QEo2g==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/next": {
      "version": "14.2.14",
      "resolved": "https://registry.npmjs.org/next/-/next-14.2.14.tgz",
      "integrity": "sha512-Q1coZG17MW0Ly5x76shJ4dkC23woLAhhnDnw+DfTc7EpZSGuWrlsZ3bZaO8t6u1Yu8FVfhkqJE+U8GC7E0GLPQ==",
      "license": "MIT",
      "dependencies": {
        "@next/env": "14.2.14",
        "@swc/helpers": "0.5.5",
        "busboy": "1.6.0",
        "caniuse-lite": "^1.0.30001579",
        "graceful-fs": "^4.2.11",
        "postcss": "8.4.31",
        "styled-jsx": "5.1.1"
      },
      "bin": {
        "next": "dist/bin/next"
      },
      "engines": {
        "node": ">=18.17.0"
      },
      "optionalDependencies": {
        "@next/swc-darwin-arm64": "14.2.14",
        "@next/swc-darwin-x64": "14.2.14",
        "@next/swc-linux-arm64-gnu": "14.2.14",
        "@next/swc-linux-arm64-musl": "14.2.14",
        "@next/swc-linux-x64-gnu": "14.2.14",
        "@next/swc-linux-x64-musl": "14.2.14",
        "@next/swc-win32-arm64-msvc": "14.2.14",
        "@next/swc-win32-ia32-msvc": "14.2.14",
        "@next/swc-win32-x64-msvc": "14.2.14"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.1.0",
        "@playwright/test": "^1.41.2",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "sass": "^1.3.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        },
        "@playwright/test": {
          "optional": true
        },
        "sass": {
          "optional": true
        }
      }
    },
    "node_modules/next-auth": {
      "version": "4.24.8",
      "resolved": "https://registry.npmjs.org/next-auth/-/next-auth-4.24.8.tgz",
      "integrity": "sha512-SLt3+8UCtklsotnz2p+nB4aN3IHNmpsQFAZ24VLxGotWGzSxkBh192zxNhm/J5wgkcrDWVp0bwqvW0HksK/Lcw==",
      "license": "ISC",
      "dependencies": {
        "@babel/runtime": "^7.20.13",
        "@panva/hkdf": "^1.0.2",
        "cookie": "^0.5.0",
        "jose": "^4.15.5",
        "oauth": "^0.9.15",
        "openid-client": "^5.4.0",
        "preact": "^10.6.3",
        "preact-render-to-string": "^5.1.19",
        "uuid": "^8.3.2"
      },
      "peerDependencies": {
        "@auth/core": "0.34.2",
        "next": "^12.2.5 || ^13 || ^14",
        "nodemailer": "^6.6.5",
        "react": "^17.0.2 || ^18",
        "react-dom": "^17.0.2 || ^18"
      },
      "peerDependenciesMeta": {
        "@auth/core": {
          "optional": true
        },
        "nodemailer": {
          "optional": true
        }
      }
    },
    "node_modules/next/node_modules/postcss": {
      "version": "8.4.31",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.31.tgz",
      "integrity": "sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.6",
        "picocolors": "^1.0.0",
        "source-map-js": "^1.0.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/node-addon-api": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-5.1.0.tgz",
      "integrity": "sha512-eh0GgfEkpnoWDq+VY8OyvYhFEzBk6jIYbRKdIlyTiAXIVJ8PyBaKb0rp7oDtoddbdoHWhq8wwr+XZ81F1rpNdA==",
      "license": "MIT"
    },
    "node_modules/node-fetch": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.7.0.tgz",
      "integrity": "sha512-c4FRfUm/dbcWZ7U+1Wq0AwCyFL+3nt2bEw05wfxSz+DWpWsitgmSgYmy2dQdWyKC1694ELPqMs/YzUSNozLt8A==",
      "license": "MIT",
      "dependencies": {
        "whatwg-url": "^5.0.0"
      },
      "engines": {
        "node": "4.x || >=6.0.0"
      },
      "peerDependencies": {
        "encoding": "^0.1.0"
      },
      "peerDependenciesMeta": {
        "encoding": {
          "optional": true
        }
      }
    },
    "node_modules/nopt": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/nopt/-/nopt-5.0.0.tgz",
      "integrity": "sha512-Tbj67rffqceeLpcRXrT7vKAN8CwfPeIBgM7E6iBkmKLV7bEMwpGgYLGv0jACUsECaa/vuxP0IjEont6umdMgtQ==",
      "license": "ISC",
      "dependencies": {
        "abbrev": "1"
      },
      "bin": {
        "nopt": "bin/nopt.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/npmlog": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/npmlog/-/npmlog-5.0.1.tgz",
      "integrity": "sha512-AqZtDUWOMKs1G/8lwylVjrdYgqA4d9nu8hc+0gzRxlDb1I10+FHBGMXs6aiQHFdCUUlqH99MUMuLfzWDNDtfxw==",
      "deprecated": "This package is no longer supported.",
      "license": "ISC",
      "dependencies": {
        "are-we-there-yet": "^2.0.0",
        "console-control-strings": "^1.1.0",
        "gauge": "^3.0.0",
        "set-blocking": "^2.0.0"
      }
    },
    "node_modules/oauth": {
      "version": "0.9.15",
      "resolved": "https://registry.npmjs.org/oauth/-/oauth-0.9.15.tgz",
      "integrity": "sha512-a5ERWK1kh38ExDEfoO6qUHJb32rd7aYmPHuyCu3Fta/cnICvYmgd2uhuKXvPD+PXB+gCEYYEaQdIRAjCOwAKNA==",
      "license": "MIT"
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-hash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz",
      "integrity": "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.2.tgz",
      "integrity": "sha512-IRZSRuzJiynemAXPYtPe5BoI/RESNYR7TYm50MC5Mqbd3Jmw5y790sErYw3V6SryFJD64b74qQQs9wn5Bg/k3g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-is": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/object-is/-/object-is-1.1.6.tgz",
      "integrity": "sha512-F8cZ+KfGlSGi09lJT7/Nd6KJZ9ygtvYC0/UYYLI9nmQKLMnydpB9yvbv9K1uSkEu7FU9vYPmVwLg328tX+ot3Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.5.tgz",
      "integrity": "sha512-byy+U7gp+FVwmyzKPYhW2h5l3crpmGsxl7X2s8y43IgxvG4g3QZ6CffDtsNQy1WsmZpQbO+ybo0AlW7TY6DcBQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.5",
        "define-properties": "^1.2.1",
        "has-symbols": "^1.0.3",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.entries": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/object.entries/-/object.entries-1.1.8.tgz",
      "integrity": "sha512-cmopxi8VwRIAw/fkijJohSfpef5PdN0pMQJN6VC/ZKvn0LIknWD8KtgY6KlQdEc4tIjcQ3HxSMmnvtzIscdaYQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.fromentries": {
      "version": "2.0.8",
      "resolved": "https://registry.npmjs.org/object.fromentries/-/object.fromentries-2.0.8.tgz",
      "integrity": "sha512-k6E21FzySsSK5a21KRADBd/NGneRegFO5pLHfdQLpRDETUNJueLXs3WCzyQ3tFRDYgbq3KHGXfTbi2bs8WQ6rQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.groupby": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/object.groupby/-/object.groupby-1.0.3.tgz",
      "integrity": "sha512-+Lhy3TQTuzXI5hevh8sBGqbmurHbbIjAi0Z4S63nthVLmLxfbj4T54a4CfZrXIrt9iP4mVAPYMo/v99taj3wjQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.values": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.2.0.tgz",
      "integrity": "sha512-yBYjY9QX2hnRmZHAjG/f13MzmBzxzYgQhFrke06TTyKY5zSTEqkOeukBzIdVA3j3ulu8Qa3MbVFShV7T2RmGtQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/oidc-token-hash": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/oidc-token-hash/-/oidc-token-hash-5.0.3.tgz",
      "integrity": "sha512-IF4PcGgzAr6XXSff26Sk/+P4KZFJVuHAJZj3wgO3vX2bMdNVp/QXTP3P7CEm9V1IdG8lDLY3HhiqpsE/nOwpPw==",
      "license": "MIT",
      "engines": {
        "node": "^10.13.0 || >=12.0.0"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/openid-client": {
      "version": "5.7.0",
      "resolved": "https://registry.npmjs.org/openid-client/-/openid-client-5.7.0.tgz",
      "integrity": "sha512-4GCCGZt1i2kTHpwvaC/sCpTpQqDnBzDzuJcJMbH+y1Q5qI8U8RBvoSh28svarXszZHR5BAMXbJPX1PGPRE3VOA==",
      "license": "MIT",
      "dependencies": {
        "jose": "^4.15.9",
        "lru-cache": "^6.0.0",
        "object-hash": "^2.2.0",
        "oidc-token-hash": "^5.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/panva"
      }
    },
    "node_modules/openid-client/node_modules/lru-cache": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
      "license": "ISC",
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/openid-client/node_modules/object-hash": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-2.2.0.tgz",
      "integrity": "sha512-gScRMn0bS5fH+IuwyIFgnh9zBdo4DV+6GhygmWM9HyNJSgS0hScp1f5vjtm7oIIOiT9trXrShAkLFSc2IqKNgw==",
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/path-scurry": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-1.11.1.tgz",
      "integrity": "sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "lru-cache": "^10.2.0",
        "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
      },
      "engines": {
        "node": ">=16 || 14 >=14.18"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.0.tgz",
      "integrity": "sha512-TQ92mBOW0l3LeMeyLV6mzy/kWr8lkd/hp3mTg7wYK7zJhuBStmGMBG0BdeDZS/dZx1IukaX6Bk11zcln25o1Aw==",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pirates": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.6.tgz",
      "integrity": "sha512-saLsH7WeYYPiD25LDuLRRY/i+6HaPYr6G1OUlN39otzkSTxKnubR9RTxS3/Kk50s1g2JTgFwWQDQyplC5/SHZg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/possible-typed-array-names": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/possible-typed-array-names/-/possible-typed-array-names-1.0.0.tgz",
      "integrity": "sha512-d7Uw+eZoloe0EHDIYoe+bQ5WXnGMOpmiZFTuMWCwpjzzkL2nTjcKiAk4hh8TjnGye2TwWOk3UXucZ+3rbmBa8Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/postcss": {
      "version": "8.4.47",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.47.tgz",
      "integrity": "sha512-56rxCq7G/XfB4EkXq9Egn5GCqugWvDFjafDOThIdMBsI15iqPqR5r15TfSr1YPYeEI19YeaXMCbY6u88Y76GLQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.7",
        "picocolors": "^1.1.0",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-import": {
      "version": "15.1.0",
      "resolved": "https://registry.npmjs.org/postcss-import/-/postcss-import-15.1.0.tgz",
      "integrity": "sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "postcss-value-parser": "^4.0.0",
        "read-cache": "^1.0.0",
        "resolve": "^1.1.7"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "postcss": "^8.0.0"
      }
    },
    "node_modules/postcss-js": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-js/-/postcss-js-4.0.1.tgz",
      "integrity": "sha512-dDLF8pEO191hJMtlHFPRa8xsizHaM82MLfNkUHdUtVEV3tgTp5oj+8qbEqYM57SLfc74KSbw//4SeJma2LRVIw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "camelcase-css": "^2.0.1"
      },
      "engines": {
        "node": "^12 || ^14 || >= 16"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/postcss/"
      },
      "peerDependencies": {
        "postcss": "^8.4.21"
      }
    },
    "node_modules/postcss-load-config": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-4.0.2.tgz",
      "integrity": "sha512-bSVhyJGL00wMVoPUzAVAnbEoWyqRxkjv64tUl427SKnPrENtq6hJwUojroMz2VB+Q1edmi4IfrAPpami5VVgMQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "lilconfig": "^3.0.0",
        "yaml": "^2.3.4"
      },
      "engines": {
        "node": ">= 14"
      },
      "peerDependencies": {
        "postcss": ">=8.0.9",
        "ts-node": ">=9.0.0"
      },
      "peerDependenciesMeta": {
        "postcss": {
          "optional": true
        },
        "ts-node": {
          "optional": true
        }
      }
    },
    "node_modules/postcss-load-config/node_modules/lilconfig": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.2.tgz",
      "integrity": "sha512-eop+wDAvpItUys0FWkHIKeC9ybYrTGbU41U5K7+bttZZeohvnY7M9dZ5kB21GNWiFT2q1OoPTvncPCgSOVO5ow==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antonk52"
      }
    },
    "node_modules/postcss-nested": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/postcss-nested/-/postcss-nested-6.2.0.tgz",
      "integrity": "sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "postcss-selector-parser": "^6.1.1"
      },
      "engines": {
        "node": ">=12.0"
      },
      "peerDependencies": {
        "postcss": "^8.2.14"
      }
    },
    "node_modules/postcss-selector-parser": {
      "version": "6.1.2",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.2.tgz",
      "integrity": "sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cssesc": "^3.0.0",
        "util-deprecate": "^1.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/preact": {
      "version": "10.24.1",
      "resolved": "https://registry.npmjs.org/preact/-/preact-10.24.1.tgz",
      "integrity": "sha512-PnBAwFI3Yjxxcxw75n6VId/5TFxNW/81zexzWD9jn1+eSrOP84NdsS38H5IkF/UH3frqRPT+MvuCoVHjTDTnDw==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/preact"
      }
    },
    "node_modules/preact-render-to-string": {
      "version": "5.2.6",
      "resolved": "https://registry.npmjs.org/preact-render-to-string/-/preact-render-to-string-5.2.6.tgz",
      "integrity": "sha512-JyhErpYOvBV1hEPwIxc/fHWXPfnEGdRKxc8gFdAZ7XV4tlzyzG847XAyEZqoDnynP88akM4eaHcSOzNcLWFguw==",
      "license": "MIT",
      "dependencies": {
        "pretty-format": "^3.8.0"
      },
      "peerDependencies": {
        "preact": ">=10"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/pretty-format": {
      "version": "3.8.0",
      "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-3.8.0.tgz",
      "integrity": "sha512-WuxUnVtlWL1OfZFQFuqvnvs6MiAGk9UNsBostyBOB0Is9wb5uRESevA6rnl/rkksXaGX3GzZhPup5d6Vp1nFew==",
      "license": "MIT"
    },
    "node_modules/prop-types": {
      "version": "15.8.1",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
      "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/react": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react/-/react-18.3.1.tgz",
      "integrity": "sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-18.3.1.tgz",
      "integrity": "sha512-5m4nQKp+rZRb09LNH59GM4BxTh9251/ylbKIbpe7TpGxfJ+9kv6BLkLBXIjjspbgbnIBNqlI23tRnTWT0snUIw==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0",
        "scheduler": "^0.23.2"
      },
      "peerDependencies": {
        "react": "^18.3.1"
      }
    },
    "node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/read-cache": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",
      "integrity": "sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "pify": "^2.3.0"
      }
    },
    "node_modules/readable-stream": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.2.tgz",
      "integrity": "sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==",
      "license": "MIT",
      "dependencies": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/reflect.getprototypeof": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/reflect.getprototypeof/-/reflect.getprototypeof-1.0.6.tgz",
      "integrity": "sha512-fmfw4XgoDke3kdI6h4xcUz1dG8uaiv5q9gcEwLS4Pnth2kxT+GZ7YehS1JTMGBQmtV7Y4GFGbs2re2NqhdozUg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.1",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.4",
        "globalthis": "^1.0.3",
        "which-builtin-type": "^1.1.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/regenerator-runtime": {
      "version": "0.14.1",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.14.1.tgz",
      "integrity": "sha512-dYnhHh0nJoMfnkZs6GmmhFknAGRrLznOu5nc9ML+EJxGvrx6H7teuevqVqCuPcPK//3eDrrjQhehXVx9cnkGdw==",
      "license": "MIT"
    },
    "node_modules/regexp.prototype.flags": {
      "version": "1.5.2",
      "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.5.2.tgz",
      "integrity": "sha512-NcDiDkTLuPR+++OCKB0nWafEmhg/Da8aUPLPMQbK+bxKKCm1/S5he+AqYa4PlMCVBalb4/yxIRub6qkEx5yJbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.6",
        "define-properties": "^1.2.1",
        "es-errors": "^1.3.0",
        "set-function-name": "^2.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve": {
      "version": "1.22.8",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.8.tgz",
      "integrity": "sha512-oKWePCxqpd6FlLvGV1VU0x7bkPmmCNolxzjMf4NczoDnQcIWrAF+cPtZn5i6n+RfD2d9i0tzpKnG6Yk168yIyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-core-module": "^2.13.0",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/resolve-pkg-maps": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
      "integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
      }
    },
    "node_modules/reusify": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
      "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "deprecated": "Rimraf versions prior to v4 are no longer supported",
      "license": "ISC",
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/rimraf/node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-array-concat": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/safe-array-concat/-/safe-array-concat-1.1.2.tgz",
      "integrity": "sha512-vj6RsCsWBCf19jIeHEfkRMw8DPiBb+DMXklQ/1SGDHOMlHdPUkZXFQ2YdplS23zESTijAcurb1aSgJA3AgMu1Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "get-intrinsic": "^1.2.4",
        "has-symbols": "^1.0.3",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">=0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/safe-regex-test": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/safe-regex-test/-/safe-regex-test-1.0.3.tgz",
      "integrity": "sha512-CdASjNJPvRa7roO6Ra/gLYBTzYzzPyyBXxIMdGW3USQLyjWEls2RgW5UBTXaQVp+OrpeCK3bLem8smtmheoRuw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.6",
        "es-errors": "^1.3.0",
        "is-regex": "^1.1.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/scheduler": {
      "version": "0.23.2",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.23.2.tgz",
      "integrity": "sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0"
      }
    },
    "node_modules/semver": {
      "version": "7.6.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.6.3.tgz",
      "integrity": "sha512-oVekP1cKtI+CTDvHWYFUcMtsK/00wmAEfyqKfNdARm8u1wNVhSgaX7A8d4UuIlUI5e84iEwOhs7ZPYRmzU9U6A==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/set-blocking": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
      "integrity": "sha512-KiKBS8AnWGEyLzofFfmvKwpdPzqiy16LvQfK3yv/fVH7Bj13/wl3JSR1J+rfgRE9q7xUJK4qvgS8raSOeLUehw==",
      "license": "ISC"
    },
    "node_modules/set-function-length": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/set-function-length/-/set-function-length-1.2.2.tgz",
      "integrity": "sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "gopd": "^1.0.1",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-function-name": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/set-function-name/-/set-function-name-2.0.2.tgz",
      "integrity": "sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "functions-have-names": "^1.2.3",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.6.tgz",
      "integrity": "sha512-fDW/EZ6Q9RiO8eFG8Hj+7u/oW+XrPTIChwCOM2+th2A6OblDtYYIpve9m+KvI9Z4C9qSEXlaGR6bTEYHReuglA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.4",
        "object-inspect": "^1.13.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/signal-exit": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stop-iteration-iterator": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/stop-iteration-iterator/-/stop-iteration-iterator-1.0.0.tgz",
      "integrity": "sha512-iCGQj+0l0HOdZ2AEeBADlsRC+vsnDsZsbdSiH1yNSjcfKM7fdpCMfqAL/dwF5BLiw/XhRft/Wax6zQbhq2BcjQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "internal-slot": "^1.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/streamsearch": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/streamsearch/-/streamsearch-1.1.0.tgz",
      "integrity": "sha512-Mcc5wHehp9aXz1ax6bZUyY5afg9u2rv5cqQI3mRrYkGC8rW2hM02jWuwjtL++LS5qinSyhj2QfLyNsuc+VsExg==",
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/string_decoder": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
      "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "~5.2.0"
      }
    },
    "node_modules/string-width": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
      "integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eastasianwidth": "^0.2.0",
        "emoji-regex": "^9.2.2",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/string-width-cjs": {
      "name": "string-width",
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/string-width/node_modules/ansi-regex": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz",
      "integrity": "sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/string-width/node_modules/strip-ansi": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
      "integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/string.prototype.includes": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/string.prototype.includes/-/string.prototype.includes-2.0.0.tgz",
      "integrity": "sha512-E34CkBgyeqNDcrbU76cDjL5JLcVrtSdYq0MEh/B10r17pRP4ciHLwTgnuLV8Ay6cgEMLkcBkFCKyFZ43YldYzg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.5"
      }
    },
    "node_modules/string.prototype.matchall": {
      "version": "4.0.11",
      "resolved": "https://registry.npmjs.org/string.prototype.matchall/-/string.prototype.matchall-4.0.11.tgz",
      "integrity": "sha512-NUdh0aDavY2og7IbBPenWqR9exH+E26Sv8e0/eTe1tltDGZL+GtBkDAnnyBtmekfK6/Dq3MkcGtzXFEd1LQrtg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.4",
        "gopd": "^1.0.1",
        "has-symbols": "^1.0.3",
        "internal-slot": "^1.0.7",
        "regexp.prototype.flags": "^1.5.2",
        "set-function-name": "^2.0.2",
        "side-channel": "^1.0.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.repeat": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/string.prototype.repeat/-/string.prototype.repeat-1.0.0.tgz",
      "integrity": "sha512-0u/TldDbKD8bFCQ/4f5+mNRrXwZ8hg2w7ZR8wa16e8z9XpePWl3eGEcUD0OXpEH/VJH/2G3gjUtR3ZOiBe2S/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.5"
      }
    },
    "node_modules/string.prototype.trim": {
      "version": "1.2.9",
      "resolved": "https://registry.npmjs.org/string.prototype.trim/-/string.prototype.trim-1.2.9.tgz",
      "integrity": "sha512-klHuCNxiMZ8MlsOihJhJEBJAiMVqU3Z2nEXWfWnIqjN0gEFS9J9+IxKozWWtQGcgoa1WUZzLjKPTr4ZHNFTFxw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.0",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.8.tgz",
      "integrity": "sha512-p73uL5VCHCO2BZZ6krwwQE3kCzM7NKmis8S//xEC6fQonchbum4eP6kR4DLEjQFO3Wnj3Fuo8NM0kOSjVdHjZQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.8.tgz",
      "integrity": "sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi-cjs": {
      "name": "strip-ansi",
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/styled-jsx": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.1.tgz",
      "integrity": "sha512-pW7uC1l4mBZ8ugbiZrcIsiIvVx1UmTfw7UkC3Um2tmfUq9Bhk8IiyEIPl6F8agHgjzku6j0xQEZbfA5uSgSaCw==",
      "license": "MIT",
      "dependencies": {
        "client-only": "0.0.1"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "peerDependencies": {
        "react": ">= 16.8.0 || 17.x.x || ^18.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/sucrase": {
      "version": "3.35.0",
      "resolved": "https://registry.npmjs.org/sucrase/-/sucrase-3.35.0.tgz",
      "integrity": "sha512-8EbVDiu9iN/nESwxeSxDKe0dunta1GOlHufmSSXxMD2z2/tMZpDMpvXQGsc+ajGo8y2uYUmixaSRUc/QPoQ0GA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.2",
        "commander": "^4.0.0",
        "glob": "^10.3.10",
        "lines-and-columns": "^1.1.6",
        "mz": "^2.7.0",
        "pirates": "^4.0.1",
        "ts-interface-checker": "^0.1.9"
      },
      "bin": {
        "sucrase": "bin/sucrase",
        "sucrase-node": "bin/sucrase-node"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/tailwindcss": {
      "version": "3.4.13",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.13.tgz",
      "integrity": "sha512-KqjHOJKogOUt5Bs752ykCeiwvi0fKVkr5oqsFNt/8px/tA8scFPIlkygsf6jXrfCqGHz7VflA6+yytWuM+XhFw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "arg": "^5.0.2",
        "chokidar": "^3.5.3",
        "didyoumean": "^1.2.2",
        "dlv": "^1.1.3",
        "fast-glob": "^3.3.0",
        "glob-parent": "^6.0.2",
        "is-glob": "^4.0.3",
        "jiti": "^1.21.0",
        "lilconfig": "^2.1.0",
        "micromatch": "^4.0.5",
        "normalize-path": "^3.0.0",
        "object-hash": "^3.0.0",
        "picocolors": "^1.0.0",
        "postcss": "^8.4.23",
        "postcss-import": "^15.1.0",
        "postcss-js": "^4.0.1",
        "postcss-load-config": "^4.0.1",
        "postcss-nested": "^6.0.1",
        "postcss-selector-parser": "^6.0.11",
        "resolve": "^1.22.2",
        "sucrase": "^3.32.0"
      },
      "bin": {
        "tailwind": "lib/cli.js",
        "tailwindcss": "lib/cli.js"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/tapable": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.2.1.tgz",
      "integrity": "sha512-GNzQvQTOIP6RyTfE2Qxb8ZVlNmw0n88vp1szwWRimP02mnTsx3Wtn5qRdqY9w2XduFNUgvOwhNnQsjwCp+kqaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/tar": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/tar/-/tar-6.2.1.tgz",
      "integrity": "sha512-DZ4yORTwrbTj/7MZYq2w+/ZFdI6OZ/f9SFHR+71gIVUZhOQPHzVCLpvRnPgyaMpfWxxk/4ONva3GQSyNIKRv6A==",
      "license": "ISC",
      "dependencies": {
        "chownr": "^2.0.0",
        "fs-minipass": "^2.0.0",
        "minipass": "^5.0.0",
        "minizlib": "^2.1.1",
        "mkdirp": "^1.0.3",
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/tar/node_modules/minipass": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-5.0.0.tgz",
      "integrity": "sha512-3FnjYuehv9k6ovOEbyOswadCDPX1piCfhV8ncmYtHOjuPwylVWsghTLo7rabjC3Rx5xD4HDx8Wm1xnMF7S5qFQ==",
      "license": "ISC",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/thenify": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",
      "integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "any-promise": "^1.0.0"
      }
    },
    "node_modules/thenify-all": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",
      "integrity": "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "thenify": ">= 3.1.0 < 4"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/tr46": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
      "integrity": "sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==",
      "license": "MIT"
    },
    "node_modules/ts-api-utils": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-1.3.0.tgz",
      "integrity": "sha512-UQMIo7pb8WRomKR1/+MFVLTroIvDVtMX3K6OUir8ynLyzB8Jeriont2bTAtmNPa1ekAgN7YPDyf6V+ygrdU+eQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=16"
      },
      "peerDependencies": {
        "typescript": ">=4.2.0"
      }
    },
    "node_modules/ts-interface-checker": {
      "version": "0.1.13",
      "resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
      "integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/tsconfig-paths": {
      "version": "3.15.0",
      "resolved": "https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-3.15.0.tgz",
      "integrity": "sha512-2Ac2RgzDe/cn48GvOe3M+o82pEFewD3UPbyoUHHdKasHwJKjds4fLXWf/Ux5kATBKN20oaFGu+jbElp1pos0mg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/json5": "^0.0.29",
        "json5": "^1.0.2",
        "minimist": "^1.2.6",
        "strip-bom": "^3.0.0"
      }
    },
    "node_modules/tslib": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.7.0.tgz",
      "integrity": "sha512-gLXCKdN1/j47AiHiOkJN69hJmcbGTHI0ImLmbYLHykhgeN0jVGola9yVjFgzCUklsZQMW55o+dW7IXv3RCXDzA==",
      "license": "0BSD"
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-fest": {
      "version": "0.20.2",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
      "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/typed-array-buffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/typed-array-buffer/-/typed-array-buffer-1.0.2.tgz",
      "integrity": "sha512-gEymJYKZtKXzzBzM4jqa9w6Q1Jjm7x2d+sh19AdsD4wqnMPDYyvwpsIc2Q/835kHuo3BEQ7CjelGhfTsoBb2MQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "es-errors": "^1.3.0",
        "is-typed-array": "^1.1.13"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/typed-array-byte-length": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/typed-array-byte-length/-/typed-array-byte-length-1.0.1.tgz",
      "integrity": "sha512-3iMJ9q0ao7WE9tWcaYKIptkNBuOIcZCCT0d4MRvuuH88fEoEH62IuQe0OtraD3ebQEoTRk8XCBoknUNc1Y67pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "for-each": "^0.3.3",
        "gopd": "^1.0.1",
        "has-proto": "^1.0.3",
        "is-typed-array": "^1.1.13"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-byte-offset": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/typed-array-byte-offset/-/typed-array-byte-offset-1.0.2.tgz",
      "integrity": "sha512-Ous0vodHa56FviZucS2E63zkgtgrACj7omjwd/8lTEMEPFFyjfixMZ1ZXenpgCFBBt4EC1J2XsyVS2gkG0eTFA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.7",
        "for-each": "^0.3.3",
        "gopd": "^1.0.1",
        "has-proto": "^1.0.3",
        "is-typed-array": "^1.1.13"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-length": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/typed-array-length/-/typed-array-length-1.0.6.tgz",
      "integrity": "sha512-/OxDN6OtAk5KBpGb28T+HZc2M+ADtvRxXrKKbUwtsLgdoxgX13hyy7ek6bFRl5+aBs2yZzB0c4CnQfAtVypW/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "for-each": "^0.3.3",
        "gopd": "^1.0.1",
        "has-proto": "^1.0.3",
        "is-typed-array": "^1.1.13",
        "possible-typed-array-names": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typescript": {
      "version": "5.6.2",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.6.2.tgz",
      "integrity": "sha512-NW8ByodCSNCwZeghjN3o+JX5OFH0Ojg6sadjEKY4huZ52TqbJTJnDo5+Tw98lSy63NZvi4n+ez5m2u5d4PkZyw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/unbox-primitive": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.0.2.tgz",
      "integrity": "sha512-61pPlCD9h51VoreyJ0BReideM3MDKMKnh6+V9L08331ipq6Q8OFXZYiqP6n/tbHx4s5I9uRhcye6BrbkizkBDw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.2",
        "has-bigints": "^1.0.2",
        "has-symbols": "^1.0.3",
        "which-boxed-primitive": "^1.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/undici-types": {
      "version": "6.19.8",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.19.8.tgz",
      "integrity": "sha512-ve2KP6f/JnbPBFyobGHuerC9g1FYGn/F8n1LWTwNxCEzd6IfqTwUQcNXgEtmmQ6DlRrC1hrSrBnCZPokRrDHjw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "license": "MIT"
    },
    "node_modules/uuid": {
      "version": "8.3.2",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
      "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",
      "license": "MIT",
      "bin": {
        "uuid": "dist/bin/uuid"
      }
    },
    "node_modules/webidl-conversions": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
      "integrity": "sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==",
      "license": "BSD-2-Clause"
    },
    "node_modules/whatwg-url": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
      "integrity": "sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==",
      "license": "MIT",
      "dependencies": {
        "tr46": "~0.0.3",
        "webidl-conversions": "^3.0.0"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.0.2.tgz",
      "integrity": "sha512-bwZdv0AKLpplFY2KZRX6TvyuN7ojjr7lwkg6ml0roIy9YeuSr7JS372qlNW18UQYzgYK9ziGcerWqZOmEn9VNg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-bigint": "^1.0.1",
        "is-boolean-object": "^1.1.0",
        "is-number-object": "^1.0.4",
        "is-string": "^1.0.5",
        "is-symbol": "^1.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-builtin-type": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/which-builtin-type/-/which-builtin-type-1.1.4.tgz",
      "integrity": "sha512-bppkmBSsHFmIMSl8BO9TbsyzsvGjVoppt8xUiGzwiu/bhDCGxnpOKCxgqj6GuyHE0mINMDecBFPlOm2hzY084w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "function.prototype.name": "^1.1.6",
        "has-tostringtag": "^1.0.2",
        "is-async-function": "^2.0.0",
        "is-date-object": "^1.0.5",
        "is-finalizationregistry": "^1.0.2",
        "is-generator-function": "^1.0.10",
        "is-regex": "^1.1.4",
        "is-weakref": "^1.0.2",
        "isarray": "^2.0.5",
        "which-boxed-primitive": "^1.0.2",
        "which-collection": "^1.0.2",
        "which-typed-array": "^1.1.15"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-collection": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-collection/-/which-collection-1.0.2.tgz",
      "integrity": "sha512-K4jVyjnBdgvc86Y6BkaLZEN933SwYOuBFkdmBu9ZfkcAbdVbpITnDmjvZ/aQjRXQrv5EPkTnD1s39GiiqbngCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-map": "^2.0.3",
        "is-set": "^2.0.3",
        "is-weakmap": "^2.0.2",
        "is-weakset": "^2.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-typed-array": {
      "version": "1.1.15",
      "resolved": "https://registry.npmjs.org/which-typed-array/-/which-typed-array-1.1.15.tgz",
      "integrity": "sha512-oV0jmFtUky6CXfkqehVvBP/LSWJ2sy4vWMioiENyJLePrBO/yKyV9OyJySfAKosh+RYkIl5zJCNZ8/4JncrpdA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.7",
        "for-each": "^0.3.3",
        "gopd": "^1.0.1",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/wide-align": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.5.tgz",
      "integrity": "sha512-eDMORYaPNZ4sQIuuYPDHdQvf4gyCF9rEEV/yPxGfwPkRodwEgiMUUXTx/dex+Me0wxx53S+NgUHaP7y3MGlDmg==",
      "license": "ISC",
      "dependencies": {
        "string-width": "^1.0.2 || 2 || 3 || 4"
      }
    },
    "node_modules/wide-align/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT"
    },
    "node_modules/wide-align/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrap-ansi": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
      "integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.1.0",
        "string-width": "^5.0.1",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs": {
      "name": "wrap-ansi",
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/wrap-ansi-cjs/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-regex": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz",
      "integrity": "sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-styles": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.1.tgz",
      "integrity": "sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/strip-ansi": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
      "integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "license": "ISC"
    },
    "node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "license": "ISC"
    },
    "node_modules/yaml": {
      "version": "2.5.1",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-2.5.1.tgz",
      "integrity": "sha512-bLQOjaX/ADgQ20isPJRvF0iRUHIxVhYvr53Of7wGcWlO2jvtUlH5m87DsmulFVxRpNLOnI4tB6p/oh8D7kpn9Q==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "yaml": "bin.mjs"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    }
  }
}

```

---

## File: package.json
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/package.json`

```javascript
{
  "name": "next_gen_management_agency",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@next-auth/prisma-adapter": "^1.0.7",
    "@prisma/client": "^5.20.0",
    "bcrypt": "^5.1.1",
    "next": "14.2.14",
    "next-auth": "^4.24.8",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.14",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}

```

---

## File: postcss.config.mjs
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/postcss.config.mjs`

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;

```

---

## File: README.md
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/README.md`

```javascript
# NextGen Management Agency 🚀

[![Vercel Deployment](https://img.shields.io/badge/Deployment-Production-brightgreen)](https://nextgenmanagementagency.vercel.app)
[![Next.js](https://img.shields.io/badge/Framework-Next.js-000?logo=next.js)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Styled_with-TailwindCSS-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18.x+-339933?logo=node.js)](https://nodejs.org/)
[![GitHub Repo](https://img.shields.io/github/stars/DigitalHerencia/NextGenManagementAgency?style=social)](https://github.com/DigitalHerencia/NextGenManagementAgency)

## 🌐 [Live Demo](https://nextgenmanagementagency.vercel.app)  
This project is deployed and live at [nextgenmanagementagency.vercel.app](https://nextgenmanagementagency.vercel.app) via **Vercel**.

---

## 📚 Project Overview
**NextGenManagementAgency** is a modern, responsive web application built with **Next.js**. It is designed to streamline talent management processes with a focus on performance, scalability, and an intuitive user experience.

### Key Features:
- ⚡ **Server-Side Rendering (SSR)** & **Static Site Generation (SSG)** for optimized performance.
- 🎨 **Tailwind CSS** for rapid styling and responsive design.
- 🔒 **Authentication**: Secure login and authorization flows (to be implemented).
- 📈 **SEO Optimization**: Built-in features to improve search engine visibility.
- 📊 **Analytics** integration for tracking user behavior and traffic (to be implemented).

---

## 🛠 Tech Stack
- **Next.js** - Framework for React apps with server-side rendering
- **React** - Component-based UI library
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **TypeScript** - Strongly typed programming for JavaScript
- **Node.js** - JavaScript runtime for backend functionality
- **Vercel** - Deployment platform for Next.js apps

---

## 🏃‍♂️ Getting Started

### Prerequisites
- **Node.js**: Make sure you have Node.js installed (v18.x or newer).
- **Git**: Ensure Git is installed to clone the repository.

### Installation

1. Clone the repository:
   
```
   git clone https://github.com/DigitalHerencia/NextGenManagementAgency.git
   cd NextGenManagementAgency

```

2. Install the dependencies:
    
```
   npm install

```
    
3.  Run the development server:
    
```
    npm run dev

```
    
4.  Open your browser and go to:
    
```    
    http://localhost:3000
    
```    
___

## 🛠 Available Scripts

In the project directory, you can run:

-   **`npm run dev`**: Runs the app in development mode.
-   **`npm run build`**: Builds the app for production.
-   **`npm run start`**: Starts the production build.
-   **`npm run lint`**: Lints the codebase using ESLint.

___

## 🚀 Deployment

This project is deployed on **Vercel**. Every push to the `main` branch automatically triggers a new deployment. You can manually deploy by visiting [Vercel Dashboard](https://vercel.com/).

___

## 📂 Directory Structure

```
.
├── src/
│   ├── app/                # Core Next.js app directory
│   │   ├── layout.tsx      # Layout for the application
│   │   └── page.tsx        # Main page component
│   ├── components/         # Reusable components (to be added)
│   └── styles/             # Global styles
├── .gitignore              # Ignored files by Git
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts

```
___

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to the project:

1.  Fork the repository.
2.  Create a new feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a pull request.

___

## 📄 License

This project is licensed under the **MIT License**. 

___

## 📧 Contact

For inquiries, contact us at:  
**DigitalHerencia** - digitalherencia@outlook.com
```

---

## File: tailwind.config.ts
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/tailwind.config.ts`

```javascript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;

```

---

## File: tsconfig.json
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/tsconfig.json`

```javascript
{
    "compilerOptions": {
        "lib": ["dom", "dom.iterable", "esnext"],
        "allowJs": true,
        "skipLibCheck": true,
        "strict": true,
        "noEmit": true,
        "esModuleInterop": true,
        "module": "esnext",
        "moduleResolution": "bundler",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "jsx": "preserve",
        "incremental": true,
        "paths": {
            "@/*": ["./src/*"]
        }
    },
    "include": [
        "next-env.d.ts",
        "**/*.ts",
        "**/*.tsx",
        ".next/types/**/*.ts",
        "src/types/next-auth.d.ts" // Add this to include NextAuth type overrides
    ],
    "exclude": ["node_modules"]
}

```

---

## File: schema.prisma
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/prisma/schema.prisma`

```javascript
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id             String   @id @default(auto()) @map("_id") @db.ObjectId
  name           String?
  email          String   @unique
  emailVerified  DateTime?
  image          String?
  password       String
  role           Role     @default(USER)
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt

  accounts       Account[]
  sessions       Session[]
}

enum Role {
  USER
  ADMIN
  TALENT
  CLIENT
}

model Account {
  id                 String   @id @default(auto()) @map("_id") @db.ObjectId
  userId             String   @db.ObjectId
  type               String
  provider           String
  providerAccountId  String
  refresh_token      String?
  access_token       String?
  expires_at         Int?
  token_type         String?
  scope              String?
  id_token           String?
  session_state      String?

  user User @relation(fields: [userId], references: [id])
  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(auto()) @map("_id") @db.ObjectId
  sessionToken String   @unique
  userId       String   @db.ObjectId
  expires      DateTime

  user User @relation(fields: [userId], references: [id])
}

model VerificationToken {
  id         String   @id @default(auto()) @map("_id") @db.ObjectId // Added @id for MongoDB
  identifier String   // Typically the user's email
  token      String   @unique  // Unique token for verification
  expires    DateTime  // Expiration date for the token

  @@unique([identifier, token]) // Ensure uniqueness of the token and identifier
}

```

---

## File: GeistMonoVF.woff
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/fonts/GeistMonoVF.woff`

```javascript
wOFF    	    �$                        GDEF  ��  �  ����$GPOS  ��  �  �2p�@GSUB �  �  
=�`T�BFǔ0�LS���.�	�E�é✎r�:r9'��\���W�$���(ܩ?�Nt��+T�ʖ,i5�-)��l�M7��K�K���7����S{�M��_W<<�k��h��μ����;��%Me\Y{��ӯ�v�g�7�.�.��2�g�1J�3��r
�5���85���ס�R�a�ؔ��5u5�d���=�Ҍp?è9L%� �S��a(.o�O���:�f�=W�AG;}J�o�x���6��p��������aھp�E"�����-�� ~���CjN��9z����}s�r�nf�������R4"���8а�l��1������(��_9��r6X8����n�%�Ѻ��[^EU==�C��P�Ν��	[ȪL�&�
� �s���1HFg�5"ΰXv�_:�%���zS;�G�tw_�8�2�m���a�
��Ux�sآ�#��d��¼5@s!� ��@��
���B{l�σ�����~
$={��R���F���:F-��R\
��G�·�m����mk�m�}���˝��ٰ��r޽>]�&z_	r��3����r�έD�
�l6�W���W
��m�m3>T	2�.�C.7�i5W.���;�[.\r0?����{+*�뺫أ����/�����mG�{�*�ğ\K��oI��P�ue&qS�_����On��$�R�[�YE�4#�������"����"c�x���X.���$��J�����?���`��<R]=����>Jo�5�����ˏ�^stť+�m�����uL��U_�WD�y��c,x7�J
{��&�'=,��D�#�/l��m�����`�y5��e�1�&��?�P������uD�0�ȁ�P�9o��	� ��Zű>�<�Ia%Z�!�ˎ��|��O�
��<��N6Z�$H=�&#�sX�iNxeR�R���_Z`�3�rrU��uJ
Q��nQ	�M�;۷;����J{�|El�K���cllK�)T��׶��7x��a������	�4O� &��C�w������xe�ڀ�+��B��(: <)�[A�=Ձ�W�q�W/���9�d���������b��d߰��##�u�
�.��ô}aJ�4�������ha�O<��L������7Ly��5Kj'�U��oL��Oo�w�G�}؎��_�I�n���Y�R�0Ʃ�(���T�t��@>;�)?�)d�KC<��+_Y��3+���hZ&��ʄ��'���i�c>�+��=��曗�&����	�*$���7n�y���S���{(�����!Nǈ�m�� N� I��C贰}UȈ�������
�ɘ4et�����߳�6�r�x�w�~<F�h�ߢR�5����L������Jꯞy0�?��q�yL�!n��:ҍ���SE^����zy	l/�I��uR�:x'x�(����.���^#���F�'���`�kX��5,��F�D.�k"\Қ�n���
��/��~��3i�"����\��i�L��$m:nvuؔbP`T.��H��7t�,
�q��RbH�v��z�ۆ�8}���Eݭ�n�����R_��L�U�?����p�Ec����:�h�z����`�x~��C��PW�0kA}���E�`��Ľ~ܷc�%zQ�r��$s^�B��N�sc
�o��
�W���Q\7O�?Kq�25������e9�ŋi�������t�$�^��}�;�j��53�O���#W��T���5�����m�)����X�S/�
�8��4��G�A�Lx��9t�Z"����Y��1+���b��PW��>=3��O��ƶ(�%��eӸp/�E����g`�$
&_��˹SQ*��db_��;�营k��K5�r���a��Ht^BtKp
?�hӵ���Ǵ�9-�<c$��5�iRC, �!���R+^z$&��#m�_z �M��5E��S'�FA��ü~�TgJ4%�S��XT��t�F����:9��֩4�H��ke��� �kk�U&�|�����:���qɎ�L�d�Q�/�V�4(��Եz�R}�^×�wV��mv���⫅�l.�؄�!�Ë?`�0\l�̡<��t)pȜh��-=@��-c��vG����A7���׉���%���p�%�x�2u�"��
�׉�a����w����������E���V,o�a����C�]J���_x%���^�J���+<0_R�&��b�vbb-�����7��JF����nZ����aR�ўJ��Z��c/�&��ހ�-SF�>��-���y"E��ҩ�)��Z�"�������^�\5��2�C�T��/���n������a��,f�͌:*8�Uy^D�'������z�
�R|��`Y9�2���d��LI�O/����GW������2xT����0���f���ֽ/��]�0d
��U=��:Z=���?����0���͟�_P��d�I�
fm�;5�3�wVv�	m��À��Q�_G�3
�֕l�-Z�� 3���C��o
:t\)�ŋ)�1��8���f�+Xھ0}jd�!�-�|�/���_����"o������h�'�������ʚ~w��5޸=�oބ�]Gt*�
��P��=�'��<U{ݻr�8��s�Ѿ ��x1�S��`�Μ<:�^����s�/\V릘�W4���r���O>�lc�SO�K#챈��Eͩ�\�I��8�)����>�R{n��,Ž��_�?+�r�_��{%'�^	��|
���{��ve�{Y��hk�����r4�\"Ǘ@�c�s�Y"�t�L^	�yx8�ł�UU喪*ں��g���ŭ����n��gP�����bl�x7��U����̥�P���p�b���8{�煿�qPa}]�@<G��I��Z��C<����P���u�߱o�$���l1nW,���3���ń�1	Ų7y m�hK�hq[-���n �E�xt�f��t@�̙3{n-.��`�� �PeT���P�hL�C�^S=O�ͷ�S7���_�;[*$��<���߂���x���R?ZQ> ;K��6Q�3�����9�ߛ�{�X,
��&�g�
K5hC�Y�����/7�@r�`�г���v��H�$��j�]:�߻e�#g�D6�
�b�+1,�6�oj�Lg�ұa:Y�g���W`�
w�K�����e��	
�L��"1�)�9��t����N)�	�+�b��:�Z��$� }���y�;�:��?PW������X�j���Sآx"�R���gУ��Y�w���f3�8g�C�~nƿԿ!.�'��R���X����ib�x�����w8��V���#���m�8N�F���L������C�˥�pzeĲc�����yN�@|KKoI�Hs����xZ���sKG�
��X��7�R(���
���.�Xh*��;zF|fcB��2ǟ��E�YU�i�d߱��f6��
���y��+(E6�>�y��c���58�Kz�c�/�_�E�JjӘ:��"�Oh�28�7����4���%r,��v�F�ӟ�]��.4tV�H~T����ٍ�V�[�H�>�;s}5:"�����M�o�L:��{�d��~Go�b�N�C�}�xV�#I4Rf>�o���z��K����)��B[XXs|"U�������G#�]FK�~ތh�3�މN�����y�9͙�iNZ��k/� ��d��*a?�٩�OD&7(t��duP#��P	~:`�o�-s��mqXX���Uݶ�Ӳ1h�[U�N+��)�l���*ɯ�D���<γ�~C�֮�6���^�����{m�a�#�g�	����5�!~6��/�3�v�cdml����\��~�լ�?��ux��
�b�������뢯
�T�SL��J�u�l�T����/JU���CmP�ո��Oڸj�XnA���Vf�"i���ʎP?BF��X2�5���/��k���b��dfv��*����W�!7�/���
;A'�-^'���+#�P�4ŵ�#9�8���T��ѭH�K �E};�o�Q��L�܋i�I�KD]��N���.�/(I��������o��N<��	�g�辙�W�5����M���K�� �0���F���f����� O��}{C��P����VGP����Nlk�9�VC�w�?���?�w���xmu���%��뽘F ?��Iz>��)��O��s���8�>�IcQ�9{a�Ǻ�V��������3�B�}���@lժ��U����M����䝏��1�Ŏ}z�M�A�?(� ����MRG3�{j�Vg]���L�����������zQ�#A�.�CksGRm��Oy!����Kv�1mD�a�j|�9��r���XUS�RM���"<?<�32����.��|��;�8�;���H�L�VJN1"�Ŋ������R�X���^�<����g �
���[5��s'��Ж]�����]]]����G�G�kjjk��8�_�D��0���D*������"�O"��c�'Q���>dJ�8w
��o�)v�`��\4Z�k��S�:o���y1䢅|���ţ�?^__�Ԕf䯳U�7F������f9($�O�ZQJ��ÀI8��b&]����1yz.|��?a|�-�/E
CQ�u���kV/Y�Z����h'��E�T���X|�e��_��.Y~�ԥ�--�o�:z���x�ų���TUՈ6Z��f���
{D��8� g���%1Ew�o�1�/������ϊcN�+p�e.N�ٻ�&���a��f��פz��4B���NA�J:o�2A�?��/��#���`r"�:/�{�4�=�b2��D4g~���Ō���dr�on�_�..�,���D�Ji�4|����9H�ی���_e�+({��`�X'���*���_)Q�U�=y9�������ˇ�/�}�l�T9O�Q�}��7�&�L$�tm��|����}���z�w����d
?���;��L�7����U#���a�Ϸ5���m�wY,������e_�/��?{��m�r�#۶�=��������4�Mþ%�g�n���J��ǗZjsC�W�(���:�gpPڳò�5�d�5/�-�T�uO:�������x�5ۺ&ݦ���j����64W՛;z��u�&|�k�d%� �[r�M,�uC�SR�C��)]�+µ���h��=����^ձ�=40��}G${c\�on	��JyW����^9��v��>��Y��7����d��f���F�@�w�X"����^��`����$�����ϊ�c�B~B��k}��ޖ�`�*�NԢ��o��y����M�M�l{�Y��E�G*��0/|�m�k����gX���J�l�T;)y~�r��U�
�u,��_MT�y۠P�0(&>/�^�{+��B{��Hg�/3������^WS\ʡ�
ݸ"������f�O�&�s5�<h�)<-�\�D�S�mb�VS%�%u���&�U�4�ʕ&jI���(i��qt@�ck��*�
n2K9U�,�菎9l6ߦrG�H9����_F?��	|Ԙ�Iʧe.>�ϫ�rL��R�"�����zIG�L}*[ "�?�s.��D�Z�U�VT����e'��(K����|V�_I��W�k8c�:����Y�}kGM�Q�rѱ+�9�ʹ�d�!@2�%ρ�ϩd
ŗ��$�[]���kI��_[b��j4�Z�L%z�U_b���PWR�+ԣq�9��a���Ӆ��?���s���H�Q$}W㾟��}�������G>�?}N]�|��Q�>&�I���[\����?��Y��(������G"M�����o��ї�p�#��w���!t9`�~��[;��ii�[�l�Cˡ����|o.��Nh� ��<�~B��a�t�=��������2��齷@��p���`c��`������g�ҷ�n�-���[�M�
�qyً��L\5f{�+;�
,E>&��
���em�CE6G�/G[A�r�r�3�r.쓥�앻`�$I|������`g+�<��
�e����\IR��1L"��h+���c�2 mMԾo�����0��D���qy8��1�Q�Z��15��5C��U!(��8����x�(/P�"��	xbD|�ᘜ��x�;�~�n��ClW�Z����>l��(�j!�#>1s�-�=!�C>�1śƇm��z���ݛ�_���j�Z�<F���X�xR�P|�d�@,T�F�_���$�&jl�'�3��/(p�LI��ކ��}�!1ɔ`�s����`�b�J6�x;F��&�)�B}F�2x�x�HةBl��m�����+��X#��͔=��&��)���>������k�n�����uӼ��t����n4q� �l�q�l���i�4$q��
X��|)������P��s�{�	Hv����K�P<,
^��'�;Ш��w?S�p����qO�$����x�t��t p)���Jl��ץLR����%��&���2Y֫�D=�w0[�<��.�f�q(Z����Z��mW���@�ܶ�4��ɇ=�Ԝ�B �� M��H���h!��EO����l�����p�8�)]]�խ���@�ѝ11q
��a��k�f%-������
gbm
��&�2�P���+����.�|�y�eMU^�
blK��?{I���y�ũr��i�G�Y/�fe��U�u+4jOJ�u�_O@>����Y��H���B��
]u��x�@����ӪR�햞$%J��lSF�����*q����23�9*� ��ˣ�x1N���0/֪X.�f�2aB� ���eP � Rh�m ��N��J���:��!@���吨��ʷ��>�4���u�r���5�7�n�i}r:ýE�x7�G�&�/k�&s�.ß��X\�Zc՛����t��Wo��`�KH����
t&�� ��?x qv��I0퇤ݻk�їd������g�}e�9�nH�?�i�B��=���U��xaV�{��y�_
Y[�#x%�	`=Y�m���Gk_�W�0�f+)ٵ��#!"5
�H��T�u�� �!�ws���7�*�M��*$��w�>�����ެ8,g<Z���A�[8܀/[�D�9ow7>�(�}�����#�4�'���J�p��ǖ�i��_����D�_���N����J�l2��V�����,�ѻw߹��Cr�.}t��e��H��	Z��M�޺z�.�1�Qy�1��k����A�GCy�>�
���{oy���-��Һ��t�W��7.�x0�݅ ��@�?�$���0���
�����aJ|�a�0K{��]����z?)s�N �!�Ӂc'�mʊ3�ԡ��3}��L�%����|�/Ù6o55_�S���]�����6)k�DL�	T�w�{�'T�GmP��l���
��)B/�?K��	UhBA��i�=IS�f�'�$)��&o���z>c��C$�L�B4�r�g�yd�$UӴ9�Y�����?DbׇOL�r�%�tʹy
���?5^�����K�|�P�y��+t�U�/b|��< Ca������|�~>��I[�wð�zN$��y۱�I��Thx/��
Ԭ��S��x��F�;s��/(#+�hZJRb�	����&3��I�+�|_H��й���X�\x�3xY�%�����
�K����n@�XM�)6�L#��w��ɷZ��q"��KqI��2�-9[�ll�ժ�u��:��D;+��YZck)I��`��=I����?�L:�S���7�w���Sҳ�̩���kF�پ��5�[[��Eޅ���
�9���U27+!����xq�-c��v��Q�pG�?��TS�m��@rjL�P]ica���K-�rTj�PI�ܬg��
�*��W��3$���̺���[l����S*�P����
=��k�����[�ZGK'���x��8l�� JCg���D�[�
�9r7T�
ߴC�ΪPl������N�U/�J�����gQqa�oq�kq��?��o.I7z˺d���+�z����O/���W�X�I����z��c/iu��uk\eIYzCzr������K4��5X�6ے��4[��g*̳�����%�}'A�xAg����;;w�7�./_��Ϝl_V��q���5%v�UG��9zQM̒[FFnY¯��.\���}�����oYݴ����R��͝3��P�6@�n	�O�gq�U쳿�[>��ʚ�0����MM����3��[��S�����/۞��V\�z�Y�M?k¿泚*<=�A��70mr���/5�u윓���~,�������7�l�ٜ���:s���B"�&��p��N�[��+��0�	5k�Fj65��++{���@e巕h�,���k�XZ^�wK�k�Z\ �>~FS���Z�j��m��a�L�+������vWV���7�J�L��v�g���|�ɿ�o���Q'�u7�@�b�qMq�H8�E��	�5 �C/�w�_
�c�n5�t5�+og�I�u�1����1P�WQhh���N��T�wH�7���Y�K�Qp���z�9}gl�3�y�ŗ��Z�U���ץ��0	�_�_�1�tI��vKyy��?�SP���xx?$;�@P{��mD+e��.X��r���u�V�L�b�
?��211����~��W���Cd��* ��'��5[�H	�Ly�����
mn2�������m���
��!I�v��rjd}L��7�Oq�=&b_��閁y���h��oI�y���9��	<ӌZf^�<W�[�0�^�t0�
�V!ߞl�w���i2�E	#s_�����y�&fv�)����Q+b�]�M5�{�U�*�F9���5Mttt���O�
���,sZ���kEFڬd��XZ�5+��-�Vu�)��bi%�I�y��ꠞ�?lRC;��a����^��ҩe�C���b\
o�f�C+�
r���������<s�NWg6gg����H7�
�!�g�cj��0�{ض@޽ 2���"��(-9gfM��nwQ	��OI1񟼪������C ,=��MC�����]yy���<<���}�PS�`sa.m�MM��M����\��GB�$�){�< �C*_���^�1I"s�χ!N�lZ�¶3Yx��!���+�w���GJ^2/r/k��WV��%��/�7�1�5��ʄ1J��?������x�L�X1I%�Y	H`�wÌ�|zū�K�q�SpH��ց`���v��>�+���e��E�[Ob3;�"#|��˱eR�tM4;y�d��������S�Y�������X���[����X��F�[�J7�����[䧶����l��m�8���7����x�<h����2�g����;n۵��χ��o�mx���5|Ɣ$\M�9��f�U��t:�9a������coP����bS<q�ѭ����j1V�\�Ҕ�����̘�x�s�#�-���l�cv�� ��c޻�#�Yvn"MH�ӞOG����� �$Iw�Y���?`�����t�zᡚaY�v���R�8^��Z+=c�I�e�l̳+���(�sl'��uRS�&p:��z��*8�WVV�����o���%[��^m�ʗ���|;o��F��F[i-1ʨ
o},��f� I�(�ݧ7��x���>J�\�U��U6)�ƛn洓�Xe	k�X���e��|:�%�� .��t�;ʇ���Ң�o�ݣD0i��"�8�H�0Yr��X�v
��r��͊�)Ǵ���!8��*��IJ�� ��{0��%��
��-IHɕ�I���k⼳�n�ҍ���5�`�mː�=���ï�ge��y�)G[�֪7�����
�,�<a����P����oΌ6g�ώ+���4�����g
 Ɨ|�Fhgt��d\:5wA�8=��[�����/q�
���u���Z�(x���0,k�����Ip� _�iÜaѰbX7lvW���'��P\�eEQYT5Em�(4
���#)���i��M:"]�>H�2�k�#�m����[��z�0e�rIy��W�j?u�zM����\��6Jۦ=���@o�O�?���s�u'�� �x���Jj�z��K���9�$"-"}"�"7"/�٣\�NtHt_�N,g�Al]�M�ŧ�i���n�F-c�1��a�1���&a�1��[�V~K��Ym�a�"뉝�nd_�_�?��NIGwj8]�	�瘛���2nw�����s�_���Ž:^+��7�[���.yϒR&qI`2��!�.�;�p\��3�|���(;*�*"�LTuCs�1t�C��7\�1p/<��,���.|��-���D�D��h��Dw   xc`d```46��9�o󕁙�<R��Њ
�E6��(O>�)�+�C���-��g�֭]1;FH�0�X�@�Z9��%+\
'���1󮖢ݘ� ��#u���k���|)���F!JG0��r�Շ!4�?i9Z1��X������`Ԡ����P�.�jmHuB��CǢ�R'��j�1�Ϝ�$P�	��W+1,�_��E�3�\c���'�8�s-����b��k��q6n�w�x��J��^׺����92��:G����L��|�|�z�S�h�o   xc`d``��_�!�{��S�x���"(�Y
C
�F&�� 9&!�c@J�� �T7  xl��1�d�mO���^��նm۶m۶m�v���m�;͙�(N�!�$��x�7N���!l/*v��C�P�{�\8�⢸<����ix&��_IAR��@: ��KĞ8O�'�I4YD6�C�88C � DB4��P
�A+�}`̃E�
v�>8��<�'�
>���<F^*��ȿ�7
��h+��yq.�K���z���T�O�8+�'�����4\!T�(���4������\X+a+셃	��/ὐ��p!qX�,��^ԟS� A$H����I�
�Z��.$6��l{�"�F��N� �$$���U-Eb'��������+$�ü�ĤD	�e�ldJ*-��E�Q�4�N�O���Z�f�f
�p��(�el�U��-�e����6�.[fs=��SYka�|Om��Wo<��9���X8������,Ap��'$�M4b���%�BQJS�������-iJsZНJ�Lfs��l沈��b
s�b\�,7(�u*p��<�:���Cj�:<�6Ϩ�S) 
E'E���ѓ��Mť�����`��NN�P�4V@O��=���D���z*O��=�G��ãz8��<�GQ
7jɝ8/3�A�9r��̇;u_-�UY����.��|��-�!�u��,޲����R�d��~��5uh�]-�
�[
���c�n�G�:l������%�K��C��	�¡��������8�D��o�D��0[����ߙ���`,U��WL��d����\�;�<���䛯EK�W���U���3�H�<ന�1;b%�	�*�   xl�Â  gv�m��m�X��}B���{��s�9��{3C ���$	�g��C�0�+4p�q���#�~��&'8�P'9������rݩ�p�ӝ�Lೳ���:��D���Dq�[��+w\�b��R��rW�JW��g���D��$p�{���C9�E.��G�H6�p#H1�|3�hcH5�8�M ��&�6�d�)��F:��a�Yd��{��l��d��+�-��"�-��2˭��*����:�]�z7��Mnv�[��v�hw�;餋w���9K1%�z��^JmP�QF��0h�6�b�m�S�����.����^���	C�0j?�8��;�(5���Z�{��<��zy�#�y���AAQ  �݊ �> ����8A`&F�
U�[��q&ΓI�v쒲Ǖ�}D��:rL���N�9w�,9W�ݸ%O��;.�=P�ȟ x��    �s�d۶m�ھ��5�נQ�f-Z�iסS�n=z��7`Аa#F�7aҔi3f͙�`ђe+V�Y�aӖm;v��A�}9v�ԙs.]�v�֝{=y��՛w>}	}����KHJI����+(*)������� x@�  6��X��m�6�ţ��^��(S�B�*�jԪS�A�&�Z�JJI����+(*iӮC�.�z���o��!�F�3n¤)�f̚3o��%�V�Z�næ-�v�ڳ���#�N�:s�¥+���&���td"��G!�Qr�ν��<{�ꇟ~�폿�y��ç����  @ᳳ욑�#�G����k۶mg۶������/�s=_��7���nq����w����q����z����2�C
t(�5ԡ����@$RP��P� !F�/PN�ic���S�9dcft�Ժ��1C3���j�Z��J0�k0��0N��`��¸P0.*0E~K�-F�؜u\�t�I����R"E���B+����*�G�a� L�郰� ��i�0}���A�6� ��l:+��P�Q�I �
E=���wq�@��9聳��Y�C4�ayW`w��Q�힣B�4A�txЯC��J��9��yR�駹�{6�ƿ��>�� �Ы   x%̱Aa �/?  �@z��@0�ރ2I�cE�ut���Ɇܩ� ~]I
Oƛ�.| ˿!O��E1Q�KĆ?^O�k�C
U&��d.Y\��
E5L�s�uÖ�o���n   `m'{�*��Q۶m�6j۶m۶m[{�����q��[�s�3��7���:~����!��=� 0���p%�r���wB!��0\/���i��"u����O0	� ,k��
�hnZ�V�
���X�)ՑN��.�yh�nB��Ч��Ĵg�0+�۶6�6Ƕ�vߞݎ�{7�J�cG���ɱ�	�r�n��k{�{Zy�{���G����?(P&0!���m��v{��þ
f6
��	^��qչ6�h�"o�g�/C�C�B���}���;��##U"�H�H�������(�����"���a��Tq]|���	-��da�p^x%�Q���L<*>��K@�$�R/�����re���r]��<^^!���O�2'�Oz�5H�����8�:����`�v�3๒E�*5�i�e�rB9�Ț�������C�3է��{WXK�`U'�Z��J���d8�w<��arڜs�}���F������/�����I���1`Y!�$Z����S؃%�w��7��Nu�S'���f)$� �(�F�2h�_��l��&e:�V��_��>P7�!E���+2���(;,���,���,��Y�)��4����^z�ۥ��b*�f����H<i�(�7{�������"��cU�޵ܵj/~Z���g��T�C��͛i����_�V���Ynٟ�@��L-?����.�P�	�j�\VO�ټ�i+�LNNz��2垚�r���9%.0�UH)���[eJ����*���I&��F
�0��F�Bq�j���?}�t�NyF�uJ�e0�3�aYK߭[��Tژ���-W�D�a?u�����:�+�`J+K��� �M3�ɮ�X�A�Ed�}G����gô�N�#�1��9GZ���L8�>V{�(�P�
�R6R)���~��|�đG8��� lk~^�n �
��h�+��Қ́0Tı�"�Ֆ�%�2���n�K�e��ӭu�֭)-��5��f�z�Z��Z:o�tl=�]�=��}ۥ�]I�������@��	���k�n���h{�.:V�Z*�t�����ң��Uq`Vt��zX$����
�V]^�6�E���xQ6�}&j��ݸ�5�5hY\4QOO&�Ykw?��G�b(��(Ɔ�����Y0�@,&[�ša�&b��P]�K��`�TN�؄1��e*6H���&喼�6�(�8P�x@��\X�uAP�F����	���݄�6��1d�-�R�(S��ʛ���U6to�I�.5�y�
���-a�
PTFE�[h���	VҢ_p��E5���˚r��>|��7NA��xz�m���i�,i���߀�n^��v����l|�e�訡��?W�Z���1��ַ̾>�<`���:"��� �H?Sŏ�e�
��7��K>��(�gP��m�|E�������O�g�3��������|!�p���'Mq�����@ªI䔳M9�	��`t�
�zp�Y�)qK9{��^]]�y�qB%��:�0T�#|J���P��fOO�b��{sst������	|�z���J�>~��J6+�g����7�u�H�I+�$X�]���d��wO#���^4��S� �>&\��b����ɓ���А$������An}�[+/�,�u8
���3?�(����S�F\2�Z��%¡f06��벱�����:r��Nr���嘵��l�_.�Ѩ׿x�-@)ա�=����߮�����������L�O��M�;� W2%{0ԓ"��QX8���G�p���3+ y��X,������(����ttP��F�I�b'u�TY�L�(u�G+�P����)�^�N$��.
j�˘�Il�d���f�:��Gu���=(ղ��s����q^�����W�����Y�����׍�K�
�Ȯ6<��|�7���|��!Lt.+��y��?�> �N������O��T�.s!��&����.�C����].ϩ��d�,�Q�{�v��P
y)�0���A���67��� |��8�Y���d�'
����G@P��)���g9��^�k�
;�����׮a�U;+��U�ކ"�N*���t*�+����^�yK���W�S�;F��u�N�.��Nt�LD�L����m�f��0�i�t�%��ѣs�^QR'�R�G�%��5Zj�v�U��V�b�A��C:�������h�+�2Es$�@G����⒕o���BM�j�����=�hT?{#
��p������"�?�����+峐,U��H'��J����ˀ�	a��O�Ȧ�w`�"�����$c���0�� ���)�é�v�_>���t:lV�@+���B>B6���ŋ<��(xﾂgb�}aCE�  ����Yd+�aT�{۫�뒴�bu{��Z__O��?�0�o��8-
(!8�A[%��Ă3���ؽ!����T���kmE�߲ࡅ�?^(a�łK٣���pxk{�(˝���ZB�����M��o�� ��Bh�#��`����!�v��YSWs�\�f:�4]�)HNAd���P��D�(��cZt����\�1�tlyq���z�w*����-���cJ���'?�ɋ�kzz�UT���P�^]A����d��h�<+�Ɯ�����g/5��Uz�x��a��5A��<�a��5��V/�\'�o!�/V��W��S����x�hy�/�J]gA�Mx���gv�꞉kKʬh��2M?��`�d��" R�����Xi��Tܦ����i}C#���:izsT�=��޳__��_i�Q�NB�A꿯O !w�3���Q
��E���I���F�U�w(3A��8��#�k:}��N�|8���6O���B�t:]���p��K�2$� ��R4ed�ˁo�QT��e���Gn�Ś����#�Z���o����E(;�{9��������E
֒��O�k�-�^��l��7pn0_���F��8EA������k�@�
�P�8�e��z�����<\��O D�(F�(�[��ރ�t �詌&_�=�{RgYM"au�W��8O;�!p�m��^?��Q9�s�9A�l���ٛ�]泜[oFj�m1�w�ǻ�`�

M�)�:הI���d�� R�g�=]�Sx�����8ݒI�n{U�6���gpw�NqU����Td�XF
����m�s�6d��-��v�-������%�~���#��E�/�So��?���ȩ�)�m�s���߄��6B��n��42�jeu%M{�o4��a��k��-8έ�	��CN�0���_Luv�[��x+Q({�Q	��=H@�,������)����v(�P�xj�b8D�1e00ˌ������d5$ط�=�!����k��4�=���.�މ	���<��߻VV��R��}�~�ԓ�5"L&Ԋ�d�%�����8c�Q��}7?�:�k�M(�ۅ��i�7��:H�18<v�����F��r^�Ӹ���@�/�FC�h�
���U���Xi�����_����]�����X�+z���������qM��ÁD�����2�,���n��L��xK�ڹ� n_�ꈼ"��������"q���<�<�h�e�I���Y�*�Jo�`E� Ed0g�ጉU���W؛>��������z6����6��lVj��bH�q�QX�e���������JÔ$��%M\M�%r���{��F�l+��*�K�-����g n�X��4�C��QI� s��YS���A����%P}7�QV������xl<O�=�`��*�ͳ��q�X�$& ���kd �+j�Ԕ��H��
�3���m���#9? {E����zC7&�z�F,�S�w���l"���3:�B�6Yhv�'5:HY����b����#L��
��fa�'0a_+��l�8<>>Ϋ8000�U��@������.�T.��u�E��|{Y>4=������z�AO__�>�#`p�4�Cl�${c�f
�O�?�C����$�ZI�n���C��pjko�)���au
�'c��̵~���ff�\����u�NBV��� �A��y��.��w���.����\�;��|e��>�D3O��o9�<�䆰1�q|�2}��TMu�ߺ�$r�� >����چGz(�A�iA&�9+Ii05Џ'��&i�3��{h� ��CN��"-�s�C��
Gb,��Z��?�y�lww�J��r�B�
G�,�}Mmqd܅K* �-��5#R!��c�.'@u��]�o�.���"�Ŏ�����K��V�j� S��|�uX�%Z��P�F$����7��7�y(g�J�lZ�~�����O� �C&��^-�Բ�{(�c��6m^��iZ6���e7˙�M�Z�Ы�b�l�u�,�B�7��r��k�P�#N���at��겇�)�vA!�:���b�W7�n��|� �7����	F���-�t�a�8�MC���L7D;�fnmM���b�]��Y�N�T%_����_G!���t����6�N<~c����~vVw�Į�W�x��I��5�#1����4��G���{� j��I���fYXZB��}�U��9襵7n��M�����X�dq/��n��pa��e0��N�����s��A/!�ӳgnx�9�%ώax�	��o��Uס\����]����t��!��H˘�;���Lz�ˇ��x������d���1�=]R�Wu{J�SS	njiijzj�����Y�����D��?�{!d��O�۷�)C?���y��ލ�.\4�v��G��ս���V߿}��!z\+�Y��!�o��ъ8 ����Άp�f�!�����|�5�0I����������f2�e���t�h��	��4h�6|�1j��Pa.֭��?^���/_L����YQ�6���j�
���T05}�i��Y�ʓz�1e��A����z3�b1���J���������ɍ�������s=M�>�\v����_���jnv~���9Q���I�?x�x���ke��r��߰Wc)P�����SB��	��=��կi���S�7N��������J�V��Caz��Π�WR=�S�q4����Vke�1�^�*����X2���3f<
�?HT3D^�(g�b�:cܾm��jB����V�lx��<g�R�������Ɵ;���r9KZ�%��ס*���*ξ�H~X�z
���
��0�G�¹so~�J�p�G�l���׾v��c+]f|<s�O%UU%�'�NU�0v֪���ul,f�ټ��f�|pq�؞<Ζ�Ɣ�6Ɯ���q��ƴ�rm��:U�Q띢Ь�6Rߍ&�����wd�H���SCI�C�d��������Zkʇ�Xkz�ƠWn�F�d��8�7�v��P�'��0
"����/�ElU���Rߴ�r�N��+r�����9
u�(NN�f�Ws(@�`�z��7,~4�n[wa��dc�d�O��L� P�@j-�Ee:��]�N�c����T~������%P�KA�~�c%E�n�M<��\�e!_�#.0a�XR`(e�
ʲ�(�F��fqZ��x
�9l!٧�����
����Rʱ��_η����n�c�ţh([�T�|�}d��>7S�׎�����(�Da�Mn��E!#�^�\
���WF!=(�����|a7[�p����<F�,<~�����{�� !#Ep��\�fr�!��;QaM7(�6��o�������+
�D�
Q�ݬun���2�v6�2�Qs9a�bK�?`�E��B�G�Kw�.ɗ�]�<��MzcO�?��&I�M��H#�Z��a���H��vt` y�PXĪ`��lc��+Ef���n;u�� OR-g������^zi X�@���lN�;�TJ�y>��C$d���Τ#����k�tw��Ī���ƍ��?��
w��&��aZ�W�����p�Ą86f�9pd\�88+-�k[*i�UןK�:�D��; dA�vle�/l/��l����s�TI��+Y��	�"6E�w�+�9c{���9�b���ȝ۫�.\$ԩQ�(^$wk�������W%]�tM:���?�ݛ���0wK�����7o�>n�?@("!/$�-`*�LUT��D��`7����?�x�?;�����X_�O�z��`O�� B�|�U�����q�]]��M�&K[�:tv�c>�Գ�w�=�����_W��tjc}uu�ݟ)��e:���;q�����Z-6��$�����+��������Kn��Ռ),6� ���__�F��G�-n�i��u�J_�����X.7Vz��=��y�$��)����l���3�5�o���w��x
��^����g��1�[��_�ņ.���W�a5���ݝ�����O����vro�-����:�.��Ձ��?�+�
`Qf�������7׶?��`�ɖ.puЎ'x&@a'=���e�K[���I���6�<����ǏV�� �a���,���1�B%�]�F�(�����m��·/�8M��8�*_ڂ��f�n���̠�ܯ�|6�&�� ��
;[���n�G���!��Ga�~Pl�G2�W[��Ex*r��}+p��I ��	�F��ӻ���$3��j:��z�DbH�/��P ����
L��������J�yi����v =��4`.����ң�G�f6��q�X��xl�s��4�,/�����5���>x�95�w��W/U�>_��(��$�W�U�4}���{�z�ҥ0�R��Yh��ư��R)��n
l5�������U�~2��g�;}};w��ݵ���4*�a�"�OL3Qd��W�O2k[_��~�jb��"��s#���ׯ6� ;���{�HA*
n(��V¬�2��h9�NOώ֣����
���� ��V��r����b(������Tv '׳#qm8��n%L"�Y 2��vC�����%31_"3�~�_z��y������8ޜ;NN����n�fH8���z�O�� u��
�tX	�������b�}���o��D/�g���6�L�Շ+�:bߎ�`xM����H7�(vJ�V�`�1&&�"�� �y�Y��i���SA�lp"�(�<uʩ��A)"��\�U� �\�x,I��8T�u���o1�����|�ƞ���^�=�˛���ӥ�U��y��������ӛ�3�9�|#b�У08߅�̣��L{��<�x���μ@�_�ڤ�:f��ƴu�(fe����~R�t��(LIF/V�^6`7ӫ�f��W�g$Il�-��OMM2:ה�.B���ߗ����e߻���q��쭶�yI���\�������xh��pob�P#��Ѹ����f"%�M("��V�+��u��	��A�Z{�Q�]:B;�{��jp[�Nq�;��ʂ����GvV��43�Y����2�T��,ck+33�N��-��`˶���nv�6�tU��$��ļN$+�x�.[� ��1�mA'����Ԓa�.���D�f�g$�,8]��pHP�xY��
Shf�
�/CgB-�������$��I"�]OW���@���%'EϬE/l�1/ ����j25=��p萺OM��UJM��4Q���:�b�n���EfnG�5a�̇y��@�t;6n��V�T��h*WnD|�rSPC�>���W�:r�������������j�� �L�j�s�1~	p�7��8�ve9j
�<��s��dN�单�Ƌ�엽��$Ŭ1������w�Y�	�� �>�Җ��5������"�L[�7LR�p�@����OM�l��x��s��ʗ����L�ɰ�?~�[��h2���~H>vӄ6Uz�e �����pO�1E� �yt!��$5�4���m���A
�����+_��+�� ���i�+_��uoy�	����1&�e����1+x��_޸�ڽ���B3D�Bu�� l���6-1)��E�� %��9��� �ӏ� ~}f�\B�����ۢ33���UM�Z�rx1b��+e�d
��o�����glvO"�+��S#�fV�C,}��}��ę3��Y��	�d&"����I`回�y�;������Q�n*�Wd��8__f�-=�n=j��i�A5)�!$v�������\����"��ܵ��+	�� V��,J6��R��6G*�V�x�����~��x"���u��0 �~��9�=a�p�Z��殧3O��h(
�����J&��HPk��$R��=�|j^����J�y��e����/�6WBR�0�ս�Mqc1�lf�XS���7n�s3F>"���|�ƍ���¾Nܧ�{?�&�����������!���W*܅$�~�8�^�v�OQ���3S���<p~�̹�i�/�Zj[̳N��;��v������XBS��#A3q��J,N�\dc6��m�t���!|Xh�!��`��`/���������@K/,N���%ۃ#۰��U�W��D �tX/�?�&L���#?PC��N,�f����Z�+%��Y��B��˥1��N��23�h���L�x�w�ҩ��� �y�wc�C�;�������0��}E��]���/�}\ؐ���i��K|�,��U�}�L�`!��E��S��h�
J�DQ�!+Tp'S��eʬq�T*Inv	�J� 	�T�v*�&�T*�j�aD������[�8���б(%��?�����׀���5|E�Dۖt�2�`�60�6
d<�di��jD��La羵Z$jS詒��[K>�mӍ|�
c	���3C�mee2�r!��`�_����젙�y�y�����mbBRDA�^�i�*��#�\Qc0%�V4�duko�����s?0VԎ}��O"!f�X�z��q4���(gA{�;х��e�Ȟ����[�|�]��=�͹�+�>2(��W��{�b"[����w��_x���[��U!����W�@�#�7p��3�<��2����=�6-��F>o��#���ݍ@��D١
$���)��xx�@��H-��~���u�2d4�#�H?�Y�jo�t���5f�_��9�Va����U�Hj���T;dS���?ą�咡cH��Z�gc.���u����M��@�{X��c��7�EM�����B!\%��g��$����J��J&c�\�bIio�$d!`��Ӑ��ᓷZEm�
b,�d.-i��E�!�N��P�d���oƪ����I*aF0!rTh���h�2�77�Z��F؝�� ]��c�0�P'�<f�р���Q��:����}�a�k<�|���vLN� ��%�>S�o)�+X�����`�P�B�R�H��P~����P�יw�NMI�V$/1��In]R-v !���:a
�#���i؍V o�]|����������:��s�t�^�`��Dv���Q ���	�(��}�.re�b+�K���!�&���(}�F���Қ��J^d��rR&S�����>
r��8snw.<��V�_,�;|�S�<�c���Yh��[p��0/��
(������WzP�M�@B�``�9(�:�ZA�t���X�F��U�>T�|���iY�-����˪9v��Ue�|%v(�a���j����a�c���s�a�ؘjO���6c�1*G��B�����f�@Z� �<���q�UE���H�"�
o �Wl ͔N�T��#rӪǟ ��1B�ҩ�F1��H��p�b9���,H�Y64�m$ˮ?^'�#uJ�,FQ��6P���LM��G�e���t�CF�ky4�j�9p�[%+.��
���׉���"�Z"�ZSVmf��fu���}���^�hv8�n��&&�����P��>�
s�[g���*�,��3�ߨ#7u�H̸�������"LB*WT_OO��(��5
�EP����{p�i����3�9�R�x��?�pGү!�����)���(�v������>���?�����?��0A덭�*g�K��lMaT��i��*�4S2A�����c0	!�4"�mN��7;���	Z�>�B�1���ӭ����b
�;A1�./���٠��|6�8���zˉb��˗@�j5�І�ò^;���u@Q*�advV [���]�� ��)^u ؠR��ؕ�ӱ�Xra�i���L�^�Z�i�vA�x��=8�'<Q��FU�#�a>��޽o�jf!E�C4Ů2�`"�E�Ȳ�}���8��H��;e��[�Dm-g�"�۷o��a��@@��/^���f��=W$���@��n�M�a5֨�7�ac���ù�����̓��<��.9����ɤ�ܱ��
���W�Cɽ�����r4�����ޟ_�Tb}p��3���Vl���[j�6=�c�z��-�K�9�[���I���꿦�������G���W�ÿ��R1<������Haj�;>�mc\��i����s�����鳧_��^e��G����3���Hx����Ϻ^�>w��˅m��b�řs܄��v�J9J&%�k��j�f^�K�ݼ{��O�;�S�_���?}��O�ϙTjF�ЅaN"�|wf}�[H�^�����*���}�݂m�i��p1Z�8��aDu�����
�x��1�z�5+Q�W��Iu�+q��3B�}�ƒ!f~ӉT���E��F�ώ�&�'�O���d��+a��x\wka��Mg7`��hh'Ohj9gZ�N�U����3}�^�m�	�N��r~P	P��X"��(|Zۏ���n����d*���&$@���i� ��N��̒�BaO��J�J�Z.P�9er��!�<a�NМ�ʾ@�i#�����{�l��N�֥���m�S�r��>+{��`<<R�}b]OC�tx���,�U��B��E ����x'����(�	��6�*��������]���xFW��8�`o�^�����^�E"90q�q���
B�R���Մ۽Q��!8���p�+{aci�q�Ι��/^U$��J���n�6�A��e+�2[Y�:�k���$��;1�m�	h��n���H&��do2ѣIwz��
!�A)�j�����CZ��3��֯�5a������ׯ����57K������b�Ѩ��Gi�������'_4���u��_jJ��<�
Lv�N���_�,~�'�����/��A��楄
� �W_{����Q�?����x[��z�Fer��-��_}uQ[m�:�S
Hi���FW+큭���l�v��6=9f[��ꗾ"�E�Գ�J�LY������;�ğ>
3��S�.Μ?w��/ \�ҕ�c�56Y����I6KB��9�v��z4��ٳך=#�Η�T���]WrI@0S�ówl/��-��ͻp9U�
������;�C�5�^(���gQ�xT57��R�!�'PVo��Vex�<�����Q��p�e=_n(V�C��[>�n:�s@a� ��d���í�b��~��f�e/1�n7�a��Ί�P�6��H<�3J�_�H
F��0Mfҩ���r>��l��W��)6(�����6#*��#�P��<�d�7G�\>�~](��6��==>�sZE�U��ǧJ��2���^�tFF7�l���8��P�l2����vo�ޕU,Ξ��>�ITT�T���ɳ�l�,8
 z0v��@��bi$c[O֒����;���3{�NS�,�]13f"S){P�Fz��'	 u��F�dH�Kr����+��3�B������/�ɖ�4h���B�_~����C/�p�t����^ΦaӔJ��1�F���+0<�p���FC����n��;oU�Ϝ�o�`����P���E��Z,�zP�镊^�W�ٟ��a�l�z�4S
@X;�~�e�p�z��bNɗ>Z��R�h�}�x��� ��f� nW��jԉ��u�.�H�V%����6�<R��V��&m:!<�Jf`RL��ցvM��9�I�V9肓�G���w�bC���nD
V�j����r����߈�t^�y�&��e����^祖��H����?�n��J(�Cl�	*rS�bd@6���u�h$6�j�1�<X����A&�9:n����ӽ2�C(bH"���O�A��a�7m$��01�_�בR�]c�92��v�������ٕ�l�����][�f�5��O2G�(i=�f/T�	�H�e;�x0�{�"IU��_�_;�0�d���2[�m�<.����~���u��V��Hb���>��E,¡0k1���0$O�G*'�Z&l2H�d(�?VO�����wB�y�
�X�;@C����kf�b��y�J�w
�=.� ��IK���5�]ΎnDB������K�L�&V*bii��*\Z��Rߤ����!G>Z�H��X�T*-�"�x��o�?CHǏ��`�a}��kv��7�+n�%�U����v�W�K�_p�N��
�F&Ӈe&&��L��'$���Ĕ��JvE�^��Y![�V?|"�rG�Y㘫�7)���gyE)�#��q�5�G�!��"<؟��s*�~*G��xr|�N3�N�چF���	�Dt=�Ye��;�}h��A�b
i��*�V��V�����n���;G�7�{;�H:+2�<����#/��a��G�NF�g>jTR��. �W{�v�=m��ȸ��0���r��j�k=fO�.���Ό�68@�vhn���c��0P�գ�p�:��i1�FFB&v����@��j��3W�Jx���i��o&��K�T*����En}��V�N�
M~��e&���d�҈x�j�[F�����{�U�?�����u�l��f�UǆA��NO����۩r�ɩl��iV6_X$�#
���x�k�;�'��\n�.$��YV�bT	th����O��Z�̋�@��5n~����h��NE=�p���+b�y�\y�� ـ�b�;�0nz�M'b�Ɯm?%Z}���)FLD1��}��\0=N�zz��-����}����{�}�$^0�S9̀�#H�.�y8JcV�S�.^6W����%�5������	٫ c�-]'��k�O����M����B�G2F1�#y�n+���'��Ik�I�y�D-�d��G�����p)~t���d�u��c�����\Nx�jX1��ͣ�?f{�)�6l6mz	�0���:(���'�����n4q�'�0PbY/� �-��|~h��`,�+�~��h�:��O69���r�jmFM� f�J�O�>�d�:l�2a���嚐�#��S�:�p�:�FF2CSzk4�O	;�)-��L�C�����ˀ.4�#B�4�֪�y�7$v�g�6K�7�l6M��A�����v
���N��#�@gR�3�r-�D�UU=��7)UU�~�B$I��!K-�P��ۄ�_W�����~�A���ή�33��]�G Cf����RO6˼)tj��řW.������f鷒Z9����P��Q������p���(U�Δ��� 	�I�|���/�����~�h
��J5����r(g�eԴ\�̿�X(�ص������?��o�]�/�',-�⧕e��_�v~4�0y~`����}-42:���H(���_�ʗ%�"H� A� 	"�lb���Xә��A3R��9��rD�Y����t���v��Dg�"�dj���� ��$�ж���h�]�-�����]X\�Hq��?�3?������[J�
����Z���TȨ&���&V�Z����;����r��t?�A��8�r|�w���ӽ���z=LTa�`���=A��{��jj0�����f�W�1�.�9���1u�G`�ho4�I/CQ��f�J:���#�6�A |�M�
K�B� I{{�t"5��@`y�2�ǩf��?�}T{�����rX��D�	)t��fC�����~\0
��W'0���j12-d&zf&���L{�j�z�
՚o�Ή�/
Z�:����ʲ��M��"�A��; g_�pya�0�+|V/U�N�u��^ �pA9Pg�N�sl�"!�l�y).�K�G�E/��a�,9hf�rDN垑89���76=�m�=M�gBvv����S3��7�H��n�ULZ�Y�D�Ҹ�,\��(䥗4~�"B/��>~��!m�-�)'Kd\,�=�>y_��nw>�6[�0>�1�Z�� Ks�����|�6�/���=?���oG�Q2N�D���K�%q/D�G���]]3pGa���+��>���u��\ aL����m�s􃵡�5P���t�:��w�\���Z4e��,���	���f�?���Xl�L�m��q��b����P�&��0���<�"/j��^hs]�͈4R����5i�?�c%�n7��Sդ��M�wk�$�M!
���\,�z9o0�m�X��H=[��
�V�6N�Uy�E�t�
m�bQ,�|�\V�FN�m�RN�m|=;wM��e	��6���r6����-�bQW,ł������P�J>˛X!�l��9	ɘ
�A�*�
fE-��<(������VD+(V��4M�	��Eb�VU��/K�kf�
�+2�X�� P��B��Ku^�W+�(W��%��WK��b%��5B�J�ɒk�5I�"��ϛhjp��"Elv�zլR���"Ż��"�
q�I�x���o������=�q���
آK:���-���p�ㄥ���u��U"��Xi�jWx^�@I�y�n�,@WXT��y�M�������X/�Th�ub�Ee�
;����h�_�@��t[�To4ꥢ�JhS;�~�Z�%��ܴޑej�s��SeT^�ծ�gQ����9������$����i(��@�|ފ�A�^D��r  #j`�/�	'�Q�A��rCԪ����%��pR�:2�{���}7�~��NX�[��%O��׻�]��U>?p��H}¡&--��x�߸�9��S�5@�9Fs9�UϤؾ����V�Hf�FCGYlF����jB=�'�aG?��J�d�|;%^��g�';�B��'ЕU�����CV�ߺ�H©E*�ρ
1)�b
?�V�`^����ގ��z!}bL�j^�������ZT��H7Uhm��l�bOX�S��Q�*i΢�#;����ل�1�JR�S���yL�Fi�j�0'<�9�w
�/�emyV�UY�6�P;�#�h��8�N�;�s�|.���n�v����>�Gy��){��%^��y���}����>�o�ƾ�'��_l#l4�m"�lsd���!�T�VmT{�����vQ�M�m/
�T^ɮK�2z�g��&���W�8��-�T��|Z
D/vu��t���[o�ݓ?�Y�2��1ftz&z q��;:
!�O7��zĭ�L�+�G��}6���H
�9��ބ����G�xL�p\G����'=�v�O+�Q\>3����N"333333sb:f��13�fZ��T�t���jz����� ׾��N��)k]7���/[����u^/l���^/Z0��e�z��uE���{
n��C�p��Z��u������\ͭ��<o�����u~��)!�o��Ԣ�Z�-��+�X R�K��߹=~�"�4zkF�ؖ�8�i$���������'�y-�)	9����]@�j��z,K��+<�3��GS���n���e꒬������_,Rn�A.�����N���9�^Gjr{zb�U5C�_i��4^4f��X���N%��s=�U˵J��Fk�^�Q[�U۴]��[G�M����:Cg�,��st�.�e�\W�J]��u�n�M�U��vݡ�t����z@�!=�����ѳzK��=������������k���Ak�xP���$�Gy�lPy.�~��&�b������"ܺ�����R�րFj��-m
��թS��{�G��ܝz�$ؽr{r�-�U��v3 ���!�WPu���d���,R�^�-���,d��2�/�<w��g`�΍���>�iVtu�͊]�r{��۷!��Y���s�A�ƣ-bV��u9<݆��]M���ݞ�?ad/5�!�p��iρ淸=�[��}�b�R���0��r��Z`�����e#�c�J(V���s�c-gI���)�j��t�n�L7�Kr�V��!��o[��iI釕���yťd��G���P.!��n�|�&D^˻��v�Z�ԽǶ�~O����C8�L-,����G���W�h4K<M:�,p��opDQ!���&�O&
����B��7�
��-�Kn@K�W�G%���D�y�b����qk�1j#w��7��Lr&��r�6�������XmQ���
������������1.�ڎ�V%#��E����2��&&i!��N�V�}"y�sc���W/�PP^�d����!��n�������BR�oZE�i`u��O�ZJ/�뚭���so�.��[%kܢY�%+��zU��;�����{��p�N\{�Z�>v��P�e�7���s�W�u_�����ne���`Cխ,�Z��y�z��-x$�&�E�5�I�V�2l�U�$�^U��Կ �ϩ~��7K��k9��U�2��^�׸��叐�!�<\�}L��nǌ�:��τ���n�ʺ}�ݳ|����q;!S	���f�9]w�W�������1�!��~_�f��=�=�Og�1�2��y_M���֛<F!�꭮��eR����q�J�h����d�p���$9ۀ��Fr� ��t�Ö�1�L4�C�ie����"�~��'{�1�l��7.ݓY�ަL��`I�ܼg��q�rg�\�{�6u�W;T�?F���L�^�ۭWa�	����8Y�,�`�-9Y�p�H�Hm;�i@'i��o���
חn�󑼮Z^w`w��#�)^ճj��lq�� |Ow�������z`�νm��|����\8埀���叜�٣������WH|�m�z>�]��j��f���~���0�9LX$ �`��YM߷q��I���1��:�}�-��f0��+�(w+f�ќ%jC��������j����?p�ڹ��k��H~���,Б�I�����,���������J`�gh���D��wc���WC����;�H����]�Hޅ]�C=ְ���֎��;*���։p��؟;x�Q���bZ�~̷c�V3�g�iưÌ7��c&�)���7�~>)e&S��`�R��I|NI�f֔�a�P	�EI�GI;��͑�}}NG��;|l�����	g����O|䇱�=�Ȳ��+>�2�X�[{�xɺ���� �����U�D���H<�����<����i�d7�' �������ܕ˹�ʹ�!箎���z�B�q����14b�Z�w���Em�C���j��U$������c���d^�_ ~y? �J������`���o-���W���k������\NC������)30a��<0�#�ֿ
�������|�hc~  x��l	���>�橶m�m�.�Uz�m۶m۶m�=����e6Y<� B�����Z�����#- Ҿzw��X1
��C����<��*��zm��Û���� pA��c��B<!%!=����в�8�\K�Ӹ�1<���^�[x�|�h�1�w0��Ld*�gsX�V��
N�i8g�L���p5���?����ƶ;���}�m۶��FX۶m�6bl����u����?���k&7���=3�_PA%UTSC#-��_V����و�V�UZ�U[��Z��[�5j��j��k�j�k��U�Zթ^
�a�hKWY�,�P�ܻm��&ͯ��ݓ�n4���:D��t/Y����F�UXc�b-��z',�2Z4sZ��Yk��8
;�j��˜&"-Ҥ�E��ENSpM)�4��p��];5i{�b͌(��~ #��L�TC)D]E
```

---

## File: GeistVF.woff
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/fonts/GeistVF.woff`

```javascript
wOFF    �    �                        GDEF  �  �  �k@��GPOS  ��  �  >���GSUB  ��  �  
����g�*���+��'�^U�)xD�G8��I|>?��e�����?����	��Q�ga�Iq�|��)�I��z����+ԤA���gP�x5�����u��/��a��B�,>
�� ��DW\1 M���2��df?M��lkV���B��Kǹ��&�d���;�P_}}��x���p�}x��'�¬][�v�P��S�1*η���Em!Ș?��߄( {|�5+;�X���Ǜb�Z���Kf�-�G����{F��y샹�������e?�.���-���ۮ��8nlm�����ő�g�,�Zc*|~)�X��5��ZU�4<�г���(����=$���#h2ɑ�t���/~��{�u߾��ފǏ=�س�m��~��=`�X{fO/�w�d��I�`XN����|��Md�ÿ`-mGoZ`��D�/�����k	����@/�?@��Y̓���9@|�J�cS�
��T�4ܢ��q>	w���𞪞)���o�|n�8�c<N�<�����������&�~��f�1�|ԙ�0��4����-(�fA��2������+��	����o8�Y�]�Dt.�i���wf嶲*�Y����捏v	9�.�p�⾂�=P��-��>M4�#II���$	|��\rc���oތcU�<m�m&�1�d��&��U{���Q}[P�g�֌���N�=��DX�.;���
j[v�j�YC55�YYCNyGȳv���ۚ'�nt7�X[{c��F�\���U`���BM��=���RP���Q�ohp?�(��+���?A����2�וC�4�k�%SR`��t��;&�;o�e��U�i^*l�؎3�y,��1�p0�x�b��.�d���-�����l�z2.5��-������+#�����#�r.���|]���{�=�8��d(����AK�#�ɕ��2�vYs�_N�Iju�W?�
��)Mu��Ņ�z=%Q|m-+,*�>�{X���k��T�|���/�ӵ�l=�'�TK�&Uy�h��M��b_�"u�X.�"�1W��]�mӥ7��4�ji��r7T�����i��Yeu�ں��Ԓ-U!����Vg|^�)s�^�Y���a��/�&��[bV�#
ꭅ��G��S��S�30*�X���9�G *��pH�O��R����x����l�Q�Ȗ-�/M:�#:�5.�ƀ��;�I�4j�-΢��[o�t&�z��.pƖ����gS�ikKK{scABI5Bk&W��K���J'��<4Ѣ��ą��x�VA���>�2��^V\:�9�[��>���B)a�,O��9���̇Z�^<�l�Y������ROw���SzmCH�.7zC��tuy�OZ<P�L�eH^���
��S�����|Q���_���5�|�е���r_W��6B��������P��+rArK���0%D�YM����*a	Ȏ
	ח,
G9��5 v�q;�}����]�K���) @���V� �Ej
��������v�\�D�2�)�ei!.���W��k[�z�ﱃ����Sl[$�s�}�-�Տu?�HKv�ڦ�:�ko�������TZD6%�'
�������a��Sp>�9��P�'�?R�^��
���.P�3��|z��Op>9�.?�Eɏq>���8Gs?/�6��%��¨���zfij��$�+ J���_*<l���a�:�B�n�S�c�F�d���m��h��9����!;�o���kϵU$�JL�ʷ!צ���U��|�z��
KyP�~g��5�E�(nI�#�ZdXUj��ֹ:�n|:�<U�+�c#�b�LM�}�д�^���*�9m�����qU�)7��C��+�YG�n�a�VӊW�'R���,�@N΀����,�".Α�����bl&1&쵻��;��ZZ���!�④&��/��}gSA��jr��eq�����|��k���H7���Yy���������ty�4,'�ɹ(��J�r�dK}���P��V�	��4L�����Σ8ÓM�,��y�~ן��o�n�\����Ⲙ�Ҵ����@)b�	�7ϝ��No),lM�h��~��/3۟�E�'�v��Co�_���z�~�����ėz�� ��&6�B$Jwo�)To�教#�>�2��'�T�wݲ=?�7�a���VQ�H���X�lhp⺍%o;��߹t�����t�����E�۳��-vwuֵv�Y����Or)�qW�ao��	T�r܉�wH�O�u��y�\KrJP���J�瓛ո�攪���J�g8��<H����h`iӈd���W�hC����Ҧ𐐥A��/�X�%Q�O1�+:�"cCBBt��%����m���e��������tl P/�%���ޢ�O�:R��\Q!�B2����W:�﫸,�	r^t�E$Ha�0˷�V�#*'�2���|n|�Y��eiQ~�kYSV�P~�@YNk����${<"������P|E�6!!/ϳ:�tGM͎ҬdA�BAI��lwRwcc7��]Gސ��� j|�G�O�+�&B��_x^!?��i8��Ǹ��!��g���E&Ȑ������AM��o"����Fa@�&��X/��0�t�ٲA������2�S�唹����K�7����BW��J|U������\D�Ŧ��@m�r���:��f���j���H��Z� �/���,��
[$UY\KV�q���<�Dr��9�
j�2	
~��ύH�H �Yl	��ٙzo�?�Ŵ�?��G{�T���)nv
�Z�j��aul���$פ�է'''�-�<���z�R�˻�B�2<��T�չ��Q5 d�5%�*N{��Ƭ��ڛ�|�������o�!�%����?�U`���('s����{W�T_F\��F�V�@���J5���\Mb���O�x(����eNb�+������^��|����Y���Į�~�%�r���Ґ6{��.�F|����xgnҕVݲ:�z9^�+9��ׁ*��U�	�'��姶�q�&߮�Ǹ��Sq��Q�B��g᠂��zfR�"�?p��1Et��G��a�����2�������n_۾�G���f��W����;��#�&k��d�b�* T�4����O�iU�)������a�&$ۺ͢�E�i�X�]��>s����^��믋���|S�/Y_5�M@3=�L�,:�
W���z���w�\`u�B�3�?���I	��=��,��1N�`
'�Z�R~�˟��%?���p˗ձ_^���$����a%����?�T\Y�yŕ�K�X�Ә�e���s�qL�*�M5�G�K��%���s%��T��[�OJ>��d���T���|���S���9�Ǳ
�K�����3[�;�h��$#������u�
���/0���(��*ͪ��u:����IItzgv䖺m�V�ڼ�i+�Ѵ��r\��I\�@������A%��|r����.%?�������8Z�4��
�K����*�)�g��� �\񷪂��[U"��9�3`&�ɼ	�S.���d���s2wV�g"��l�3`8�Qxo�{6A@�����y*�F.+b����{���e�;��#�������ϋ��ʿ!��* �g��w�E���\q?q�5�Ry~�y��*�y�G�wH��Q+���^�>�t�U�<�o����P�[.Ç���e�z��I�c��y�Y=o/�yH�na��I�N"#�Y���G�U�ő,��
l&ゥFS2�!�0�?�y[�^>0�e��f���ld|��mx��}��u:�>�ç��~�k�="��$�'}F5�Ǣ��D���
0��D�,�$�֤7��d�E���
��~����=�{�ر���^�[zu�d�CV�!뤟b� ��~��r�|��¡ŀ:�OTJK�W	�>��,�/��UF�����_�jc�1���D-�&�ba��$W�<�Wg��+�ZIH!�ނ�� ��^XB=~�h\��rU�zP@��57f$ dF`��K'�d�R��V1�Vr}��O�l�e����Vk/]�*�
��|C��RINHTdfddV4�ߩ�9�-�7��5{H�i�(�����&�M��z�D��Td�9���"M��(NV��|�*���#Jo����4ќL>hNH��6��`D
h}���"|V���ܪ��:C�݀f�t��c� Y��HG��aC:�Q8K�2m��!Q~|O�9=v�ʇ�~��Wˋ�� ?���9uD��=��A��qkd�8�s������#.���>�m�鑑������gC���<J��׬9�,���pee�.�f������K��\x�#.����'Kxr)����w6�7V1~��,;a�w�,�_����m���2�0_�n�w��a�]��lS��LĩO�����3g`%��J�����1i�u.��u�����ҧd��8�Iz{I���C� ԉ6�Q�tc�NΣ�2l�%����izN��L)��i/�i
*�nQ��˸�*��`ߍڢZ�f��^���}�&��N�G��Q��6���#��hz�9���Jv�.E�jQ��g��A���'n�h˷[���y�Y�)գ�9D���[H.F��mu�
V3v��z����1�9�j��O��Q��-@������uQ�B>�7�F��vz��¥�?�MT`[e�����
3U
�������_����a�
jw��yӬ��������r_�H����~4>�{�|e>@;)%�Jg��z�h]�9+EY�D퟼ϛ�������s���6�u`m����]���4��ȷ }��<��8[5����?���S�)By���#�&�Ɩ`��������]�w��a�سaCO^OOz�MMT˿������8��
q,��,�M��ٷ��n{c6�d5ۘ�n=z4�ek(>��~�S3���lWT�}�s*
�E�PO�5zr,�C���ɞ�B���y�� CV�$����G]Ca�2�&nyD���?�1zn�=z�"������E�=_�J�1*fF�"��fwޛNl�0 �'�N�,��7�ٖA_�Uz6�
ͦ/��0��Q2����L�(�
f��z�n���k.��g�������WQSS�n���{ꭧ�z���₂b�I�i��p�90Щ�B�a�d�K�Z3F}e���<��D�sI/HCH'���|��������,)hra�U=�d��T�s�d�}�fU(m--�Ç�3,|d�ʠ�3��v8=��S���͛"��I9�M��c�r�
:�q��:�)[�q�hגUi��V.���Q|z�S��~X�yNN�37��L�7=�"�H={�,ɒ��0�i\.�{X�Z3� �4��,ZQ���\����,g�����,O+L1|[G&H��/�K5I6w�NX���Ԕ�)])�05nޤ���2�L�Rg�$|}+�����!�M���a���ҵ�:���R��wz��\ǿ3�^�Ǜ�Y�߁��Q.�FMs�d:����x#�-��6�%���)���qG�5�H;�������Bo�亩�Jإ���G���"�E�i���i����ZcSY�m��
h!�OJߏ@�'�0C<��˛�w<+�JD;
}Nn?>�>��T��c�����>�<��]��J�����䕈����#3��S�K�G�?��5���ς�����ؿ[��译ߞ��^�L�h�]2@�i`�I2�t�z�\	e(�O���zN��}��c�K++�z�ضTm��*�UP憲���
r�<Pv����4q�+��ն	���^t�2,cK���}@G��Y��S%!Ի(��jA���@����+v\/�\*�������������.�����s�W�{wά��-^c�}?hg˼�����)o޼�A�I�I'�U���{Ըu!-���M��$,�<��d6Kg�T�7�B�
�>�?d�ff?:Ht�j�u��kג�2e3����L<S��A+p�oy+�#�vcԴ��X
uV]~Z	_Sn���Y����04�"t���p�h�Sp��Pyy�
��T��N�;�a(��P�q����}%c�/망i
.��	5;���4�M���Dc�^���]o��,w�c�z�D8�g�L�L�ʑ�j%�y�f���ZR�Wֶ��)��9��b9�!��T�5$�0@��;jb}k�"OSe=���\EY�����ij"ۯRe��8��Z1 q�!�H�M"�2�+q�9�]��cC���;~7J�W8n3�{^,�{l	���k�R��3#:,v �]��M�����b����w���Pp���2�My�e-���}�3и
ӝ�˫��R���\>�
�Kⓓ����bRLJ<0L�Y�φ��j����p;�����$�y��0.j;G(pxy�":~�J#5��,��5(J��fs�؟��-��9�ߌmlz��v�{���l)7�ܟ	�-�RD�d����pZ��ф��M�#�I�cH47��DX��f��1]L��y�+e�S�O�u�2���qz��	�ك?��ɚN��唙��&��aس����/���'��r�Y���!�c�{{����O,��� k�����&x�Q����V�<�*W����zv�"��2^z�[��q�?�<�±iy��lT���A���F���o�������
�=K�PI|�N�ʔ�gy�=)'2���Ks�aF�!|�yX�lR�׶<\���ԁ����w#��D����p�<�:�o�>��E���ߘ|��.b��pQ���K�y\�g�o��=b�wu�L��8��<��˦����2eɺsy��0c|��UW]�������^b��PiK�S�3�2ǳK�j�**w/�=,�9B�{#�^܏@���
Z)[tx�},�H_��f�)8��u�hk��
5� ~,��2I�0I���h/���4�RT6|���7�r�^�F;���xX�1��ꪤ°C�};��%T*��[���o�k��Z�ڇ�
�J^�>�Q�����gٵ���\_E-�S����������̙�9�Ho�,�-]�@�����v7Z��޲F;I\�颧7-�i�­|؟᫯HV6�k�g���_�3{4��Ǘ�5ֿ���r(�U檶��|U�S�*�|\	��;(G�j]�ө�6t��+T�k��&���=ḧ�g�s.8���+f�Z���[۴�B��[�����,�
��;�Z�}�'+Wd�6:W�L�n]���a8
��;ݥnK��I�
{f:�L����!����E#�?�3��[&����J֌(����)[�l��@��ֺ�:��c��P,�	���b1t@|�	��PU�'h�	.�~t7�w���k[KJZ�^Z|>�t��
"�/���q�V��H��%p
;k�͘Z:��?���y��ĆYO���W�Ԟ].LG)-����h,/'�jj���D�:��ns8l��
�UZ��qB)�>��� ��2���L*B[�,FO�Ccs:X�
Q�l�+� Ph��uM�.�n h���_#�u�4..]����mpP��vg֝�}���_��8�&� �����G�K��� 2Q�B�(q /*��g����7z^�p
N/���K��\����z�g�KNͯS�_Y2�¬���AA�+�'�P������;�A� m��9��R0��[R�O��*���K�7�m1�_��7i��D{�į�3��ֲ��3��9��f�N����EE��0��ݪ#ڂ�YE:>(�������ҧs�`��_���b��jZ���Ƣ��*Գ�f1�3}oMpĘtb��u��J<������Y�M0j��{Bj�/GG�]Y]I4!���Y�����=�׬��CŨ��q�F�w�l��["H��X�k�]~���`���ǍƎ2/�{��H�]�i2u�
:>�Ni��$��%_th�f�l��b���Ny�-��62�j�R�;�n�ȏ��=<��!����r�3���E�lvAQH�R2�^�	X23M����ea�X[v�\�����6�|��D7������A�UH|qF�����1A�.πe�0"�|W8�Q���*�%�54?��Ma�p)b'&�p���i���X��C���=w,J�;T{��a�x��F��W�Ԏ�b#�w�tÚ�n�Rp�8���jI4����M7�p3�L�=՚��#/|)m��v<E�&M���>�i�
��x �������7��[��}�#���%����	�mI
�����N
s&���-��LX*;Rem"x�I 	�Fb�L��C��|�����E��o��lƪr�
�l�n$߯��i�fĀ�S�YJsQ�ڎ�|��Gַ�x0�����     `  _            x���<  �Z�ֶ\[g۶m۶m۶m��6϶}�m�'���s���V�pV�A�G�/�B�1��Q\(�w�Gŋ�/�k1D�(j��3�F��`1Xv�� B**U��J-���@i�tR�O
� ��
�D<���&�IcҞ,%�^r�\%���9�LbHŔт�,�I�Ҏ�/I�҅t-}H��0��C��s����z}����f�4���FK�����l�6�����m7'�����v3�L�+�5�kʹ�Z���I+���vk��=ԞhϵW�[��Y�'�?����Nr�c9%��NC��3���vv:��$����-��t��ݽ�I����{�����:z������G/�K�k����~�?����g0�+����7�&��l5�����'v�����s�ʼ3��G��|1_Ϗ���7~�?�oyXP<��ZY���8  ��l#�S7I�g۶m۶m۶m۶m�ޫ�v�&�y��^�o0.L		t`&���5`�����n��x>�P,�DQ�r�b���Z�nh�f�;8.N���|���;�xށ���)F�Qd�B.�[�y%ŒJ)% e�
I��A�2��Br�\M"o����J�4Q�(=��啚^-�vR7h�5K�����i˴C�=��t]��,z��>@?��1RĈ1J݌~�(c�q�Ƣ�N9-E��.t]C��c��F_�����Zf/s�y�|dŵ��U�eM�Y_�?vb;���
v{�}�I�4q8�+�77���2n7��;̝��qϹ��w�����y'�_~j��?ȟ�_	�<��	NW������R3�y,+�ʰ�	����l
[�ְg<.O��r�)x&���x%ހw����o�����ER�^���DQLT�D1C�wBf	��K�]Q�(��kD]�	ќhM�#:]��0t�P @�ٶmV��m�흍p6�ٶm�^8۶m��|$Y�$�ISғL%+�qr�<%�i:����ui_�����M��~e)X��l<;�.���;���
�嚷�]�P>�o��y���E&�G�
��e,��ə[y�OAu���������y,������8?gM�)�_$!E"����}�%� ����g=�����$���X�̅�|{�Z�� ?KH8L?�7oS�F��o�o�����&��>]ҿ1�Jg���$^|+5��)�$�Q���'OL-���.4	
2�
s��R7#ASI�7ť��y.A{�/�����c╻p��%�����E�!:�y|�����ޝwl�����=ic���7��[҇��#F��.��;�+���f�eyr:{��2i�+K�p�Է���}(�-��?��ֳ��C������,� ݖ�L�� Q��.xï�A�7����,���־�}�0��ڪsI	m��Iil����σR�~�e��$����e/�$ʷ�������k���� �>�\'	�5#�K= -�=4�D���8�E[$�"���P�����2��7+	C�h����H�
;i�\h��9�훓��0�a�>���H�C�0���e�=.�M�Y���r6q��m�Z�K���#�}>L�=�a �u3�]N�wo��PCCH�84�z�J�v]_���P�@k=�,1�F�R��U���^j��p�����yΓ?Er�&ٲK����D�����9�4����1�%n�*�3���_��U�H-y�~k��m�[�k��YW�V�&�[E�	��N�C)5�=F��3L�lpyjcF;�%����b%fP]=#�߉=�=�� ��ޅ��l�$��}$��Ƽ	%n+WIC݊~?���y���?�s��F��H��t�.j���@�ԋ��(<'W��)Y�;�>5��RP�:�u�hu�V�6OҷO`�n��	ֳ�� �d�ғX�F�i�X�k��5.���,���>�Hao��=�=�Bw��Mʴ���4c_�:���@P
H-�+�B��p�L���|Y��@o�j)L�̄���AK�#��<�w�Dosq"�� ̞�   xc`d``��_�!�3���ʜJ@�� ���xc`a
a������������
o�1��
J)3(�]T[sklM��u5����Q<LOR��i�K4�e���y�&�F[ާ5�Ҏh�[t�s:�)���n|A��7�2��!d(����H�C&��f��'���1��L���0�b�S�<*Yd�r�a�ű�bYm	��Z��$�X"[���>��GX��`M8�Zs���0k�1ց��'s���L��ևh�'_Ӆ�M�6[����I.U�{�G�Z��P��O�J�^���q@ @���T��j+YŶm�\Ǚ8���^�w䟏>��F�B%J��W��)����+����g_|��w��dH�)K�\9�U�4lČy�,Z�bݚ��sd��-���lشoִ9���q�֩:g��ΐz�\ht�ɕf�Z�hu�͝:���n�C4�C�g��!���8�B�hH��ApL`    �_ �r  @�	��l� z��������������������������������������������������������Z���r
 xL�%TDa�;�?]�����p-h&o&mO$
.���@C#�~�Tt�"� �
�|B ��!D�#O[�zl�c�vP�.�������a��1��Ŀ��wy"rM<y�y�M�/��vy�m��L;�j/�"������ҵ��B�P�*���t=���%CV��82zK'Ю�t}�S�N#eRt��旅�G�l͓t��e:_�&]@�l�Ed�6]�y߅��A ���L1�7���qq��8��u=����o�HGϹ�=91-w��]n�<�������D����ӭ(���;f�S�A?�:��Ew���,�w��R���vM�f�׉����ϑ�f.S����oM�'ƶȄ�
�dx;z���R� �k�~;��xl�5B$  Ē]�wg�]��?z���w����s���$x��E��`�9�92`�ٱ�f��e�Q����-���v>g�9�����	����>�p�!R;B�QN9��\8�d�t���ΐs�9�yC�����j�"�\�ƍ1�l��>%�S�b¤)��y�3f�Q3o��%��Z�u^Y�jͺ
�V�O,Q�F��uj6lڲ�2+��cמ}	8rL��4i�qB˩3Oz���=�Y�<W]���󢗼L�+��1`H߫^�#���IR^��7I{�����wX%�]�y�d��)3&�	��( `?�,�6S۶m۶V�S�T�JUQ%�ըU�Q��cX��(���hզ]�N]���է߀AC��5f܄IS�͘5gނEK��X�f݆M[��صg߁CG���dL9�$Rg�]�t�ڍ[w�=x��ًWo�}��%#+'��ۏ_�	���  `�Զm۶������&�P�P*T�R�F�:�4jҬE�6�:t�ҭG�>�2lĨ1�&L�2mƬ9�,Z�lŪ5�6lڲmǮ=�:r�ĩ3�.\�r�ƭ;�<z��ū7�>|���ǯ�������������!]  ���n��ZG�G�m?۶��xF�*�w�IOQ�iְ�u�g��f���3�����E/y�+^��׽�Moy�;����}�C��'>���M1�4��f�f�m���o��Yl���Yn��VYm���Yo��6�l�����lc;�̥�ݴ0M&�lg>��o��v�m����� +	䐃,a)G8�>8���1j̸	��8���!J7=�1�<���N8���8��E����<R}�+���|����4FY�{?��O~&�
����I!��A9e���q�8H	u~��jک�O\D @\���Ї|Ї�������5��B�MZ�D�$�d����ХG�CF��0eƜKV�y�=���|�����˟�
Q�4
2���<�Z��`8�
���%���ˌff2˙��a�
����w1��b7q�8I<.YR<)��K*!U��H�}r��<Z~��W�*����a�rOy��R5���Q���Ug�+�[���&i��@K����j����y�3�
l��Qp\����.|
���>iKz�dY�S=��Q/�����m�>�(}���(l�5.���&kf\����<k���XC�i�rk�uҺe��ڝ���u;���N���ֹKMZ�֠�i:�N�K�z�^���G�sM7�[ĭ�vu��-�!��{σ^co���������_�o����c�9�j���;#�#+"��$A�PP!�������h��������0^�6��k�-���pj�$���ǘ���K<@�
3��P���
JDj%��vK�� ϐ�����S�L	��RP�l
�J�CQ�	�D�AtSɦ�R�*�=�Ӏ88���Z�����#Z�A�KdDdQ4I�B�~�_�D�TlZ않����x�x��������}-�VQ3���m�vY{�������k�lt5��+�WS3[)��S닝��bW�5��=�>`�w�9�����\q>�̸ f����x=އ��gnb7�[��n3��;�`Ҟ�&��d2�l#g����2y���4���כ�������:��������9hZ�֡
5h=ښv���x:�.���~z����=���چ�kZ2鍄��Xh**��
��.�ź�ns�-O�2�x��������m{���㢢"
RRI 	�^�k8H�d�.���Ӯs���d�����ۆ�Owç�G �����A
��g�L�M��̽�����t0m6ON���D�<PC*���ٳg�"�n߾�����T4�1��={��z^k�v�ډu��Ov�nR�M�c�y��������G}4������]5ղ��9c��~q�m��YNXN��	3I1�D�E��fCfCfb�A����LMM
��Q�8̞GqkG�#�����	�q��
����ߛ����[
y<���nڴ�]�{w	�f����G)*:�pA��C�������xgg�dx>�(�(�A.���������c:欃����9k�qe��r},
p
}�G��Z���֬Ӡ�ذ��u: A5�tJ�j�iJ�f�ii�ګD��DT<Zn�d~��	�'�nN,��j�֠�-��W4J3��0??N��
�<�*���.T��
(��������0�>��ee7�+q+��B#�-Fc.���9��Կ%G����;:o݋��8�Ò��N�٩��M&5mB����2^�}�L�Qs4%gg
��y�(,��_��`��vVi�!3�:Z�Z�E�{��`��P��<�u�C�ލ�n�uo�Vk4��"Ӏך��
o ;4�k4cc�?".�	A`�`�s0J�M�op��nw�qK������I�h�&:9]��(�qH�]eh��Z���ey�rW����
~���`G�*����dgA�T�
d
d+�lX��{�.|���0|$�m���|�a�-A{)�l����I1��E)F��ba�4R,OX�K�/�-ȶ!3�V�3����ggg�BQp}|&C�<���T:�o��.�3����D��V�U�)�ֆFq�lV�Z������nT�O�%�
Y2
L�<���^�`
�Ug�Ob�&��WQ=��j�fT���]���Jz�Y`�k��_σe���>�U�vlVK؈S�K1a��I۸{i-�i,�zˢ�l6�DWz����K�y���ǃ�w��꫻�A��ן/�Fپyylaa!&7V��ݻ��ژO��|��7On7�V��O'An��v�gM��W�\EҒ���d�.7��'O�m2�S�'����c8�c�0Dp�R)���ԣ�+�TssV�;�؊c�Cy�h���?�ciyj��P0��}�*����w
�|��3�(�4[�m�FSU�E�L��zzt����<;��@�-������Do����������rJ�4Tb<#�޴R*�^G��TӶo߾�QE�^����ea3>�����s��[rs����ر
�"�+����\�z��:t���G�~��Ȩw��w�޽ �S;�P0�啕��N=�68�=��q�ļ����BS�n�","�R���@�
)�ߠN�0S��B�*�F6F�7<#^s���5�����֚��!\Q,<��ηTF��#��]�ff4���VTzjq)�o���:u����cP{�����{��3z{l����4���ݿ����t�Yv���(� �Qzt��W+��"��>���YY*����h�X&��X���cW���.��R�hw�륒h$� ��k�b�m.�m�Z����,ˢ�f�k��/���R���=_�������qy�U��7o�Ԛ�*�
hq�ZA�ݎBخh��}������NXV�Y6(WO��RL�A�V��K�$a����
�ш�Ò�$�� ����\�gĐ�ɥFNF���܌�8oW��[��7;������!�}�i�B�mf �z�P9yO��4�����ޯ����-�4��T��+Z��b�,��e�S�T(��⨚�����mHk	����н���(^S��h^xٙ``Y Z@�9��Y=��,G���w��R�S�'(+����\��ٿ=Y @�`�X��?x��	|`��ʼ�w�%>��_�ï
����/��	��U��`VC؊��]��k+02���TX�Ș�L��@���C�X~��u�*��|�#����X�V�*a?	3I1a\�IO@NQ�q;�Zf29��(zib�	K��A�O�(7��:�u �d�t
ļ^�RBYV��TR��c�[�nM/�����-��,���L���d�tbT^��*��d Zk-c��Ǯn�,��1��sW�Q�v�^W^��=���E��+��5���:/�.zy'�,��1�L�T�11�Oĕ��߾s�NȥR)�BJP��aS��hkv�,�qJ"�����b�!T'M�	���iÚ7:!M�
�{�sG���\���Z$syDG�6�¹L��g�5etd'n6�T��ܾ�̣5��D���\U��1�<��KfoԚE��77�9��;�e}Cʸ������5�9���f��r��'�X0��<x�����U��<���I��
B��t�BZ���^��*M>K_^��>�F��B���l���0L	%�R��PTS�✑$������	���e��Ve�-��0�l�k�y<���>��c��C����ySP'S��2���m7p���y����z��9Q�-M�ߧ��A�pON��'�}VP�'��q����^���1�$h)*��f瀂����,��e�Xp�;3c����xd�#�e��j�>]�������iE]D�H|�Q�!oW
�fc���^Kn��ۂ���Ri(�E"�$Y��%r��Y	{�}FM��ă�GE�("X�J�_��|^�������8������}e �#+�Di�.��Ie8X�̅r��mFf�V\Q�d2��.��Yp	�輩

=4�z�����F�=z��ѣF�/�t�d�{zk� M����Ș+031:1��&�2�Lve����t2���,J��$�ob*`��xZ"�+QTB���C5���s
�AϱÝ/��|�c�x�,(��6��
���~lU%m�J��R�C� �x�PMȧ���[����O���w��Vu�ȃ��O<�5]-��ҷX=�Dw���9�}���#D&uMkz]r�TӡJ���-ܝ(�'r���U&�z��S2�BuR��)����k�٨���Q-d�獑G}<�����gGkS�f1�c�ߤ|��y�s6״�����B{�RG��u��R�2��^��hsLcc�D�Y4��~~(`�`c~LFJ|�<H>Q�1�Nb��4�1�����@^�i8X��8��P��H�z\ҷؐ�:+M����i9�~i� ��@��<"Һ{�`%�&(��MOO�À���ӌ�0���j( ��ଞ�t��4i���E�R;�	崖:@�����P\���Z�b5qP�?���r�%ogiE�/d�N";U��ݿ�*��<��ܢ���΋�1�Jh���a���O�Y9	T �݇bt<�nn� ��1Y�)�hr3��V���_�r��S'O�>q��勗|����KǛ�ʕ*%�D�:���sp�.pw�� �㱧�"�C.����嚞v�=��~_!�
��H��#���qr��Tu�������f�����
29�s(I8h���[��m�n<��h�;::53��D�lθ��&�7)y���q��շ._�z�⪪8!h�J�;�����OoM�J�GkvJr/Z[L�l�������iI�~5��Ƴ�*�r0���NgU5�"��4<
s�(~�gx8��)�O
��z?������b����������{>�$��&��h7z?�TbWx㷭�,�%Q�l5:�f�Z��
�7�KN�F��wK�B�!�$t\��������I��ԣ�;pG������ #@C�&s���~�7/|��_�P���	@��ְ�
T�
�XP|O���q�B��*ͦҌ�e� ���fH�,ioO�[���
A`P|�ES� V��Y��EŊ�FI���Q|
J=��F�0��?��)��e�P�*x�"v�s�xڥ�8����p����0mY*�
fcS@�NQ�t�D���<����<� ��v�{c���ՠDk�F��5��m|���k>=vs�M6����������@\DD�P'����L�O����6BI���	�k��)>p!��M:C(��r��9o��4��A��+,�������瓷1jy��:-3P�/Bo��Ew�W\y_��x~�����K/}�%�e���^�
4�S0�q�䩍��m�R����
�]��X�������U'Ux�z��|�[5���ɮh#�En�ʩc�{���_��n�#�;=����}Aο�x_����B��G��R|��}JH��5T��!*�`��*s�X4:v�k5���VMo�w�� E���;G��{�����/�ƛ	���R:��MM���
L=;�@�?��W�P�n%
�,])���^}�h��(g}d�Tor���^{
n3 
��c^y���3�ZFr��� �>v��_�>����s���g}�]�ޏ����_~��L�]�m`�t���F:HQ!�Z���p�?v�e55��<��/>{��=�Tj�S��_��`�|B��&�G5��V�:@�Ν���"�3�~�ݘqr������믿~a���sa�Q$�&�ZùU�PY,Q�������}����$	]X�;���׿~��#Ϊ+�`�u���ڻf����9�tE�]���?��'{o����^LqW>�������'�xGg�T4��q�R�u�Mw?Sg��߷o�U]UY��G}426�F�$��-M.�]</�<+�
F�k��r�{u/tpeΣs�ֳ투�Z�`�3�v�Pz�v�	��w�������>'�̨ծ-'�L���pT���+W�t
PUn�!�,���y�/������ϯ�)�h!��֏٫dg5f�~t�h|�yLSKK���ij�)k�?t�������L��v��}�mN]D�~O��]Jn�DW�0����<�!��g�DIR��T<��ƛ-|h ��F|���%�C�Z�,��Fg���"���@{�҅WڕqHv4i�N��/�)ll��H�Ǵ�ĉ?����ړ�Q0T�Ga¸	kyD��)�$4IZ��M0\w��P�!��c�S��kx!�2BTr�!g��ƒV�������
|�j�tW$�Y��u������i<e�-Xڙ�D8�{�aX��p�a<ԭ���Hc�,n���0��yZ�l�C�s8k�`*%�z{�Ǝ�/}�O���
-d��5�>��XWΪI<�~�wwӫ�8��kv�������N�C�xk������ �S}���;�R���9B��3����;6p[�C�"��eD�&9�u���(��Tu�?eǾ���W���������-���t���1���w�j��	��w �d�y�8����_�kU���|�,�r�Z{���m.�y�t�녛Ío����3?zF�.|��g��?���g�8�鄾����qU$�y�Kc:�^i�%��Q��Wg������w��ƾ�P�r����`��-5���m�+��x"�7U"��7��T�*q� �ǮZi�H-@D������pe�s$Ϸj��Qw#�l��X$iM�u�]����f[�0q5,/�F�;��S�p���?���X���+=�y|��=�{���J�s��7ʅ�GS�stܬ����#��T�[o��W��z�^�8�����yt���WT��G��v�Vx�F��v� ����9�e��N��@#m���ttӆ:�&O���V�瞢���rR�>��9�i������+�Bʁ�Y��v�P�3�fgmk�2yn��9Z+jQɪ)�q�_'$Ӛet�Y�J
C��qsĲ�3�y��6�3Aӹe��9G���������l#2����ib?�lN�:M��浗��K��i��#+WT�QY��!��X:U,R�y��M�t2I���G��^�&��>��ŋ��*,?L��n#gɟe�Κ�:~��M��	�;o��v��V��&}��d��(��v
����w�L2�iw�Nk��r����X�Y%D���,oh�ϙ��S3��C�� �_ �1b�K��|�w|_�
����GȽ��TfQe��5������iw�F�F~nY�s��F�8*����v� �<��I&���H�I�	⢷a����9
�C���u���uM��C���e��/��s��@�
CbU�r/�%���Q����t��g1�j�����+׸���{�&�ڛ�����If3���"3�u<JZ�q6D�����y&�J��՘���LCY'�(�h��Lq��Dҥ�K�+** ����؋uio��l�_��C�s�Y�
����nb�C�ĸ�̙��]�{Ƨ���x�gNlöUL'c��҂��:VY�'�/+s���}ȫ[���/�S��:����~���j�/e��̺H�%�C����g��Ldɕ5�_K�mOAe%�n+��!0��~��!������d{��'��Y��ʰ�>z���������8�>�pgi��C���Ŷ�!]�llF\|~cO�E�����

�`�M�2:�U��)���W���ܰ����i/��˫:���zE����Y�h�hٰg���J�5��z���|C��;���QV�m�7�����bb��zG���Hml��WA��¤VZ����s��c�r���N��o��n5��q3��=k�O=�@��]������w���Q\��?��On����[��,���_�n��Bl�-��΅�`y��>���I|N_�1���h㎂y���XI{u_Ah�E�Yj	��_���gi��b.^'��o<K�R1�u�zA�
��6��)����|�f��ZuhZ�o��(��/�Y݀��<غ�
�_�	6S�����7�Et��{Bة��_�|1���0��[�!wߘ'xc� ��<���A3uD���䙘�+Y�ql�V��ex�1kU�ʱ֭W����+{'Z���f�n�r�D7�Ъ�~��}A$/�n0�[��<gvכ�ĉ���0P��������#Ԇ>��OuS)���<�)A�x��v�F��(���.wOG�!#�0��t��ֺ���E�@�;����⦛T�� ΁�m��'�x��=��$�S'�w4�,�]�P��iG�S�����62�)=�k�ؚ�^F?ܔ�?Y���a�W[���H8���\��\F����+Q��˅f���,VZz�vOcuym��{v��u��Y�{�Oȟ�~��~�7~�{_�Q�7�/���nY���ڄ��@���A���ۏ�f'�	�u���R֬q7�����NI���h�����ޫX�e|A�Ve(6�	��������js�H���"��
��eM���l����Ӎ��Z��st�ϽĲw�+;ap��&(E��tO���55!��+:1�HIV��Ϊߒ��G�$&�9�ĭ�v�5FuLS�gN��;T)�j�����'��Ӣg���d���P���&�f9©�)�4˓i�@_^�����"�����o>���o9�$�dcAS��afJt�AӥI��:�$�}�Nm8i�ɠ�tt�9��%�D ��@�ĦƇlEyl��ɡ!��'9��m�xxqh?#X�(r��;P�rk�ƥ��b�g�ka�֦<
�<^������,�2�	����/���%Ͱ�����?�'ԑ�H:���&*�'1͠��G�I}����.M|1����E�V��ʬ�LV�rh�'�'���Q2�O�&*o��G����]��m�~���z��!j5ݳI�7���+*�����>9�09N�r�1
����G��M&YX��T
.�ƬTŢ_{�h��.�f�釔����y����;��x��;�W�����_���3��{''eݹsf�DG��x��ں��~�le������YZ
�PZ���y�� �}r$DA8�H�̜�����W����)�����Rfp�*��� =D��u:��maA,¹�g��r��ml�Q��m�
�N>��c_�YLnFҺ|��e�
r-�U��¸4;�Sq���PY���
�S���TY���4<P�.Vc1��k���*{`����k�&��~��c��g:GPӔ�pԫw6Z�x�Ɗ}����j�mH\]S��B��偖=��đxl|J6�1����]�Oh�v�r���K$jL�0g��Ǜy��
j#�U�
�e��
�gæ�
�n��*�� ��7M)�$��Üٰ��0a5M׍C6ɰ�����6I�8�/h�Va܆��(��r��j]_������/X�C�����bsr�e?˙*���5�|���극Ьwn���{�EB�����3�p{E�3��/- Z���+�C'�<�Y6oU��_��[�k�o��_�����n�O�����߰���ʩ�x�thy6r	������
7��9�H��c��� w%�̧;)�_�b��B�)����3ďP�Q!�Mq}��$W��J_�N��4)d�q����U���M�A��\E�Gi'��Bf��!TP��pS�PC��N*D�)�D�P_��^e�>B��S�����+�7H'�/���k�8c_��)����
�Kٹe>�s�;�L���d"�v=OH`Щ���D f�l$B��2I�%i7ƱE�hP��`�BK&��݌Np
:�� V��4)�8C>��v �=�E����z�6h�%b��k��2B\�R$��- �WH�ľ"
$c�HI�Q���k#{��5�qF�
y$46��@V�L*�\���6���c����I0�u�w��E�t�+��8JF-Q�(v����"?������tj��J"�p���d���6[v~o'@���� 1�L�A ��ha�$�b#ᘋaX�
��(�mTo0�4f�K�*�	(���mE+���m�Y�Q�F-Ij�dU���T�UQN��~�
�}����ʎ)k�)ɐ���(=(.�02�L�B#ׯ���6H��@��A�Q�%b@и90��\<��B�J.u؍j�[Nm�+H��R{��n5[���jR ���$#*g�ԚM<.kgg�:�:Q�!��q�Ap�UtI���|c!�k]z���;�C`� .a�؄ui�5�
��ʬ7�Z����C�Ri�.�v��P�eg2]0|,�J��@z���,)JФ$1I�j[ � �R���%"�Ps�D���Dr��N�
��!�V�*jG��9�u�X�y�R�6�AĀ
J˕W;��(�(������
zawo�I����U�+&}9��Y��"*��* ��R����]��=���ᇽEE�ڵCXZ�:�ப;�ˁ���> ��qQi�����s7�s"�yХ5��&��O��Mn�d��tO�"Ú�D�H31Ap��f�����<˵����Q�:�k�N���]��׆��˿�^�3*�#7��~���s%9ْ�3	���k��Yw�n���������1��g�WK�����ڔ'`���C����2'�%�a���7�{�Ȉ{�4��-_��5Q���p�b#c��y���rx>ں�X�-*p�P�`75p9 �%�RA
+�Zcq��h����i���z�'�8���J0�/�v ������߈���Q�zzȺq���
+B!'�&[*�UFs���[}�+3 I��� 6��e�0һ&�jy����Aa%%��<1�'�����?����<�¼IV{�ጶBG['�]ó��;�.�u��gm~�@��L��Ł�+�O}�N��4F�CYb5�r��p�®!V�h��z���XQiUUUYaY%�JK����kq����'�?�``T���{��w{�c��w�e5��y��|��N:c0�Y�g���W���n&&�Z���ZcUp"F0'�;6�~}�:������vD&��Y��V��x�(ձfw6�d]2�0���Ų�Z�wnz��iz�U9n��UQ��~p8�H�\���H.��9�� X3����|�B8cc�(����p\ח�\.�Vd~���^����w��������Z��{�e�����v��X�D��OG�ͤfӄ��e���y�q/��ٔ��(��������nW>�)�#��D��/���[(�ie@�t��.�.|��
�ʿ����-�vLUcw��{[��O�먙�'��s�3]ہMe_d�eN��"kS$G��7�+)��|�AX��g�C�g�g�yf�MY��N�,75��<��t	����'<����+�M�p�vg3�by���Ko�Ȍ~/�.�����L���J��(W�8N>!}�
�����M�X.��B~E�!YZÖ�#����u�}��*Q�/�N
݀Ӷ��ɚsS���Վ�f���l�ʉ�T~�^�m�����#hW6�e������μ�>���<:ħ�\bG�o�O�]���}�I`gq�2�>z+��t��գ��#/��H���G<���Z7̠6��a*@"-�m��|�[�"����ʆ��gي���o}�aO�h��%^Z���R>��?���ȟ�D+3��j@	j��"h�����e��c+:�&��'+���vA[�B$�<H��b�G�(�Ba~I �"6�r&�N�Ȃ �bj}ٌ_~l�҄��(�p˸p�.���wvNNo� %7�y�ݶ�]�ZEP�ޣ\"t��C��E��{�2W
!�x�B'FG�(<et�� �40 ���:"C:,������3�/R;�/�UCA���pۘ�ڕ}  ���{�vL���%�3���[��]����� ������`�D]��6����*[r�*���%[nO+q�{����U��l�ff薖P
lZ���T�����;��VP�l�՗�S@�$�_Ri3���:#�(7��:��� �ӿ?%�ih���~�1���Y���zwa`������~����W�Gx�q�oAˀI%271���-M�
/����I�%����^w��'�Kɕ,+� ��̄�F�yձ
ܠ�R"�DD	�?�0�0Φ&'�����PxI�h)g��یL*� �$Ȥ���=��b���/�μ_�Zr)+e�r�y���	�]�g/E��s?��x������{
�KKf�~ӋD�? �{�~�~t4��_
�/����b��j���=B���v�e��X�k�l�q����
J���Y|" �q����T)������gop�seE}}�z�����L22g�ʧʨu�<:,�\����c� �� ;��X93�T�c<3���x�}����k�v�i�c��0�2.�w�Ғ��Q~�t��8�������IE�p2L/z�/Y��<�_�/]��1"�WZLg��Xx>gsu�
K"KA�l�%�缚�����Jk�*NU:���C�x�u����".�����Ū5�W�%�y�o�㎑�EC�M�>�����ꚏ;v��F9$Vf�K�k�`�]]=��`�e��㩾O�ӟ^������r�����;�u����+�j�L(81�����N��)���cfSL
�`%��i2ͦe��}��z�Q ���U�w>��Y%���;g10�J�(�D�j������֡�.`�w��eI�#(�bY
��e������D`���Z=I�ONL��47�"�v��� ~�}aKm���be�OO����"c»Ti^���/�2�����pd�Q]K0��=�����DPko��ᥨ��x|�3������쳊r��=���w�*U��s�^'&9=o~�7��J,�*�f�q�YZ"����V�Nì�M��l3��[$�q�Ν)#נUym`�w� ���!mY%(�Ĉ��"L'�j:�)��I;�fs���:A�:�,Wt�1;�#Gb���]�nRd�-5q	�xS+2Y\�T���l�}rf��]�t�N���y�E��h1�{�KT��%�"$���2��X^�QQ���Uj/�F��16V��V�ܭ���-��؉c�XE{�bof��|���$��{h�`k��bն/�sR��XH0�{қ)n�38���/s���L�Z���l�,A��vx��t
����o#��c����~~�2�RXR&�G���bQQQÔ;(�C#M�c����2=752�0#���k�L���3J����I��>�P��� 9��o.?�~�|�\v7*��(
>�"G���_�jo�>�#O<�Ls�����KT��1��0��ra�H)H�\�r��}&�J,Lh�k���7ir���VC���9�֪X�v���5�e�>u��^�浾%�b`��k��-�1�V(�"/ǉ|()�V�(���.o%��sl�@X<����?A2y��-#v���d�
Ĝ ̹���	s�ĒJ�8u���n>}����fC�r8?d������>�z��rqK��xl\�QvKCC���Om�OW&�	�9!m�>	�����˜9\��@8�p�!Yc����j���2�&��W�nj�t֏��d}L`���h�$d�zt��g�hLDc1s���9�tb�?��kh���K���p��*�
��ơ��gt�|V�\Ѻ)��l��<f�J�5U#�F��&�������}P�|�Y'9u��:���v�8��+��D��T��
=��Y߂?$���N�I,�/�x1��+a��|c���L�p
�N^�qU�8�|�ȧ<�U��\�g@�*��	�-,(J��^���Y�/C���|�(����jP"�����0T���͍��M�)Nԛ�Pz�bM1��"�K�Y���K	�?h�(����e�n4P斫7:26�_S�"Gqq�
�=H�U�451LI�BJ�N�A������c��q����3Y©�5�jn+�,�lnnv2q��|�!��N}�]�h1�W�Id�d��ooj�O��>>����
l����w�۬vN��Y���8v7(ۻ���FU�x�P�_'5��%��?gPGy�Dt���	����uX�!ƺ�m `j���ukN�k � ��@ު''ooo_�05I�]�1s��Sy2�J�ͷ��M&Ir?���p���c��ߔ[�{���{��1���u:}�6����E�� ��������ֈK�͍h��|,��6���^�毵:�q�B���$��	�a�~�9J��C�?y�L���{��>Gdv��PC�j~z��e���}������ v11���_JS���a;;Y�nR�.�#�=��叅{��>��UL��`�Fw�~�u���[R�^�:p2�Ʀ:��S��2�7m��h��._�r9�6C9n�@��ㆺ�$M��]=��m��X�#��3u��L�Wq�=2Q�m���}
�O`΂jϹJ8M^|��G����8rd�!�r��Ϻ扩���{���f�(bq/�/b}#T����B7�G��i\L^Uk����{��Cy�Y0p��x���;$�X!f�W��:�bEyپ���w���P�g����w<����m`b����0����������U�j��ՅUۏ�<�(���0��*w8Hh���CP$v�O�d����	j�8�U��oh�(mF�TXdM�I��Әl���LO܏����/��q�2�3��K/<
ٶ~�.�5� ��������_��:Y��~��������_n�m�64�ix�Ͽ��ڿ��_��?��"Nu����n<yM��~�Q�ƫ-�-����h��	4��7�%�p_�͓�
LfI�Җm�Np�+��}��f+�a.�և2�����h����P��eݬam���2I�B�H�L����(�YQ �Z�BRy%nV>.�j��*3��%5�I��n-�TUUڏ(��'FN
\��ԝ����-���~ N�  ʢ��R����U&�����M�y���ì��#wu;���fg�O�`"��ٞ�>}�r[����U;n�T����q��:���ה�[�hAd�,�BVˤ�dm^e
��Nq�S��ݤɔ.�齨�u�A�^���O�._R����k݌:6p���K�==ss]��-�l�w�Қ���ښ��:����p�W�D�'Ѡֹ�aa��F*��D8Ή�R0���x6�-�\�F��/_��st�\XX�,��w�o�3�9����F�׉v����Gx�̹��ϑ^�e�������*���R��T���))�L$lcdC5�F��~�a**h,Ұ#�l,u�E�ŉE��S�#�Mc���\��X��F��0�|�pS>���<?�'�e�T0
=?2�8#p��^�S�k��ϧ��%%TW[2E'��N%	ϓ�<	��<͗�ŏa{��2n�_����I�n� ��L�4O�<b��r�
tkԵ�AU�e�3�CF�l��$ESS�,�+8}\p�����C?���qk>۳'�t#��n]]̮v7YO�0����˚q
��ֈ��]������x��B̫CC������
�]ZXpo�7~���05
Sp}�*+r�;;9��io��D�������Jqc*@?���>�B"�,97
8;�An�����#���{���\����;��e3�grf>�ڢB"�}}0���w�L|jq�r��#��X\L�dr���F��ƌhC>s1u&����Y<��4x~����d��]�)�"����X{��Zc�׺���V� `%�T���+���a�����4��:�~�=����Yjs[c��Y�5Z��p�E����	_��̴qM/3ѽ�VI�)��IvC��q�l�x�9�/č_������Z%�� �q~�8='�رÑ�z7����2g��da�cժ�f���u��Q�����S������Z������)
9
�$�����J-��)�d�e�d��������;{��X������<V�븻4R�z�s��$}�&�wHn%�U�5�v+Oyn��KF��(���L��&�
�����OcA
�6EU@,��+�p��j�p=y��|��(�cO�k��-�F U�V\R�+bB��]g��E���r���+5\�����Q��cA
]��xC����
�����yy����i�ޮF���>.A�IƗ$����SLx�iԇ��Hn�{�+�P4�ї���A�긤<�u�*�ǇOZ�.�R�Н�}s���sOg�<�{f�9����t��y�~�a��z����� x��l6Y@�}����v��Q;Mm�m��m�v�8��q6\��gog��wr�33� z����stw�p/Ǔ
&����b5kX�F6��-le���Nv��}�� �8�͍��W#R�7o�:������z����]����}~��?�G���n�r���$�8��r��\�"����r�������]�q�<�����?��ɿ�7����Nx�3���rS0�����X,�D��e,g��JV��5��5�Qa1]��x=o����7����x����O0���x?��|��>�6�O���V����d�٫�>�~p���	s~F�g�pĕ~ЫX�+�����7�4�w��8'8�)Ns����<��%.s��\�:7��m�p�{��y�����%��L,f+Y�jְ��lb3[��6�����b7����q>�M1�}�^�Q�q����9�Y�q�\����U�q���6w��=��<�	Oy�s^�Yn
&����b5kX�{��"R�x���V����d���~p��������j �%��u��<۶m۶m۶u��8k�<�y�yS�c��ߝ���/�ikA����:��9���K�V�<��?��A�uܓ�@����$���G8~DO���E��
��v�������7��~���ޏ��}�m��2!�&<F����|�u\�gy^oI�J��O㧩>���5��S�D �h"�,��7y�z	Vz�ĭ>n�yND$?(	��9C|r=�V��&C��9�c�E7J���o9P�
Q���s
������o-�0���$���Q�|��B�%�C�A���Ŗ���Y�[���f��Q.�a]S�����=��H?�]{��ܤ�=�s��Ǳ6Z�v��;�x>+�Q���lO�oԸ���Qqq��=�
q�ݹF���X�m��pu^�76c�1V���K<�;��:w�Ssu�����̽�ݑ�;V�9��P�(e��N��{��/�ތ��V�2eЕ4X����闤;/y��,۶�_�c۶m۶m۶m�h+wyjpO� �f&S^��$�|�
������
m�q�T<�����xxN���xo!���,���u��t�/�+|�B�~��7�<�Uq�7%bێ��(�[x<[x2Qu��zhM� M�Jwk�C6:(��Q���"��tۂ[%\[��1
��]��X%�0>&(���K�4,@�	�T�X���w(�؉H� #�#8��qI�^�U���#����oo�!�xD	�Q{�A��V����O�?�����|���t�η���w��q~�_"�_Qo7���ӷ�������3���aa�EXDMQUS���K�W+ɒ��K�/��ȥ>��J��
� ��X]��dm���:l%#�>�l�j�	���yl�f���9"��9��e�[÷%�c[�E�vl�Rӈ�3;���.j��;���=�{����죧��_� �=��@�`��yʡ�9���Ȇn��=���C[�<N�Dm��$b2b�©Hpg"�Y��{�!��9_�.BJ^�Y��Wp���\�8Wq��5\�$�i!�z�W���ύ܂�)9ܫ~��>��� "�C<��0�?�#j���y��՟�	�<�SjN�4��f��ϩ9��H�/ ΋����x		Y���*�"��ғ�;�!e�-��-�~�y��GN�y�2���l[`�=4����!�5�5�w�<ͼ���<4玜�[%�wJ�i�ݜ��͹k�Cs��4s�n�=s�2����j�v޸�v�vh�]��m�l��m�T����1U�p�`�b�lf;�l�}N�y%a�fۗ�[�2վT���v`�}������5�1��4�1����Β�w��=	������&<4�	�3����l���~�lG�v`�3�v��Y�z��*BN[���<4�)s�#�
Ԣ_�_CJ�э���	E�D��q#�nDߍ��MB-���A��G�p�s\���\�׹�.���>x�#��<�97��/�����7|Ϗ�����~�w��O�����KLs�c��?��?�̰�</��?0�o�b`��l�3��|˿�d�w�2��I�H��Q� n#��蹭��2���e��n��eff333:��̸af��efff松�:ZG����t���4�3�i{1L�Z.A(m�5�����A�<l���f�k��f��寓��5�:��Ƕ��#��Z`/O���HșR9wT���e͈={In��� cL���'8nhYNu�H�F>�ך���$�`9h�sm���\V3�7W�@9��i@׾��R��qk�?긍���U��)"Ն�ӮX�,3�q�W�x�z��O��Đ2c�#�َ�^@~u�K?����0�w��p��y��v�A:J'��'ݥ���>�_������p�,Se�̲wf�/d�,��BV�����
�ӽ?�K��dXE{G;z���V�� 夊\%��\Wo��V���6��ﲍL�2Ȏg�M� )�7*����z����)�P= Y�A��~yF��cͷ���@���+�n2@�
$K.��RƼaސ��漺PR��
�ͤ`�`E�%�[�B_�K�D����+X=�U�|�Z�c����o
�Ӭ���V��wW�0x8�BhB���
-�����7�_
~�E���|�H�ʅ�
]�Aw����SǼ	y�J��]��'�y�cF�G���S�3�>M�ó�K�?�9W�T��ڹs��?6n����=\R��
����eR���w)E_�D�?"���������g�)R��t�������"����7E:F
#"��EVW�~*v�̠���^�<y.�E�4�͋�2�켧�^����5�m%VM��	�5��.;_;7o������=QRE�D۫zF��Ӣ���ڱ�ȝ�N<g^)=O�<7����^��! 7�_�m�s;$y��l��P^���ʝ��*ǲ;�QS�9�:��{4�-�S�� ����M8W��>ا|9���d��<�N
.���+���V^����<ח��vZ�� �_�P�������@2�Q������P*�X��2��x�����7c�E�d(�eQ��V6f,3��2��ڃkSk?G����5zn7:^kY:��r ��}�|��S���x�ϰY�
4� �Ĳq���V�ok��Z��%.k�f}��S�w������/C�W�^/��4��F�"���N��jnK��ϥ�O-���jLy{���-������!�_*?���b�Ų���;������*�C�|d>����������#�_��	zg�	� f +���1���/�/ ��tO�����A*`��3D&�U���]�^�q��{*?丗�ǽ��;�q_�]��)�v�O�I����8���qa1H1�r�����N����)�p]�=��E#�ʾ/D��S�j�w�8��G���s~H�}��Ѷ}��y]W���[����9��?[)�!ĩ� ���R7yu=�WW~!�OjQ����ﳁ��)��5��b��N�l��gc��6��Z6#�HWۖK���g��Y��}��f]���=����"MS��,wN���{�er~_���S�~��}S!��~�"�Imb~����)ē:�o�m�+��6���u�����|C6�>Yi���݅��wm�x��pe����/��d�q�xw<Ӷm����|۶m۶m�H2�`�_��}~�S��������ȴ�����eUd�nϝ�J����D�(16"�^���
)��J�M�2��i�g��vFEU�3L[�≅��h]��,����Lii��)Q5�*�;�*��E�s��yNH��U���D���7�a>�����7�a>�������nݎ{r[}�N�r��kÎ�m�#�w_W�Sn������k�U�Iӏ�~���
+U��k��^�kg�������t���q:M��"]��t���CzB����w�>�W�N?�E�E-iY�k�Vj�l����`n�m�M��Vf5����ζ��g��qv��e��Ev�]e��Mv��e��C��=e��K���e��G��}e��O�b��[�"�Hf$;�)��"5"�v�q�u�sNuNsNw��8��g9�8�:�a��'p!�D�$�d�g�s�s�s�s�s�s�s�S�l�\�\�\�\�\�\�\ID��)�Fi��hMs��c5�Ϗ�L-�4^�\'h��D�q�����5i�S�T8��
�کqj���k�|g�S�i�"-rF8��N���pV:����g-Qߵ���6r��
chpWw9��.-�7��l�p*��t��uϩ��-ջ~���SN��Rj�Z�W�D"�N��
�d�� $�؟H�v%�ìy�9�x�J��=� }�'c�k��־:����	�e�L��dp�r\�'r���c�0�q(-�K�S9��9�39+�9}�?� Cv�=B���ٜù���\��\��\¥\��\��Z�%*W�*U�jըVK�L˵B+�J��Fkm�-�%VnViUVm5�f�d�����c�0
```

---

## File: favicon.ico
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/favicon.ico`

```javascript
         (  F          (  n  00     (-  �         �  �F  (                                                           $   ]   �   �   ]   $                                       �   �   �   �   �   �   �   �                           8   �   �   �   �   �   �   �   �   �   �   8                  �   �   �   �   �   �   �   �   �   �   �   �              �   �   �   �   �   �   �   �   �   �   �   �   �   �       #   �   �   �OOO�������������������������ggg�   �   �   �   #   Y   �   �   ��������������������������555�   �   �   �   Y   �   �   �   �   �kkk���������������������   �   �   �   �   �   �   �   �   �   �			������������������   �   �   �   �   �   Y   �   �   �   �   �JJJ���������kkk�   �   �   �   �   �   Y   #   �   �   �   �   ����������			�   �   �   �   �   �   #       �   �   �   �   �   �111�DDD�   �   �   �   �   �   �              �   �   �   �   �   �   �   �   �   �   �   �                  8   �   �   �   �   �   �   �   �   �   �   8                           �   �   �   �   �   �   �   �                                       $   ]   �   �   ]   $                                                                                                                                                                                                                                                                                    (       @                                                                               ,   U   �   �   �   �   U   ,                                                                                      *   �   �   �   �   �   �   �   �   �   �   �   �   *                                                                      �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                          Q   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   Q                                               r   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   r                                       r   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   r                               O   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   O                          �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                      �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �               (   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   '           �   �   �   �   �   �   �888���������������������������������������������������������___�   �   �   �   �   �   �   �          �   �   �   �   �   �   ����������������������������������������������������������SSS�   �   �   �   �   �   �   �      +   �   �   �   �   �   �   �   �hhh�����������������������������������������������������   �   �   �   �   �   �   �   �   +   T   �   �   �   �   �   �   �   ��������������������������������������������������,,,�   �   �   �   �   �   �   �   �   T   �   �   �   �   �   �   �   �   �   �GGG���������������������������������������������   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   ������������������������������������������   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �+++���������������������������������jjj�   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   ����������������������������������   �   �   �   �   �   �   �   �   �   �   �   T   �   �   �   �   �   �   �   �   �   �   ��������������������������III�   �   �   �   �   �   �   �   �   �   �   �   T   +   �   �   �   �   �   �   �   �   �   �   �   �hhh����������������������   �   �   �   �   �   �   �   �   �   �   �   +      �   �   �   �   �   �   �   �   �   �   �   ������������������,,,�   �   �   �   �   �   �   �   �   �   �   �   �          �   �   �   �   �   �   �   �   �   �   �   �   �GGG�������������   �   �   �   �   �   �   �   �   �   �   �   �   �           '   �   �   �   �   �   �   �   �   �   �   �   �   ����������   �   �   �   �   �   �   �   �   �   �   �   �   (               �   �   �   �   �   �   �   �   �   �   �   �   �333�___�   �   �   �   �   �   �   �   �   �   �   �   �   �                      �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                          O   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   O                               r   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   r                                       r   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   r                                               Q   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   Q                                                          �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                                      *   �   �   �   �   �   �   �   �   �   �   �   �   *                                                                                      ,   U   �   �   �   �   U   ,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               (   0   `           -                                                                                             	   (   L   j   �   �   �   �   j   K   (   	                                                                                                                                          V   �   �   �   �   �   �   �   �   �   �   �   �   �   �   U                                                                                                                      %   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   &                                                                                                      �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                                                          Q   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   R                                                                              �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                                     �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                             �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                     �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                              �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                       P   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   O                                  �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                              �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                       #   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   #                   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                  �   �   �   �   �   �   �   �   �   �$$$�hhh�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�eee�PPP��   �   �   �   �   �   �   �   �   �              U   �   �   �   �   �   �   �   �   �   ������������������������������������������������������������������������������������������sss�   �   �   �   �   �   �   �   �   �   �   U           �   �   �   �   �   �   �   �   �   �   �   �eee��������������������������������������������������������������������������������������   �   �   �   �   �   �   �   �   �   �   �       	   �   �   �   �   �   �   �   �   �   �   �   ����������������������������������������������������������������������������������HHH�   �   �   �   �   �   �   �   �   �   �   �   �   	   (   �   �   �   �   �   �   �   �   �   �   �   �   �EEE�����������������������������������������������������������������������������   �   �   �   �   �   �   �   �   �   �   �   �   �   (   K   �   �   �   �   �   �   �   �   �   �   �   �   �   �������������������������������������������������������������������������,,,�   �   �   �   �   �   �   �   �   �   �   �   �   �   L   j   �   �   �   �   �   �   �   �   �   �   �   �   �   �)))���������������������������������������������������������������������   �   �   �   �   �   �   �   �   �   �   �   �   �   �   j   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   ������������������������������������������������������������������   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   ����������������������������������������������������������iii�   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �eee������������������������������������������������������   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   ��������������������������������������������������HHH�   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   j   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �EEE���������������������������������������������   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   j   L   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �����������������������������������������,,,�   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   K   (   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �)))�������������������������������������   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   (   	   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   ����������������������������������   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   	       �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   ��������������������������iii�   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �           U   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �eee����������������������   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   U              �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   ������������������HHH�   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                  �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �EEE�������������   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                   #   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   ���������,,,�   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   #                       �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �222�}}}�   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                              �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                  O   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   P                                       �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                              �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                     �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                             �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                                     �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                                              R   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   Q                                                                                          �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                                                                                                      &   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   %                                                                                                                      U   �   �   �   �   �   �   �   �   �   �   �   �   �   �   V                                                                                                                                          	   (   K   j   �   �   �   �   j   L   (   	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        �PNG

   
:��|�5` p"@�'�ɲ�s{
0 ��>K�
�xX�6 IJ� �C|?$KEN�}ϓ|������h $	2 ��|/� . Nz �#���W�e�
�5��
�,t).��I���D�T�O�)~��V�u$b 誛
I�Ł�
��2uC�����敭��T�3�
��
�X"�d�m�<�nB~��@����t�t�x��
D:U8j���t���$b b�A||�U�Q��26%��)1 ��_
�:p�9.tڷo(/ݺus>��3�'�^�Rg���ڞG��I_D�������~~� ��{
rZ��ݖa, ��w� �S�W^y����.��5�at7��ݏ���Tv#�~7n��A"�����+��W��pM��/�hK8����g��F/^������M{e ��R�|�)q��7�t��?8'���K��P~���瞰�\��r��>�ǷUk �eP��|�^x����
�/V/��v���������*�p�v�� ����ʟ]J��}��k8(������ĉ�ѣGǗ�O�mڴq,X�o���e.�^ �Qx���p�t����4^_�N�{�����y�2 �s����� �-عsg�s���i�v��Z
!~PJ?�c�������|�] �ܽ{��z�긓R��1pn���z�����tlp�9�f�r�v�jT殿�z�4*O�L�~����ԕ3��4�~~�r�;�m�xY�+���������3 r�;�m�x�4���:7]ՁqL�4)U��!r�1��u�6���$�
��(�����\r��s�A�y���ۂ�T��@h
�E0l�0��;�tڵӘkƸN����Y�jU��
S#�|^㽺- |��p�
�ĺ������LO�\s�܂>"8|�`[)
&Lp8�'��������4 oGe�#�ۏ�lْ_\�D̀܂�2Z�l��i�9��
�T�VL�!���j���`�p
T`��|rZbZ-�.�!da+@� ���ߞ�Z�gf�[0p���� �� I��gr�$��o%P�_rCy
������.]�|X�
�m�B~��?���J� �D�������~�h r�����ER���A݀�B���~w�q�Ӿ}���<�ŕ[й5�d��-�`�5 ?�Kq�~l4��0@��)����/I��(����؋���n��9���Y�4�!�Cو2ח*w9���GKݐ�s�&�r�e��s��?�6�8J� |(�uwO䴁d�&K)�nA��?R���n@7,��8�=���r�e����n�M�69k��M7�����J��R�]�e�n��9���Z���� /?នo>��󕾤�rzr�� ��`���V{���u��4448�V��ra��p� ��QRZ�<{�dK.F9��#~T���s.����N%*� 
pn�zdC"�e���?�\K����@&$b }jz�3۵� x/{��1 Ra�#�|��ƟUK�= &�^��TM�n�2�9�5)?s���{O'�D��D���o [kM�oK0�x�� �Td�_@]b r� �G�����; ����D��D���1�gaR�`��'`0�  �>\��/���f��������ŀ����!fn�Z�|b����U�.t���ट���r�9�+��������	�b rnE�Dk�= ��8�����!b R�Cl�P�E�`�܌�K�'~�@���}*�!`�@��6 L�
��V��1�v��;�Es��Q����=ɮ�4���b@T��n��!��3q�0^�V�� c ��1�ܶ��[����M�=8I����1@�څ@Cu��`N�o�� WJĀ� W����e��I�� n��N�mீ��ܴ�_d��(�4`E܅I� ���"̵�1 *3�+\�E� �\M���)g	r���
���8�>��p�?vI� �0�ǀ~�!b������$'�%"I����R��i�1 �0��? S~&�� �r�����{ n�_�����L�?��T�e��Ǝ�7�C"r��OQ~"qI� ��O 8�?$b �܋r�#@�_�v�J̙��/��3�'d�/����W[����o'N�
�hām�mu �����j@F@��V����Z!��xI���H�y�ѱ)��>��Z!6 ���a�`�����dDV$9f���	pM�6�I�!LG:\LdrwPy�~�P�%��L3��7�TK��Am�mo|�6��	3��-�h J3��?�67 �yr���"����g��4. $�1���_�[*��&���S/�dq�������C��h �3��>�6Ŷ%������\�#�RZq�
H�@ ��P2v )~���@����z5��|����R�ֵ���|`#�W39؂��<�"-�0��\<�d��u�oGLz 1��Gp����e�倯d� .�j
```

---

## File: globals.css
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/globals.css`

```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

```

---

## File: layout.tsx
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/layout.tsx`

```javascript
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

```

---

## File: page.tsx
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/app/page.tsx`

```javascript
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

```

---

## File: register.tsx
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/pages/auth/register.tsx`

```javascript
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

```

---

## File: signin.tsx
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/pages/auth/signin.tsx`

```javascript
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

```

---

## File: signout.tsx
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/pages/auth/signout.tsx`

```javascript
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

```

---

## File: next-auth.d.ts
`Path: H:/DigitalHerencia/.environments/NextGenManagementAgency_WEBSITE/src/types/next-auth.d.ts`

```javascript
import { authOptions } from "@/api/auth/[...nextauth]"

declare module "next-auth" {
    interface Session {
        user: {
            id: string // Add the user ID
            role?: string // Add the role
        } & DefaultSession["user"] // Merge with default user properties
    }

    interface User {
        id: string // Add the user ID
        role?: string // Add the role
    }
}
export default NextAuth(authOptions)

```

---
