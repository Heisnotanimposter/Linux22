---
description: How to manage document revisions using Git standards
---
# Git-Based Document Revision Workflow

This workflow follows the "Documentation as Code" philosophy to ensure all project documents are managed with the same rigor as code.

## 1. Principles
- **Plain Text First**: Use Markdown (.md) or other text formats to enable line-by-line `git diff`.
- **Atomic Commits**: Group related document changes into single commits with clear messages.
- **Branch for Major Edits**: Use feature branches for significant documentation overhauls.

## 2. Steps

### Step 1: Initialize/Check Repository
Ensure you are in the project root.
```bash
git status
```

### Step 2: Edit Documents
Update your `.md` files in the `docs/` or `system/` directories.

### Step 3: Stage and Commit
Prepare your snapshot.
```bash
git add <filename>
git commit -m "docs: <description of change>"
```

### Step 4: Review and Branch
For collaborative edits:
1. Create a branch: `git checkout -b doc-update-<topic>`
2. Push and create a Pull Request.

### Step 5: Tagging (Milestones)
Mark official document versions.
```bash
git tag -a v1.0.0 -m "Official Release of OS Specifications"
```
