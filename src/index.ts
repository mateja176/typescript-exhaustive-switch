const names = ['John', 'Jane'] as const;
type Names = typeof names;
type Name = Names[number];

const logName = (n: Name) => {
  switch (n) {
    case 'John':
      console.log('John');
      break;
    default:
      break;
  }
};
