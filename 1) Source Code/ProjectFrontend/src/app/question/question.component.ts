import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private shared: SharedService, private registrationservice: RegistrationService, private router: Router) { }
  physhow: boolean = this.shared.physhow;
  cheshow: boolean = this.shared.cheshow;
  mathshow: boolean = this.shared.mathshow;
  javashow: boolean = this.shared.javashow;
  jsshow: boolean = this.shared.jsshow;
  htmlshow: boolean = this.shared.htmlshow;
  cssshow: boolean = this.shared.cssshow;
  showans: boolean = false;
  ngOnInit(): void {
    if (!this.registrationservice.session) {
      this.router.navigate(['/registration'])
    }
  }




  showanswer() {
    this.showans = true;
  }
  phyQuestion = [
    { id: '1', question: '1.[ML^-1T^-2] is the dimensional formula of', optionA: '(A) force', optionB: '(B) coefficient of friction', optionC: '(C) modulus of elasticity', optionD: '(D) energy', key: "C" },
    { id: '2', question: '2. The dimensional formula of coefficient of viscosity is', optionA: '(A) [MLT^-1]', optionB: '(B) [M^-1L^2T^-2]', optionC: '(C) [ML^-1 T^-1]', optionD: '(D) none of these', key: "C" },
    { id: '3', question: '3. On the basis of dimensional equation, the maximum number of unknown that can be found, is', optionA: '(A) one', optionB: '(B) two', optionC: '(C) three', optionD: '(D) four', key: "C" },
    { id: '4', question: '4. If v stands for velocity of sound, E is elasticity and d the density, then find x in the equation v = (d/E)^x', optionA: '(A) 1', optionB: '(B) ½', optionC: '(C) 2', optionD: '(D) -1/2', key: "D" },
    { id: '5', question: '5. The multiplication of 10.610 with 0.210 upto correct number of significant figure is', optionA: '(A) 2.2281', optionB: '(B) 2.228', optionC: '(C) 2.22', optionD: '(D) 2.2', key: "B" },
    { id: '6', question: '6. The measurement of radius of a circle has error of 1%. The error in measurement of its area is  ', optionA: '(A) 1%', optionB: '(B) 2%', optionC: '(C) 3%', optionD: '(D) none of these', key: "B" },
    { id: '7', question: '7. Dimensional formula of latent heat', optionA: '(A) M^0 L^2 T^-2', optionB: '(B) MLT^-2', optionC: '(C) ML^2 T^-2', optionD: '(D) ML<sup>2</sup>T<sup>-2</sup>', key: "A" },
    { id: '8', question: '8. In case of measurement of ‘g’, if error in measurement of length of pendulum is 2%, the percentage error in time period is1 %. The maximum error in measurement of g is', optionA: '(A) 1 %', optionB: '(B) 2 %', optionC: '(C) 4 %', optionD: 'no error', key: "C" },
    { id: '9', question: '9. If length of pendulum is increased by 2%. The time period will', optionA: '(A) increases by 1%', optionB: '(B) decreases by 1%', optionC: '(C) increases by 2%', optionD: '(D) decreases by 2%', key: "A" },
    { id: '10', question: '10. If radian correction is not considered in specific heat measurement. The measured value of specific heat will be', optionA: '(A) more than its actual value.', optionB: '(B) less than its actual value.', optionC: '(C) remains same as actual value.', optionD: '(D) none of these.', key: "A" },

  ]
  cheQuestion = [
    { id: '1', question: 'Q.1 The non-metal which has a shining appearance is', optionA: 'a) sulphur', optionB: 'b) phosphorus', optionC: 'c) iodine', optionD: 'd) bromine', key: 'C' },
    { id: '2', question: "Q.2 Which is the 'odd man' in the following", optionA: 'a) brass', optionB: 'b) common salt', optionC: 'c) cane sugar', optionD: 'd) water', key: 'A' },
    { id: '3', question: "Q.3 Which of the following is called 'the King of Chemicals?'", optionA: 'a) Nitric acid', optionB: 'b) Hydrochloric acid', optionC: 'c) Silver nitrate', optionD: 'd) Sulphuric acid', key: 'D' },
    { id: '4', question: 'Q.4 The modern system of symbols was evolved by', optionA: 'a) Dalton', optionB: 'b) Cavendish', optionC: 'c) Avogadro', optionD: 'd) Berzelius', key: 'D' },
    { id: '5', question: 'Q.5 The neutron was discovered by', optionA: 'a) Chadwick', optionB: 'b) Madam Curie', optionC: 'c) Becquerel', optionD: 'd) Aston', key: 'A' },
    { id: '6', question: 'Q.6 A mixture of ethyl alcohol and water can be separated by', optionA: 'a) evaporation', optionB: 'b) sublimation', optionC: 'c) using a separating funnel', optionD: 'd) fractional distillation', key: 'D' },
    { id: '7', question: 'Q.7 The Long Form of the Periodic Table is based on', optionA: 'a) atomic number', optionB: 'b) valency', optionC: 'c) atomic mass', optionD: 'd) atomic radius', key: 'A' },
    { id: '8', question: "Q.8 The term 'nucleons' apples to", optionA: 'a) neutrons', optionB: 'b) protons', optionC: 'c) protons and neutrons', optionD: 'd) protons and electrons', key: 'C' },
    { id: '9', question: 'Q.9 Isotopes differ in the number of', optionA: 'a) protons', optionB: 'b) neutrons', optionC: 'c) electrons', optionD: 'd) protons and electrons', key: 'B' },

  ]
  mathQuestion = [
    { id: '1', question: '1-A line which cuts a pair of parallel lines is called', optionA: 'a) tangent', optionB: 'b) chord', optionC: 'c) traversal', optionD: 'd) intersector', key: 'C' },
    { id: '2', question: '2-An angle whose value is ____, is called complete angle.', optionA: 'a) 180°', optionB: 'b) 240°', optionC: 'c) 360°', optionD: 'd) none of the above', key: 'C' },
    { id: '3', question: '3-The areas of two similar triangles are 81 sq. cm and 49 sq. cm. Find the ratio of their corresponding heights.', optionA: 'a) 9:7', optionB: 'b) 7:9', optionC: 'c) 6:5', optionD: 'd) 81:49', key: 'A' },
    { id: '4', question: '4-Consider ΔABD such that angle ADB = 20° and C is a point on BD such that AB=AC and CD=CA. Then the measure of angle ABC is', optionA: 'a) 30°', optionB: 'b) 40°', optionC: 'c) 45°', optionD: 'd) 60°', key: 'B' },
    { id: '5', question: '5-If the length and breadth of a rectangle are increased by a% and b% respectively, then the area will be increased by', optionA: 'a) (a-b+2ab/100)%', optionB: 'b) (a+b+2ab/100)%', optionC: 'c) (a+b+ab/100)%', optionD: 'd) (a-b+ab/100)', key: 'C' },
    { id: '6', question: '6-A, B and C can complete a piece of work in 14, 6 and 12 days respectively. Working together, they will complete the work in', optionA: 'a) 19/9 days', optionB: 'b) 27 days', optionC: 'c) 28/9 days', optionD: 'd) 25/8 days', key: 'C' },
    { id: '7', question: '7-If P^x = Q^y = R^z and Q/P = R/Q, then 2z/(x+z) = ?', optionA: 'a) y/z', optionB: 'b) y/x', optionC: 'c) x/y', optionD: 'd) z/y', key: 'B' },
    { id: '8', question: '8-A shopkeeper purchases 15 mangoes for Rs. 10 and sells them at 10 mangoes for Rs. 15. Thus, he earns a profit of', optionA: 'a) 50%', optionB: 'b) 75%', optionC: 'c) 80%', optionD: 'd) 125%', key: 'D' },
    { id: '9', question: '9-4950/6 + 112 x 1.75 = ? x 2', optionA: 'a) 510.5', optionB: 'b) 505.2', optionC: 'c) 515.2', optionD: 'd) none of the above', key: 'A' },
    { id: '10', question: '10-If a certain sum of money can become 5 times of its principal in 10 years, then the rate of interest is', optionA: 'a) 20%', optionB: 'b) 30%', optionC: 'c) 40%', optionD: 'd) 50%', key: 'C' },
    { id: '11', question: '11-An amount of Rs. 10,000 becomes Rs. 20,736 in 2 years. If the rate of interest is compounded half yearly, what is the annual rate of interest?', optionA: 'a) 25%', optionB: 'b) 20%', optionC: 'c) 40%', optionD: 'd) 30%', key: 'C' },

  ]
  javaQuestion = [
    { id: '1', question: '1) The default value of a static integer variable of a class in Java is,', optionA: 'a) 0', optionB: 'b) 1', optionC: 'c) Garbage value', optionD: 'd) Null', key: 'A' },
    { id: '2', question: '2) What will be printed as the output of the following program?\n public class testincr\n { \npublic static void main(String args[])\n {int i = 0; i = i++ + i;System.out.println("I = " +i);}}', optionA: 'a) I = 0', optionB: 'b) I = 1', optionC: 'c) I = 2', optionD: 'd) I = 3', key: 'B' },
    { id: '3', question: '3) Multiple inheritance means,', optionA: 'a) one class inheriting from more super classes', optionB: 'b) more classes inheriting from one super class', optionC: 'c) more classes inheriting from more super classes', optionD: 'd) None of the above', key: 'a' },
    { id: '4', question: '4) Which statement is not true in java language?', optionA: 'a) A public member of a class can be accessed in all the packages', optionB: 'b) A private member of a class cannot be accessed by the methods of the same class.', optionC: 'c) A private member of a class cannot be accessed from its derived class.', optionD: 'd) A protected member of a class can be accessed from its derived class', key: 'B' },
    { id: '5', question: '5) To prevent any method from overriding, we declare the method as,', optionA: 'a) static', optionB: 'b) const', optionC: 'c) final', optionD: 'd) abstract', key: 'c' },
    { id: '6', question: '6) Which one of the following is not true?', optionA: 'a) A class containing abstract methods is called an abstract class', optionB: 'b) Abstract methods should be implemented in the derived class', optionC: 'c) An abstract class cannot have non-abstract methods.', optionD: 'd) A class must be qualified as ‘abstract’ class, if it contains one abstract method.', key: 'C' },
    { id: '7', question: '7) The fields in an interface are implicitly specified as,', optionA: 'a) static only', optionB: 'b) protected', optionC: 'c) private', optionD: 'd) both static and final', key: 'D' },
    { id: '8', question: '8) What is the output of the following program: public class testmeth {static int i = 1;public static void main(String args[]){System.out.println(i+" , ");m(i);System.out.println(i);}public void m(int i){i += 2;}}', optionA: 'a) 1 , 3', optionB: 'b) 3 , 1', optionC: 'c) 1 , 1', optionD: 'd) 1 , 0', key: 'C' },
    { id: '9', question: '9) Which of the following is not true?', optionA: 'a) An interface can extend another interface.', optionB: 'b) A class which is implementing an interface must implement all the methods of the inteface.', optionC: 'c) An interface can implement another interface.', optionD: 'd) An interface is a solution for multiple inheritance in java', key: 'C' },
    { id: '10', question: '10) Which one of the following is true?', optionA: 'a) A finally block is executed before the catch block but after the try block.', optionB: 'b) A finally block is executed, only after the catch block is executed.', optionC: 'c) A finally block is executed whether an exception is thrown or not.', optionD: 'd) A finally block is executed, only if an exception occurs.', key: 'C' },

  ]
  jsQuestion = [
    { id: '1', question: '1. JavaScript is the programming language of the _____.', optionA: 'a) Desktop', optionB: 'b) Mobile', optionC: 'c) Web', optionD: 'd) Server', key: 'C' },
    { id: '2', question: '2. Which type of JavaScript language is _____?', optionA: 'a) Object-oriented', optionB: 'b) Object-based', optionC: 'c) Functional programming', optionD: 'd) All of the above', key: 'B' },
    { id: '3', question: '3. Which of the following statement(s) is true about the JavaScript?', optionA: 'a) It is a scripting language used to make the website interactive', optionB: 'b) it is an advanced version of Java for Desktop and Mobile application development', optionC: 'It is a markup language of Java to develop the webpages', optionD: 'd) All of the above', key: 'A' },
    { id: '4', question: '4. In which HTML element, we put the JavaScript code?', optionA: '<javascript>...</javascript>', optionB: '<js>...</js>', optionC: '<script>...</script>', optionD: '<css>...</css>', key: 'C' },
    { id: '5', question: '5. JavaScript code can be written in ____.', optionA: 'a) Javascript file (.js file)', optionB: 'b) HTML document directly', optionC: 'c) Javascript file and in the HTML document directly', optionD: 'd) In style sheets (.css file)', key: 'C' },
    { id: '6', question: '6. Which symbol is used separate JavaScript statements?', optionA: 'a) Comma (,)', optionB: 'b) Colon (:)', optionC: 'c) Hyphen (_)', optionD: 'd) Semicolon (;)', key: 'D' },
    { id: '7', question: '7. JavaScript ignores?', optionA: 'a) newlines', optionB: 'b) tabs', optionC: 'c) spaces', optionD: 'All of the above', key: 'D' },
    { id: '8', question: '8. Which is the correct syntax to call an external JavaScript file in the current HTML document?', optionA: 'a) <script src="jsfile.js></script>', optionB: 'b) <script href="jsfile.js></script>', optionC: 'c) <import src="jsfile.js></import>', optionD: '<script link="jsfile.js"></script>', key: 'A' },
    { id: '9', question: '9. Which JavaScript method is used to access an HTML element by id?', optionA: 'a) getElementById()', optionB: 'b) getElement(id)', optionC: 'c) getElementById(id)', optionD: 'd) elementById(id)', key: 'C' },
    { id: '10', question: '10. Which property is used to define the HTML content to an HTML element with a specific id?', optionA: 'a)innerText', optionB: 'b) innerContext', optionC: 'c) elementText', optionD: 'd) innerText', key: 'D' },

  ]
  cssQuestion = [
    { id: '1', question: '1. What is CSS stands for?', optionA: 'a) Cascading Style Sheets', optionB: 'b) Cascade Style Sheet', optionC: 'c) Color Style Sheet', optionD: 'd) Color Style Sheet', key: 'A' },
    { id: '2', question: '2. What CSS describes?', optionA: 'a) CSS describes how calculation perform on button click.', optionB: 'b) CSS describes how HTML elements are to be displayed on screen, paper, or in other media', optionC: 'c) Both A and B', optionD: 'd) None of the above.', key: 'B' },
    { id: '3', question: '3. What is the correct syntax for referring an external CSS?', optionA: 'a) <link rel="stylesheet" type="text/css" href="mystyle.css">', optionB: 'b) <stylesheet rel="stylesheet" type="text/css" href="mystyle.css">', optionC: '<style rel="stylesheet" type="text/css" href="mystyle.css">', optionD: 'd) All of the above', key: 'A' },
    { id: '4', question: '4. What is a CSS selector?', optionA: 'a) A CSS selector is the CSS class name', optionB: 'b) A CSS selector is the set of properties that are going to be applied on HTML elements', optionC: 'c) A CSS selector is the name os CSS file', optionD: 'd) A CSS selector is the first name of a CSS Rule. It may an HTML element or pattern of elements.', key: 'D' },
    { id: '5', question: '5. In a CSS file, there is a CSS rule for paragraphs tags – what does p can be called?', optionA: 'a) Selector', optionB: 'b) Attribute', optionC: 'c) Property', optionD: 'd) Tag', key: 'A' },
    { id: '6', question: '6. Internal styles are written within the _____ element.', optionA: 'a) <style>...</style>', optionB: 'b)<css>...</css>', optionC: '<stylesheet>...</stylesheet>', optionD: 'd) Both A and B', key: 'A' },
    { id: '7', question: '7. Inline styles are written within the _____ attribute.', optionA: 'a) style', optionB: 'b) css', optionC: 'c) stylesheet', optionD: 'd) Both A and B', key: 'A' },
    { id: '8', question: '8. CSS comments are placed within the ______.', optionA: 'a) //', optionB: 'b) /* and */', optionC: 'c) <* and *>', optionD: 'd) <! and !>', key: 'B' },
    { id: '9', question: '9. Can comments also span multiple lines?', optionA: 'A) Yes', optionB: 'b) No', optionC: 'C) Not Sure', optionD: 'd) None of the above', key: 'A' },
    { id: '10', question: '10. Which property is used to define the text color?', optionA: 'a) text-color', optionB: 'b) color', optionC: 'c) font-color', optionD: 'd) Both A and B', key: 'B' },

  ]
  htmlQuestion = [
    { id: '1', question: '1.What does the abbreviation HTML stand for?', optionA: 'A) HyperText Markup Language', optionB: 'b) HighText Markup Language', optionC: 'c) HyperTest Markdown Language', optionD: 'd) None of the above', key: 'A' },
    { id: '2', question: '2.What is the function of the HTML style attribute?', optionA: 'a) It is used to add styles to an HTML element.', optionB: 'b) It is used to uniquely identify some specific styles of some element.', optionC: 'c) Both A and B', optionD: 'd) None of the above', key: 'A' },
    { id: '3', question: '3.Which of the following is the correct syntax for using HTML style attribute?', optionA: 'a)<tagname style = "property:value;">', optionB: '<tagname style = "property;">', optionC: 'c) <tagname style>', optionD: 'd) None of the above', key: 'A' },
    { id: '4', question: '4.Which of the following propeties is used to change the font of text?', optionA: 'a) font-family', optionB: 'b) font-size', optionC: 'c) text-align', optionD: 'd) None of the above', key: 'A' },
    { id: '5', question: '5.What is the correct syntax to write an HTML comment?', optionA: 'a) <!--Comment-->', optionB: 'b) //Comment', optionC: 'c)#Comment', optionD: 'D)/*Comment*/', key: 'A' },
    { id: '6', question: '6.Which of the following things are necessary to create an HTML page?', optionA: 'a) A text editor', optionB: 'b) Web Browser', optionC: 'c) Both A and B', optionD: 'd) None of the above', key: 'C' },
    { id: '7', question: '7.Which HTML tag is called the root element of an HTML document?', optionA: 'a) <html>', optionB: 'b) <body>', optionC: 'c) <title>', optionD: 'd) <head>', key: 'A' },
    { id: '8', question: '8.Which property allows an image link to show a text label?', optionA: 'a) str', optionB: 'b) alt', optionC: 'c) Alternative', optionD: 'd) None of the above', key: 'B' },
    { id: '9', question: '9.What is the select tag used for?', optionA: 'a) Change text font', optionB: 'b) None of these', optionC: 'c) Creates a combo box.', optionD: 'd) None of these', key: 'C' },
    { id: '10', question: '10.What is the effect of the &lt;b&gt;tag?', optionA: 'a) It is used to change the font size.', optionB: 'b) It is used to write black-colored font.', optionC: 'c) None of the these', optionD: 'd) It converts the text within it to bold font.', key: 'D' },

  ]
}