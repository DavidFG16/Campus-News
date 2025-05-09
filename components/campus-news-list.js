import  {campusArticles} from '../main.js' 

class ItemsList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback(){
    const shadow = this.shadowRoot
    const style = document.createElement('style')
    style.textContent=  `
          .item {
            padding: 12px;
            border-bottom: 1px solid #ddd;
            cursor: pointer;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-bottom: 12px;
            transition: transform 0.2s ease;
          }
  
          .item:hover {
            transform: translateY(-4px);
          }
  
          h3 { margin: 0 0 6px; font-size: 18px; color: #333; }
          p { margin: 0; font-size: 14px; color: #555; }
        </style>
      `;

      shadow.appendChild(style)
      document.addEventListener('DOMContentLoaded', ()=>{
        const categorias = campusArticles.map(article => article.category)
        const categoriasNoRepeat = new Set(categorias)

        const seccion = (filter)=>{
          campusArticles.forEach(elee)

        }
      })
    }    
    
  }

  customElements.define("campus-news-list", ItemsList);

