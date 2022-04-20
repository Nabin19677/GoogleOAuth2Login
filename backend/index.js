import expressApp from "./app/index.js";


expressApp.listen(process.env.PORT | 8000, () => {
    console.log(`Listening on port ${process.env.PORT | 8000}`);
})