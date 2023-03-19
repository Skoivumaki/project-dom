function check() {
    var uusi = document.createElement('p')
    uusi.innerHTML = "New content!";
    uusi.setAttribute('id','newData');
    document.body.appendChild(uusi);
  }