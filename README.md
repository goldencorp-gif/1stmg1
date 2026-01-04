
# 1st Mortgage Group Website

This is the official website for 1st Mortgage Group, built with React, Vite, and Tailwind CSS.

## 🎨 How to Add Your Logo & Favicon

To display your company logo and browser icon (favicon), follow these steps:

1.  **Locate the `public` folder** in the main directory of this project.
2.  **Upload your logo image** into that `public` folder.
3.  **Rename the image** to `logo.png`.
4.  The website will automatically detect it and use it for **both the site logo and the browser tab icon**.

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

## 🤝 Partner Concierge Configuration

To set up the referral emails for the "Partner Concierge" section on the Services page:

1. Open `pages/ServicesPage.tsx`.
2. Locate the `partnerEmails` configuration object near the top of the file (around line 18).
3. Replace the placeholder emails with your actual partners' email addresses.

```typescript
const partnerEmails: Record<string, string> = {
  'legal': 'conveyancing@actual-partner.com', // Update this
  'insurance': 'insurance@actual-partner.com', // Update this
  'buyers_agent': 'agent@actual-partner.com', // Update this
  'finance': 'planner@actual-partner.com' // Update this
};
```

When a user submits the request, it will open their email client addressed to these emails, with you (the broker) automatically CC'd.

## 🛠 Quick Maintenance (No Code Required)

You can update the **Company Name**, **Phone Number**, and **Email** by editing the settings file.

1. Open `public/site-settings.json`.
2. Edit the values inside the quotes.
3. Save the file.

**Example `public/site-settings.json`:**
```json
{
  "logoUrl": "/logo.png",                 // Main logo & Favicon
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

## 🚀 Deployment to Vercel

### Step 1: Connect to Vercel
1. Go to [Vercel](https://vercel.com) and sign up/login.
2. Click **"Add New..."** -> **"Project"**.
3. Import this GitHub repository.

### Step 2: Configure Project
Vercel should automatically detect that this is a **Vite** project.
- **Framework Preset:** Vite
- **Root Directory:** ./ (default)
- **Build Command:** `npm run build` (default)
- **Output Directory:** `dist` (default)

### Step 3: Environment Variables (Important)
Your AI features require a Google Gemini API Key.
1. In the Vercel project deployment screen (or under Settings > Environment Variables).
2. Add a new variable:
   - **Key:** `API_KEY`
   - **Value:** [Your Google Gemini API Key]
3. Click **Deploy**.

## 📁 Project Structure

- `App.tsx` - Main layout wrapper (Header/Footer).
- `public/` - Static assets (Images, JSON config) that are copied to the build.
- `pages/` - Individual page content.
- `index.html` - The entry point of the website.
- `vercel.json` - Configuration for Vercel routing.
