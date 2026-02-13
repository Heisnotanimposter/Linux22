---
description: How to merge and align colliding or unrelated Git projects
---
# Project Merge and Alignment Workflow

This workflow defines the standard process for integrating disparate repositories into the unified Linux 22 architecture.

## 1. Principles
- **Respect Historical Disparity**: Acknowledge when projects have no common history and use appropriate merge flags.
- **Manual Alignment**: Automated merges are just the starting point; manual structural alignment and dependency normalization are required.
- **Unified Vision**: The final commit represents the integration of two distinct systems into a single functional unit.

## 2. Steps

### Step 1: Prepare the Base
Clone or navigate to the primary repository (e.g., `sentient-os`).
```bash
cd sentient-os
```

### Step 2: Add Remote
Add the secondary repository as a remote.
```bash
git remote add -f projectB <url_to_second_repo>
```

### Step 3: Merge Unrelated Histories
Merge the target branch using the `--allow-unrelated-histories` flag.
```bash
git merge projectB/main --allow-unrelated-histories
```

### Step 4: Conflict Resolution
1. Identify conflicts: `git status`
2. Manually edit files to resolve collisions (especially in shared paths like `README.md` or configuration files).
3. Stage resolved files: `git add <file>`

### Step 5: Structural Alignment & Upgrading
Update the merged codebase to follow the latest internal standards:
- Align file organization.
- Normalize dependency versions in `package.json` or `CMakeLists.txt`.
- Ensure cross-component compatibility.

### Step 6: Finalize
Commit and push the combined history.
```bash
git commit -m "merge: integrate projectB into unified architecture"
git push origin <main-branch>
```
