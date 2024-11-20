// {/* <script> */}
      const subURL ='';
      console.log(1234,window.location.hostname);
      if (window.location.hostname === "setthi-pheap11.github.io") {
        subURL = "lurkkrobsop.github.io/";
      }

      // subURL = "lurkkrobsop.github.io/";
      // Use Fetch API to load the header
      fetch('../'+subURL+'layout/header.html')
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
      fetch('../'+subURL+'pages/home.html')
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
      fetch('../'+subURL+'pages/fashion.html')
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
      fetch('../'+subURL+'pages/sellerinstruction.html')
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
      fetch('../'+subURL+'pages/myAcount.html')
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
      fetch('../'+subURL+'pages/electronis.html')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching electronis instructions: ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          document.getElementById('electronis-container').innerHTML = data;
          const script = document.createElement('script');
          AOS.init();
          script.src = 'js/fashion.js';  // Path to your Swiper JS file
          if(document.head.contains(script)) return;
          document.body.appendChild(script);  // Append the script to the body or head
        })
        .catch(error => console.error(error));

        // Fetch sport instructions
      fetch('../'+subURL+'pages/sports.html')
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

        // Fetch test instructions
      fetch('../'+subURL+'pages/test.html')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching test instructions: ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          document.getElementById('test-container').innerHTML = data;
        })
        .catch(error => console.error(error));
      
      // Fetch seller instructions
      fetch('../'+subURL+'pages/seller.html')
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
      
      fetch('../'+subURL+'pages/product.html')
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
      fetch('../'+subURL+'layout/footer.html')
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
