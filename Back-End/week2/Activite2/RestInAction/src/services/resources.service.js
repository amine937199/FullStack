const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../../data/resources.json');

function readData() {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

exports.getAll = (page, limit) => {
  let list = readData();

  if (page && limit) {
    page = parseInt(page, 10);
    limit = parseInt(limit, 10);
    const start = (page - 1) * limit;
    const end = start + limit;
    return list.slice(start, end);
  }

  return list;
};

exports.getOne = (id) => {
  const list = readData();
  return list.find(item => item.id === id);
};

exports.create = (item) => {
  const list = readData();
  const id = list.length ? list[list.length - 1].id + 1 : 1;

  const newItem = { id, ...item };
  list.push(newItem);

  writeData(list);
  return newItem;
};

exports.update = (id, item) => {
  const list = readData();
  const index = list.findIndex(r => r.id === id);

  if (index === -1) return null;

  list[index] = { id, ...item };
  writeData(list);

  return list[index];
};

exports.remove = (id) => {
  const list = readData();
  const filtered = list.filter(item => item.id !== id);

  writeData(filtered);
  return filtered.length < list.length;
};
