document.addEventListener("DOMContentLoaded", function() {
    const postContent = document.getElementById("post-content");
    const postBtn = document.getElementById("post-btn");
    const postsDiv = document.getElementById("posts");

    // Cargar publicaciones guardadas
    function loadPosts() {
        const storedPosts = localStorage.getItem("posts");
        if (storedPosts) {
            const posts = JSON.parse(storedPosts);
            posts.forEach(post => {
                createPost(post);
            });
        }
    }

    // Crear una publicación y añadirla a la página
    function createPost(content) {
        const postDiv = document.createElement("div");
        postDiv.className = "post";
        postDiv.textContent = content;
        postsDiv.appendChild(postDiv);
    }

    // Guardar la publicación en Local Storage
    function savePost(content) {
        const storedPosts = localStorage.getItem("posts");
        const posts = storedPosts ? JSON.parse(storedPosts) : [];
        posts.push(content);
        localStorage.setItem("posts", JSON.stringify(posts));
    }

    postBtn.addEventListener("click", function() {
        const content = postContent.value.trim();
        if (content) {
            createPost(content);
            savePost(content);
            postContent.value = ""; // Limpiar el campo de entrada
        }
    });

    // Cargar publicaciones al inicio
    loadPosts();
});
