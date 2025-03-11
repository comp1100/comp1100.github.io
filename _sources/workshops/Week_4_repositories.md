# Week 5: Repositories and Version Control

### Studio Abstract

---

> In this  studio, we will discuss repositories and why they are important; and you will to set up a repository for your team.
>

We will address the following activities and exercises in studio 5.

- [ ]  Overview of repositories and GitHub
- [ ]  Setting up a team repository on GitHub
- [ ]  Adding files and managing directories
- [ ]  Understanding branch, merge, and pull requests
- [ ]  Repository conflict resolution
- [ ]  Using Markdown for documentation 

---

# Repositories in software projects


⏱️ 10 minutes - Class

<p style="text-align:center; font-weight:bold;"> Devices closed for this exercise </p> 

Source code repositories (which can be used for much more than source code!) using tools such a Git and Mercurial are common place in software projects.
They allow teams to create, store, manage and share their code and other documentation. But they are much more than tools such as Google Drive, OneDrive, or DropBox -- they help to resolve **conflicts** in editing, and to create sub-projects so that you can work on part of a product without affecting the rest.

[Git](https://git-scm.com/), originally created by Linus Torvalds, creator of Linux, is the most commonly-used repository tool. It is a distribution version control system to track versions of files. 

[GitHub](https://github.com/) is a company that provides a browser or desktop based user interface for Git. There are many ways to use Git, and there are other companies that provide Git services, but GitHub is one of the more popular services. In this course, we will use Github for our projects, because it is a well-known tool, and because the course staff can setup a shared space for all projects in the course.

## Why use repositories?

Surely we can just share source code via email or a messenging app by zipping it up; or just share it on Google Docs, OneDrive, DropBox, etc.

Well... we **can** do that; but it is a Very Bad Idea (VBI)!

Consider Imogen and Zac working collaborately on a software project using a shared drive, such as Google Drive. One day, Imogen downloads a file to work on. A bit later, Zac does too. Imogen makes some changes and then copies the file back to the server. Her changes are all there! A bit later, Zac uploads his copy of the file. His changes are all there! After lunch, Imogen needs to make some further changes, so she gets the file again, knowing that Zac had worked on it. What would she find??

![figs/file_overwrite_without_repository.png](figs/file_overwrite_without_repository.png)

After Imogen recovers from her extreme disappoint, she will have to work with Zac to merge the changes and update them. 

**How can we solve this?** One option is to only allow one person to work on one file at a time. This is ok, but it can cause a block. What if Zac is working on something for a week and Imogen just needs to correct a small bug?

Source code repositories help us with all this with several pieces of functionality:

1. Multiple people can work on the same file at the same time. They first **pull** any other changes made from the repository since they last used it.
2. When Imogen **pushes** her changes to the shared repository, three things can happen:
  * Nobody else has made changes since Imogen downloaded the latest version, so everything is good.
  * If Zac or someone else has made changes to the same file but at different lines, a repository tool like Git will simply merge the two files automatically.
  * If Zac or someone else has made changes to the same file and some are at the lines, a repository tool like Git will prevent Imogen copying the file back, will merge any lines that do not conflict, and will show her lines that do conflict. She then needs to **resolve** those conflicts.
  ![figs/file_overwrite_with_conflict_detection.png](figs/file_overwrite_with_conflict_detection.png)
3. If Imogen wants to make some changes to the source code that will take a few weeks, she may want to keep pushing her changes to the repository. However, she may not want everyone else to use those changes yet; for example, they aren't complete or she hasn't tested them. In this case, she can create a **branch** of the repository, where she can continue to push changes just to that branch, which doesn't affect everyone else. Once she is happy, she can **merge** her branch into the main branch of the repository. Again, if there are conflicts, she will not be able to merge until she resolved them.

As an example of uses **branches**, consider Imogen working for an organisation that has a successful web application. They want to add new features, fix bugs, etc., regularly. They release new versions every few days on average to fix bugs. Imagine they want to go from version V1 to version V1.1 by adding two features, which we call features A and B. Imogen estimates it will take about 4 weeks to implement these. Their **main branch** contains the source code that is deployed on the web server and is released every few days with bug fixes etc. It would be a VBI (very bad idea) for Imogen to start coding those new features directly on the main branch --- customers would see partially implemented features, probably with bugs.

Instead, the organisation use a **development branch** for code that is currently under develop and hasn't been properly tested and reviewed. However, it would be a bad idea (BI) for Imogen to start adding features directly to this, as other developers in the organisation are also making changes, and it will be difficult for her to test her features while other source code is changing as well. Instead, Imogen creates another branch, called a **feature branch** from the development branch, that is implementing just her features.  

![figs/git_branchingpng](figs/git_branching.png)

Once Imogen has implemented and tested feature A, she merges this into the development branch, where Zac reviews it. Imogen continues to implement feature B, and similarly, checks it into the development branch for review. Once the code is properly tested and reviewed, it is merged into the main branch, and will into the live web application at the new release. 

Each time these merges happen, conflicts will be detected, and non-conflicting code will be merged. Brilliant!



## Setting up a GitHub Repository

<aside>
⏱️ 10 minutes - Group

</aside>

In your groups, watch the following video and setup a GitHub repository. Make sure every member is added to the project and either create or upload a few test files to get an understanding of how GitHub works and how you can use it to store project files.

[https://www.youtube.com/watch?v=iv8rSLsi1xo](https://www.youtube.com/watch?v=iv8rSLsi1xo)

## Adding Files and Managing Directories

<aside>
⏱️ 10 minutes - Group

</aside>

GitHub repos, like any file storage, requires a logical file structure. Try to complete the following tasks:

- [ ]  Create a new folder
- [ ]  Upload the Team Values, created in a previous studio or in your own time, to the repository into the new folder
- [ ]  Create a new folder called interviews and add sub-folders for each team member
- [ ]  Upload team member interviews as plain text in the sub-folders

[https://www.youtube.com/watch?v=bEOfZfgqdKA](https://www.youtube.com/watch?v=bEOfZfgqdKA)

## Understanding Branch, Merge and Pull Requests

<aside>
⏱️ 20 minutes - Group

</aside>

In this exercise, we will learn how to branch, merge and create pull requests. Follow the tutorials below, then upload your personal development goals to your own branch and merge it with the groups repository.

### Creating and Managing Branches

[https://www.youtube.com/watch?v=oPpnCh7InLY](https://www.youtube.com/watch?v=oPpnCh7InLY)

### Merging without Conflicts

[https://www.youtube.com/watch?v=5g37NElQnCQ](https://www.youtube.com/watch?v=5g37NElQnCQ)

### **Creating Pull Requests**

[https://www.youtube.com/watch?v=8lGpZkjnkt4](https://www.youtube.com/watch?v=8lGpZkjnkt4)

## Managing Conflicts

<aside>
⏱️ 20 minutes - Group

</aside>

Occasionally, you will run into merge conflicts. These can be reviewed manually or resolved automatically. For best practices, ensure you review this conflicts manually, so not data gets lost or overwritten. For our use case, it is unlikely you will run into merge conflicts (unless two people name two files the same thing in the same folder), but it’s better to be prepared. 

The challenge for this task is to create an artificial merge conflict. You can do these a variety of ways. Use your own creativity to come up with a merge conflict and show it to your Legend.

Below is a video that will explain merge conflicts, how to avoid them and how to resolve them.

[https://www.youtube.com/watch?v=JtIX3HJKwfo](https://www.youtube.com/watch?v=JtIX3HJKwfo)

---

# Take a break

<aside>
⏱️ 5 minutes

</aside>

---

---

# Bonus: It’s dangerous to go alone! Take this.

<aside>
⏱️ **∞**

</aside>

Here is a collection of valuable knowledge and insight that may help you along in this course. Feel free to review this content in your own time. 

## Personal Empowerment through Reflection and Learning

[https://www.youtube.com/watch?v=uzDsT-25w14](https://www.youtube.com/watch?v=uzDsT-25w14)

## How to Use Git & GitHub Desktop

[https://www.youtube.com/watch?v=MaqVvXv6zrU](https://www.youtube.com/watch?v=MaqVvXv6zrU)