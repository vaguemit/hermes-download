Title: Messaging Gateway | Hermes Agent

Description: Chat with Hermes from Telegram, Discord, Slack, WhatsApp, Signal, SMS, Email, Home Assistant, Mattermost, Matrix, DingTalk, Yuanbao, Microsoft Teams, LINE, Webhooks, or any OpenAI-compatible frontend via the API server — architecture and setup overview

Source: https://hermes-agent.nousresearch.com/docs/user-guide/messaging

---

[Skip to main content](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#__docusaurus_skipToContent_fallback)
[Hermes Agent](https://hermes-agent.nousresearch.com/docs/)
[Docs](https://hermes-agent.nousresearch.com/docs/user-stories)
[Skills](https://hermes-agent.nousresearch.com/docs/skills)
[English](https://hermes-agent.nousresearch.com/docs/user-guide/messaging)
- [English](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/)
- [简体中文](https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/messaging/)
[English](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/)
[简体中文](https://hermes-agent.nousresearch.com/docs/zh-Hans/user-guide/messaging/)
[Home](https://hermes-agent.nousresearch.com)
[GitHub](https://github.com/NousResearch/hermes-agent)
[Discord](https://discord.gg/NousResearch)
- [User Stories & Use Cases](https://hermes-agent.nousresearch.com/docs/user-stories)
- [Getting Started](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart)
- [Using Hermes](https://hermes-agent.nousresearch.com/docs/user-guide/cli)
- [Features](https://hermes-agent.nousresearch.com/docs/user-guide/features/overview)
- [Messaging Platforms](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/)[Messaging Gateway](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/)[Telegram](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/telegram)[Discord](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/discord)[Slack](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/slack)[WhatsApp](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/whatsapp)[Signal](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/signal)[Email](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/email)[SMS (Twilio)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/sms)[Home Assistant](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/homeassistant)[Mattermost](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/mattermost)[Matrix](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/matrix)[DingTalk](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/dingtalk)[Feishu / Lark](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/feishu)[WeCom (Enterprise WeChat)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/wecom)[WeCom Callback (Self-Built App)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/wecom-callback)[Weixin (WeChat)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/weixin)[BlueBubbles (iMessage)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/bluebubbles)[QQ Bot](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/qqbot)[Yuanbao](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/yuanbao)[Microsoft Teams](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/teams)[Teams Meetings](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/teams-meetings)[Microsoft Graph Webhook Listener](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/msgraph-webhook)[LINE](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/line)[SimpleX Chat](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/simplex)[Open WebUI](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/open-webui)[Webhooks](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/webhooks)
- [Messaging Gateway](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/)
- [Telegram](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/telegram)
- [Discord](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/discord)
- [Slack](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/slack)
- [WhatsApp](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/whatsapp)
- [Signal](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/signal)
- [Email](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/email)
- [SMS (Twilio)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/sms)
- [Home Assistant](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/homeassistant)
- [Mattermost](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/mattermost)

- [Matrix](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/matrix)
- [DingTalk](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/dingtalk)
- [Feishu / Lark](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/feishu)
- [WeCom (Enterprise WeChat)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/wecom)
- [WeCom Callback (Self-Built App)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/wecom-callback)
- [Weixin (WeChat)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/weixin)
- [BlueBubbles (iMessage)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/bluebubbles)
- [QQ Bot](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/qqbot)
- [Yuanbao](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/yuanbao)
- [Microsoft Teams](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/teams)
- [Teams Meetings](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/teams-meetings)
- [Microsoft Graph Webhook Listener](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/msgraph-webhook)
- [LINE](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/line)
- [SimpleX Chat](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/simplex)
- [Open WebUI](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/open-webui)
- [Webhooks](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/webhooks)
- [Integrations](https://hermes-agent.nousresearch.com/docs/integrations/)
- [Guides & Tutorials](https://hermes-agent.nousresearch.com/docs/guides/tips)
- [Developer Guide](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing)
- [Reference](https://hermes-agent.nousresearch.com/docs/reference/cli-commands)
[User Stories & Use Cases](https://hermes-agent.nousresearch.com/docs/user-stories)
[Getting Started](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart)
[Using Hermes](https://hermes-agent.nousresearch.com/docs/user-guide/cli)
[Features](https://hermes-agent.nousresearch.com/docs/user-guide/features/overview)
[Messaging Platforms](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/)
- [Messaging Gateway](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/)
- [Telegram](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/telegram)
- [Discord](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/discord)
- [Slack](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/slack)
- [WhatsApp](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/whatsapp)
- [Signal](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/signal)
- [Email](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/email)
- [SMS (Twilio)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/sms)
- [Home Assistant](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/homeassistant)
- [Mattermost](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/mattermost)
- [Matrix](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/matrix)
- [DingTalk](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/dingtalk)
- [Feishu / Lark](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/feishu)
- [WeCom (Enterprise WeChat)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/wecom)
- [WeCom Callback (Self-Built App)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/wecom-callback)
- [Weixin (WeChat)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/weixin)
- [BlueBubbles (iMessage)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/bluebubbles)
- [QQ Bot](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/qqbot)
- [Yuanbao](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/yuanbao)
- [Microsoft Teams](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/teams)
- [Teams Meetings](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/teams-meetings)
- [Microsoft Graph Webhook Listener](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/msgraph-webhook)
- [LINE](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/line)
- [SimpleX Chat](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/simplex)

- [Open WebUI](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/open-webui)
- [Webhooks](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/webhooks)
[Messaging Gateway](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/)
[Telegram](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/telegram)
[Discord](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/discord)
[Slack](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/slack)
[WhatsApp](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/whatsapp)
[Signal](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/signal)
[Email](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/email)
[SMS (Twilio)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/sms)
[Home Assistant](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/homeassistant)
[Mattermost](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/mattermost)
[Matrix](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/matrix)
[DingTalk](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/dingtalk)
[Feishu / Lark](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/feishu)
[WeCom (Enterprise WeChat)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/wecom)
[WeCom Callback (Self-Built App)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/wecom-callback)
[Weixin (WeChat)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/weixin)
[BlueBubbles (iMessage)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/bluebubbles)
[QQ Bot](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/qqbot)
[Yuanbao](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/yuanbao)
[Microsoft Teams](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/teams)
[Teams Meetings](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/teams-meetings)
[Microsoft Graph Webhook Listener](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/msgraph-webhook)
[LINE](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/line)
[SimpleX Chat](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/simplex)
[Open WebUI](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/open-webui)
[Webhooks](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/webhooks)
[Integrations](https://hermes-agent.nousresearch.com/docs/integrations/)
[Guides & Tutorials](https://hermes-agent.nousresearch.com/docs/guides/tips)
[Developer Guide](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing)
[Reference](https://hermes-agent.nousresearch.com/docs/reference/cli-commands)
- https://hermes-agent.nousresearch.com/docs/
- Messaging Platforms
- Messaging Gateway

Chat with Hermes from Telegram, Discord, Slack, WhatsApp, Signal, SMS, Email, Home Assistant, Mattermost, Matrix, DingTalk, Feishu/Lark, WeCom, Weixin, BlueBubbles (iMessage), QQ, Yuanbao, Microsoft Teams, LINE, or your browser. The gateway is a single background process that connects to all your configured platforms, handles sessions, runs cron jobs, and delivers voice messages.
For the full voice feature set — including CLI microphone mode, spoken replies in messaging, and Discord voice-channel conversations — see [Voice Mode](https://hermes-agent.nousresearch.com/docs/user-guide/features/voice-mode) and [Use Voice Mode with Hermes](https://hermes-agent.nousresearch.com/docs/guides/use-voice-mode-with-hermes).

## Platform Comparison[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#platform-comparison)
[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#platform-comparison)
Voice = TTS audio replies and/or voice message transcription. Images = send/receive images. Files = send/receive file attachments. Threads = threaded conversations. Reactions = emoji reactions on messages. Typing = typing indicator while processing. Streaming = progressive message updates via editing.

## Architecture[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#architecture)
[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#architecture)
Each platform adapter receives messages, routes them through a per-chat session store, and dispatches them to the AIAgent for processing. The gateway also runs the cron scheduler, ticking every 60 seconds to execute any due jobs.

## Quick Setup[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#quick-setup)
[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#quick-setup)
The easiest way to configure messaging platforms is the interactive wizard:

```
hermes gateway setup # Interactive setup for all messaging platforms
```


```
hermes gateway setup # Interactive setup for all messaging platforms
```

This walks you through configuring each platform with arrow-key selection, shows which platforms are already configured, and offers to start/restart the gateway when done.

## Gateway Commands[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#gateway-commands)
[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#gateway-commands)

```
hermes gateway # Run in foregroundhermes gateway setup # Configure messaging platforms interactivelyhermes gateway install # Install as a user service (Linux) / launchd service (macOS)sudo hermes gateway install --system # Linux only: install a boot-time system servicehermes gateway start # Start the default servicehermes gateway stop # Stop the default servicehermes gateway status # Check default service statushermes gateway status --system # Linux only: inspect the system service explicitly
```


```
hermes gateway # Run in foregroundhermes gateway setup # Configure messaging platforms interactivelyhermes gateway install # Install as a user service (Linux) / launchd service (macOS)sudo hermes gateway install --system # Linux only: install a boot-time system servicehermes gateway start # Start the default servicehermes gateway stop # Stop the default servicehermes gateway status # Check default service statushermes gateway status --system # Linux only: inspect the system service explicitly
```

## Chat Commands (Inside Messaging)[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#chat-commands-inside-messaging)
[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#chat-commands-inside-messaging)

```
/new
```


```
/reset
```


```
/model [provider:model]
```


```
provider:model
```


```
/personality [name]
```


```
/retry
```


```
/undo
```


```
/status
```


```
/whoami
```


```
/stop
```


```
/approve
```


```
/deny
```


```
/sethome
```


```
/compress
```


```
/title [name]
```


```
/resume [name]
```


```
/usage
```


```
/insights [days]
```


```
/reasoning [level|show|hide]
```


```
/voice [on|off|tts|join|leave|status]
```


```
/rollback [number]
```


```
/background <prompt>
```


```
/reload-mcp
```


```
/update
```


```
/help
```


```
/<skill-name>
```

## Session Management[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#session-management)
[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#session-management)

### Session Persistence[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#session-persistence)
[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#session-persistence)
Sessions persist across messages until they reset. The agent remembers your conversation context.

### Reset Policies[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#reset-policies)
[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#reset-policies)
Sessions reset based on configurable policies:
Configure per-platform overrides in ~/.hermes/gateway.json:

```
~/.hermes/gateway.json
```


```
{ "reset_by_platform": { "telegram": { "mode": "idle", "idle_minutes": 240 }, "discord": { "mode": "idle", "idle_minutes": 60 } }}
```


```
{ "reset_by_platform": { "telegram": { "mode": "idle", "idle_minutes": 240 }, "discord": { "mode": "idle", "idle_minutes": 60 } }}
```

[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#security)
By default, the gateway denies all users who are not in an allowlist or paired via DM. This is the safe default for a bot with terminal access.

```
# Restrict to specific users (recommended):TELEGRAM_ALLOWED_USERS=123456789,987654321DISCORD_ALLOWED_USERS=123456789012345678SIGNAL_ALLOWED_USERS=+155****4567,+155****6543SMS_ALLOWED_USERS=+155****4567,+155****6543EMAIL_ALLOWED_USERS=trusted@example.com,colleague@work.comMATTERMOST_ALLOWED_USERS=3uo8dkh1p7g1mfk49ear5fzs5cMATRIX_ALLOWED_USERS=@alice:matrix.orgDINGTALK_ALLOWED_USERS=user-id-1FEISHU_ALLOWED_USERS=ou_xxxxxxxx,ou_yyyyyyyyWECOM_ALLOWED_USERS=user-id-1,user-id-2WECOM_CALLBACK_ALLOWED_USERS=user-id-1,user-id-2TEAMS_ALLOWED_USERS=aad-object-id-1,aad-object-id-2# Or allowGATEWAY_ALLOWED_USERS=123456789,987654321# Or explicitly allow all users (NOT recommended for bots with terminal access):GATEWAY_ALLOW_ALL_USERS=true
```


```
# Restrict to specific users (recommended):TELEGRAM_ALLOWED_USERS=123456789,987654321DISCORD_ALLOWED_USERS=123456789012345678SIGNAL_ALLOWED_USERS=+155****4567,+155****6543SMS_ALLOWED_USERS=+155****4567,+155****6543EMAIL_ALLOWED_USERS=trusted@example.com,colleague@work.comMATTERMOST_ALLOWED_USERS=3uo8dkh1p7g1mfk49ear5fzs5cMATRIX_ALLOWED_USERS=@alice:matrix.orgDINGTALK_ALLOWED_USERS=user-id-1FEISHU_ALLOWED_USERS=ou_xxxxxxxx,ou_yyyyyyyyWECOM_ALLOWED_USERS=user-id-1,user-id-2WECOM_CALLBACK_ALLOWED_USERS=user-id-1,user-id-2TEAMS_ALLOWED_USERS=aad-object-id-1,aad-object-id-2# Or allowGATEWAY_ALLOWED_USERS=123456789,987654321# Or explicitly allow all users (NOT recommended for bots with terminal access):GATEWAY_ALLOW_ALL_USERS=true
```

### DM Pairing (Alternative to Allowlists)[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#dm-pairing-alternative-to-allowlists)
[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#dm-pairing-alternative-to-allowlists)
Instead of manually configuring user IDs, unknown users receive a one-time pairing code when they DM the bot:

```
# The user sees: "Pairing code: XKGH5N7P"# You approve them with:hermes pairing approve telegram XKGH5N7P# Other pairing commands:hermes pairing list # View pending + approved usershermes pairing revoke telegram 123456789 # Remove access
```


```
# The user sees: "Pairing code: XKGH5N7P"# You approve them with:hermes pairing approve telegram XKGH5N7P# Other pairing commands:hermes pairing list # View pending + approved usershermes pairing revoke telegram 123456789 # Remove access
```

Pairing codes expire after 1 hour, are rate-limited, and use cryptographic randomness.

### Slash Command Access Control[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#slash-command-access-control)
[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#slash-command-access-control)
Once users are allowed in, you can split them into admins (full slash command access) and regular users (only the slash commands you explicitly enable). This applies per platform and per scope (DM vs group/channel) and works through the live command registry, so it covers built-in AND plugin-registered slash commands without per-feature wiring.

```
gateway: platforms: discord: extra: allow_from: ["111", "222", "333"] allow_admin_from: ["111"] # admins → all slash commands user_allowed_commands: [status, model] # what non-admins may run # Optional: separate group/channel scope group_allow_admin_from: ["111"] group_user_allowed_commands: [status]
```


```
gateway: platforms: discord: extra: allow_from: ["111", "222", "333"] allow_admin_from: ["111"] # admins → all slash commands user_allowed_commands: [status, model] # what non-admins may run # Optional: separate group/channel scope group_allow_admin_from: ["111"] group_user_allowed_commands: [status]
```

Behavior:
- A user in allow_admin_from for a scope can run every registered slash command.
- A user in allow_from but not in allow_admin_from can only run commands in user_allowed_commands, plus the always-allowed floor: /help and /whoami.
- Plain chat is unaffected. Non-admins can still talk to the agent normally; they just can't trigger arbitrary commands.
- Backward compat: if allow_admin_from is not set for a scope, slash gating is disabled for that scope. Existing installs keep working with no changes.
- DM admin status does not imply group/channel admin status. Each scope has its own admin list.

```
allow_admin_from
```


```
allow_from
```


```
allow_admin_from
```


```
user_allowed_commands
```


```
/help
```


```
/whoami
```


```
allow_admin_from
```

Use /whoami from any platform to see the active scope, your tier (admin / user / unrestricted), and which slash commands you can run. See the [Telegram](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/telegram#slash-command-access-control) and [Discord](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/discord#slash-command-access-control) pages for platform-specific examples.

```
/whoami
```

[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#interrupting-the-agent)
Send any message while the agent is working to interrupt it. Key behaviors:
- In-progress terminal commands are killed immediately (SIGTERM, then SIGKILL after 1s)
- Tool calls are cancelled — only the currently-executing one runs, the rest are skipped
- Multiple messages are combined — messages sent during interruption are joined into one prompt
- /stop command — interrupts without queuing a follow-up message

```
/stop
```

[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#queue-vs-interrupt-vs-steer-busy-input-mode)
By default, messaging a busy agent interrupts it. Two other modes are available:
- queue — follow-up messages wait and run as the next turn after the current task finishes.
- steer — follow-up messages are injected into the current run via /steer, arriving at the agent after the next tool call. No interrupt, no new turn. Falls back to queue behavior if the agent hasn't started yet.

```
queue
```


```
steer
```


```
/steer
```


```
queue
```


```
display: busy_input_mode: steer # or queue, or interrupt (default) busy_ack_enabled: true # set to false to suppress the ⚡/⏳/⏩ chat reply entirely
```


```
display: busy_input_mode: steer # or queue, or interrupt (default) busy_ack_enabled: true # set to false to suppress the ⚡/⏳/⏩ chat reply entirely
```

The first time you message a busy agent on any platform, Hermes appends a one-line reminder to the busy-ack explaining the knob ("💡 First-time tip — …"). The reminder fires once per install — a flag under onboarding.seen.busy_input_prompt latches it. Delete that key to see the tip again.

```
"💡 First-time tip — …"
```


```
onboarding.seen.busy_input_prompt
```

If you find the busy-ack noisy — especially with voice input or rapid-fire messages — set display.busy_ack_enabled: false. Your input is still queued/steered/interrupts as normal, only the chat reply is silenced.

```
display.busy_ack_enabled: false
```

## Tool Progress Notifications[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#tool-progress-notifications)
[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#tool-progress-notifications)
Control how much tool activity is displayed in ~/.hermes/config.yaml:

```
~/.hermes/config.yaml
```


```
display: tool_progress: all # off | new | all | verbose tool_progress_command: false # set to true to enable /verbose in messaging
```


```
display: tool_progress: all # off | new | all | verbose tool_progress_command: false # set to true to enable /verbose in messaging
```

When enabled, the bot sends status messages as it works:

```
💻 `ls -la`...🔍 web_search...📄 web_extract...🐍 execute_code...
```


```
💻 `ls -la`...🔍 web_search...📄 web_extract...🐍 execute_code...
```

## Background Sessions[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#background-sessions)
[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#background-sessions)
Run a prompt in a separate background session so the agent works on it independently while your main chat stays responsive:

```
/background Check all servers in the cluster and report any that are down
```


```
/background Check all servers in the cluster and report any that are down
```

Hermes confirms immediately:

```
🔄 Background task started: "Check all servers in the cluster..." Task ID: bg_143022_a1b2c3
```


```
🔄 Background task started: "Check all servers in the cluster..." Task ID: bg_143022_a1b2c3
```

### How It Works[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#how-it-works)
[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#how-it-works)
Each /background prompt spawns a separate agent instance that runs asynchronously:

```
/background
```

- Isolated session — the background agent has its own session with its own conversation history. It has no knowledge of your current chat context and receives only the prompt you provide.
- Same configuration — inherits your model, provider, toolsets, reasoning settings, and provider routing from the current gateway setup.
- Non-blocking — your main chat stays fully interactive. Send messages, run other commands, or start more background tasks while it works.
- Result delivery — when the task finishes, the result is sent back to the same chat or channel where you issued the command, prefixed with "✅ Background task complete". If it fails, you'll see "❌ Background task failed" with the error.

### Background Process Notifications[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#background-process-notifications)
[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#background-process-notifications)
When the agent running a background session uses terminal(background=true) to start long-running processes (servers, builds, etc.), the gateway can push status updates to your chat. Control this with display.background_process_notifications in ~/.hermes/config.yaml:

```
terminal(background=true)
```


```
display.background_process_notifications
```


```
~/.hermes/config.yaml
```


```
display: background_process_notifications: all # all | result | error | off
```


```
display: background_process_notifications: all # all | result | error | off
```


```
all
```


```
result
```


```
error
```


```
off
```

You can also set this via environment variable:

```
HERMES_BACKGROUND_NOTIFICATIONS=result
```


```
HERMES_BACKGROUND_NOTIFICATIONS=result
```

### Use Cases[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#use-cases)
[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#use-cases)
- Server monitoring — "/background Check the health of all services and alert me if anything is down"
- Long builds — "/background Build and deploy the staging environment" while you continue chatting
- Research tasks — "/background Research competitor pricing and summarize in a table"
- File operations — "/background Organize the photos in ~/Downloads by date into folders"
Background tasks on messaging platforms are fire-and-forget — you don't need to wait or check on them. Results arrive in the same chat automatically when the task finishes.

[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#service-management)

### Linux (systemd)[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#linux-systemd)
[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#linux-systemd)

```
hermes gateway install # Install as user servicehermes gateway start # Start the servicehermes gateway stop # Stop the servicehermes gateway status # Check statusjournalctl --user -u hermes-gateway -f # View logs# Enable lingering (keeps running after logout)sudo loginctl enable-linger $USER# Or install a boot-time system service that still runs as your usersudo hermes gateway install --systemsudo hermes gateway start --systemsudo hermes gateway status --systemjournalctl -u hermes-gateway -f
```


```
hermes gateway install # Install as user servicehermes gateway start # Start the servicehermes gateway stop # Stop the servicehermes gateway status # Check statusjournalctl --user -u hermes-gateway -f # View logs# Enable lingering (keeps running after logout)sudo loginctl enable-linger $USER# Or install a boot-time system service that still runs as your usersudo hermes gateway install --systemsudo hermes gateway start --systemsudo hermes gateway status --systemjournalctl -u hermes-gateway -f
```

Use the user service on laptops and dev boxes. Use the system service on VPS or headless hosts that should come back at boot without relying on systemd linger.
Avoid keeping both the user and system gateway units installed at once unless you really mean to. Hermes will warn if it detects both because start/stop/status behavior gets ambiguous.
If you run multiple Hermes installations on the same machine (with different HERMES_HOME directories), each gets its own systemd service name. The default ~/.hermes uses hermes-gateway; other installations use hermes-gateway-<hash>. The hermes gateway commands automatically target the correct service for your current HERMES_HOME.

```
HERMES_HOME
```


```
~/.hermes
```


```
hermes-gateway
```


```
hermes-gateway-<hash>
```


```
hermes gateway
```


```
HERMES_HOME
```

### macOS (launchd)[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#macos-launchd)
[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#macos-launchd)

```
hermes gateway install # Install as launchd agenthermes gateway start # Start the servicehermes gateway stop # Stop the servicehermes gateway status # Check statustail -f ~/.hermes/logs/gateway.log # View logs
```


```
hermes gateway install # Install as launchd agenthermes gateway start # Start the servicehermes gateway stop # Stop the servicehermes gateway status # Check statustail -f ~/.hermes/logs/gateway.log # View logs
```

The generated plist lives at ~/Library/LaunchAgents/ai.hermes.gateway.plist. It includes three environment variables:

```
~/Library/LaunchAgents/ai.hermes.gateway.plist
```

- PATH — your full shell PATH at install time, with the venv bin/ and node_modules/.bin prepended. This ensures user-installed tools (Node.js, ffmpeg, etc.) are available to gateway subprocesses like the WhatsApp bridge.
- VIRTUAL_ENV — points to the Python virtualenv so tools can resolve packages correctly.
- HERMES_HOME — scopes the gateway to your Hermes installation.

```
bin/
```


```
node_modules/.bin
```

launchd plists are static — if you install new tools (e.g. a new Node.js version via nvm, or ffmpeg via Homebrew) after setting up the gateway, run hermes gateway install again to capture the updated PATH. The gateway will detect the stale plist and reload automatically.

```
hermes gateway install
```

Like the Linux systemd service, each HERMES_HOME directory gets its own launchd label. The default ~/.hermes uses ai.hermes.gateway; other installations use ai.hermes.gateway-<suffix>.

```
HERMES_HOME
```


```
~/.hermes
```


```
ai.hermes.gateway
```


```
ai.hermes.gateway-<suffix>
```

[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#platform-specific-toolsets)
Each platform has its own toolset:

```
hermes-cli
```


```
hermes-telegram
```


```
hermes-discord
```


```
hermes-whatsapp
```


```
hermes-slack
```


```
hermes-google_chat
```


```
hermes-signal
```


```
hermes-sms
```


```
hermes-email
```


```
hermes-homeassistant
```


```
hermes-mattermost
```


```
hermes-matrix
```


```
hermes-dingtalk
```


```
hermes-feishu
```


```
hermes-wecom
```


```
hermes-wecom-callback
```


```
hermes-weixin
```


```
hermes-bluebubbles
```


```
hermes-qqbot
```


```
hermes-yuanbao
```


```
hermes-teams
```


```
hermes-api-server
```


```
clarify
```


```
send_message
```


```
text_to_speech
```


```
hermes-webhook
```

[​](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#next-steps)
- [Telegram Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/telegram)
- [Discord Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/discord)
- [Slack Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/slack)
- [Google Chat Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/google_chat)
- [WhatsApp Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/whatsapp)
- [Signal Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/signal)
- [SMS Setup (Twilio)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/sms)
- [Email Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/email)
- [Home Assistant Integration](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/homeassistant)
- [Mattermost Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/mattermost)
- [Matrix Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/matrix)
- [DingTalk Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/dingtalk)
- [Feishu/Lark Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/feishu)
- [WeCom Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/wecom)
- [WeCom Callback Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/wecom-callback)
- [Weixin Setup (WeChat)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/weixin)
- [BlueBubbles Setup (iMessage)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/bluebubbles)
- [QQBot Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/qqbot)
- [Yuanbao Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/yuanbao)
- [Microsoft Teams Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/teams)
- [Teams Meetings Pipeline](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/teams-meetings)
- [Open WebUI + API Server](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/open-webui)
- [Webhooks](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/webhooks)
[Telegram Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/telegram)
[Discord Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/discord)
[Slack Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/slack)
[Google Chat Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/google_chat)
[WhatsApp Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/whatsapp)
[Signal Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/signal)
[SMS Setup (Twilio)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/sms)
[Email Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/email)
[Home Assistant Integration](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/homeassistant)
[Mattermost Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/mattermost)
[Matrix Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/matrix)
[DingTalk Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/dingtalk)
[Feishu/Lark Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/feishu)
[WeCom Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/wecom)
[WeCom Callback Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/wecom-callback)
[Weixin Setup (WeChat)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/weixin)
[BlueBubbles Setup (iMessage)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/bluebubbles)
[QQBot Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/qqbot)
[Yuanbao Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/yuanbao)
[Microsoft Teams Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/teams)
[Teams Meetings Pipeline](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/teams-meetings)
[Open WebUI + API Server](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/open-webui)
[Webhooks](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/webhooks)

[Edit this page](https://github.com/NousResearch/hermes-agent/edit/main/website/docs/user-guide/messaging/index.md)
[PreviousPage Agent](https://hermes-agent.nousresearch.com/docs/user-guide/skills/optional/web-development/web-development-page-agent)
[NextTelegram](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/telegram)
- [Platform Comparison](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#platform-comparison)
- [Architecture](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#architecture)
- [Quick Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#quick-setup)
- [Gateway Commands](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#gateway-commands)
- [Chat Commands (Inside Messaging)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#chat-commands-inside-messaging)
- [Session Management](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#session-management)[Session Persistence](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#session-persistence)[Reset Policies](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#reset-policies)
- [Session Persistence](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#session-persistence)
- [Reset Policies](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#reset-policies)
- [Security](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#security)[DM Pairing (Alternative to Allowlists)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#dm-pairing-alternative-to-allowlists)[Slash Command Access Control](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#slash-command-access-control)
- [DM Pairing (Alternative to Allowlists)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#dm-pairing-alternative-to-allowlists)
- [Slash Command Access Control](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#slash-command-access-control)
- [Interrupting the Agent](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#interrupting-the-agent)[Queue vs interrupt vs steer (busy-input mode)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#queue-vs-interrupt-vs-steer-busy-input-mode)
- [Queue vs interrupt vs steer (busy-input mode)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#queue-vs-interrupt-vs-steer-busy-input-mode)
- [Tool Progress Notifications](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#tool-progress-notifications)
- [Background Sessions](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#background-sessions)[How It Works](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#how-it-works)[Background Process Notifications](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#background-process-notifications)[Use Cases](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#use-cases)
- [How It Works](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#how-it-works)
- [Background Process Notifications](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#background-process-notifications)
- [Use Cases](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#use-cases)
- [Service Management](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#service-management)[Linux (systemd)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#linux-systemd)[macOS (launchd)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#macos-launchd)
- [Linux (systemd)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#linux-systemd)
- [macOS (launchd)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#macos-launchd)
- [Platform-Specific Toolsets](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#platform-specific-toolsets)
- [Next Steps](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#next-steps)
[Platform Comparison](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#platform-comparison)
[Architecture](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#architecture)
[Quick Setup](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#quick-setup)
[Gateway Commands](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#gateway-commands)

[Chat Commands (Inside Messaging)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#chat-commands-inside-messaging)
[Session Management](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#session-management)
- [Session Persistence](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#session-persistence)
- [Reset Policies](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#reset-policies)
[Session Persistence](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#session-persistence)
[Reset Policies](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#reset-policies)
[Security](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#security)
- [DM Pairing (Alternative to Allowlists)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#dm-pairing-alternative-to-allowlists)
- [Slash Command Access Control](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#slash-command-access-control)
[DM Pairing (Alternative to Allowlists)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#dm-pairing-alternative-to-allowlists)
[Slash Command Access Control](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#slash-command-access-control)
[Interrupting the Agent](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#interrupting-the-agent)
- [Queue vs interrupt vs steer (busy-input mode)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#queue-vs-interrupt-vs-steer-busy-input-mode)
[Queue vs interrupt vs steer (busy-input mode)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#queue-vs-interrupt-vs-steer-busy-input-mode)
[Tool Progress Notifications](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#tool-progress-notifications)
[Background Sessions](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#background-sessions)
- [How It Works](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#how-it-works)
- [Background Process Notifications](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#background-process-notifications)
- [Use Cases](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#use-cases)
[How It Works](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#how-it-works)
[Background Process Notifications](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#background-process-notifications)
[Use Cases](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#use-cases)
[Service Management](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#service-management)
- [Linux (systemd)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#linux-systemd)
- [macOS (launchd)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#macos-launchd)
[Linux (systemd)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#linux-systemd)
[macOS (launchd)](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#macos-launchd)
[Platform-Specific Toolsets](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#platform-specific-toolsets)
[Next Steps](https://hermes-agent.nousresearch.com/docs/user-guide/messaging#next-steps)
- [Getting Started](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart)
- [User Guide](https://hermes-agent.nousresearch.com/docs/user-guide/cli)
- [Developer Guide](https://hermes-agent.nousresearch.com/docs/developer-guide/architecture)
- [Reference](https://hermes-agent.nousresearch.com/docs/reference/cli-commands)
[Getting Started](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart)
[User Guide](https://hermes-agent.nousresearch.com/docs/user-guide/cli)
[Developer Guide](https://hermes-agent.nousresearch.com/docs/developer-guide/architecture)
[Reference](https://hermes-agent.nousresearch.com/docs/reference/cli-commands)
- [Discord](https://discord.gg/NousResearch)
- [GitHub Discussions](https://github.com/NousResearch/hermes-agent/discussions)
- [Skills Hub](https://agentskills.io)
[Discord](https://discord.gg/NousResearch)
[GitHub Discussions](https://github.com/NousResearch/hermes-agent/discussions)
[Skills Hub](https://agentskills.io)
- [GitHub](https://github.com/NousResearch/hermes-agent)
- [Nous Research](https://nousresearch.com)
[GitHub](https://github.com/NousResearch/hermes-agent)
[Nous Research](https://nousresearch.com)

[Nous Research](https://nousresearch.com)

