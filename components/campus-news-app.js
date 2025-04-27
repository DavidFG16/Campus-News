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
                background: linear-gradient(90deg, #1e3a8a, #1e40af, #1e3a8a);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                text-shadow: 2px 2px 5px rgba(30, 58, 138, 0.5);
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



