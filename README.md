# Raj's notes web app


# 26.10.2023 Thursday

This app will have one local copy on my personal machine, and two remotes:

1. https://github.com/ReDI-Cyberspace/Fall-FullStack-bootcamp/tree/raj-sandhu
2. https://github.com/rajsandhu/2023-notes-web-app

When coding locally, my aliases for these repos are "personal-remote" and "redi-remote"

The initial pull from redi-remote was:

    git pull redi-remote main

## directions for setting up push and pull from and to the two different remotes:

(1) Add the ReDI-Cyberspace repository as a remote:

    git remote add remote-redi https://github.com/ReDI-Cyberspace/Fall-FullStack-bootcamp.git

(2) Add your personal repository as a remote:

    git remote add remote-personal https://github.com/rajsandhu/2023-notes-web-app.git

(3) Fetch the raj-sandhu branch from the remote-redi repository:

    git fetch remote-redi raj-sandhu

If the raj-sandhu branch does not exist in the remote-redi repository, you'll need to create it first. You can do this by pushing your local main branch to the remote-redi repository with the -u option:

    git push -u remote-redi main:raj-sandhu

(4) Set the raj-sandhu branch of the remote-redi repository as the upstream branch for your local main branch:

    git branch --set-upstream-to=remote-redi/raj-sandhu main

(5) Create a command to push to both remotes at the same time:

You can create a Git alias to do this. Here's how:

    git config --global alias.pushall '!git push remote-redi main:raj-sandhu && git push remote-personal main'

Now, you can use git pushall to push to both remotes at the same time.

(6) Pull from either of the remote repositories:

To pull from the raj-sandhu branch of the ReDI-Cyberspace repository:

    git pull remote-redi raj-sandhu

To pull from the main branch of your personal repository:

    git pull remote-personal main

Remember to commit your changes before pulling, or the changes will be lost.

(7) Force push to override the remote-personal repository with your local version:

If you want your local version to override whatever is on the remote-personal repository, you can force push your local main branch to the remote-personal repository:

    git push -f remote-personal main

Please be aware that force pushing is generally not recommended, as it can result in losing commits and can cause problems for anyone else who has cloned or forked your repository. However, if you're sure you want to override the remote-personal repository with your local version, force pushing is the way to do it.

TEST