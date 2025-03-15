# Week 5: Repositories and Version Control

## Studio Abstract

---

> In this  studio, we will discuss repositories and why they are important; and you will set up a repository for your team and use it for the first time.
>

We will address the following activities and exercises in this studio:

- [ ]  Overview of repositories and GitHub
- [ ]  Setting up a team repository on GitHub
- [ ]  Adding files and managing directories
- [ ]  Understanding branch, merge, and pull requests
- [ ]  Repository conflict resolution
- [ ]  Using Markdown for documentation

---

## Repositories in software projects


⏱️ 15 minutes - Class discussion

<p style="text-align:center; font-weight:bold;"> Devices closed for this discussion</p> 

Source code repositories (which can be used for much more than source code!) using tools such as Git and Mercurial are commonplace in software projects.
They allow teams to create, store, manage and share their code and other documentation. But they are much more than tools like Google Drive, OneDrive, or DropBox -- they help to resolve **conflicts** in editing, and to create sub-projects so that you can work on part of a product without affecting the rest.

[Git](https://git-scm.com/), originally created by Linus Torvalds, creator of Linux, is the most commonly-used repository tool. It is a distributed version control system to track versions of files. 

[GitHub](https://github.com/) is a company that provides a browser or desktop based user interface for Git. There are many ways to use Git, and there are other companies that provide Git services, but GitHub is one of the more popular services. In this course, we will use Github for our projects, because it is a well-known tool, and because the course staff can set up a shared space for all projects in the course.

### Why use repositories?

Surely we can just share source code via email or a messaging app by zipping it up; or just share it on Google Docs, OneDrive, DropBox, etc.

Well... we **can** do that; but it is a Very Bad Idea (VBI)!

Consider Imogen and Zac working collaboratively on a software project using a shared drive, such as Google Drive. One day, Imogen downloads a file to work on. A bit later, Zac does too. Imogen makes some changes and then copies the file back to the server. Her changes are all there! A bit later, Zac uploads his copy of the file. His changes are all there! After lunch, Imogen needs to make some further changes, so she gets the file again, knowing that Zac had worked on it. What would she find??

![figs/file_overwrite_without_repository.png](figs/file_overwrite_without_repository.png)

After Imogen recovers from her extreme disappointment, she will have to work with Zac --- despite the fact she will resent him! --- to merge the changes and update them. 

**How can we solve this?** One option is to only allow one person to work on one file at a time. This is OK, but it can cause blocks -- sometimes people want to make minor changes to the same files. What if Zac is working on something for a week and Imogen just needs to correct a small bug?

*Source code repositories* help us with all this with several pieces of functionality:

1. **Pulls**: Multiple people can work on the same file at the same time. They first **pull** any other changes made from the repository since they last used it.
2. **Pushes**: When Imogen **pushes** her changes to the shared repository, three things can happen:
  * Nobody else has made changes since Imogen downloaded the latest version, so everything is good.
  * If Zac or someone else has made changes to the same file but at different lines, a repository tool like Git will simply merge the two files automatically.
  * If Zac or someone else has made changes to the same file and some are at the lines, a repository tool like Git will prevent Imogen copying the file back, will merge any lines that do not conflict, and will show her lines that do conflict. She then needs to **resolve** those conflicts.
  ![figs/file_overwrite_with_conflict_detection.png](figs/file_overwrite_with_conflict_detection.png)
  As a quick note, Git has both **commits** and **pushes**. Each user maintains a local copy of a repository on their machine. They *commit* code to the local repository, and then when they are happy, they *push* it to the server.
3. **Branches and merges**: If Imogen wants to make some changes to the source code that will take a few weeks, she may want to keep pushing her changes to the repository to avoid losing her work. However, she may not want everyone else to use those changes yet; for example, they aren't complete or she hasn't tested them -- this would interfere with others' code. In this case, she can create a **branch** of the repository, where she can continue to push changes just to that branch, which doesn't affect everyone else. Once she is happy, she can **merge** her branch into the main branch of the repository. Again, if there are conflicts, she will not be able to merge until she resolved them.

### Branches

As an example of using **branches**, consider Imogen working for an organisation that has a successful web application. They want to add new features, fix bugs, etc., regularly. They release new versions every few days on average to fix bugs. Imagine they want to go from version V1 to version V1.1 by adding two features, which we'll call features A and B. Imogen estimates it will take about 4 weeks to implement these. 

They may have (at least) three branches:
1. **Main branch**: This is the primary branch where the stable, production-ready code resides. Changes here are thoroughly tested and reviewed. It would be a VBI (very bad idea) for Imogen to start coding those new features directly on the main branch --- customers would see partially implemented features, probably with bugs.
2. **Development branch**: Used for integrating new features and bug fixes before they are merged into the main branch. This branch is less stable than the main branch but more stable than feature branches. However, it would be a bad idea (BI) for Imogen to start adding features directly to this, as other developers in the organisation are also making changes, and it will be difficult for her to test her features while other source code is changing as well.
3. **Feature branches**: These are created from the development branch for specific features or fixes. Developers work on these branches independently, allowing them to make changes without affecting the main or development branches. Imogen can create a **feature branch** from the development branch, that is implementing just her features.  

![figs/git_branchingpng](figs/git_branching.png)

Once Imogen has implemented and tested feature A, she **merges** this. There are three steps to a merge:

1. **Merging feature branches**: Once a feature is complete and tested, it is merged into the development branch. So, Imogen would integrate the changes from her feature branch into the development branch.
2. **Conflict resolution**: During merging, conflicts may arise if changes overlap. A tool like Git will highlight these conflicts, and developers must resolve them before completing the merge.
3. **Final merge to main branch**: After thorough testing and review, changes from the development branch are merged into the main branch. This ensures that only stable and tested code is deployed to production.

Each time these merges happen, conflicts will be detected, and non-conflicting code will be merged. Brilliant! This means that Imogen will actually want to continue working with Zac, rather than resenting him forever and leaving the organisation after six months because she need a break.

### Commit messages

When someone commits changes to a local repository, they are asked to (and should!) use a **commit message**. A commit message is a brief description that explains what changes were made and why. This provides context and clarity for other developers to help team members why changes are made, who made them, to track progress, and to help rollback when changes introduce new problems. 

A good commit message should:
1. Clearly describe what changes have been made. Messages like "Fixed a bug" or "Updated the code" are not good.
2. Start with a verb; e.g. "Add password encryption"
3. Be concise. Keep it to a few words per small change.
4. Reference any issues/tickets that it fixes.
5. Focus on a single thing; that is, avoid committing changes across many features of the software at once -- just make one change or group of changes in each commit.


An example of a nice commit message:

```
Add user authentication feature

- Implement login and registration forms
- Add password encryption
- Update user model to include authentication fields
- Fix related bugs in user session management
```

### Summary

Repositories have several important features:


1. Sharing of code
   * Pull
   * Commit
   * Push

2. Branches
   * Branch
   * Merge
   * Conflict detection and resolution

3. Commit messages

## Your team repository

<p style="text-align:center; font-weight:bold;"> Devices required for all exercises in this section </p> 

In this part of the studio, you will set up and start using your team repository.

We are not going to explicitly tell you all of the commands that you need. Instead, we want you to read the Git documentation to get a more complete understanding of how to use Git as a source code repository.

### Setting up a GitHub repository for your team

⏱️ 10 minutes - Group


Each member of the group should **clone** their repository, which means to take an existing repository and create a copy on your local machine.

Use the following documentation to help you with this task:

- [Atlassian's documentation for setting up a Git repository](https://www.atlassian.com/git/tutorials/setting-up-a-repository)

We have already created the repositories for you using Github education, so, you should start at the section: "Cloning an existing repository: git clone"

### Adding, committing, and pushing files and folders

⏱️ 10 minutes - Group

Git repositories are known as **distributed repositories**. This means that each person has a copy of the repository (including its entire history, etc.) on their local computer, which they need to **sync** with a remote repository so others can see their changes.

The following tasks require you to understand how to add and commit files to your local repository and how to sync those with a remote repository --- in our case, the remote repository on Github.

Use the following documentation to help you with this:

- [Atlassian's documentation for saving changes in Git](https://www.atlassian.com/git/tutorials/saving-changes)
- [Atlassian's documentation for commiting changes in Git](https://www.atlassian.com/git/tutorials/saving-changes/git-commit)
- Atlassian's documentation for syncing changes to a remote Git repository using [push](https://www.atlassian.com/git/tutorials/syncing/git-push) and [pull](https://www.atlassian.com/git/tutorials/syncing/git-pull)

GitHub repositories, like any file storage, require a logical file structure. Complete the following tasks:

- [ ]  Find the team values that you agreed to in week 1 and type them up into a text file (NOT a Word document or similar -- just a plain text file edited in something like Notepad or VSCode). Have you lost your team values? If yes, this is precisely why repositories are great idea! So just write up what you remember. Call this file `team_values.md`.
- [ ]  One team member (who has a copy of the file) should copy this file into the folder where their repository is cloned to.
- [ ]  Next, as a group, work together to figure out how this team member should `add` and `commit` this change to their local repository, and then `push` it to the Github remote repository. Don't forget to add a good commit message!
- [ ]  Now, each team member should pull from the remote Github repository.

The end result should be that each team member should be able to see the file `team_values.md` and open/edit it on their local computer.

If each member cannot see this, trace back to see what you have missed.

Show your legend that you have successfully completed this task before moving on to the next task. 

**Common mistakes**: 
- You need to explicitly tell git when you want to add a file to your local repository. This allows us to have files in the folder where your repository is on your local computer without putting them in the repository itself.
- Remember that when you make a change, you need to first commit it to your local repository and then push it to the remote repository on Github.

### Understanding branch, merge and pull requests

⏱️ 20 minutes - Group

In this exercise, we will learn how to branch and merge. Use the following documentation to help you with this:

- [Atlassian's Git Branch documentation](https://www.atlassian.com/git/tutorials/using-branches)

- [Atlassian's Git Merge documentation](https://www.atlassian.com/git/tutorials/using-branches/git-merge)

Complete the following task, which gets each member to create a branch, make changes, and merge it back into the main branch:

- [ ]  One team member should create a new folder called `Interviews`, which is where you will store your interview data. Commit and push this to the remote repository.
- [ ]  Next, each team member must now sync their local repository using ``pull`` to pull down the new change.
- [ ]  Each member should create a new branch using the `branch` command in Git. In this branch, they are going to add the interview transcripts that you have done so far.
- [ ]  Next, each team member must now create a new folder inside the `Interviews` folder. This new folder should just be their name.
- [ ]  Then, each team member should copy the interview transcripts they have done so far into the folder with their name, commit these locally, and then push to sync with the remote repository. 
- [ ]  At this point, all changes are on the individual team member's branch -- NOT on the main branch. So, each team member should `merge` their branch into the main branch.
- [ ]  Now, each team member should switch to the main branch and pull all of the changes from the other team members.
- [ ]  Finally, each team member should delete the branch they have created as the changes are in the main branch, so the development branches are no longer required. HINT: you need to use the `branch` command to delete a branch.

The end result of this task should be that all team members, on their local machine, have each others' interview transcripts.

If each team member cannot see all of the other team members' transcripts, trace back to see what you have missed.

Show your legend that you have successfully completed this task before moving on to the next task. 

**Common mistakes**: 
- Make sure to pull the repository after your team member has pushed the change with the `Interviews` folder.
- Make sure that you are are not pushing to the main branch after you add your files.


### Managing merge conflicts

⏱️ 20 minutes - Group

The challenge for this task is to create an artificial merge conflict. You can do these a variety of ways.

Use the following documentation to help with this task:

- [Atlassian's documentation on merge conflicts in Git](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts)

Using the `team_values.md` file, use your own creativity to come up with a merge conflict between two team members by changing: (a) the same line of the file; and (b) each a different line of the file. This can be just a spelling correction or a small change in wording -- or add a whole new team value!

Show your legend that you have successfully completed this task before moving on to the next task. 

### One quick point on terminology

**Git** is a tool that allows us to create and use Git source code repositories.

**Github** is a web platform for hosting the repository database. 

Git repositories can be hosted on other web platforms, such as an private platform in an organisation, or other public platforms, such as [BitBucket](https://bitbucket.org/).

---

## Take a break

⏱️ 10 minutes

---

## More than source code: using Markdown

We can use source code repository for more than source code -- we can use it to document our project too! 

However, so that we get the benefit of merging etc., we need to document stuff in plain text files. This could be .txt, HTML files, etc.,

In this course, we will use [Markdown](https://www.markdownguide.org/).

**Markdown** is an easy-to-use markup language that can be used to format plain text. It can be stored in repositories using tools like Github. It is readable in its raw format, but can be converted to better-looking formats such as PDF and HTML (these notes are written in Markdown!).

To write documents in markdown, you can just use any plain text editor, such as Notepad, VSCode, vi (if you are awesome), or even word processors -- but make sure you save as plain text!

And best yet, Github and other repository hosting platforms format Markdown files for you when you read them online.

Use the following tutorials for this task:

- [Markdown basic syntax](https://www.markdownguide.org/basic-syntax/)
- [Markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/)

In this task, you will format your team values using Markdown. Together, go back to your `team_values.md` on one team member's machine and do the following:
- Create a Markdown header called "Team values"
- Put your list of values into an ordered list.
- Format your values so that each value has a name, such as "Praise our legend" in **bold**, followed by a description of the value that is not in *italics*.
- Commit, and push these changes to the remote repository on Github.
- Go to the URL for your Github repository, which should be at [http://<insert>], where you should be able to click on `team_values.md` and see your values nicely formatted!

Show your legend your beautifully-formatted team values.

---

## Bonus: It’s dangerous to go alone! Take this.

⏱️ **∞**

Here is a collection of valuable knowledge and insight that may help you along in this course. Feel free to review this content in your own time. 

### Creating Pull Requests

[https://www.youtube.com/watch?v=8lGpZkjnkt4](https://www.youtube.com/watch?v=8lGpZkjnkt4)

### How to Use Git & GitHub Desktop

[https://www.youtube.com/watch?v=MaqVvXv6zrU](https://www.youtube.com/watch?v=MaqVvXv6zrU)

### Extended syntax for Markdown

[https://www.markdownguide.org/extended-syntax/](https://www.markdownguide.org/extended-syntax/)