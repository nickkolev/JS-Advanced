function search() {
   let arrElements = Array.from(document.getElementById('towns').querySelectorAll('li'));
   let searchText = document.getElementById('searchText').value.toLowerCase();
   let resultElement = document.getElementById('result');

   let counter = 0;

   for (const town of arrElements) {
      if(town.textContent.toLowerCase().includes(searchText) && searchText !== '') {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         counter++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   resultElement.textContent = `${counter} matches found`;
   document.getElementById('searchText').value = '';
}
