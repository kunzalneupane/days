function Operation() {
    return new Promise(resolve => setTimeout(() => resolve("sucess"), 4000));
}

async function run() {
    console.log("Starting...");
    const result = await Operation(); 
    console.log(result); 
}

run();
