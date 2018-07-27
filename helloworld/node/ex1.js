var book = {
  topic : "javascript",
  fat : true
};

// 通过"."和"[]“来访问对象属性
book.topic
book["fat"]
book.author = "Flanagan";
book.contents = {};

// javascript同样支持数组（以数组为索引的列表）
var primes = [2,3,5,7];
primes[0]
primes.length
primes[primes.length-1];
primes[4]=9;
primes[4]=11;
var empty = [];
empty.length       

// 数组和对象中都可以包含另一个数组或对象
var points = [
    {x : 0, y : 0},
    {x : 1, y : 1}
];

var data = {
    trial1: [[1,2],[3,4]],
    trial2: [[2,3],[4,5]]
};
