# How to Rename Your Repository and Update Your Website

## Step 1: Rename Your Repository on GitHub

1. Go to your repository on GitHub: `https://github.com/itsYoga/Resume`
2. Click the **Settings** tab (gear icon)
3. Scroll down to the **"Repository name"** section
4. Change the name from `Resume` to your desired name (e.g., `portfolio`, `website`, or just your GitHub username)
5. Click **Rename**
6. GitHub will automatically update all repository URLs

## Step 2: Update the URL in README.md

After renaming, update the live site URL in `README.md`:

```markdown
🌐 **Live Site**: [https://itsyoga.github.io/YOUR_NEW_NAME/](https://itsyoga.github.io/YOUR_NEW_NAME/)
```

## Step 3: Configure GitHub Pages

1. Go to repository **Settings** → **Pages**
2. You'll see "Build and deployment" → "Source"
3. **IMPORTANT**: Click on the folder dropdown (currently shows root `/`)
4. Select `/docs` folder from the dropdown
5. Click **Save** button (usually at the bottom)

**Current Status**: Your site is building from `main` branch

**What you need to do**: 
- Change the **Folder** dropdown from `/` (root) to `/docs`
- This tells GitHub to serve files from the `/docs` folder instead of the repository root

## Step 4: Update Local Repository

After renaming on GitHub, update your local repository:

```bash
git remote set-url origin https://github.com/itsYoga/YOUR_NEW_NAME.git
git remote -v  # Verify the change
```

Or if you want to use SSH:

```bash
git remote set-url origin git@github.com:itsYoga/YOUR_NEW_NAME.git
```

## Step 5: Test Your Website

Your new website URL will be:
- `https://itsyoga.github.io/YOUR_NEW_NAME/`

Wait a few minutes for GitHub to update the DNS, then visit your new URL.

## Alternative: Use Your Username as the Repository Name

If you want your website to be available at `https://itsyoga.github.io/` (without the repository name):

1. Rename your repository to exactly match your GitHub username: `itsYoga`
2. The site will be available at the root URL without the repository name
3. Update the README.md URL to: `https://itsyoga.github.io/`

## Troubleshooting

- If your site doesn't load after renaming, wait 5-10 minutes for DNS propagation
- Make sure GitHub Pages is enabled in Settings → Pages
- Verify the `/docs` folder contains `index.html`
- Check the GitHub Pages build logs in the Actions tab

