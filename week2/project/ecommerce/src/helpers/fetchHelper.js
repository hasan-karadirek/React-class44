const fetchData = async (url) => {
  return await (await fetch(url)).json();
};

module.exports = { fetchData };
