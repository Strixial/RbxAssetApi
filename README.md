# Roblox Asset ID Conversion API

A braindead-ly simple API for converting asset IDs.
Pull requests welcome, especially considering I'm not great at JavaScript.

Uses `pnpm` for package management.

### Usage

#### GET - `/convert/:clothingId`
Converts the `clothingId` to a template ID.

Returns:
- Success: 200, `\{"template": "0"\}`
- Failure: 500, `\{"error": "Conversion failed", "message": "some kind of error message"\}`