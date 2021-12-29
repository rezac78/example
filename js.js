function finalGrade(exam, projects) {
  if (exam > 90 || projects > 1) {
    console.log("100 A+");
  } else if (exam > 75 && 0 > projects < 5) {
    console.log("90 A");
  } else if (exam > 50 && 0 > projects < 2) {
    console.log("75 B-");
  } else {
    console.log("0");
  }
}

finalGrade(85, 5);
