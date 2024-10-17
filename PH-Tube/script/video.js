console.log('videos');
// 1- Fetch, Load and Show Categories on html

// Create loadCategories
const loadCategories = () =>{
// fetch data
fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
.then(res => res.json())
.then(data => displayCategories(data.categories))
.catch(error => console.log(error))
};

const loadVideos = () =>{
    // fetch data
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .catch(error => console.log(error))
    };
    const displayVideos=(videos) =>{
        const videoContainer = document.getElementById('videos');
        for(let video of videos){
            console.log(video);
            const card = document.createElement('card');
            card.classList =" card-compact bg-base-100 w-96 shadow-xl"
            card.innerHTML =`
                <figure class="h-[200px]">
    <img 
      src=${video.thumbnail}
      class="h-full w-full object-cover"
  </figure>

  <div class="px-0 py-2 flex gap-2">
    <div>
            <img class="w-10 h-10 rounded-full object-cover" src="${video.authors[0].profile_picture}"</>
    </div>
     <div>
          <h2>${video.title}</h2>
          <p></p>  
    </div>
  </div>
            `
            videoContainer.append(card);
        };
    };
// Create displayCategories
const displayCategories = (categories) =>{
const categoryContainer = document.getElementById("categories");

    for(let item of categories){
        console.log(item);
        // create btn.
        const button = document.createElement("button");
        button.classList= "btn";
        button.innerText = item.category;
        categoryContainer.appendChild(button);
    };
}
loadCategories();
loadVideos();