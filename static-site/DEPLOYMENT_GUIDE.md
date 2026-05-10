# Complete GitHub Pages Deployment Guide

## Step-by-Step Instructions

### 1. Prepare Your Repository

**Create a new repository on GitHub:**
1. Go to https://github.com/new
2. Name your repository (e.g., `research-dashboard`)
3. Make it Public
4. Don't initialize with README (we already have files)
5. Click "Create repository"

### 2. Upload Your Files

**Method A: Using GitHub Web Interface (Easiest)**

1. On your new repository page, click "uploading an existing file"
2. Drag and drop ALL files from the `static-site` folder:
   - index.html
   - styles.css
   - script.js
   - .nojekyll
   - README.md
3. Scroll down and click "Commit changes"

**Method B: Using Git Command Line**

```bash
# Navigate to the static-site directory
cd /workspaces/default/code/static-site

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Research Dashboard"

# Add your repository as remote (replace with your URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select "main"
   - **Folder**: Select "/ (root)"
5. Click **Save**

### 4. Wait for Deployment

- GitHub will build your site (takes 1-2 minutes)
- Refresh the Settings → Pages page
- You'll see: "Your site is live at `https://yourusername.github.io/repo-name/`"

### 5. Test Your Site

Click the URL to view your dashboard!

## Troubleshooting

### 404 Error on CSS/JS Files

**Problem**: HTML loads but no styling/interactivity

**Solution**: Make sure these files are in the same directory:
- index.html
- styles.css
- script.js

### Charts Not Showing

**Problem**: Empty boxes where charts should be

**Solution**: 
1. Check browser console (F12) for errors
2. Ensure Chart.js CDN is loading (check network tab)
3. Try a different browser

### Google Sheets Not Embedding

**Problem**: Iframe shows error or blank

**Solution**:
1. Make sure sheet is Published to web (File → Share → Publish to web)
2. Use the "Embed" link, not the sharing link
3. Set sheet permissions to "Anyone with the link can view"

## Customizing Your Google Sheets Embed

1. Open your Google Sheet
2. Click **File** → **Share** → **Publish to web**
3. Choose these options:
   - **Link**: Entire document (or specific sheet)
   - **Embed**: Select this tab
4. Click **Publish**
5. Copy the iframe code or URL
6. In `index.html`, find the Dataset section and replace:

```html
<iframe src="YOUR_URL_HERE"></iframe>
```

## Adding Your Own Data to Charts

Edit `script.js` and modify the data arrays:

```javascript
// Bar Chart Data
data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],  // X-axis labels
    datasets: [{
        label: 'Value',
        data: [400, 300, 600, 800, 500, 700],  // Your data here
        backgroundColor: '#22d3ee',
    }]
}

// Line Chart Data
data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],  // X-axis labels
    datasets: [
        {
            label: 'Metric 1',
            data: [65, 59, 80, 81, 56, 72],  // Your first line
        },
        {
            label: 'Metric 2',
            data: [28, 48, 40, 56, 65, 73],  // Your second line
        }
    ]
}
```

## Testing Locally

Open `index.html` directly in your browser:
- **Windows**: Double-click index.html
- **Mac**: Double-click index.html
- **Linux**: Run `xdg-open index.html`

Or use Python's built-in server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit `http://localhost:8000` in your browser.

## Using a Custom Domain

1. Buy a domain from a registrar (Namecheap, Google Domains, etc.)
2. Add a file named `CNAME` to your repository with your domain:
   ```
   www.yourdomain.com
   ```
3. In your domain registrar's DNS settings, add:
   - Type: `CNAME`
   - Name: `www`
   - Value: `yourusername.github.io`
4. Wait for DNS propagation (up to 48 hours)

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Chart.js Documentation](https://www.chartjs.org/docs/)
- Check the browser console (F12) for error messages
