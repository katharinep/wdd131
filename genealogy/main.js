import { articles, forms } from './data.js';

const articleList = document.getElementById('articles');
const formsList = document.getElementById('formsList');

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

function renderForms(data) {
    data.forEach(form => {
        const formBox = document.createElement('div');
        formBox.classList.add('form-box');
        formBox.innerHTML = `
        <h3>${form.title}<h3>
        <p>${form.description}</p>
        <a href="#">Download PDF</a>`;

        formsList.appendChild(formBox);
    });
}

if (articleList) {
    renderArticles(articles);
}

if (formsList) {
    renderForms(forms);
}