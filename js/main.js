// {/* <script> */}

     

      // Use Fetch API to load the component
      fetch('layout/header.html')
        .then(response => { 
          if (!response.ok) {
            throw new Error('Error fetching header: ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          document.getElementById('header-container').innerHTML = data;
          const script = document.createElement('script');
          script.src = 'js/header.js';  
          document.body.appendChild(script);
        })
        .catch(error => console.error(error));

      // Fetch home page content
      fetch('pages/home.html')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching home page: ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          document.getElementById('home-container').innerHTML = data;
          // Dynamically create and append the script element
          const script = document.createElement('script');
          script.src = 'js/swiper.js';  // Path to your Swiper JS file
          document.body.appendChild(script);  // Append the script to the body or head
        })
        .catch(error => console.error(error));

      // Fetch home page content
      fetch('pages/fashion.html')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching fashion page: ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          document.getElementById('fashion-container').innerHTML = data;
          const script = document.createElement('script');
          script.src = 'js/fashion.js';  // Path to your Swiper JS file
          document.body.appendChild(script);  // Append the script to the body or head
        })
        .catch(error => console.error(error));

      // Fetch seller instructions
      fetch('pages/sellerinstruction.html')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching seller instructions: ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          document.getElementById('sellerinstruction-container').innerHTML = data;
          const script = document.createElement('script');
          script.src = 'js/sellerinstruction.js';  // Path to your Swiper JS file
          document.body.appendChild(script);  // Append the script to the body or head
        })
        .catch(error => console.error(error));

      // Fetch seller instructions
      fetch('pages/myAcount.html')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching myAcount instructions: ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          document.getElementById('myAcount-container').innerHTML = data;
          const script = document.createElement('script');
          script.src = 'js/myAcount.js';  // Path to your Swiper JS file
          document.body.appendChild(script);
        })
        .catch(error => console.error(error));
      
      // Fetch electronis instructions
      fetch('pages/electronis.html')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching electronis instructions: ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          document.getElementById('electronis-container').innerHTML = data;
          const script = document.createElement('script');
          script.src = 'js/fashion.js';  // Path to your Swiper JS file
          if(document.head.contains(script)) return;
          document.body.appendChild(script);  // Append the script to the body or head
        })
        .catch(error => console.error(error));

        // Fetch sport instructions
      fetch('pages/sports.html')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching sports instructions: ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          document.getElementById('sports-container').innerHTML = data;
          const script = document.createElement('script');
          script.src = 'js/fashion.js';  // Path to your Swiper JS file
          if(document.head.contains(script)) return;
          document.body.appendChild(script);  // Append the script to the body or head
        })
        .catch(error => console.error(error));

       // Fetch food instructions
       fetch('pages/food.html')
       .then(response => {
         if (!response.ok) {
           throw new Error('Error fetching food instructions: ' + response.status);
         }
         return response.text();
       })
       .then(data => {
         document.getElementById('food-container').innerHTML = data;
         const script = document.createElement('script');
         script.src = 'js/fashion.js';  // Path to your Swiper JS file
         if(document.head.contains(script)) return;
         document.body.appendChild(script);  // Append the script to the body or head
       })
       .catch(error => console.error(error));

       // Fetch software instructions
       fetch('pages/software.html')
       .then(response => {
         if (!response.ok) {
           throw new Error('Error fetching software instructions: ' + response.status);
         }
         return response.text();
       })
       .then(data => {
         document.getElementById('software-container').innerHTML = data;
         const script = document.createElement('script');
         script.src = 'js/fashion.js';  // Path to your Swiper JS file
         if(document.head.contains(script)) return;
         document.body.appendChild(script);  // Append the script to the body or head
       })
       .catch(error => console.error(error));

        // Fetch test instructions
      fetch('pages/detail.html')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching test instructions: ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          document.getElementById('detail-container').innerHTML = data;
        })
        .catch(error => console.error(error));
      
        // Fetch test instructions
      fetch('pages/shopping.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching shopping instructions: ' + response.status);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('shopping-container').innerHTML = data;
      })
      .catch(error => console.error(error));

      // Fetch seller instructions
      fetch('pages/seller.html')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching seller instructions: ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          document.getElementById('seller-container').innerHTML = data;
        })
        .catch(error => console.error(error));
      
      fetch('pages/product.html')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching seller instructions: ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          document.getElementById('product-container').innerHTML = data;
          const script = document.createElement('script');
          script.src = 'js/product.js';  
          document.body.appendChild(script);  
        })
        .catch(error => console.error(error));

      // Fetch footer
      fetch('layout/footer.html')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching footer: ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error(error));


    // </script>
