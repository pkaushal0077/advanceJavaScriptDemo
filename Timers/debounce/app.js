function queryAPI(searchTerm, api) {
    console.log(`Making API request for ${searchTerm} to API ${api}`)
}

/*
const searchInput = document.querySelector("#search")

let debounceTimeout
searchInput.addEventListener("input", ()=>{
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(()=>{
        queryAPI()
    },400)
})*/


function debounce(callback, delay) {
    let timeout;
    return (...args) => {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            callback(...args)
        }, delay)
    }
}

const searchInput = document.querySelector("#search")

const debounceQueryAPI = debounce(queryAPI, 400)
console.log(debounceQueryAPI)
searchInput.addEventListener("input", (event) => {
    debounceQueryAPI(event.target.value, "google api")
})
