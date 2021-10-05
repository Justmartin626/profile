let profile = {
  profilePic: "Martin",
  fullName: "Martin Hernandez",
  location: "Los Angeles",
  contact: {
    instagram: "https://www.instagram.com/the_akward_programmer/",
    email: "mailto:Hernandezwork1399@gmail.com",
    github: "https://github.com/Justmartin626",
  },
};

document.getElementById("fullname").innerText = profile.fullName;
document.getElementById("age").innerText = profile.age;
document.getElementById("instagram").href = profile.contact.instagram;
document.getElementById("email").href = profile.contact.email;
document.getElementById("github").href = profile.contact.github;
console.log(profile.age);
