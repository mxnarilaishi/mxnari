document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // Hide all sections
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    
    // Show the clicked section
    const targetId = tab.getAttribute('data-target');
    document.getElementById(targetId).style.display = 'block';
  });
});
