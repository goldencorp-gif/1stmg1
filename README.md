
# 1st Mortgage Group Website

This is the official website for 1st Mortgage Group, built with React, Vite, and Tailwind CSS.

## 🎨 How to Add Your Logo

To display your company logo, follow these steps:

1.  **Locate the `public` folder** in the main directory of this project.
2.  **Upload your logo image** into that `public` folder.
3.  **Rename the image** to `logo.png`.
4.  The website will automatically detect it.

### Separate Header & Footer Logos
If you want a different logo for the footer (e.g., a simplified version), follow these steps:
1. Upload your footer logo to the `public` folder and name it `footer-logo.png` (or any name you prefer).
2. Open `public/site-settings.json`.
3. Update the `footerLogoUrl` field.

**Example:**
```json
{
  "logoUrl": "/logo.png",
  "footerLogoUrl": "/footer-logo.png", 
  ...
}
```

*If `footerLogoUrl` is left empty `""`, the site will automatically use the main `logoUrl` for both.*

## 🛠 Quick Maintenance (No Code Required)

You can update the **Company Name**, **Phone Number**, and **Email** by editing the settings file.

1. Open `public/site-settings.json`.
2. Edit the values inside the quotes.
3. Save the file.

**Example `public/site-settings.json`:**
```json
{
  "logoUrl": "/logo.png",                 // Main logo
  "footerLogoUrl": "",                    // Optional separate footer logo
  "companyName": "1st Mortgage Group",
  "contactPhone": "(+61) 432 866 168",    // Display text for phone
  "contactPhoneLink": "tel:+61432866168", // Action when clicked
  "contactEmail": "info@1stmg.com.au",    // Display text for email
  "contactEmailLink": "mailto:info@1stmg.com.au"
}
```

## 💻 Making Content Changes (GitHub)

For structural changes or text updates on specific pages, you will need to edit the React components in the `pages/` directory.

- **Home Page:** `pages/HomePage.tsx`
- **About Page:** `pages/AboutPage.tsx`
- **Services:** `pages/ServicesPage.tsx`
- **Calculator:** `pages/CalculatorPage.tsx`

## 🚀 Deployment

### Auto-Deployment (Recommended)
Connect this GitHub repository to **Netlify** or **Vercel**.
- Any change you commit to GitHub will automatically trigger a new build and deployment.
- The `public` folder ensures your logo and settings are copied correctly to the live site.

### Manual Deployment
1. Run `npm install` to install dependencies.
2. Run `npm run build` to generate the production files.
3. Upload the contents of the `dist` folder to your web server.

## 📁 Project Structure

- `App.tsx` - Main layout wrapper (Header/Footer).
- `public/` - Static assets (Images, JSON config) that are copied to the build.
- `pages/` - Individual page content.
- `index.html` - The entry point of the website.
