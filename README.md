# Ukranians-in-Barcelona.Final-project
Steps to work on the remote repository (github) and the local
repository (on your computer):
1. First of all, we enter the path of the local repository that is linked to the GitHub one.
We want to update the local repository from the 'main' branch
- To see which branch I'm on, I run 'git branch'. The branch with the asterisk in
front of it is the one I'm currently using.
- To change branches I run 'git checkout branch_name'
- Once in main I execute 'git pull origin main'
2. Each member works on their own branch, which is created with the following
command:
‘git checkout -b branch_name’
3. EXTRA DATA IN CASE IT HAPPENS TO YOU, IF IT HASN'T HAPPENED TO YOU,
IGNORE IT: *If I have already started working on the project in my branch and I have
not yet done 'pull origin main', so that I can save the changes I have made and they
will not be deleted , I run 'git stash' (on my branch)→ this reserves my work
temporarily while I update my repository. Then I switch to the main branch, do the
'git pull origin main' and then once my repository is updated, I can recover
my work that I had reserved with the stash, using the 'git stash apply'
command*
4. From my branch I work on making the changes I need to make to the project, and
once finished I execute the following commands:
- 'git add .'
- ‘git commit -m “descriptive comment of the commit”’
- 'git push'
5. TO DELETE A BRANCH THAT I DO NOT USE:
- ‘git branch -d branch_name’
6. TO DELETE AN UNUSED BRANCH FROM MY REMOTE REPOSITORY:
- ‘git push origin --delete branch_name’

On GitHub:
Once you've pushed your branch to the GitHub repository, go to the GitHub
repository and you'll see a button that says "Compare & pull request." Click on that
button.
Fill out the pull request information, including a detailed description of what you
did and any relevant information.
For the person in charge of making the pull request (to define/Elena):
Review the pull request carefully and make sure it is consistent with the project. You
can make comments and request changes if necessary.
Once the pull request is ready and all team members agree, you can merge each
member's branch into the main branch of the project (for example, "main").

<aside>
2️⃣ *Ukranians in Barcelona*

 **(Team Supervisor) Andrea

PROJECT TEAM:

Tulio ToledoBigon, Elena Petrash(Team Leader) , Carmela Oropesa, Racheal Ehiwe, Vladyslav)

---

*Link(s) to GitHub repos*

https://github.com/ElenaPetrash/Ukranians-in-Barcelona.Final-project

*********Description:*********

The project is a multilingual website designed to aid the social adaptation of Ukrainian refugees. It provides vital information on legal matters, language courses, job search resources, and obtaining medical documentation. With content available in Ukrainian, Spanish, and English, it aims to empower refugees by offering comprehensive guidance and resources to facilitate their integration into their new communities.

*****Users:*****

- Ukrainian Refugees
- Government Agencies

- Refugee Support Organizations

*********Main functionalities*********

- The website offers information and resources in three languages: Ukrainian, Spanish, and English, ensuring accessibility to a wide range of users.
- Users can easily search for specific information or navigate through different sections of the website to find relevant resources.
- Provides contact details for government agencies, legal aid organizations, healthcare providers, and other relevant entities for quick assistance.

*******Main Frameworks*******

- HTML/CSS
- Java Script
- React
- Node JS
- Databases

</aside>
