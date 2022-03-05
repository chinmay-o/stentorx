
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHb6fyK6ZzvvdQzUhtrbWhcFU6YvupjHU",
  authDomain: "career-6743b.firebaseapp.com",
  projectId: "career-6743b",
  storageBucket: "career-6743b.appspot.com",
  messagingSenderId: "103310327567",
  appId: "1:103310327567:web:f49bbbeb904d6a6959887a",
  measurementId: "G-LN0QBHJXJS",
  databaseURL: "https://career-6743b-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let applicationRef = firebase.database().ref('career-database');
var resumeURL;

var uploadProgress = setInterval(function() {

  if (document.querySelector('#candid-resume').files[0] != null) {

    $('.loadingResume').css("display", "none");
    resumeUpload();
    clearInterval(uploadProgress);
  }
}, 200)

document.getElementById('apply-career').addEventListener('submit', submitForm);

function submitForm(e) {

  e.preventDefault();

  var name = getInput('name');
  var email = getInput('email');
  var number = getInput('mobile');
  var url = getInput('workURL');

  saveProfile(name, email, number, url);
}

function saveProfile(name, email, number, url) {

  var profileData = applicationRef.push();
  profileData.set({

      timestamp: moment().format('DD/MM/YYYY h:mm:ss a'),
      name: name,
      email: email,
      number: number,
      url: url,
      resume: resumeURL,
    })
    .then(function() {

      console.log('Synchronization succeeded');
      $('#apply-career')[0].reset();
      $('#success').css("display", "block");
    })
    .catch(function(error) {

      console.log('Synchronization failed');
      $('#error').css("display", "block");
    });
}

function resumeUpload() {

  const ref = firebase.storage().ref();
  const file = document.querySelector('#candid-resume').files[0];
  const name = (+new Date()) + '-' + file.name;
  const metadata = {
    contentType: file.type
  };
  const task = ref.child(name).put(file, metadata);

  task.then(snapshot => snapshot.ref.getDownloadURL()).then((url) => {
      resumeURL = url;
    })
    .catch(console.error);
}

function getInput(id) {

  return document.getElementById(id).value;
}
