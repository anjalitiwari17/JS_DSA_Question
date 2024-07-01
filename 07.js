function kthLargest(nums,k){
    
    const arr=nums.sort();

    const arr1=arr.reverse();
    console.log(arr1);
    let a;
   for(let i=0;i<=k;i++){
     a=arr[i];
   }
    return a;
}

const arr=[3,1,2,4,5,6,3,4,5,7];

const k=5;
const largest=kthLargest(arr,k);
console.log(largest);