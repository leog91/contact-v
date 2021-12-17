export const sortBySurname = (contacts) => {
  return contacts.sort(function (a, b) {
    if (a.name.last < b.name.last) {
      return -1;
    }
    if (a.name.last > b.name.last) {
      return 1;
    }

    return 0;
  });
};
