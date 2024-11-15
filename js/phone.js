const loadPhone = async () => {
     const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
     const data = await res.json();
     const phones = data.data;
     // console.log(phones)
     displayPhones(phones)
}


const displayPhones = phones => {
     const phoneContainer = document.getElementById('phone-container');
     // console.log(phones)
     phones.forEach(phone => {
          console.log(phone);
          // 2 create a div 
          const phoneCard = document.createElement('div');
          phoneCard.classList = `bg-gray-100 shadow-xl card w-96`;
          // 3 set inner html
          phoneCard.innerHTML = `
               <figure>
                    <img src="${phone.image}" alt="Shoes" />
               </figure>
               <div class="card-body">
                    <h2 class="card-title">${phone.brand}</h2>
                    <p>${phone.phone_name}</p>
                    <p>${phone.slug}</p>
                    <div class="justify-end card-actions">
                    <button class="btn btn-primary">Buy Now</button>
               </div>
          `
          // 4 append child
          phoneContainer.appendChild(phoneCard);
     })
}


loadPhone()