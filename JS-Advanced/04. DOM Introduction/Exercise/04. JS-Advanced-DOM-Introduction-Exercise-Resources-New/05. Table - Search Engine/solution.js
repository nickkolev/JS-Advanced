function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      
      const arr = Array.from(document.getElementsByClassName('container')[0].querySelectorAll('tbody tr'));
      const searchKeyword = document.getElementById('searchField').value.toLowerCase();
      let resultElement = document.getElementById('result');
      
      for (const row of arr) {
         if(row.textContent.toLowerCase().includes(searchKeyword) && searchKeyword != '') {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }
      }

      document.getElementById('searchField').value = '';
   }
}