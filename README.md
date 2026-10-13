# moldinspectionboise.com — static site (GitHub Pages ready)

Plain HTML/CSS, no build step and no framework. 18 public pages + 1 unpublished draft.
Total page weight is ~25 KB of HTML and ~20 KB of CSS per page, plus Google Fonts.

## Go live in 5 steps
1. Create a GitHub repo (e.g. `moldinspectionboise`) and upload **the contents of this folder** to the repo root, including `CNAME` and `.nojekyll`.
2. Go to repo **Settings → Pages → Source: Deploy from a branch → `main` / root**.
3. At your domain registrar, add these DNS records:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `YOUR-GITHUB-USERNAME.github.io`
4. Back in Settings → Pages, confirm the custom domain `moldinspectionboise.com` and tick **Enforce HTTPS** once it's available (DNS can take up to 24 h).
5. Submit `https://moldinspectionboise.com/sitemap.xml` in Google Search Console.

## Before launch — REQUIRED edits (find & replace across all files)
| Find | Replace with |
|---|---|
| `(208) 555-0142` | your call-tracking number (display) |
| `+12085550142` | the same number in E.164 format (tap-to-call + schema) |
| `YOUR-EMAIL@example.com` | the inbox that should receive quote-form leads (FormSubmit.co; confirm the activation email on the first submit) |

## URL map
| URL | Template |
|---|---|
| `/` | Homepage |
| `/ceiling-water-damage-repair-boise-id/` | A |
| `/mold-remediation-boise-id/` | B |
| `/mold-testing-boise-id/` | C |
| `/sewage-backup-cleanup-boise-id/` | D — **UNPUBLISHED** (noindex, blocked in robots.txt, not linked) |
| `/mold-inspection-boise-id/` | A |
| `/emergency-water-extraction-boise-id/` | B |
| `/basement-mold-removal-boise-id/` | C |
| `/water-damaged-drywall-repair-boise-id/` | D |
| `/closet-mold-removal-boise-id/` | A |
| `/flooded-basement-cleanup-boise-id/` | B |
| `/boise-id/` `/meridian-id/` `/eagle-id/` | E |
| `/nampa-id/` `/caldwell-id/` `/kuna-id/` | F |
| `/about/` `/contact/` `/thank-you/` | — |

### To publish the sewage page later
1. Delete `<meta name="robots" content="noindex,nofollow">` from `sewage-backup-cleanup-boise-id/index.html`.
2. Remove the `Disallow: /sewage-backup-cleanup-boise-id/` line from `robots.txt`.
3. Add its URL to `sitemap.xml` and link it from the nav/footer "Water damage" lists.

## Images
Every image area is a striped placeholder. Search for `<!-- IMAGE:` to find each one; the comment describes what goes there.
To add a photo, put it in `/assets/img/` and place an `<img>` inside the placeholder div:
```html
<div class="ph" aria-hidden="true"><img src="/assets/img/ceiling-hero.webp" alt="Water-stained ceiling" loading="lazy" width="1200" height="800"></div>
```
Use WebP, ~1200px wide, under 150 KB. Phase 1 rule: **licensed stock only, never presented as the company's own work.**

## Phase 2 checklist (once the renter is on board)
- Replace every block marked "Illustrative example — not a completed job" with real, permissioned job stories.
- Add reviews/testimonials, license and insurance details, and a real street address (plus `streetAddress` in the LocalBusiness JSON-LD).
- Optional analytics: paste the GA4 snippet into `<head>`. `assets/site.js` already fires `phone_call_click` and `generate_lead` events.

## SEO built in
- H1s and titles written to your formulas; meta descriptions include the phone number and a call to action.
- LocalBusiness + FAQPage + BreadcrumbList JSON-LD on every page.
- Canonical URLs, Open Graph tags, sitemap.xml, robots.txt, and a custom 404 page.
