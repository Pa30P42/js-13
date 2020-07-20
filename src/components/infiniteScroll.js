// import

var elem = document.querySelector('.container');
var infScroll = new InfiniteScroll(elem, {
  // options
  path: '.pagination__next',
  append: '.post',
  history: false,
});

// element argument can be a selector string
//   for an individual element
var infScroll = new InfiniteScroll('.container', {
  // options
});
