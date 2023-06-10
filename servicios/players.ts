function getPlayerFromApi() {
  return fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.results[0];
    })
    .catch((error) => {
      console.error(error);
    });
}