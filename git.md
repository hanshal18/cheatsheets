# Basic Commands


### 1. Setup and Configuration

Set your name for commits.
```
git config --global user.name "Your Name"
```

Set your email for commits.
```
git config --global user.email "you@example.com"
```

List all configuration settings.
```
git config --list
```


### 2. Creating Repositories

Initialize a new Git repository.
```
git init
```

Clone an existing repository.
```
git clone <repo_url>
```


### 3. Basic Workflow

Show the status of changes.
```
git status
```

Stage a file for commit.
```
git add <file>
```

Commit staged changes with a message.
```
git commit -m "message"
```

Show commit history.
```
git log
```

Show changes between commits, commit and working directory, etc.
```
git diff
```


### 4. Branching

List all branches.
```
git branch
```

Create a new branch.
```
git branch <branch_name>
```

Switch to a branch.
```
git checkout <branch_name>
```

Create and switch to a new branch.
```
git checkout -b <branch_name>
```

Merge a branch into the current branch.
```
git merge <branch_name>
```

Delete a branch.
```
git branch -d <branch_name>
```


### 5. Remote Repositories

List remote repositories.
```
git remote -v
```

Add a remote repository.
```
git remote add <name> <url>
```

Fetch changes from a remote repository.
```
git fetch <remote>
```

Fetch and merge changes from a remote branch.
```
git pull <remote> <branch>
```

Push commits to a remote branch.
```
git push <remote> <branch>
```


### 6. Undo Changes

Unstage a file.
```
git reset <file>
```

Discard all local changes.
```
git reset --hard
```

Create a new commit that undoes changes from a previous commit.
```
git revert <commit>
```



# Advanced Commands


### 1. Stashing Changes

Save changes temporarily.
```
git stash
```

Reapply stashed changes.
```
git stash apply
```

Remove a stash.
```
git stash drop
```

List all stashes.
```
git stash list
```


### 2. Rebasing

Reapply commits on top of another base branch.
```
git rebase <branch>
```

Interactively rebase commits.
```
git rebase -i <commit>
```


### 3. Tagging

List all tags.
```
git tag
```

Create a new tag.
```
git tag <tag_name>
```

Delete a tag.
```
git tag -d <tag_name>
```

Push a tag to a remote repository.
```
git push origin <tag_name>
```


### 4. Cherry-Picking

Apply the changes introduced by a commit from another branch.
```
git cherry-pick <commit>
```


### 5. Resolving Conflicts

During a merge or rebase, resolve conflicts manually.
After resolving, use git add <file> to mark conflicts as resolved.
Complete the merge/rebase with git commit (for merge) or git rebase --continue (for rebase).


### 6. Viewing and Comparing

Show changes of a specific commit.
```
git show <commit>
```

Show who changed each line of a file.
```
git blame <file>
```


### 7. Advanced Reset and Revert

Reset the index but not the working directory.
```
git reset --soft <commit>
```

Reset the index and working directory.
```
git reset --mixed <commit>
```

Revert changes but keep them staged.
```
git revert -n <commit>
```


### 8. Workflows

Rebase the current branch on top of the upstream branch after fetching.
```
git pull --rebase
```

Force push changes to a remote repository (use with caution).
```
git push --force
```


### Tips
#### Alias Commands: You can create shortcuts for long commands.

Now you can use git co instead of git checkout.
```
git config --global alias.co checkout
```

Global Ignore: Configure global ignore patterns for files you don’t want to track.
```
git config --global core.excludesfile ~/.gitignore_global
```

Feel free to adapt this cheatsheet to suit your workflow and needs. Happy coding!
