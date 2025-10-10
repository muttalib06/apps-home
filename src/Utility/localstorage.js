const setDataToLocalStorage = (id) => {
  const storedAppData = getDataFromLocalStorage();
  if(storedAppData.includes(id)){
    return alert("This App is already installed")
  } else{
     storedAppData.push(id);
     const data = JSON.stringify(storedAppData);
     localStorage.setItem("installedApp",data)
  }
};

const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("installedApp");
  return data ? JSON.parse(data) : [];
};

export { setDataToLocalStorage, getDataFromLocalStorage };
