# Database recommendation (version 2, not part of version 1)

## Version 1 needs no database

Static pages, WhatsApp enquiries, an optional free form endpoint, and the existing maid biodata directory. Adding a database now would add risk (personal data) without a clear operational need.

## When to add Supabase

Add it when staff need **enquiry records, lead statuses, assignment, or maid availability syncing** and WhatsApp threads become hard to manage. Your maid project already has a Supabase setup and migrations; reuse its lessons (this repo deliberately does not contain them).

## Suggested architecture

| Table | Purpose | Who can read |
|---|---|---|
| `enquiries` | one row per web enquiry: line (fw/maid), name, phone, email, industry/needs, message, consent timestamp | staff only |
| `enquiry_events` | status changes and notes (new, contacted, quoted, won, lost) | staff only |
| `staff_profiles` | links auth users to roles (admin, consultant) | staff only |
| `candidates` (maid directory) | existing biodata record; publication consent flag | public view exposes only consented, non-sensitive fields |

- **Insert path:** the public site submits through a Supabase Edge Function or the anon key with an `INSERT`-only row-level-security policy; the browser can create an enquiry but never read one.
- **Never** place the service-role key in browser code or in the repository; keep it only in the Edge Function / GitHub secrets.
- Staff dashboard behind Supabase Auth (email + password with MFA), row-level security by role; no shared accounts.
- Spam: keep the honeypot, add a Turnstile or hCaptcha token verified in the Edge Function, and rate-limit by IP.

## PDPA (Malaysia) points

Collect the minimum (no ID or passport numbers through the website), record consent with a timestamp, publish a retention period (to be decided by management), allow access/correction/deletion requests, restrict staff access by role, and keep candidate personal data and photos private unless the candidate has consented to publication. Have the privacy policy approved before any data is stored. Consider the cross-border transfer rule if the Supabase region is outside Malaysia (choose the nearest region and disclose it).

## Free tier and costs

Supabase Free has limits on database size, bandwidth and project pausing after about a week of inactivity (a keep-alive request avoids it). Enquiry volume of a single agency is tiny, so cost is unlikely to matter; Pro is a flat monthly fee if limits or backups become necessary. **Do not enable any paid plan without asking.**
