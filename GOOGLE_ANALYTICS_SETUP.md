# Google Analytics Setup Guide

This guide will help you set up Google Analytics 4 (GA4) for your portfolio website.

## Step 1: Create Google Analytics Account

1. **Go to Google Analytics**: https://analytics.google.com/
2. **Sign in** with your Google account
3. **Click "Start measuring"**
4. **Create an Account**:
   - Account name: `Abdulmalik Portfolio`
   - Data sharing settings: Choose your preferences
   - Click "Next"

## Step 2: Set Up Property

1. **Property setup**:
   - Property name: `Portfolio Website`
   - Reporting time zone: `(GMT+03:00) Saudi Arabia Standard Time`
   - Currency: `Saudi Riyal (SAR)` or `US Dollar (USD)`
   - Click "Next"

2. **Business information**:
   - Industry category: `Technology`
   - Business size: `Small`
   - How you intend to use Google Analytics: Select relevant options
   - Click "Create"

## Step 3: Set Up Data Stream

1. **Choose platform**: Select "Web"
2. **Add web stream**:
   - Website URL: `https://abdulmalikds.github.io/Portofolio/`
   - Stream name: `Portfolio Website`
   - Click "Create stream"

3. **Get your Measurement ID**:
   - You'll see a Measurement ID like `G-XXXXXXXXXX`
   - **Copy this ID** - you'll need it in the next step

## Step 4: Configure Your Portfolio

### Option A: For Development/Testing
1. Create a file called `.env.local` in your project root
2. Add your Measurement ID:
   ```
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   ```
   Replace `G-XXXXXXXXXX` with your actual Measurement ID

### Option B: For GitHub Pages Deployment
1. Go to your GitHub repository: https://github.com/AbdulmalikDS/Portofolio
2. Click on **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Name: `VITE_GA_TRACKING_ID`
6. Secret: Your Measurement ID (e.g., `G-XXXXXXXXXX`)
7. Click **Add secret**

### Update GitHub Actions Workflow
Add the environment variable to your GitHub Actions deployment:

```yaml
# In .github/workflows/deploy.yml
- name: Build
  run: npm run build
  env:
    VITE_GA_TRACKING_ID: ${{ secrets.VITE_GA_TRACKING_ID }}
```

## Step 5: Test the Integration

1. **Deploy your site** with the new configuration
2. **Visit your portfolio** in a browser
3. **Open Developer Tools** (F12)
4. **Check Console** - look for any Google Analytics errors
5. **Go back to Google Analytics** after a few minutes
6. **Check Realtime reports** to see if your visits are being tracked

## What Gets Tracked

Your portfolio automatically tracks:

### Page Views
- All page navigation and route changes
- Page titles and URLs

### User Interactions
- **Resume Downloads**: When users click "Download Resume"
- **Contact Form**: When users click email links
- **External Links**: Clicks to GitHub, LinkedIn, etc.
- **Project Views**: Interactions with project cards

### Custom Events
- **Download Events**: Resume PDF downloads
- **Contact Events**: Email link clicks
- **External Link Events**: Social media and GitHub clicks

## Viewing Your Analytics Data

### Real-time Reports
- Go to **Reports** → **Realtime**
- See current visitors and their activity

### Audience Reports
- **Reports** → **Demographics** → **Overview**
- See user locations, devices, and browsers

### Behavior Reports
- **Reports** → **Engagement** → **Pages and screens**
- See which pages are most popular

### Custom Events
- **Reports** → **Engagement** → **Events**
- See your custom tracked events (downloads, contacts, etc.)

## Privacy Considerations

- Google Analytics is GDPR compliant when configured properly
- Consider adding a privacy policy to your portfolio
- Users can opt-out using browser settings or extensions

## Troubleshooting

### Analytics Not Working?
1. **Check Measurement ID**: Ensure it's correctly set in environment variables
2. **Check Console**: Look for JavaScript errors
3. **Check Network Tab**: Verify GA requests are being sent
4. **Wait 24-48 hours**: Some reports take time to populate

### No Data Showing?
1. **Verify the tracking ID** is correct
2. **Check if ad blockers** are preventing tracking
3. **Ensure you're looking at the correct date range**
4. **Try incognito mode** to test without browser extensions

## Next Steps

Once Google Analytics is working:

1. **Set up Goals** for important actions (contact form submissions)
2. **Create custom reports** for specific metrics
3. **Set up alerts** for significant traffic changes
4. **Connect to Google Search Console** for SEO insights

## Support

If you need help:
- Google Analytics Help Center: https://support.google.com/analytics
- Check the browser console for error messages
- Verify environment variables are set correctly 