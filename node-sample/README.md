# node-sample

A tiny zero-dependency Node.js HTTP server, using only the built-in `http` module.

## Run it

```bash
npm start
# or
node server.js
```

The server listens on `http://localhost:3000/` by default (override with the `PORT` environment variable).

## Endpoints

| Route      | Description                          |
|------------|--------------------------------------|
| `/`        | Welcome message                      |
| `/health`  | Health check with process uptime     |
| `/time`    | Current server time (ISO 8601)       |

## Example

```bash
curl http://localhost:3000/health
```

```json
{ "status": "ok", "uptime": 12.345 }
```
