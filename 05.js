function pro(nums){
    const n=nums.length;
    
let product =1;
let output=1;

for(let i=0;i<n;i++){
    output[1]*=product;
    product*=nums[i];
    output+=1;
    
}
return product;
}
let prod=1;
let n=4;
const nums=[1,2,3,4]
console.log(pro(nums));
