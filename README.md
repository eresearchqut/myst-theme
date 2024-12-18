# MyST Theme by QUT
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/executablebooks/myst-theme/blob/main/LICENSE)
[![CI](https://github.com/executablebooks/myst-theme/workflows/CI/badge.svg)](https://github.com/executablebooks/myst-theme/actions)

This is a forked version of [myst-theme by Jupyter Book](https://github.com/jupyter-book/myst-theme) with QUT branding. Including:
- QUT Logo
- QUT Header & Footer Colours
- QUT Acknowledgements, TEQSA & CRICOS

Packages for creating MyST websites themes using React and Remix.

[The MyST Theme components documentation](https://jupyter-book.github.io/myst-theme/?path=/docs/components-introduction--docs) is the best way to visualize the style and structure of components.

## Git Workflow
This section will walk you through on how to:
- [Create branch](#create-branch)
- [Commit & Push your changes](#commit--push-your-changes)
- [Get your branch reviewed and merged](#get-your-branch-reviewed-and-merged)
- [Create a release on latest version](#create-a-release-on-latest-version)

### Create branch
Make sure you are on the latest `main` branch
Use the following command to check which branch you are on:
```bash
  git branch
```
![image](https://github.com/user-attachments/assets/f3b5f828-0388-4999-af58-323c49299a83)

Then, create and checkout your branch:
```bash
  git branch <branch-name>
  git checkout <branch-name>
```
Or combine the two steps with:
```bash
  git checkout -b <branch-name>
```

### Commit & Push your changes
Make sure you are on correct branch, to check:
```bash
  git branch
```
Then, check the list of the files you modified:
```bash
  git status
```
To check all your changes on one or all files in detail, use:
```bash
  git diff <specific-file-path (optional)>
```
Once you are happy with your changes, use following command to stage your changes on one or all files
```bash
  git add . or <specific-file-path>
```
Once you finished staging files, commit your changes with:
```bash
  git commit -m "<your commit message>"
```

### Get your branch reviewed and merged
At this stage, you should already have your worked branch with your latest commit. So far, all your changes happened on your **local** workspace and machine. So you will need to push your branch to remote repository.

To push your branch, use:
```bash
  git push -u origin <branch-name>
```

Now, your branch should be on your remote repository, to create a pull request, follow the instructions in [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

Once your branch is approved, you or the code reviewer will merged the branch into main branch.

### Create a release on latest version
Congratulations on merging your first branch (assume you just did it for first time). 

Now, you may want to create a new release which contains your latest changes.

Again, make sure your are on correct branch. In this case, `main`, which you just merged your latest changes.

To create a new release on Github, create a new tag by using:
```bash
  git tag -a <tag_name> -m "<your-new-release-message>"
```
Then, push the new tag to Github:
```bash
  git push origin <tag_name>
```

If you are using GitHub CLI, follow the instructions in [here](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository?tool=cli).

***IMPORTANT*** 
[technical-docs](https://github.com/eresearchqut/technical-docs) is using `latest` release of this repository, please make sure you understand what you are doing before doing release.

**(Advanced)** Additionally, if your tag is already existed, in this repo, it will likely be `latest`. To override:
```bash
  git push origin latest --force
```

### FAQ
#### Q: Why working on a branch is a better practice over directly on main branch?
**A:** Creating a branch and working on it instead of pushing directly to the main branch is considered a best practice in version control systems like Git. Here’s why and a comparison table between:

| **Aspect**                 | **Working in a Branch**                           | **Pushing Directly to Main**                          |
|----------------------------|---------------------------------------------------|-------------------------------------------------------|
| **Code Isolation**         | Changes are isolated and tested separately.       | Changes are made directly to the main branch.         |
| **Risk of Breaking Code**  | Minimal risk to the main branch.                  | High risk of breaking the main branch.                |
| **Code Review**            | Facilitates collaboration and thorough reviews.   | No review process, leading to potential errors.       |
| **Feature Development**    | Enables parallel development of multiple features.| Difficult to coordinate multiple changes.             |
| **Rollback**               | Easier to revert or discard changes in a branch.  | Rollbacks may be messy or disruptive.                 |
| **Continuous Integration** | Supports automated testing and quality checks.    | Tests may fail on the main branch, disrupting others. |
| **Collaboration**          | Encourages team collaboration without conflicts.  | Direct changes may overwrite others' work.            |
| **Commit History**         | Maintains a clean and organized history.          | May lead to a cluttered commit history.               |

#### Q: Why creating release over manually downloading all files from the repository?
**A:** Creating a release in a version control system like Github is more advantageous than simply providing a manual download of the files. Here's why and a comparison table between:
| **Aspect**                  | **Creating a Release**                                        | **Manual Download**                      |
|-----------------------------|---------------------------------------------------------------|------------------------------------------|
| **Versioning**              | Automatically versioned and tied to commits.                  | No versioning or tracking.               |
| **Source of Truth**         | Linked to a specific commit; reliable.                        | Prone to errors in file selection.       |
| **Ease of Access**          | Pre-packaged and ready to download.                           | Requires manual preparation of files.    |
| **Reproducibility**         | Ensures exact replication of the codebase.                    | Difficult to replicate manually.         |
| **CI/CD Integration**       | Supports automated testing and deployment.                    | No testing or deployment automation.     |
| **Professionalism**         | Demonstrates a polished, user-friendly approach.              | Feels ad-hoc and unorganized.            |
| **Notifications**           | Automatic notifications for new releases.                     | Users must be notified manually.         |
| **Security**                | Files are verified and secure.                                | Files may lack integrity verification.   |

# Development

All dependencies for `myst-theme` are included in this repository (a monorepo!).
The core themes are also included in this repository to aid in development.

## What's inside?

**Components:**

- `myst-to-react`: expose MyST content as an article, built with React
- `@myst-theme/frontmatter`: Show title, authors and affiliations
- `@myst-theme/providers`: React providers for references and site configuration
- `@myst-theme/demo`: myst-demo component for showing syntax
- `@myst-theme/diagrams`: mermaid diagrams for MyST
- `@myst-theme/icons`: MyST icons for React
- `@myst-theme/site`: components and utilities for building Remix sites

**Styles:**

- `@myst-theme/styles`: Reusable style components using tailwind

**Themes:**

- `@myst-theme/book`: Designed to mimic the look-and-feel of an interactive book.
- `@myst-theme/article`: A single-page view of an article with associated notebooks or supporting sub-articles.

### Versioning & Publishing

`myst-theme` uses [changesets](https://github.com/changesets/changesets) to document changes to this monorepo, call `npm run changeset` and follow the prompts. Later, `npm run version` will be called and then `npm run publish`.

### Utilities

`myst-theme` is built and developed using:

- [React](https://reactjs.org/) for component rendering
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Tailwind](https://tailwindcss.com/) for styling
- [Storybook](https://storybook.js.org/) for documenting components

## Development

This repository depends on themes which are brought in as a sub-module.
When first cloning the repository use `git clone --recursive`,
then install the various dependencies:

```
git clone --recursive https://github.com/executablebooks/myst-theme.git
cd myst-theme
npm install
```

### Recommended VSCode Extensions

- [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind): sorts the tailwind class names

### Build

To build all themes and packages, run the following command:

```
npm run build
```

### Develop

These packages are best shown using `storybook` a UI library that powers the docs.
This is the same tool that powers [the MyST Theme components documentation](https://jupyter-book.github.io/myst-theme/?path=/docs/components-introduction--docs).

```
npm run storybook
# and in another terminal
npm run dev
```

## Working with themes

To interact with the themes in development mode (e.g. with live-reload of components and styles as you are making changes), you need three things running:

1. a content server
2. the renderer/application (theme)
3. a process watching all components

```bash
# In a directory with content
myst start --headless
# In myst-theme
npm run theme:book
# In another terminal, watch for changes and rebuild
npm run dev
```

> **Note**: in the future, this repository will likely have it's own content to test out with the themes.
> You can currently look to the mystjs/docs folder, or an [article](https://github.com/simpeg/tle-finitevolume) or a [thesis](https://github.com/rowanc1/phd-thesis).

To run on a specific port (for example, developing locally between two projects), you can specify a custom port with:

```bash
myst start --headless --server-port 3111
CONTENT_CDN_PORT=3111 npm run theme:book
```
To connect to a remote content server, set the `CONTENT_CDN` environment variable:

```bash
CONTENT_CDN=https://remote.example.com npm run theme:book
CONTENT_CDN=https://remote.example.com npm run theme:article
```

## Deployment

To update the theme components on NPM:

```bash
npm run version
npm run publish
```

To update the themes for use with the MyST CLI:

```bash
make deploy-book
make deploy-article
```

This updates the git repository, and sometimes is a large diff and can cause git to hang, if that happens this command can help change the buffer size when sending the diff to GitHub:

```bash
git config --global http.postBuffer 157286400
```
