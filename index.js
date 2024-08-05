// Get elements
const postButton = document.getElementById('postButton');
const postContent = document.getElementById('postContent');
const feed = document.querySelector('.feed');

// Event listener for posting
postButton.addEventListener('click', () => {
    const content = postContent.value.trim();
    if (content) {
        addPost(content);
        postContent.value = ''; // Clear textarea after posting
    }
});

// Function to add a post
function addPost(content) {
    const postElement = document.createElement('div');
    postElement.className = 'post';

    postElement.innerHTML = `
        <div class="post-author">John Doe</div>
        <div class="post-content">${content}</div>
        <div class="post-actions">
            <button class="like-button">Like</button>
            <span class="like-count">0 likes</span>
        </div>
    `;

    // Like button functionality
    const likeButton = postElement.querySelector('.like-button');
    const likeCount = postElement.querySelector('.like-count');
    let likes = 0;

    likeButton.addEventListener('click', () => {
        likes++;
        likeCount.textContent = `${likes} like${likes !== 1 ? 's' : ''}`;
    });

    // Add post to feed
    feed.prepend(postElement);
}

