// const { data } = require("autoprefixer");

const components = {
    homeComponent: new function() {
        const mThis = this;
        this.self = document.getElementById('home-container');

        this.show = (options) => {
            if (!options) options = {};
            console.log(999999);
            // Define the API endpoint with the query parameter
            // const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
            const apiUrl = 'http:/127.0.0.1:8000/test-api?api_key=ab';

            // Make the API request using fetch
            fetch("http://192.168.56.1:8000/test-api?api_key=ab", { 
                method: "GET",
                headers: { "Content-Type": "application/json" }
            })
            .then(response => response.json())
            .then(data =>{
                console.log(JSON.stringify(data));
                mThis.renderDataList(data);
            })
            .catch(error => console.error("Error fetching API:", error));


        };

        this.renderDataList = (response)=> {
            console.log(222,mThis.self);
            const container = mThis.self.querySelector("#home-data-list");
            const paginationContainer = mThis.self.querySelector("#home-pagination");
            container.innerHTML = "";
            paginationContainer.innerHTML = "";
        
            if (!response || response.status !== 200 || !response.data) {
                container.innerHTML = "<p>No data available</p>";
                return;
            }
        
            // Render data items
            response.data.data.forEach(item => {
                const itemElement = document.createElement("div");
                itemElement.classList.add("data-item");
                itemElement.innerHTML = `
                    <h3>${item.title}</h3>
                    <p>${item.short_description}</p>
                    <img src="${item.thumbnail}" alt="${item.title}" style="width: 100px; height: auto;"/>
                `;
                container.appendChild(itemElement);
            });
        
            // Render pagination
            response.data.links.forEach(link => {
                if (link.url) {
                    const pageButton = document.createElement("button");
                    pageButton.innerText = link.label;
                    pageButton.disabled = link.active;
                    pageButton.addEventListener("click", () => fetchData(link.url));
                    paginationContainer.appendChild(pageButton);
                }
            });
        }
    }
};