Title: Contributing | Hermes Agent

Description: How to contribute to Hermes Agent — dev setup, code style, PR process

Source: https://hermes-agent.nousresearch.com/docs/developer-guide/contributing

---

[Skip to main content](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#__docusaurus_skipToContent_fallback)
[Hermes Agent](https://hermes-agent.nousresearch.com/docs/)
[Docs](https://hermes-agent.nousresearch.com/docs/user-stories)
[Skills](https://hermes-agent.nousresearch.com/docs/skills)
[English](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing)
- [English](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing)
- [简体中文](https://hermes-agent.nousresearch.com/docs/zh-Hans/developer-guide/contributing)
[English](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing)
[简体中文](https://hermes-agent.nousresearch.com/docs/zh-Hans/developer-guide/contributing)
[Home](https://hermes-agent.nousresearch.com)
[GitHub](https://github.com/NousResearch/hermes-agent)
[Discord](https://discord.gg/NousResearch)
- [User Stories & Use Cases](https://hermes-agent.nousresearch.com/docs/user-stories)
- [Getting Started](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart)
- [Using Hermes](https://hermes-agent.nousresearch.com/docs/user-guide/cli)
- [Features](https://hermes-agent.nousresearch.com/docs/user-guide/features/overview)
- [Messaging Platforms](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/)
- [Integrations](https://hermes-agent.nousresearch.com/docs/integrations/)
- [Guides & Tutorials](https://hermes-agent.nousresearch.com/docs/guides/tips)
- [Developer Guide](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing)[Contributing](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing)[Architecture](https://hermes-agent.nousresearch.com/docs/developer-guide/architecture)[Extending](https://hermes-agent.nousresearch.com/docs/developer-guide/adding-tools)[Internals](https://hermes-agent.nousresearch.com/docs/developer-guide/tools-runtime)
- [Contributing](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing)
- [Architecture](https://hermes-agent.nousresearch.com/docs/developer-guide/architecture)
- [Extending](https://hermes-agent.nousresearch.com/docs/developer-guide/adding-tools)
- [Internals](https://hermes-agent.nousresearch.com/docs/developer-guide/tools-runtime)
- [Reference](https://hermes-agent.nousresearch.com/docs/reference/cli-commands)
[User Stories & Use Cases](https://hermes-agent.nousresearch.com/docs/user-stories)
[Getting Started](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart)
[Using Hermes](https://hermes-agent.nousresearch.com/docs/user-guide/cli)
[Features](https://hermes-agent.nousresearch.com/docs/user-guide/features/overview)
[Messaging Platforms](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/)
[Integrations](https://hermes-agent.nousresearch.com/docs/integrations/)
[Guides & Tutorials](https://hermes-agent.nousresearch.com/docs/guides/tips)
[Developer Guide](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing)
- [Contributing](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing)
- [Architecture](https://hermes-agent.nousresearch.com/docs/developer-guide/architecture)
- [Extending](https://hermes-agent.nousresearch.com/docs/developer-guide/adding-tools)
- [Internals](https://hermes-agent.nousresearch.com/docs/developer-guide/tools-runtime)
[Contributing](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing)
[Architecture](https://hermes-agent.nousresearch.com/docs/developer-guide/architecture)
[Extending](https://hermes-agent.nousresearch.com/docs/developer-guide/adding-tools)
[Internals](https://hermes-agent.nousresearch.com/docs/developer-guide/tools-runtime)
[Reference](https://hermes-agent.nousresearch.com/docs/reference/cli-commands)
- https://hermes-agent.nousresearch.com/docs/
- Developer Guide
- Contributing

Thank you for contributing to Hermes Agent! This guide covers setting up your dev environment, understanding the codebase, and getting your PR merged.

## Contribution Priorities[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#contribution-priorities)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#contribution-priorities)
We value contributions in this order:
1. Bug fixes — crashes, incorrect behavior, data loss
2. Cross-platform compatibility — macOS, different Linux distros, WSL2
3. Security hardening — shell injection, prompt injection, path traversal
4. Performance and robustness — retry logic, error handling, graceful degradation
5. New skills — broadly useful ones (see [Creating Skills](https://hermes-agent.nousresearch.com/docs/developer-guide/creating-skills))
6. New tools — rarely needed; most capabilities should be skills
7. Documentation — fixes, clarifications, new examples
[Creating Skills](https://hermes-agent.nousresearch.com/docs/developer-guide/creating-skills)

## Common contribution paths[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#common-contribution-paths)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#common-contribution-paths)
- Building a custom/local tool without modifying Hermes core? Start with [Build a Hermes Plugin](https://hermes-agent.nousresearch.com/docs/guides/build-a-hermes-plugin)
- Building a new built-in core tool for Hermes itself? Start with [Adding Tools](https://hermes-agent.nousresearch.com/docs/developer-guide/adding-tools)
- Building a new skill? Start with [Creating Skills](https://hermes-agent.nousresearch.com/docs/developer-guide/creating-skills)
- Building a new inference provider? Start with [Adding Providers](https://hermes-agent.nousresearch.com/docs/developer-guide/adding-providers)
[Build a Hermes Plugin](https://hermes-agent.nousresearch.com/docs/guides/build-a-hermes-plugin)
[Adding Tools](https://hermes-agent.nousresearch.com/docs/developer-guide/adding-tools)
[Creating Skills](https://hermes-agent.nousresearch.com/docs/developer-guide/creating-skills)
[Adding Providers](https://hermes-agent.nousresearch.com/docs/developer-guide/adding-providers)

## Development Setup[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#development-setup)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#development-setup)

### Prerequisites[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#prerequisites)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#prerequisites)

```
--recurse-submodules
```


```
git-lfs
```

[install](https://docs.astral.sh/uv/)

```
package.json
```

### Clone and Install[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#clone-and-install)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#clone-and-install)

```
git clone --recurse-submodules https://github.com/NousResearch/hermes-agent.gitcd hermes-agent# Create venv with Python 3.11uv venv venv --python 3.11export VIRTUAL_ENV="$(pwd)/venv"# Install with all extras (messaging, cron, CLI menus, dev tools)uv pip install -e ".[all,dev]"# Optional: browser toolsnpm install
```


```
git clone --recurse-submodules https://github.com/NousResearch/hermes-agent.gitcd hermes-agent# Create venv with Python 3.11uv venv venv --python 3.11export VIRTUAL_ENV="$(pwd)/venv"# Install with all extras (messaging, cron, CLI menus, dev tools)uv pip install -e ".[all,dev]"# Optional: browser toolsnpm install
```

### Configure for Development[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#configure-for-development)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#configure-for-development)

```
mkdir -p ~/.hermes/{cron,sessions,logs,memories,skills}cp cli-config.yaml.example ~/.hermes/config.yamltouch ~/.hermes/.env# Add at minimum an LLM provider key:echo 'OPENROUTER_API_KEY=sk-or-v1-your-key' >> ~/.hermes/.env
```


```
mkdir -p ~/.hermes/{cron,sessions,logs,memories,skills}cp cli-config.yaml.example ~/.hermes/config.yamltouch ~/.hermes/.env# Add at minimum an LLM provider key:echo 'OPENROUTER_API_KEY=sk-or-v1-your-key' >> ~/.hermes/.env
```

### Run[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#run)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#run)

```
# Symlink for global accessmkdir -p ~/.local/binln -sf "$(pwd)/venv/bin/hermes" ~/.local/bin/hermes# Verifyhermes doctorhermes chat -q "Hello"
```


```
# Symlink for global accessmkdir -p ~/.local/binln -sf "$(pwd)/venv/bin/hermes" ~/.local/bin/hermes# Verifyhermes doctorhermes chat -q "Hello"
```

### Run Tests[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#run-tests)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#run-tests)

```
pytest tests/ -v
```


```
pytest tests/ -v
```

## Code Style[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#code-style)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#code-style)
- PEP 8 with practical exceptions (no strict line length enforcement)
- Comments: Only when explaining non-obvious intent, trade-offs, or API quirks
- Error handling: Catch specific exceptions. Use logger.warning()/logger.error() with exc_info=True for unexpected errors
- Cross-platform: Never assume Unix (see below)
- Profile-safe paths: Never hardcode ~/.hermes — use get_hermes_home() from hermes_constants for code paths and display_hermes_home() for user-facing messages. See [AGENTS.md](https://github.com/NousResearch/hermes-agent/blob/main/AGENTS.md#profiles-multi-instance-support) for full rules.

```
logger.warning()
```


```
logger.error()
```


```
exc_info=True
```


```
~/.hermes
```


```
get_hermes_home()
```


```
hermes_constants
```


```
display_hermes_home()
```

[AGENTS.md](https://github.com/NousResearch/hermes-agent/blob/main/AGENTS.md#profiles-multi-instance-support)

## Cross-Platform Compatibility[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#cross-platform-compatibility)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#cross-platform-compatibility)
Hermes officially supports Linux, macOS, WSL2, and native Windows (early beta — via PowerShell install). Native Windows uses Git Bash (from [Git for Windows](https://git-scm.com/download/win)) for shell commands. A few features require POSIX kernel primitives and are gated: the dashboard's embedded PTY terminal pane (/chat tab) is WSL2-only. The native-Windows path is new and moves fast — if you're doing Windows-heavy dev, expect to hit and fix rough edges.

```
/chat
```

When contributing code, keep these rules in mind:
- Don't add unguarded signal.SIGKILL references. It's not defined on Windows.  Either route through gateway.status.terminate_pid(pid, force=True) (the centralized primitive that does taskkill /T /F on Windows and SIGKILL on POSIX), or fall back with getattr(signal, "SIGKILL", signal.SIGTERM).
- Catch OSError alongside ProcessLookupError on os.kill(pid, 0) probes. Windows raises OSError (WinError 87, "parameter is incorrect") for an already-gone PID instead of ProcessLookupError.
- Don't force the terminal to POSIX semantics. os.setsid, os.killpg, os.getpgid, os.fork all raise on Windows — gate them with if sys.platform != "win32": or if os.name != "nt":.
- Open files with an explicit encoding="utf-8". The Python default on Windows is the system locale (often cp1252), which mojibakes or crashes on non-Latin text.
- Use pathlib.Path / os.path.join — never manually concat with /. This matters less for strings the OS gives us back and more for strings we construct to hand to subprocesses.

```
signal.SIGKILL
```


```
gateway.status.terminate_pid(pid, force=True)
```


```
taskkill /T /F
```


```
getattr(signal, "SIGKILL", signal.SIGTERM)
```


```
OSError
```


```
ProcessLookupError
```


```
os.kill(pid, 0)
```


```
OSError
```


```
ProcessLookupError
```


```
os.setsid
```


```
os.killpg
```


```
os.getpgid
```


```
os.fork
```


```
if sys.platform != "win32":
```


```
if os.name != "nt":
```


```
encoding="utf-8"
```


```
pathlib.Path
```


```
os.path.join
```


```
/
```

Key patterns:

### 1. termios and fcntl are Unix-only[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#1-termios-and-fcntl-are-unix-only)
```
termios
```


```
fcntl
```

[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#1-termios-and-fcntl-are-unix-only)
Always catch both ImportError and NotImplementedError:

```
ImportError
```


```
NotImplementedError
```


```
try: from simple_term_menu import TerminalMenu menu = TerminalMenu(options) idx = menu.show()except (ImportError, NotImplementedError): # Fallback: numbered menu for i, opt in enumerate(options): print(f" {i+1}. {opt}") idx = int(input("Choice: ")) - 1
```


```
try: from simple_term_menu import TerminalMenu menu = TerminalMenu(options) idx = menu.show()except (ImportError, NotImplementedError): # Fallback: numbered menu for i, opt in enumerate(options): print(f" {i+1}. {opt}") idx = int(input("Choice: ")) - 1
```

### 2. File encoding[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#2-file-encoding)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#2-file-encoding)
Some environments may save .env files in non-UTF-8 encodings:

```
.env
```


```
try: load_dotenv(env_path)except UnicodeDecodeError: load_dotenv(env_path, encoding="latin-1")
```


```
try: load_dotenv(env_path)except UnicodeDecodeError: load_dotenv(env_path, encoding="latin-1")
```

### 3. Process management[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#3-process-management)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#3-process-management)
os.setsid(), os.killpg(), and signal handling differ across platforms:

```
os.setsid()
```


```
os.killpg()
```


```
import platformif platform.system() != "Windows": kwargs["preexec_fn"] = os.setsid
```


```
import platformif platform.system() != "Windows": kwargs["preexec_fn"] = os.setsid
```

### 4. Path separators[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#4-path-separators)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#4-path-separators)
Use pathlib.Path instead of string concatenation with /.

```
pathlib.Path
```


```
/
```

[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#security-considerations)
Hermes has terminal access. Security matters.

### Existing Protections[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#existing-protections)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#existing-protections)

```
shlex.quote()
```


```
tools/approval.py
```


```
os.path.realpath()
```

### Contributing Security-Sensitive Code[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#contributing-security-sensitive-code)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#contributing-security-sensitive-code)
- Always use shlex.quote() when interpolating user input into shell commands
- Resolve symlinks with os.path.realpath() before access control checks
- Don't log secrets
- Catch broad exceptions around tool execution
- Test on all platforms if your change touches file paths or processes

```
shlex.quote()
```


```
os.path.realpath()
```

[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#pull-request-process)

### Branch Naming[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#branch-naming)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#branch-naming)

```
fix/description # Bug fixesfeat/description # New featuresdocs/description # Documentationtest/description # Testsrefactor/description # Code restructuring
```


```
fix/description # Bug fixesfeat/description # New featuresdocs/description # Documentationtest/description # Testsrefactor/description # Code restructuring
```

### Before Submitting[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#before-submitting)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#before-submitting)
1. Run tests: pytest tests/ -v
2. Test manually: Run hermes and exercise the code path you changed
3. Check cross-platform impact: Consider macOS and different Linux distros
4. Keep PRs focused: One logical change per PR

```
pytest tests/ -v
```


```
hermes
```

### PR Description[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#pr-description)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#pr-description)
Include:
- What changed and why
- How to test it
- What platforms you tested on
- Reference any related issues

### Commit Messages[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#commit-messages)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#commit-messages)
We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>
```


```
<type>(<scope>): <description>
```


```
fix
```


```
feat
```


```
docs
```


```
test
```


```
refactor
```


```
chore
```

Scopes: cli, gateway, tools, skills, agent, install, whatsapp, security

```
cli
```


```
gateway
```


```
tools
```


```
skills
```


```
agent
```


```
install
```


```
whatsapp
```


```
security
```

Examples:

```
fix(cli): prevent crash in save_config_value when model is a stringfeat(gateway): add WhatsApp multi-user session isolationfix(security): prevent shell injection in sudo password piping
```


```
fix(cli): prevent crash in save_config_value when model is a stringfeat(gateway): add WhatsApp multi-user session isolationfix(security): prevent shell injection in sudo password piping
```

## Reporting Issues[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#reporting-issues)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#reporting-issues)
- Use [GitHub Issues](https://github.com/NousResearch/hermes-agent/issues)
- Include: OS, Python version, Hermes version (hermes version), full error traceback
- Include steps to reproduce
- Check existing issues before creating duplicates
- For security vulnerabilities, please report privately
[GitHub Issues](https://github.com/NousResearch/hermes-agent/issues)

```
hermes version
```

## Community[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#community)
[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#community)
- Discord: [discord.gg/NousResearch](https://discord.gg/NousResearch)
- GitHub Discussions: For design proposals and architecture discussions
- Skills Hub: Upload specialized skills and share with the community
[discord.gg/NousResearch](https://discord.gg/NousResearch)

[​](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#license)
By contributing, you agree that your contributions will be licensed under the [MIT License](https://github.com/NousResearch/hermes-agent/blob/main/LICENSE).
[Edit this page](https://github.com/NousResearch/hermes-agent/edit/main/website/docs/developer-guide/contributing.md)
[PreviousOperate the Teams Meeting Pipeline](https://hermes-agent.nousresearch.com/docs/guides/operate-teams-meeting-pipeline)
[NextArchitecture](https://hermes-agent.nousresearch.com/docs/developer-guide/architecture)
- [Contribution Priorities](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#contribution-priorities)
- [Common contribution paths](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#common-contribution-paths)
- [Development Setup](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#development-setup)[Prerequisites](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#prerequisites)[Clone and Install](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#clone-and-install)[Configure for Development](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#configure-for-development)[Run](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#run)[Run Tests](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#run-tests)
- [Prerequisites](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#prerequisites)
- [Clone and Install](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#clone-and-install)
- [Configure for Development](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#configure-for-development)
- [Run](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#run)
- [Run Tests](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#run-tests)
- [Code Style](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#code-style)
- [Cross-Platform Compatibility](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#cross-platform-compatibility)[1. termios and fcntl are Unix-only](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#1-termios-and-fcntl-are-unix-only)[2. File encoding](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#2-file-encoding)[3. Process management](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#3-process-management)[4. Path separators](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#4-path-separators)
- [1. termios and fcntl are Unix-only](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#1-termios-and-fcntl-are-unix-only)
- [2. File encoding](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#2-file-encoding)
- [3. Process management](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#3-process-management)
- [4. Path separators](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#4-path-separators)
- [Security Considerations](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#security-considerations)[Existing Protections](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#existing-protections)[Contributing Security-Sensitive Code](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#contributing-security-sensitive-code)
- [Existing Protections](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#existing-protections)
- [Contributing Security-Sensitive Code](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#contributing-security-sensitive-code)
- [Pull Request Process](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#pull-request-process)[Branch Naming](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#branch-naming)[Before Submitting](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#before-submitting)[PR Description](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#pr-description)[Commit Messages](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#commit-messages)
- [Branch Naming](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#branch-naming)

- [Before Submitting](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#before-submitting)
- [PR Description](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#pr-description)
- [Commit Messages](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#commit-messages)
- [Reporting Issues](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#reporting-issues)
- [Community](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#community)
- [License](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#license)
[Contribution Priorities](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#contribution-priorities)
[Common contribution paths](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#common-contribution-paths)
[Development Setup](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#development-setup)
- [Prerequisites](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#prerequisites)
- [Clone and Install](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#clone-and-install)
- [Configure for Development](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#configure-for-development)
- [Run](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#run)
- [Run Tests](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#run-tests)
[Prerequisites](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#prerequisites)
[Clone and Install](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#clone-and-install)
[Configure for Development](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#configure-for-development)
[Run](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#run)
[Run Tests](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#run-tests)
[Code Style](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#code-style)
[Cross-Platform Compatibility](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#cross-platform-compatibility)
- [1. termios and fcntl are Unix-only](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#1-termios-and-fcntl-are-unix-only)
- [2. File encoding](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#2-file-encoding)
- [3. Process management](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#3-process-management)
- [4. Path separators](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#4-path-separators)
[1. termios and fcntl are Unix-only](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#1-termios-and-fcntl-are-unix-only)

```
termios
```


```
fcntl
```

[2. File encoding](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#2-file-encoding)
[3. Process management](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#3-process-management)
[4. Path separators](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#4-path-separators)
[Security Considerations](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#security-considerations)
- [Existing Protections](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#existing-protections)
- [Contributing Security-Sensitive Code](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#contributing-security-sensitive-code)
[Existing Protections](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#existing-protections)
[Contributing Security-Sensitive Code](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#contributing-security-sensitive-code)
[Pull Request Process](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#pull-request-process)
- [Branch Naming](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#branch-naming)
- [Before Submitting](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#before-submitting)
- [PR Description](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#pr-description)
- [Commit Messages](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#commit-messages)

[Branch Naming](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#branch-naming)
[Before Submitting](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#before-submitting)
[PR Description](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#pr-description)
[Commit Messages](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#commit-messages)
[Reporting Issues](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#reporting-issues)
[Community](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#community)
[License](https://hermes-agent.nousresearch.com/docs/developer-guide/contributing#license)
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

