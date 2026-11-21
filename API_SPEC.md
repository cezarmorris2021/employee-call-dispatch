# Planned API and routing contract

**Status: design document only.** The routes below are not implemented by this repository. Do not treat them as working endpoints.

## Planned sign-in
- POST /api/auth/login
- POST /api/auth/logout
- POST /api/auth/mfa/verify

## Planned employee actions
- POST /api/me/shift/start
- POST /api/me/shift/end
- POST /api/me/status/busy
- POST /api/me/status/available

## Planned admin actions
- GET/POST/PATCH /api/admin/employees
- GET/PUT /api/admin/business-hours
- GET/PUT /api/admin/settings
- GET /api/admin/calls
- GET /api/admin/appointments
- GET /api/admin/audit

## Planned phone-provider notices
- POST /api/webhooks/telephony/inbound
- POST /api/webhooks/telephony/call-status
- POST /api/webhooks/telephony/inbound-sms
- POST /api/webhooks/telephony/sms-status

## Required safeguards before implementation
- Verify signed provider notices.
- Check the correct organization and time zone.
- Apply business hours, duty status, and routing rules on the server.
- Record each call attempt and keep an audit history.
- Add sign-in, permissions, backups, and tenant separation before storing real records.
