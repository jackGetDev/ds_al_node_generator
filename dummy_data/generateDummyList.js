const faker = require('faker');

function generateDummyList(size) {
  const dummyList = [];
  for (let i = 0; i < size; i++) {
    const item = {
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
    };
    dummyList.push(item);
  }
  return dummyList;
}

module.exports = { generateDummyList };

