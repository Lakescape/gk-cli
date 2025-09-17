# 🚀 GitKraken CLI

`gk` is GitKraken on the command line. The core functionality is focused on "Work Items" which can be thought of as the feature or issue you are trying to tackle. This allows you to work with multiple repos at once and get the same UX as if you were in a monorepo. We also provide robust AI-powered commit messages and Pull Request generation. It also provides an MCP server that streamlines working with git and your Issue and git hosting providers.

GitKraken CLI is available on macOS, Windows, and Unix systems.

![](./images/cli-header-wide.png)

## Table of Contents

- [MCP Server](#mcp-server)
- [Documentation](#documentation)
- [Workflows](#workflows)
- [`git` Command Passthrough](#git-command-passthrough)
- [Installation](#installation)
- [Troubleshooting](#troubleshooting)
- [Support](#support)

## MCP Server

The GitKraken MCP server is a local MCP server that is powerful and easy to use. It wraps git, GitHub, Jira MCP actions as well as provides tools to LLMs that work with GitKraken APIs and functionality. You can find specific installation instructions based on your chosen AI application in the [Help Center](https://help.gitkraken.com/cli/gk-cli-mcp/).

If you want to read more about the MCP server, you can check out the [introduction blog post](https://www.gitkraken.com/blog/introducing-gitkraken-mcp)

## Documentation

`gk help` is going to be your best source for exploring the CLI. But also see the [workflows](#workflows) below.

```bash
Welcome to GitKraken CLI, a premium CLI experience for managing multiple repositories with familiar GIT CLI commands

Usage:
  gk [flags]
  gk [command]

AUTHENTICATING
  auth         Authenticate with the GitKraken platform
  provider     Add or remove provider tokens

CORE COMMANDS
  graph        Display commit graph in current repository
  issue        Manage your issues
  organization Manage your Gitkraken organizations
  work         Interact with your work.
  workspace    Interact with your workspaces. Alias: 'ws'

Additional Commands:
  help         Help about any command
  setup        Display information about your current system configuration
  version      Print the version number of GK CLI

Flags:
  -h, --help   help for gk

Use "gk [command] --help" for more information about a command.
```

## Workflows

Start with a single repo. You can add more later.

In general, your process will look like this:

```bash

# Authenticate
gk auth login

# Navigate to a git repo directory on your filesystem
cd ./path/to/repo

# Then create a Work Item and the current directory
# will be automatically added to the Work Item
gk work create "My new work item"

# Edit files...
# ...

# Commit your changes using AI
gk work commit --ai

# Push your changes
gk work push

# Create a Pull Request
gk work pr create --ai

```

Once you have familiarized yourself with using a single repo, try out creating work items and generating commits and PRs for multiple repos at a time by just adding multiple repos to a new Work Item.

```bash
# Add a repo to the current work item
gk work add ./path/to/repo # path could be as simple as "." if you are in the directory already
```

## `git` Command Passthrough

You can also use `gk` to pass through any `git` command. eg:

```bash
gk status
gk remote -v
# etc
```

## Installation

### macOS

`gk` is available from [Homebrew](https://formulae.brew.sh/cask/gitkraken-cli) with the following command:

Homebrew:

```bash
brew install gitkraken-cli
```

Or download it from the [releases page](https://github.com/gitkraken/gk-cli/releases) and add it to your binaries folder:

```bash
mv ~/Downloads/gk /usr/local/bin/gk
```

---

### Unix / Ubuntu

[![Get it from the Snap Store](https://snapcraft.io/static/images/badges/en/snap-store-black.svg)](https://snapcraft.io/gitkraken-cli)

`gk` is available as a downloadable binary from the [releases page](https://github.com/gitkraken/gk-cli/releases). Once you have it, add it to your binaries folder:

```bash
mv ~/Downloads/gk /usr/local/bin/gk
```

Or create a new directory, move the binary and add it to $PATH:

```bash
mkdir "$HOME/cli"
mv ~/Downloads/gk "$HOME/cli"
export PATH="$HOME/gk:$PATH"
```

You can also [download][releases page] your corresponding package (`.deb`, `.rpm`) and install it with:

```bash
sudo apt install ./gk.deb
```

or

```bash
sudo rpm -i ./gk.rpm
```

---

### Windows

`gk` is available from [Winget][winget] with the following command:

```bash
winget install gitkraken.cli
```

## ⚙️ Configuration

### Nerd Fonts

The GitKraken CLI supports Nerd Fonts to display icons for some commands. To ensure correct icon rendering, please obtain and install a Nerd Font available at https://www.nerdfonts.com/. After installation, set the selected Nerd Font as the default font for your terminal.

## Troubleshooting

### `gk login` freezes after authenticating in browser

This problem is due to the browser. Currently we know that Safari and Brave do not allow to respond to localhost through port 1314. To fix this, change your default browser or copy the URL before the redirect and open it in another browser.

### gk from Oh-My-Zsh

Oh-My-Zsh has `gitk` aliased as `gk` and that can create some problems. To fix this, type in your terminal:

```
unalias gk
```

### Manual macOS Installation

If you install the CLI manually from the releases page on macOS, you will likely run into a security error that looks like this:

![](./images/not-opened.png)

To fix this, go to Settings > Security & Privacy > General and click "Allow Anyway".

![](./images/allow-anyway.png)

Try running `gk setup` again and then click "Open Anyway" to continue.

![](./images/open-anyway.png)

## Business Process Flowchart

```mermaid
flowchart TB
  %% --- Sources ---
  A[Lead / Opportunity\n(CRM)] -->|handoff| B[Bid Agent\n(estimator prompts + RFI basis)]
  B --> C[(Bid Package CSVs\nQTO • Cost Build • Client Cut\nAssembly_IDs • Cost Codes)]
  C --> D{{Human-in-the-Loop\nsanity check}}
  D -->|Approved| E[Client Proposal Sent]
  E -->|Accepted| F[ERP/Accounting\n(Job/Estimate → WBS/GL map)]
  F -->|sync cost codes & items| G[Time System\n(Activities/Labor Codes)]
  F -.->|job #| PPORT[Portfolio: Docks FY’25]

  %% --- Project creation pattern ---
  D -->|Create projects via Ops Agent| H{{Ops Agent}}
  H --> I[Project 1: Client-Facing\n"Dock – {Client/Address} – CF"]
  H --> J[Project 2: Production\n"Dock – {Job#} – PROD"]
  H --> K[(Phase Library – Hidden\nPiles • Boatlifts • Alt Roof • Permits • Fabrication\nTask Templates + Dependencies)]

  K -->|Toggle on if in scope| J
  I -->|Light milestones + client comms\n(no internals, no contingency shown)| CLIENT[Client View]
  J -->|Procurement • Fabrication • Install • QA/QC\nCrewed tasks w/ budgets & units| FIELD[Field & PM View]
  J -->|Budget ↔ Actuals| G
  G -->|Timesheets| J
  J -->|Committed $$ + Burn + CPI/SPI| PPORT
  I -->|status, base price only| PPORT

  %% --- Data backbone ---
  subgraph Data Backbone (unchanged IDs end-to-end)
    C --- X1[(Assembly_ID)]
    C --- X2[(Cost Code)]
    C --- X3[(Labor Code)]
    X1 --- J
    X2 --- J
    X3 --- J
    X2 --- F
    X3 --- G
  end

  %% --- Options & VE ---
  O[Alt Options\n(e.g., Standing Seam Δ, Deck Species Δ)] --> H
  H -->|If option selected| J

  %% --- Contingency policy ---
  style I fill:#F7FBFF,stroke:#8CB3FF,stroke-width:1px
  style J fill:#FFF7F0,stroke:#FF9A3C,stroke-width:1px
  style PPORT fill:#F5FFF7,stroke:#6AC06A,stroke-width:1px

```
