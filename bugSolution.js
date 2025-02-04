function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return null; // Handle null or undefined values
  }
  // ... rest of your function
  return a + b; // Example operation
}