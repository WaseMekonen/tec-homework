console.log("app is loading");
const fs = require("fs");

const filename = "a1.txt"

fs.writeFileSync(filename,"Node is Great");

const data = fs.readFileSync(filename);
console.log(data);

// לא התקבלה מחרוזת התקבל פורמט באפר שמייצג כל מילה בייצוג היקסדצימלי
// נמיר את מה נקבל בעזרת מילון יוטיאף 8
//  על מנת לקבל מחרוזת תקינה צריך להוסיף ברידפיילסינק פרמטר של אינקודינג