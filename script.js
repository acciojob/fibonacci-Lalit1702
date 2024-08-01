function fibonacci(num) {
// your code here
	if (num <= 0) {
        throw new Error("Input must be a positive integer.");
    }
    if (num === 1) {
        return 0;
    }
    if (num === 2) {
        return 1;
    }
    
    let a = 0, b = 1;
    for (let i = 3; i <= num; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    
    return b;
}

module.exports = fibonacci;
