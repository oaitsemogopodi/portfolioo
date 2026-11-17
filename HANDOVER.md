# Portfolio personalisation

Preview: http://127.0.0.1:4173 (start with `node preview.cjs` if it is not running).

## Source and changes

Primary source: `C:/Users/oaits/Downloads/vincent - portfolio/index.html`. That portfolio's introduction, five roles and contributions, four skill groups, degree and credential statuses, seven project entries, phone, email and GitHub were transferred. Its existing handover documents the limits of those materials; these background claims have not been independently verified.

The supplied cinematic portrait was found at `C:/Users/oaits/Downloads/Cinematic Black-and-White Graduation Portrait.png` and copied to `assets/img/oaitse-graduation.png`. It is in the existing full-screen hero image area and About image component. CSS positions the portrait to the right on desktop and above the introduction on mobile, with a gradient for text readability. No image-generation or pixel editing was performed.

The original BootstrapMade markup structure, Bootstrap grid, navigation pages, green/black palette, fonts, main stylesheet, and original JavaScript are retained. Existing AOS animations, Typed.js role loop, Isotope filters, and GLightbox screenshot previews remain. Small content-fitting and keyboard accessibility additions are isolated in `assets/css/personalisation.css` and `assets/js/personalisation.js`.

Resume uses the original two-column summary/education and experience timeline. Skills use names and descriptions without ratings. Services use the original six icon cards. Portfolio retains the original filter/grid components: five projects use textual summaries because approved screenshots are missing; BHC and Restaurant use their real existing screenshots. Every project has a local detail destination. Sample dropdown, statistics, interests, testimonials, biographies, and unused contact form are removed. The contact section uses direct email and phone actions. Attribution is retained.

The local CV files found during discovery were not designated as newer public-ready source material. Their dates and certification claims conflict with the updated existing portfolio. No CV was published. Security+ remains study in progress as explicitly requested.

`personalise.cjs` records the one-time migration and is guarded against reapplying it to the edited site. Edit the HTML directly for subsequent content updates.

## Completed verification

- Local server started successfully; homepage returns HTTP 200.
- All nine HTML pages passed nesting, unique ID, single page h1, image-alt, and sample-content checks.
- 317 local path/anchor references resolve; 263 local HTTP page/asset requests returned successfully.
- JavaScript syntax checks passed. A DOM simulation passed keyboard filter activation, pressed states, mobile menu expanded-state updates, and Escape-to-close behavior. This does not replace actual browser interaction tests.
- The original main stylesheet and main JavaScript remain unchanged; all vendor scripts are retained.
- The BootstrapMade demo reference was retrieved. The live existing portfolio could not be retrieved through web access or direct HTTP in this session, so local source files were used.

## Checks still needed

The browser surface is unavailable, and the native Computer Use connection failed because its native pipe was unavailable. Rendered desktop/mobile verification at 1440px, 768px and 360px, actual face cropping, font/image loading, typing/filter/lightbox behavior, navigation and keyboard traversal remain unverified. Review those at the preview URL. Public availability of GitHub, Figma, and Restaurant destinations also remains unverified; the URLs were transferred from the existing source.

## Missing materials

- Approved screenshots and demo/repository links for Vitality Plug, Mogobe, Turnstar, Laravel Currency Converter and Android E-Commerce. Remove church member data before sharing screenshots.
- Dashboard source evidence before adding specific stack or CSV-export claims; Android classification if a coursework/prototype label is desired.
- A public-ready CV explicitly selected for download, with conflicting work dates resolved; a confirmed LinkedIn URL if wanted.
- Credential/degree evidence for additional awarding-body or certification claims. No unsupported awards, testimonials, client endorsements or public-service details were added.
- The new destination's domain, before adding canonical and absolute social-preview URLs. The old portfolio domain was not reused for those fields.

No deployment, commit or push was performed.

Hero adjustment: restored the template's original staircase background behind the supplied portrait, concealed the stock subject, and increased the portrait crop on desktop and mobile. Browser visual verification remains pending.

Portrait blending: added a hero-only brightness/contrast adjustment to reduce the grey backdrop and blend it into the dark background. The original portrait and About image are unchanged.
