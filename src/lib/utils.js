const getUsernamePasswordFromCredentials = (credentials) => {
  let data = credentials[0];
  return {
    key: data.username,
    token: data.credential
  }
};

export {
  getUsernamePasswordFromCredentials
}
