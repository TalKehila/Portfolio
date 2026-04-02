how to upload to git Hub

Create New Repository on GitHub:
Go to GitHub and create a new repository.
Copy the URL of the repository.

Set Up Local Repository:
enter to project folder and open cmd or git bash
git init

Link Local Repository to Remote:
git remote add origin <repository_URL>- (enter here the url of the repo from GitHub)

change from master to branch if needed 
git branch -m master main

Check Status and Add Files:
git status
git add .  (For all the file)  
Commit Changes:
git commit -m "Your commit message"
Push Changes to Remote Repository:
git push origin main
Pull Changes from Remote Repository (only if needed):
git pull origin main
Make Changes and Repeat Steps 4-6 as Needed:
Make changes to your files.
Repeat steps 4-6 to add, commit, and push the changes to the remote repository.



