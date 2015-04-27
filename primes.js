var m = 1000;
var q = 0;
for(var n = 1; n <= m; n++) {
  for(var p = 1; p <= n; p++) {
    if(n % p == 0)
      q = q + 1;
  }
  if(q <= 2)
    console.log(n);
    q = 0;
}
