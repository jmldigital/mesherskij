# Client demo deployment

The client demo uses branch `codex/client-demo` and is deployed by Coolify from
the repository Dockerfile. The build exports the Next.js application to `out/`;
Nginx serves those static files and proxies `/supabase/` to the remote gateway.

Configure these variables in Coolify:

| Variable | Build | Runtime | Value |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | No | `http://5.129.241.135/supabase` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | No | The remote instance's public anon key |
| `NEXT_PUBLIC_SITE_URL` | Yes | No | `http://5.129.241.135` |
| `SUPABASE_INTERNAL_URL` | No | Yes | The existing remote Kong gateway URL in Coolify |

The gateway URL must be reachable from the application container. Expose container
port 80 through Coolify's proxy at `http://5.129.241.135`. Enable auto deployment and
configure a signed GitHub push webhook for this branch.

Develop locally with `bun run dev`. Commit and push changes to
`codex/client-demo` to publish an update. Public variables are embedded during
the build, so changing them requires a new deployment. Keep `.env.local`, API
tokens, database passwords and service-role keys out of Git.

`readonly.sql` enables public reads for active quiz content and removes public
write privileges. Apply it once after importing the quiz tables into a fresh
Supabase instance. Storage buckets remain public for playback; uploads use an
administrator's service-role key only during migration.
