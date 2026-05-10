# Research Project Dashboard - Static HTML Version

A clean, minimalistic research dashboard built with pure HTML, CSS, and vanilla JavaScript.

## Features

- **Sticky Navigation**: Auto-highlights active section on scroll
- **Dark Theme**: Slate background with cyan accents
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Interactive Charts**: Bar and line charts using Chart.js
- **Google Sheets Integration**: Embed your data directly
- **Image Support**: Add visual elements with captions
- **Highlight Text**: Emphasize key terms in cyan

## Deployment to GitHub Pages

### Option 1: Quick Deploy

1. Create a new repository on GitHub
2. Upload all files from the `static-site` folder to your repository
3. Go to Settings → Pages
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click Save
7. Your site will be live at `https://yourusername.github.io/your-repo-name/`

### Option 2: Using Git

```bash
cd static-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

Then enable GitHub Pages in repository settings as described above.

## Customization

### Update Content

Open `index.html` and modify the content in each section.

### Change Colors

Edit `styles.css`:
- Background: `#1e293b` (slate-800)
- Cards: `#0f172a` (slate-950)
- Accent: `#22d3ee` (cyan-400)
- Text: `#e2e8f0` (slate-200)

### Add Google Sheets

Replace the iframe URL in the Dataset section:

```html
<iframe src="YOUR_GOOGLE_SHEETS_PUBLISH_URL"></iframe>
```

To get the URL:
1. Open your Google Sheet
2. File → Share → Publish to web
3. Choose "Embed" and copy the URL

### Modify Charts

Edit `script.js` to change the chart data:

```javascript
data: {
    labels: ['Jan', 'Feb', 'Mar', ...],
    datasets: [{
        data: [400, 300, 600, ...]
    }]
}
```

### Add Images

Use the image structure in the EDA section:

```html
<div class="image-box">
    <img src="your-image-url.jpg" alt="Description">
    <p class="caption">Your caption here</p>
</div>
```

### Highlight Text

Wrap text in a span:

```html
<span class="highlight">highlighted text</span>
```

## File Structure

```
static-site/
├── index.html       # Main HTML file
├── styles.css       # All styling
├── script.js        # JavaScript for interactivity
├── .nojekyll        # Prevents Jekyll processing
└── README.md        # This file
```

## Browser Support

Works in all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Dependencies

- **Chart.js 4.4.0** (loaded via CDN)

No build process or package manager required!

## License

Free to use for your research projects.
