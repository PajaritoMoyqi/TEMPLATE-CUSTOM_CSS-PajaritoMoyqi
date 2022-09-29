/* how-to make custom speech-bubble step 

3. get name of uploaded file from hidden input[type="file"].
4. change innerHTML using the name.

*/

const hiddenFileInput = document.querySelector('#image-upload');
const fileNameBox = document.querySelector('.input-file-name');

hiddenFileInput.addEventListener('change', () => {
  const fileName = hiddenFileInput.files[0].name;
  console.log(hiddenFileInput);
  fileNameBox.innerHTML = fileName;
})