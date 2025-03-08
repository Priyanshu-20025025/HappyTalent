const DomainName = "https://13.201.243.29:8080";
const localDomainName = "http://localhost:8080";

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
};
