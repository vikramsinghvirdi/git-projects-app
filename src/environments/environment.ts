// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const API_URL = 'https://api.github.com';
const ORG_NAME = 'vmware';
const CLIENT_ID = '3eda97f0cd754159b3ef';
const CLIENT_SECRET = '36e38c2bcfcda56b78992c6d63d178bbaeb56017';

export const environment = {
  production: false,
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  orgDetail: `${API_URL}/orgs/${ORG_NAME}?client_id=${CLIENT_ID}`,
  listOfRepos: `${API_URL}/orgs/${ORG_NAME}/repos?client_id=${CLIENT_ID}`,
  listOfProjects: `${API_URL}/orgs/${ORG_NAME}/projects?client_id=${CLIENT_ID}`,
  authorizeUrl: `https://github.com/login/oauth/authorize?allow_signup=true&client_id=${CLIENT_ID}&scope=read:user`,
  validateCodeUrl: `https://github.com/login/oauth/access_token`,
  loggedInUser: `${API_URL}/user`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
