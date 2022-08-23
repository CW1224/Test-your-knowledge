### 4.1.1 Buttons for All Sections

TEST            | OUTCOME                          | PASS / FAIL  
--------------- | -------------------------------- | ---------------
Start Quiz Button | When clicked, brings user to information page. | Pass
Exit Quiz Button | When clicked, brings user back to initial page. | Pass
Accept Challenge Button | When clicked, brings user to the first question on the quiz page. | Pass
Next Question Button | When clicked, brings user to the next question and correspomding options. | Pass
Leave Quiz Button | When clicked, brings user back to initial page. | Pass
Restart Quiz Button | When clicked, brings user back to information page. | Pass

### 4.1.2 Hover

TEST            | OUTCOME                          | PASS / FAIL  
--------------- | -------------------------------- | ---------------
Start Quiz Button | When hovered over, background-color of button turns orange. | Pass
Exit Quiz Button | When hovered over, background-color of button turns red. | Pass
Accept Challenge Button | When hovered over, background-color of button turns green. | Pass
Options | When hovered over, the background-color changes to pale yellow | Pass
Next Question Button | When hovered over, background-color of button turns yellow-green. | Pass
Leave Quiz Button | When hovered over, background-color of button turns red. | Pass
Restart Quiz Button | When hovered over, background-color of button turns green. | Pass

### 4.1.3 Options Clicked

TEST            | OUTCOME                          | PASS / FAIL  
--------------- | -------------------------------- | ---------------
Correct Option Clicked | When correct option clicked, the background-color of option turns yellow-green, the border and words turn dark green and an icon, a green circle with a green tick appears at end of the clicked option. | Pass
Incorrect Option Clicked | When an incorrect option is clicked, the background-color of option turns pink, the border and words turn red and an icon, a red circle with a red cross appears at end of the clicked option. | Pass

### 4.1.4 Timer

TEST            | OUTCOME                          | PASS / FAIL  
--------------- | -------------------------------- | ---------------
Timer Resets | When next question button is clicked, timer resets to 10. | Pass
Timer Stops | When an option is clicked, the timer stops. | Pass

### 4.1.5 Results

TEST            | OUTCOME                          | PASS / FAIL  
--------------- | -------------------------------- | ---------------
Statement Changes Accordingly | Depending on the number of correct answers of the user, the statement, the user sees in the results box is different. | Pass

### 4.1.6 Website Analysis on a Desktop using Lighthouse

The performance of my website is pretty good on the desktop browser. this can be improved by reducing the size of the background-images.

![Lighthouse 1](/assets/screenshots/lighthouse-desktop.png)

### 4.1.7 Website Analysis on a Mobile using Lighthouse

The performance of my website is mediocre on the mobile version. By reducing the size of the background images, the performance would definitely increase.

![Lighthouse 2](/assets/screenshots/lighthouse-mobile.png)

## 4.2 Testing with Tools

### 4.2.1 Am I responsive

I used the "Inspect" command on google chrome to check how responsive my website was with different screen sizes and appliances. These include:

- IPhone SE
- Iphone XR
- IPhone 12 Pro
- Pixel 5
- Samsung Galaxy S8+
- Samsung Galaxy S20 Ultra
- IPad Air
- IPad Mini
- Surface Pro 7
- Surface Duo
- Galaxy Fold
- Samsung Galaxy A51/71
- Nest Hub
- Nest Hub Max

### 4.2.2 W3C Validator Tools

[W3C Markup](https://validator.w3.org/) was used to validate the html codes of my project. It was used to check if any errors were available and I had to correct them before continuing onto the next step. The image below had to be shown in order to confirm that there is no error in my project.

![Confirmation-HTML](/assets/screenshots/document-check-1.png)

[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) was used to check that all the code written in css were correct. The image below tells me that there are no errors present in my code.

![Confirmation-CSS](/assets/screenshots/document-check-2.png)

[JSHint](https://jshint.com/) was used to check for errors in my javascript code. The image below indicates that there is no major error.

![Confirmation-JS](/assets/screenshots/document-check-3.png)

Return to the original readme file, press this [button](readme.md).