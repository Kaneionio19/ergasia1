let img;
let buttons = [];
let texts = [];
let sound;
let activeRect = null;
let activeButtonIndex = -1;

let buttonPositions = [];
let buttonTexts = ["Το έργο.", "Αρχιτεκτονική", "Πάτα Εδώ!", "Γαιτανάκι"];
let textContents = ["Η «Πρωτομαγιά στην Κέρκυρα» αποτελεί χαρακτηριστικό έργο της Επτανησιακής Σχολής του 19ου αιώνα. Μ’ αυτή την εντυπωσιακή για τη ζωντάνια και την εύγλωττη παραστατικότητά της ελαιογραφία ο ζωγράφος απεικονίζει τα ήθη και τα έθιμα του τόπου του την εποχή μετά την ένωση (1864) της Επτανήσου με την Ελλάδα", "Λιστόν ονομάζεται ο πιο κεντρικός πεζόδρομος της Κέρκυρας, η πιο διάσημη «βόλτα» για τους Κερκυραίους. Βρίσκεται στη δυτική άκρη της Σπιανάδας, της μεγάλης πλατείας και οριοθετείται από αρχοντικά που σχηματίζουν μεγάλες καμάρες, αψίδες, στο τελευταίο τους πάτωμα. Οι καμάρες αυτές, που οι Κερκυραίοι τις λένε βόλτες, στεγάζουν σήμερα πλήθος καφετεριών και εστιατορίων, που κάνουν το Λιστόν το κέντρο της ζωής της Κέρκυρας για ντόπιους και επισκέπτες.", "Οι χωρικοί σύμφωνα με το έθιμο τραγουδούσαν ένα τραγούδι για την πρωτομαγιά.", "Κερκυραικό ΄έθιμο οι κάτοικοι κυκλοφορούν ενα κυπαρίσση στο δρόμο σαν γαιτανάκι."];

function preload() {
  img = loadImage('assets/protomagia.jpg');
  sound = loadSound('assets/magic.mp3');
}

function setup() {
  createCanvas(img.width, img.height);

  // Δημιουργία κουμπιών και κειμένων
  buttonPositions.push(createVector(30, 30));
  buttonPositions.push(createVector(500, 260));
  buttonPositions.push(createVector(500, 600));
  buttonPositions.push(createVector(400, 350));

  for (let i = 0; i < 4; i++) {
    buttons[i] = createButton(buttonTexts[i]);
    buttons[i].position(buttonPositions[i].x, buttonPositions[i].y);
    buttons[i].mousePressed(() => toggleRect(buttonPositions[i].x, buttonPositions[i].y, textContents[i], i));
  }
}

function draw() {
  image(img, 0, 0, width, height);
}

function toggleRect(x, y, text, index) {
  // Έλεγχος για αν υπάρχει ήδη ενεργό παράθυρο
  if (activeRect !== null) {
    activeRect.remove();
    activeRect = null;
  }

  // Εμφάνιση παραθύρου με κείμενο
  activeRect = createDiv(text);
  activeRect.position(x + buttons[index].width + 10, y);
  activeRect.style('background-color', '#fff');
  activeRect.style('padding', '10px');
  activeRect.style('border', '2px solid #000');

  // Αναπαραγωγή ήχου
  sound.play();

  // Καθορισμός ενεργού κουμπιού
  activeButtonIndex = index;
}


