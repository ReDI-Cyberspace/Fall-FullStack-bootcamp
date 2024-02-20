const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token !== null;
  };
  
  export { isAuthenticated };