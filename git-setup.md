# GitHub Setup Instructions

If you're getting the "repository does not contain the requested branch" error, follow these steps:

## Method 1: Via GitHub Web Interface

1. Go to your empty GitHub repository
2. Click "uploading an existing file"
3. Extract the easyglow-website.tar.gz file on your computer first
4. Upload the extracted files/folders one by one:
   - Upload `client/` folder
   - Upload `server/` folder
   - Upload `shared/` folder
   - Upload `api/` folder
   - Upload `attached_assets/` folder
   - Upload all .json, .ts, .js, .md files
5. Write a commit message like "Initial commit - EasyGlow website"
6. Click "Commit changes"

## Method 2: Via Command Line (if you have Git installed)

1. Extract the archive: `tar -xzf easyglow-website.tar.gz`
2. Navigate to the extracted folder: `cd easyglow-website`
3. Initialize git: `git init`
4. Add all files: `git add .`
5. Make initial commit: `git commit -m "Initial commit - EasyGlow website"`
6. Add your GitHub repository as origin: `git remote add origin https://github.com/yourusername/your-repo-name.git`
7. Push to GitHub: `git push -u origin main`

## Method 3: Create New Repository with Files

1. Delete your current empty GitHub repository
2. Create a new repository on GitHub
3. During creation, check "Add a README file"
4. After it's created, use "Add file" → "Upload files" to add your project files

The key is making sure GitHub has at least one commit in the repository before Vercel can connect to it.