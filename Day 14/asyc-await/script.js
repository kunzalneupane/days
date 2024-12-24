function api(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },6000);

    });
}

async function getweatherdata() {
    await api();
    await api();
    
}