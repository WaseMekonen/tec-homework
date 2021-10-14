console.log("app is loading");
const fs = require("fs");
const hebrewFile = "hebrew.txt";

fs.writeFileSync(hebrewFile, "שלום עולם");
const newData = fs.readFileSync(hebrewFile);
console.log(newData);

// לא התקבלה מחרוזת התקבל פורמט באפר שמייצג כל מילה בייצוג היקסדצימלי
// נמיר את מה נקבל בעזרת מילון יוטיאף 8
//  על מנת לקבל מחרוזת תקינה צריך להוסיף ברידפיילסינק פרמטר של אינקודינג