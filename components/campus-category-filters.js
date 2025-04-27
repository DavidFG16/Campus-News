class CategoryFilters extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      shadow.innerHTML = `
        <style>
            #categorys {
                display: flex;
                gap: 12px;
                flex-wrap: wrap;
                margin: 16px 0;
                justify-content: center;
            }

            button {
                padding: 10px 20px;
                border: 2px solid #444;
                background-color: #f7f7f7;
                color: #333;
                font-size: 14px;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-weight: 600;
            }

            button:hover {
                background-color: #e0e0e0;
                border-color: #222;
            }

            button.active {
                background-color: #444;
                color: #fff;
                border-color: #333;
            }
        </style>
        
        <div id="categorys">
            <button>Todas</button>
            <button>Eventos</button>
            <button>Investigación</button>
            <button>Deportes</button>
        </div>
      `;
    }
    // Métodos para renderizar datos y emitir evento…
  }
  customElements.define("campus-category-filters", CategoryFilters);

  export default CategoryFilters