# Raj's notes web app


# 26.10.2023 Thursday

This app will have one local copy on my personal machine, and two remotes:

1. https://github.com/ReDI-Cyberspace/Fall-FullStack-bootcamp/tree/raj-sandhu
2. https://github.com/rajsandhu/2023-notes-web-app

When coding locally, my aliases for these repos are "personal-remote" and "redi-remote"

<!-- The initial pull from redi-remote was:

    git pull redi-remote main

Since git doesn't directly support pushing to two remotes, I'll create pseudo-commands for this:

    git remote add all origin
    git remote set-url --add --push all https://github.com/ReDI-Cyberspace/Fall-FullStack-bootcamp/tree/raj-sandhu
    git remote set-url --add --push all https://github.com/rajsandhu/2023-notes-web-app

Then the command to push to both from local will be:

    git push all -->


Sure, let's walk through the steps to set up your remotes and create a command to push to both at the same time.

(1) Add the ReDI-Cyberspace repository as a remote:

    git remote add remote-redi https://github.com/ReDI-Cyberspace/Fall-FullStack-bootcamp.git

(2) Add your personal repository as a remote:
    
    git remote add remote-personal https://github.com/rajsandhu/2023-notes-web-app.git

(3) Create a command to push to both remotes at the same time:

You can create a Git alias to do this. Here's how:

    git config --global alias.pushall '!git push remote-redi && git push remote-personal'

Now, you can use git pushall to push to both remotes at the same time.

(4) Pull from either of the remote repositories:

To pull from the ReDI-Cyberspace repository:

    git pull remote-redi raj-sandhu

To pull from your personal repository:

    git pull remote-personal master

Replace master with the name of the branch you want to pull from if it's not master.

(5) Checkout to a branch:

Before you can push or pull, you need to be on a branch. You can use git checkout to switch to a branch. For example, to switch to the raj-sandhu branch:

    git checkout raj-sandhu

If the branch doesn't exist yet, you can create it at the same time as switching to it by adding the -b option:

    git checkout -b raj-sandhu

Remember to commit your changes before switching branches, or the changes will be lost.

I hope this helps! Let me know if you have any other questions.



    

I will push commits to both repos using the "git push all" command, but I will pull each repo individually. 

Pulling from two different repos in a single step is probably possible somehow, but it probably introduces complications that I would like to avoid for now, particularly when the commit histories of the two remotes are different.

