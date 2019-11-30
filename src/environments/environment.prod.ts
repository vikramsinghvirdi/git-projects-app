const API_URL = 'https://api.github.com';
const ORG_NAME = 'vmware';
const CLIENT_ID = 'Iv1.df794e5155d0d7f7';
const CLIENT_SECRET = '6843f9d87f509b50b9d31103e08016899e659e04';

export const environment = {
  production: true,
  orgDetail: `${API_URL}/orgs/${ORG_NAME}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  listOfRepos: `${API_URL}/orgs/${ORG_NAME}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  listOfProjects: `${API_URL}/orgs/${ORG_NAME}/projects?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
};
