# SUDO Website

## Background

The SUDO website is built on top of [Gatsby Netlify CMS starter](https://github.com/netlify-templates/gatsby-starter-netlify-cms "repo"). It's a good idea to read the available documentation if stuck.

The SUDO website uses these technologies:
- [Gatsby.js](https://www.gatsbyjs.org/docs/ "Gatsby.js") for developing and generating site. Gatsby basically takes React.js code and generates a static site from it.
- [NetlifyCMS](https://www.netlifycms.org/ "NetlifyCMS") for editing content
- [Netlify](https://docs.netlify.com/ "Netlify Docs") for deployment and content delivery

The website runs on the JAMstack (JavaScript, APIs, Markdown). You can read more about what that means [here](https://www.netlify.com/pdf/oreilly-modern-web-development-on-the-jamstack.pdf "JAMstack").

## Website Editing instructions:

### Intro
- Website is hosted [here](https://wonderful-raman-be76ce.netlify.com/ "SUDO website unfinished"), currently
	- When ready, website will be hosted on the [sudo.world](https://sudo.world "sudo.world") domain

- Edit website content [here](https://wonderful-raman-be76ce.netlify.com/admin "admin page") (works like WordPress admin)
	- Website admin credentials are in GDrive

- Manage website [here](https://app.netlify.com/ "login") (deployment settings, adding website admins, etc.)
	- Log in with SUDO GitHub account
	
### Developing Website

- To work on website, checkout **dev** branch. Remember to merge into **master** when finished with a piece of work

	- Create a pull request from dev to master if changes are substantial and merge the pull request with squash commits option

- Run `netlify dev` in shell to launch hot-loading app (changes live in response to code change)

	- If this breaks on Windows, try:
		- `npm install netlify-cli -g` to get the latest version
		- `npm install gatsby-cli -g` to get latest version
		- Make sure you have yarn installed (`npm install yarn -g`)
		- Running command on CMD in administrator mode

- To deploy website, push to master branch

### Content Structure

- Pages are composed of templates and markdown files pulled into them via graphQL
	- See [here](https://www.gatsbyjs.org/docs/adding-markdown-pages/ "adding markdown pages" ) for further detail
