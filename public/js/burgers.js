document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    const changeHungryBtns = document.querySelectorAll('.change-sleep');
  
    if (changeHungryBtns) {
      changeHungryBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          const id = e.target.getAttribute('data-id');
          const newHungry = e.target.getAttribute('data-newhungry');
  
          const newHungryState = {
            hungry: newHungry,
          };
  
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            body: JSON.stringify(newHungryState),
          }).then((response) => {
            if (response.ok) {
              console.log(`changed hungry to: ${newHungry}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    const createBurgerBtn = document.getElementById('create-form');
  
    if (createBurgerBtn) {
      createBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const newBurger = {
          burger_name: document.getElementById('burger_name').value.trim(),
          hungry: document.getElementById('hungry').checked,
        };
  
        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          body: JSON.stringify(newBurger),
        }).then(() => {
          document.getElementById('burger_name').value = '';
  
          console.log('Created a new burger!');
          location.reload();
        });
      });
    }
  
    const deleteBurgerBtns = document.querySelectorAll('.delete-burger');
  
    deleteBurgerBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
  
        fetch(`/api/burgers/${id}`, {
          method: 'DELETE',
        }).then((res) => {
          console.log(res);
          console.log(`Deleted burger: ${id}`);
  
          location.reload();
        });
      });
    });
  });
  