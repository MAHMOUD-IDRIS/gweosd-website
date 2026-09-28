# GWEOSD bilingual website

Static bilingual (English / Arabic) website for **GWEOSD - Global Women Entrepreneurs Organization for Sustainable Development**.

## Files

- `index.html` - complete one-page site
- `styles.css` - responsive styling
- `script.js` - English/Arabic language switcher, mobile menu, simple scroll reveal
- `assets/img/` - organization logo, emblem/favicon, founder image

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `gweosd-website`.
2. Upload all files and folders from this package to the repository root.
3. In GitHub, open **Settings -> Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. GitHub will publish the site at a `github.io` address.

## Connect `gweosd.org`

After GitHub Pages is working, add the custom domain in **Settings -> Pages -> Custom domain** as:

`gweosd.org`

Then update DNS at your domain provider using the DNS records GitHub Pages shows for the custom-domain setup. Enable **Enforce HTTPS** after DNS is active.

## Important content notes

- Public email: `info@gweosd.org`
- Membership form: linked directly from the site
- Facebook page: linked directly from the site
- No phone number is displayed because no organization phone number was present in the supplied materials.
- The website uses the new GWEOSD branding and does not use the older SWAR name in public-facing copy.

## Edit text

All English and Arabic website wording is stored in `script.js` inside the `translations` object. This makes future changes easy without editing the layout.
