// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const API_URL = 'https://api.github.com';
const ORG_NAME = 'vmware';
const CLIENT_ID = 'Iv1.df794e5155d0d7f7';
const CLIENT_SECRET = '6843f9d87f509b50b9d31103e08016899e659e04';

export const environment = {
  production: false,
  orgDetail: `${API_URL}/orgs/${ORG_NAME}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  listOfRepos: `${API_URL}/orgs/${ORG_NAME}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  listOfProjects: `${API_URL}/orgs/${ORG_NAME}/projects?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
