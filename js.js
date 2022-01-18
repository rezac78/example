const getFullname = (firstname, lastname) => {
  return Promise.resolve(`${firstname} ${lastname}`);
};

const getage = (fullname, age) => {
  return Promise.resolve(`${fullname} is ${age} years old.`);
};

const getAddress = (address) => {
  return Promise.resolve(`${address}`);
};

getFullname("reza", "dalvand").then((fullname) => {
  getage(fullname,22).then(result => {
    console.log(result)
  })
});
