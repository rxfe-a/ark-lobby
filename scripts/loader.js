const MainServerURL = 'https://2mdfmnqv-8080.usw3.devtunnels.ms/'
const BackupURL = 'https://sm1456.vercel.app/'

function go() {
    window.location.href= MainServerURL + '#' + localStorage.getItem('username')
  const butt = document.getElementById('TitansGO')
  butt.style.backgroundColor = '#333333';
  butt.textContent = 'FINDING SERVER';
  setTimeout(() => {
    window.location.href= BackupURL + '#' + localStorage.getItem('username');
  }, 7000);
  }