const backendURI = "https://url-shortner-p26q.onrender.com";

const inputUrl = document.getElementById("redirectUrl");
const btn = document.getElementById("shortenBtn");

btn.addEventListener("click", consolefn);

let value;

const postData = async ()=>{
    const res = await fetch (`${backendURI}/api/v1/urls`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
    });
    const data = await res.json();
    const {shorturl} = data.entry;
    const {redirecturl} = data.entry;

    document.getElementById("updatedUrl").innerHTML = `<a href='${redirecturl}'>${backendURI}/api/v1/urls/${shorturl}</a>`;
}

const getData = async ()=> {
    const response = await fetch (`${backendURI}/api/v1/urls`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
}

function consolefn() {
    const content = {
        redirecturl: inputUrl.value,
    }
    value=content;
    postData();
    getData();
}
