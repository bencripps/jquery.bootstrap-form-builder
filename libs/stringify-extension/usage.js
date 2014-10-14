var foo = {
  a: function() { return 'a'; },
  b: function() { return 'b'; },
  'bar.baz': {
    'omg ponies!!': function() { return 'c'; }
  }
};

console.log(stringify(foo, 'foo'));

// this["foo"] = {
//   "a": function () { return 'a'; },
//   "b": function () { return 'b'; },
//   "bar.baz": {
//     "omg ponies!!": function () { return 'c'; }
//   }
// };
