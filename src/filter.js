let arr = [
    { gender: 'male', name: 'john' },
    { gender: 'female', name: 'sarah' },
    { gender: 'male', name: 'bone' },
];

let filtered = arr. filter(function(item) {
    if (item.gender === 'female') {
        return item;
    }
});
console.log(filtered);
// node filter.js 라고 터미널에서 입력하면
// [ { gender: 'female', name: 'sarah' } ] 라고 출력된다.