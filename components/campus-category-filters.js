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

            #categorys button {
            padding: 12px 24px;
            border: 2px solid #4c8bf5;
            background-color: #e8f0fe;
            color: #4c8bf5;
            font-size: 14px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
            position: relative;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            #categorys button:hover {
            background-color: #c6dbf7;
            border-color: #4c8bf5;
            color: #003a72;
            }

            #categorys button.selected {
            background: linear-gradient(135deg, #4c8bf5, #1a73e8);
            color: white;
            border-color: #1a73e8;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
            transform: scale(1.05);
            transition: all 0.3s ease;
            }
      </style>
        
        <div id="categorys">
          <button data-category="Todas">Todas</button>
          <button data-category="Eventos">Eventos</button>
          <button data-category="Investigación">Investigación</button>
          <button data-category="Deportes">Deportes</button>
        </div>
      `;
  

      const buttons = shadow.querySelectorAll('#categorys button');
  

      buttons.forEach(button => {
        button.addEventListener('click', () => {
          buttons.forEach(btn => btn.classList.remove('selected'));
          button.classList.add('selected');
        });
      });


      this.dispatchEvent(new CustomEvent("campus:category-change", {
        detail: { category: "Investigación" },
        bubbles: true,
        composed: true
      }));
    }
  }
  
  customElements.define("campus-category-filters", CategoryFilters);
  

  