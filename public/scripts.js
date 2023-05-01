function getPersonIdToUpdate(PersonId) {
    console.log(PersonId);
    let oldName = document.getElementById(`personName${PersonId}`).innerText;
    let oldAge = document.getElementById(`personAge${PersonId}`).innerText;
    let oldGender = document.getElementById(`personGender${PersonId}`).innerText;
    let oldEmail = document.getElementById(`personEmail${PersonId}`).innerText;
    document.getElementById("nametoupdate").value = oldName;
    document.getElementById("agetoupdate").value = oldAge;
    document.getElementById("gendertoupdate").value = oldGender;
    document.getElementById("emailtoupdate").value = oldEmail;
    document.getElementById("idtoupdate").value = PersonId;
  }