# CallFlow Command — current status

## Not a live dispatch system

This repository contains a simple example that selects an available employee from an in-memory list, plus written plans for a future API and database. It is not connected to live phone calls, text messages, appointments, or a shared database.

The old web page displayed controls and a “Simulate Incoming Call” button, but its JavaScript did not connect those controls to working operations. The page has been changed to show the real status instead.

Do not use this repository to route customer calls or store employee/customer information.

## Still needed for live use

- Secure sign-in and owner/employee permissions
- A database that keeps records after restarts
- A phone/text provider connection with verified call records
- Server-side business hours and routing rules
- Reliable audit history, backups, and alerts

`API_SPEC.md` and `schema.sql` are design documents, not a running API or installed database. Follow `AGENTS.md` and explain progress in everyday language.
