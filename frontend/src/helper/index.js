const DomainName = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL;
const localDomainName = import.meta.env.VITE_REACT_APP_BACKEND_LOCAL_BASEURL;

// Determine if the current environment is local
const isLocal = window.location.hostname === "localhost";

// Use the appropriate domain based on the  environment
const currentDomain = isLocal ? localDomainName : DomainName;

export const API = {
  contact: {
    url: `${currentDomain}/api/contact`,
    method: `POST`,
  },
  adminContactQueries: {
    url: `${currentDomain}/api/admin/contact`,
    method: `POST`,
  },
  getUsers: {
    url: `${currentDomain}/api/user/get`,
    method: `GET`,
  },
  addUser: {
    url: `${currentDomain}/api/user/add`,
    method: `POST`,
  },
  addUserSignup: {
    url: `${currentDomain}/api/user/signup`,
    method: `POST`,
  },
  loginUser: {
    url: `${currentDomain}/api/user/login`,
    method: `POST`,
  },
  // admin

  loginAdmin: {
    url: `${currentDomain}/api/admin/login`,
    method: `POST`,
  },
  
  logoutAdmin: {
    url: `${currentDomain}/api/admin/logout`,
    method: `POST`,
  },
  
  userAuthCheck: {
    url: `${currentDomain}/api/user/auth-check`,
    method: `POST`,
  },
  adminAuthCheck: {
    url: `${currentDomain}/api/admin/auth-check`,
    method: `POST`,
  },
};
