<<<<<<< HEAD
# Perth Artifactory Website

## Structure

The Perth Artifactory website is been freshly built upon a Next.js, React backbone. It is, however, massively
under-utilising these frameworks currently. However, some of the core features are being used and as such, most
documentation for both still reigns true.

`__pages/` is the most important folder for updates to the site. It contains all `.md` files that are converted to pages
across the site automatically.

`components/` contains the individual components used across the site - mostly on the homepage though - and can be
ignored for the most part.

`layouts/` contains the layouts for each page - `base` is used for every page that isn't using the `homepage` layout.

`pages/` maintains the core templates for all page types and the main application. This can be ignored too.

`public/` holds the public files - specifically images for the homepage and dynamic pages.

`styles/` holds the styling for the pages that isn't fit within the components or layouts themselves. It also contains
Tailwind tweaks.

## Tooling

- React (through Next.js),
- Tailwind,
- Vercel.

## Processes

### CRUD'ing new content pages.

#### Creating.

To create a new page, the process is simple:

- Create a new page,
- Fill page with content,
- Commit page to `develop` (or `master` if you've not hit today's risk quota),
- After the build has succeeded, visit the page to check.

Creating a new page within Github is fairly simple. Across the top bar you can see `<> Code`. Click that, then below
that bar will be `Add file` if permissions allow. Within that dropdown, you can click `Create a file` or
`Upload a file`. Both will action **within the folder your current screen is on**, so consider visiting the
[correct](https://github.com/Perth-Artifactory/website/tree/develop/_pages) folder first.

All pages use `grey-matter` for their variables uptop - so consider following the template below:

```txt
---
# Title represents the title of the page.
title: The Name of the Page
# Date isn't used, but cannot be left blank. Choose the top option from https://www.utctime.net/ under 'UTC Date and Time in Various Formats'.
date: 2021-02-07T07:27:40Z
# Author isn't used, but shouldn't be left blank either.
author:
# Hero URL is the URL of the image at the top of the content page.
# Can be from the project (`/assets/site/alby.jpg`) or anywhere online (`https://via.placeholder.com/300x150`)
heroUrl: https://via.placeholder.com/300x150
---

.. content here.
```

#### Reading.

Within Github, visit the file you're looking for.

#### Updating.

Within Github, visit the file you're looking update and click the 'Pencil' tool on the right.

#### Deleting.

Within Github, go to the file you're looking to delete and remove it with the bin icon on the right.

## Markdown

Almost all markdown is supported and can be improved on in the future.

All images can be put into `/public/assets/site/` and referenced as such.
=======
# website-v2
To do/Known issues:
- Testimonials: Third testimonial required
- Testimonials: Circlular borders too large on PC
- Pricing: "POPULAR" ribbon not positioned correctly on PC
- External links do not open in new tab
- Metadata/SEO optimisation
- Triple check for Astrowind references

To implement:
- Gallery
- Sponsor display
- Charity details - ACNC, DGR, not for proffit, etc.
- Calendar style
>>>>>>> parent of b302636 (Update README.md)
