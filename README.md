# Raj's notes web app


# 26.10.2023 Thursday

This app will have one local copy on my personal machine, and two remotes:

1. https://github.com/ReDI-Cyberspace/Fall-FullStack-bootcamp/tree/raj-sandhu
2. https://github.com/rajsandhu/2023-notes-web-app

When coding locally, my aliases for these repos are "personal-remote" and "redi-remote"

The initial pull from redi-remote was:

    git pull redi-remote main

Since git doesn't directly support pushing to two remotes, I'll create pseudo-commands for this:

    git remote add all origin
    git remote set-url --add --push all https://github.com/ReDI-Cyberspace/Fall-FullStack-bootcamp/tree/raj-sandhu
    git remote set-url --add --push all https://github.com/rajsandhu/2023-notes-web-app

Then the command to push to both from local will be:

    git push all

I will push commits to both repos using the "git push all" command, but I will pull each repo individually. 

Pulling from two different repos in a single step is probably possible somehow, but it probably introduces complications that I would like to avoid for now, particularly when the commit histories of the two remotes are different.

