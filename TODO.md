## Features to be prepared
- [ ] form builder
- [ ] sitemap
- [ ] meta tags, og tags

## Done
- [x] header + mobile nav
- [x] image component
	- [x] don't use nuxt-img, nuxt-picture (but useImage from nuxt/image)
	- [x] use <picture> tag, don't rely on JavaScript deciding current media query / breakpoint
	- [x] add aspect ratio support, ideally without setting width and height as props
	- [x] lazy loading support
	- [x] support for 1x, 2x densities
	- [x] convert images to webp and ideally also to avif
	- [x] placeholder support
	- [x] load images from assets folder so all assets are in one place
	- [x] upgrade to yarn 2 (or pnpm?) because of sharp
	- [x] final cleanup
