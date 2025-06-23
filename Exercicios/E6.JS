function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}
function soma(a, b) {
    console.log('Calculando...');
    return a + b;
}

const somaMemoizada = memoize(soma);

console.log(somaMemoizada(1, 2)); 
console.log(somaMemoizada(2, 3)); 
