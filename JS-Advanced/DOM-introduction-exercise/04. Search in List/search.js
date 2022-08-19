function search() {
   let inputElement = document.getElementById('searchText').value;
   let townsList = Array.from(document.querySelectorAll('#towns li'));
   let match = document.getElementById('result')
   let count = 0;

   for (let town of townsList) {
      if(town.textContent.includes(inputElement)){
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         count++;
      }else{
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
     
   }
   match.textContent = `${count} matches found`
}
 