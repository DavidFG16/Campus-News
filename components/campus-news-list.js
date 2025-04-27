class CampusNewsItem extends HTMLElement {
  constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      shadow.innerHTML = `
          <style>
              .item {
                  padding: 12px;
                  border-bottom: 1px solid #ddd;
                  cursor: pointer;
              }
              .item.active {
                  border-left: 4px solid #264653;
                  background: #f0f4f8;
              }
              h3 { margin: 0 0 6px; font-size: 16px; }
              p { margin: 0; font-size: 14px; color: #555; }
              .date { font-size: 12px; color: #999; margin-top: 4px; }
          </style>
          <div class="item">
              <h3>AA</h3>
              <p>AAAAA</p>
              <div class="date"></div>
          </div>
      `;
  }
}

customElements.define("campus-news-item", CampusNewsItem);




class ItemsList extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
        <campus-news-item></campus-news-item>
    `;
  }
}

  customElements.define("campus-news-list", ItemsList);

