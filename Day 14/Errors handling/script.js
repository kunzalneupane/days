async function riskyOperation() {
    throw new Error("Something went wrong!");
}

async function handleError() {
    try {
        const result = await riskyOperation(); // This will throw an error
        console.log(result);
    } catch (error) {
        console.error("Caught an error:", error.message); // Handle the error
    }
}

handleError();
