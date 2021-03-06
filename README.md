#### Guide ####
## Yarn https://classic.yarnpkg.com/en/docs/creating-a-project
* Run `yarn help COMMAND` for more information on specific commands - https://yarnpkg.com/en/docs/cli/
``yarn init`` Create new package.json - https://classic.yarnpkg.com/en/docs/cli/init/#toc-yarn-init
``yarn global add handlebars syncyarnlock sass postcss-cli browser-sync`` - https://classic.yarnpkg.com/en/docs/cli/add

* `yarn add handlebars @fortawesome/fontawesome-free FitText-UMD tailwindcss uikit`
	`yarn add @fullhuman/postcss-purgecss autoprefixer browser-sync del gulp gulp-compile-handlebars gulp-autoprefixer gulp-clean-css gulp-concat gulp-imagemin gulp-inject gulp-mode gulp-postcss gulp-rename gulp-replace gulp-sass gulp-uglify-es imagemin-jpeg-recompress imagemin-pngquant postcss-import -D`

* `yarn install` Install all packages from package.json, then run ``yarn upgrade`` Not working on all packages
	Just run below
	Install: ***	`yarn install && upgrade && syncyarnlock -s -k` *** - https://www.npmjs.com/package/syncyarnlock#usage
	Update: ***	`yarn upgrade && syncyarnlock -s -k` ***
	`-s`: Override the package.json, `-k`: Keep the prefix '^' or any other dynamic numbers
	Or change the package.json then run  - https://github.com/yarnpkg/yarn/issues/3266#issuecomment-573382303
	`yarn install && upgrade --latest`
---------------------------
0. `yarn start` or `gulp start`：It means to run `gulp vendors`, `gulp scss`, `gulp html`
1. `yarn server` or `gulp server`：It means to run  `gulp vendors`, `gulp scss`, `gulp html` then `gulp watch`
2. `yarn build`：It means to run `gulp build --production`
	 `yarn build-nohtml`：It means to run `gulp build-nohtml --production`
---------------------------
`gulp vendors`：Output tailwind css, Copy vendors files to src & dist
`gulp scss`：Compile SCSS to CSS and Purge & Minify css, needed when modify scss
`gulp inject`：Inject path to all html files relative to /src
`gulp css`：Purge & Minify CSS to /dist
`gulp tailwind`：Output tailwind css and Minify to /src
`gulp tailwind --production`：Output tailwind css and Purge & Minify to /dist
`gulp html`：Inject path to all html files relative to /src and /dist [NO for different injection in html]