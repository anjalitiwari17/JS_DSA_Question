// Fibonacci sequence 

function Fibonacci(n){

const fib=[0,1];



for(let i=2;i<n;i++){
    fib[i]=fib[i-1]+fib[i-2];
}
return fib;

}
const n=10;
const FibonacciSeries=Fibonacci(n);
console.log(FibonacciSeries);