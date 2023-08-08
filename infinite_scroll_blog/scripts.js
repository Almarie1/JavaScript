
// const postsContainer = document.getElementById('post-container');
// const loading = document.querySelector('.loader');
// const filter = document.getElementById('filter');
// let limit = 1;
// let page = 1;

// //fetch posts from API
// async function getPosts() {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
//     const data = await res.json();
//     return data;
// }

// async function showPosts() {
//     loading.classList.add('show'); 
//     const posts = await getPosts();
//     console.log(posts);
//     posts.forEach(post => {
//         const postEl = document.createElement('div');
//         postEl.classList.add('post');
//         postEl.innerHTML = `
//         <div class="number">${post.id}</div>
//         <div class="post-info">
//             <h2 class="post-title">${post.title}</h2>
//             <p class="post-body">${post.body}</p>
//         </div>`;
//         postsContainer.appendChild(postEl);
//     });
//     loading.classList.remove('show');  is
// }

// //show loader and fetch more posts
// function showLoading() {
//     loading.classList.add('show')
//     setTimeout(() => {
//         loading.classList.remove('show')

//         setTimeout(() => {
//             page++
//             showPosts()
//         }, 300)
//     }, 1000);
// }

// //filter posts by input
// function filterPosts(e){
//     //console.log(e.target.value)
//     const term = e.target.value.toUppercase()
//     const posts = document.querySelectorAll('posts')
//     posts.forEach(post => {
//         const title = post.querySelector('.post-title').innertext.toUppercase()
//         const body = post.querySelector('.post-body').innertext.toUppercase()

//         if (title.indexof(term) > -1 || body.indexof(term) > -1) {
//             post.style.display = 'flex'
//         } 
//         else {
//             post.style.display = 'none'
//         }
//     })
// }

// showPosts();

// window.addEventListener('scroll',() => {
//     //console.log(document.documentElement.scrollTop)
//     const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
//     if (scrollTop + clientHeight >= scrollHeight -5) {
//         //console.log('Loading...')
//         showLoading()
//         filterPosts(e)
//     }
// })

const postsContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');
let limit = 1;
let page = 1;

// Fetch posts from API
async function getPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    const data = await res.json();
    return data;
}

// Show posts on the page
async function showPosts() {
    loading.classList.add('show');
    const posts = await getPosts();
    console.log(posts);
    posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML = `
            <div class="number">${post.id}</div>
            <div class="post-info">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}</p>
            </div>`;
        postsContainer.appendChild(postEl);
    });
    loading.classList.remove('show');
}

// Show loader and fetch more posts
function showLoading() {
    loading.classList.add('show');
    setTimeout(() => {
        loading.classList.remove('show');

        setTimeout(() => {
            page++;
            showPosts();
        }, 300);
    }, 1000);
}

// Filter posts by input
function filterPosts(e) {
    const term = e.target.value.toUpperCase();
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        const title = post.querySelector('.post-title').innerText.toUpperCase();
        const body = post.querySelector('.post-body').innerText.toUpperCase();

        if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    });
}

// Initial load of posts
showPosts();

// Attach event listeners
filter.addEventListener('input', filterPosts);

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        showLoading();
    }
});
