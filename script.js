const downloadCvButton = document.getElementById('download-cv');

downloadCvButton.addEventListener('click', () => {
  const cvLink = document.createElement('a');
  cvLink.href = './Resume-AWS&DevOps.pdf'; // replace with your CV file path
  cvLink.download = 'Resume-AWS&DevOps.pdf'; // replace with your desired file name
  cvLink.click();
});
