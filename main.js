// dom

// fetch config (options)
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9de00422ddmsh33753bb374ade60p1c3dc0jsn3c0dab29c812',
		'X-RapidAPI-Host': 'website-screenshot6.p.rapidapi.com'
	}
}; 
// on submit logic
const  handleSubmit = async () => {
    const websiteUrl = document.getElementById('websiteUrl')
    const btn = document.getElementById('button')
    const screenshot = document.getElementById('screenshot')
    if (websiteUrl.value.length == 0){
        alert("no no!!")
    }else{
        btn.innerHTML = 'loading...'

        // const url = 'https://www.youtube.com/'
        const url = websiteUrl.value
        const fetchResult = await fetch(`https://website-screenshot6.p.rapidapi.com/screenshot?url=${url}&width=1920&height=1080&fullscreen=true`, options)
        .then(data=>data.json())
        .catch(err=>console.error(err));
        
        btn.innerHTML = 'screenshot'
        console.log(fetchResult);
        if (fetchResult) {
            screenshot.innerHTML = `<h2 class="text-center">Here we go</h2><img class="screenshot-image" src=${fetchResult?.screenshotUrl} alt="${url}"></img>`
        }
    }
    
}
