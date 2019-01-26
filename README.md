## g0v-open-farm

### `npm start`

Local dev:
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Nginx deploy, make sure it redirect from index
`location / { try_files $uri /index.html; }`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Delete gh-pages branch from local, (there is a SPACE before :)
`git push origin :gh-pages`
