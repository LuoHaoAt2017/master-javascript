var cities = new Map();

cities.set('001', 'chongqing');
cities.set('002', 'changsha');
cities.set('003', 'nanchang');
 
for (let city of cities.values()) {
  console.log(city);
}