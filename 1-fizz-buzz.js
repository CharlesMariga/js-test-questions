function solution(N) {
  // If the number is negative, return
  if (N < 0) return;

  // Loop through the number stating with 1
  for (let i = 1; i <= N; i++) {
    //  If the number is a power of 2, print "POWER"
    if (i > 0 && (i & (i - 1)) === 0) console.log("POWER");
    // Else print the current number
    else console.log(i);
  }
}

// Test cases
solution(7);
solution(16);
