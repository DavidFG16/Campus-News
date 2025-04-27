class NewsApp extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
        <style>
            h1 {
                font-size: 44px;
                font-weight: 900;
                text-align: center;
                margin: 24px 0;
                letter-spacing: 1.5px;
                text-transform: uppercase;
                background: linear-gradient(90deg, #3a86ff, #4361ee, #5f0f40);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                text-shadow: 3px 3px 6px rgba(58, 134, 255, 0.2);
                font-family: 'Poppins', sans-serif;
                }

        </style>
        <h1>Campus News</h1>
        `
        // this.dispatchEvent(new CustomEvent("campus:debug-update", {
        //     detail: {
        //       category: currentCategory,
        //       selectedId: currentArticleId,
        //       total: campusArticles.length,
        //       filtered: filteredList.length
        //     },
        //     bubbles: true,
        //     composed: true
        //   }));
    }
}

customElements.define('campus-news-app', NewsApp)

export default NewsApp


// tras filtrar o seleccionar:



