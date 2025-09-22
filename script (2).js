document.getElementById("registerForm").addEventListener("submit", function(e)
{ e.preventDefault(); 
  
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const tanggal = document.getElementById("tanggal").value;
  const tempat = document.getElementById("tempat").value;
  const no_telp = document.getElementById("no_telp").value;
  const alamat = document.getElementById("alamat").value;
  const gender = document.querySelector('input[name="gender"]:checked').checked;   
  const setuju = document.getElementById("setuju").value;
  

  const user = {
    nama: nama,
    email: email,
    password: password,
    tanggal: tanggal,
    tempat: tempat,
    gender: gender,
    no_telp: no_telp,
    alamat: alamat
  };
  
  localStorage.setItem(email, JSON.stringify(user));
  alert("Sukses Daftar")
  
  const tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
  const newRow = tableBody.insertRow();
  
  newRow.insertCell(0).textContent = nama;
  newRow.insertCell(1).textContent = email;
  newRow.insertCell(2).textContent = tanggal;
  newRow.insertCell(3).textContent = tempat;
  newRow.insertCell(4).textContent = gender;
  newRow.insertCell(5).textContent = no_telp;
  newRow.insertCell(6).textContent = alamat;
  
  document.getElementById("registerForm").reset();
  
});