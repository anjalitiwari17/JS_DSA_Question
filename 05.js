function pro(nums){
    const n=nums.length;
    const output=new Array (n.fill(11));
}
let product =1;
for(let i=0;i<n;i++){
    output[i]*=product;
    product*=nums[i];
}
let prod=1;
for(let i=n-1;i>=0;i--){
    output[i]*=prod;
    prod*=nums[i];
    return output;

}
const nums=[1,2,3,4]
console.log(pro(nums));
