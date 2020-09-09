function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        console.log({ i })
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isWhat(13));