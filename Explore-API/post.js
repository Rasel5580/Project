function loadPost(){
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(data => load(data));
}

function load(posts){
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const postDiv =document.createElement('div');
        console.log(post);
        postDiv.innerHTML =`<h4> User </h4>
        <p>dfgshjdchs fdgjhf dfvcndhj </p>`;
        postContainer.appendChild(postDiv);
    }
}


loadPost();