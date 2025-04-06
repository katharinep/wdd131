import { articles, forms } from './data.js';

const articleList = document.getElementById('articles');

function renderArticles(data) {
    data.forEach(article => {
        const post = document.createElement('article');
        post.classList.add('post');
        post.innerHTML = `
            <div class="post-detail">
                <p class="post-date">${article.date}</p>
                <p class="post-author">${article.author}</p>
                <p class="post-tags">Tags: ${article.tags.map(tag =>`<span class="tag">${tag}</span>`).join(', ')}</p>
            </div>
            <div class="post-content">
                <h2 class="post-title">${article.title}</h2>
                <img src="${article.img}" alt="${article.alt}" class="archive material">
                <p class="post-body">${article.content}</p>
            </div>`;
        articleList.appendChild(post);
    });
}

function renderForms() {

}

if (articleList) {
    renderArticles(articles);
}