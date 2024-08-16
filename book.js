document.addEventListener('DOMContentLoaded', () => {
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            const tocContainer = document.getElementById('toc-container');
            data.forEach(item => {
                const titleDiv = document.createElement('div');
                titleDiv.className = 'toc-title';
                titleDiv.textContent = item.title;
                
                const childrenUl = document.createElement('ul');
                childrenUl.className = 'toc-children';
                const childLi = document.createElement('li');
                childLi.textContent = `Page ${item.page}`;
                childrenUl.appendChild(childLi);

                titleDiv.addEventListener('click', () => {
                    const isVisible = childrenUl.style.display === 'block';
                    childrenUl.style.display = isVisible ? 'none' : 'block';
                });

                tocContainer.appendChild(titleDiv);
                tocContainer.appendChild(childrenUl);
            });
        })
        .catch(error => console.error('Error loading books.json:', error));
});
