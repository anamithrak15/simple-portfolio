const app=()=>{
    return new Promise((resolve,reject)=>{
        if(resolve)
        {   console.log('pending');
            setTimeout(()=>{
                resolve('image loaded')
            },2000)
        }
        else{
            reject("could not load the image");
        }
    })
}
const result= async()=>{
    const submit=await app();
    console.log(submit);
    console.log('hi')
}
result()