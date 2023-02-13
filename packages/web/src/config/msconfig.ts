const msconfig = {
  auth: {
    authority: `https://login.microsoftonline.com/${process.env.REACT_APP_AZURE_TENANT_ID}`,
    clientId: `${process.env.REACT_APP_AZURE_CLIENT_ID}`,
    redirectUri: process.env.REACT_APP_AZURE_REDIRECT_URI,
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false, // set to true for IE
  },
};

export const loginScopes = {
  scopes: ['User.Read', 'profile', 'openid', 'email'],
};

export default msconfig;
