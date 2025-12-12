# Security Policy

## Security Updates

### December 12, 2025 - Next.js Security Update

#### Summary
Updated Next.js from version 14.2.7 to 14.2.35 to address critical security vulnerabilities in React Server Components (RSC).

#### Vulnerabilities Fixed

1. **CVE-2025-55184 (High Severity) - Denial of Service**
   - A specifically crafted HTTP request could cause an infinite loop that hangs the server process
   - Fixed in Next.js 14.2.35

2. **CVE-2025-67779 (Complete DoS Fix)**
   - Complete fix for the initial CVE-2025-55184 vulnerability
   - Fixed in Next.js 14.2.35

3. **CVE-2025-55183 (Medium Severity) - Source Code Exposure**
   - A specifically crafted HTTP request could cause Server Functions to return compiled source code
   - Could reveal business logic and secrets if defined directly in code
   - Fixed in Next.js 14.2.35

#### Changes Made

- Updated `next` from `14.2.7` to `14.2.35`
- Updated `eslint-config-next` from `14.2.7` to `14.2.35`
- Updated `pnpm-lock.yaml` to reflect new dependencies

#### Impact on Application

- No breaking changes introduced
- All existing functionality remains intact
- Application continues to use React 18.x (compatible with updated Next.js)
- ESLint configuration updated to match Next.js version

#### References

- [Next.js Security Update: December 11, 2025](https://nextjs.org/blog/security-update-2025-12-11)
- [React Blog: Denial of Service and Source Code Exposure in React Server Components](https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components)
- [CVE-2025-67779](https://www.cve.org/CVERecord?id=CVE-2025-67779)
- [CVE-2025-55184](https://www.cve.org/CVERecord?id=CVE-2025-55184)
- [CVE-2025-55183](https://www.cve.org/CVERecord?id=CVE-2025-55183)

## Reporting Security Issues

If you discover a security vulnerability in this project, please report it by opening an issue in the GitHub repository.

## Supported Versions

Currently, we support the latest version of this project with security updates.

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| Older   | :x:                |
