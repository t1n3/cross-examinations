/* text-selection */

/* 
https://stackoverflow.com/questions/19401909/how-can-i-toggle-a-class-on-selected-text
 */

document.addEventListener("mouseup", function () {
  surroundSelection();
});

function surroundSelection() {
  var span = document.createElement("span");
  span.className = "selected";

  if (window.getSelection) {
    var sel = window.getSelection();
    if (sel.rangeCount) {
      var range = sel.getRangeAt(0).cloneRange();
      range.surroundContents(span);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
}

/* error still to solve */

/* 
  Uncaught DOMException: Failed to execute 'surroundContents' on 'Range': The Range has partially selected a non-Text node.
  at surroundSelection (http://127.0.0.1:5501/assets/js/script.js:20:13)
  at HTMLDocument.<anonymous> (http://127.0.0.1:5501/assets/js/script.js:9:3)
*/



/* anchor-links */

/* get original position on page from CSS sticky element in javascript */
/* instead of scrolling, get original position of element, then setting offsetTop, while scrolling get back to original state */
/* remove position sticky, scroll to original position */


const mainElement = document.querySelector('main');
const pageLinks = document.querySelectorAll('.page__link, .nav__link');

const scrollToLink = event => {
  event.preventDefault();

  const clickTarget = event.currentTarget;
  const targetLink = clickTarget.getAttribute('href');
  const linkDestination = document.querySelector(targetLink);

  linkDestination.style.position = 'static';

  mainElement.scrollTo(0, linkDestination.offsetTop);

  linkDestination.style.position = '';
}

pageLinks.forEach(pageLink => {
  pageLink.addEventListener('click', scrollToLink);
});


/* variable font settings */

// prevent span-width-change through different schriftachsen by calculating the max width of the span and setting it as fixed width
const spans = document.querySelectorAll('.span--vfs');

spans.forEach(span => {
  let maxWidth = 0;

  function measureWidth() {
    const width = span.offsetWidth;
    if (width > maxWidth) {
      maxWidth = width;
      span.style.width = `${maxWidth + 8}px`;
    }
  }

measureWidth();
  span.addEventListener('transitionend', measureWidth);
});


/* typewriter */

var i = 0;
var txt = 'A book-to-website-translation';
var speed = 90;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function() {
  setTimeout(typeWriter, 2000);
};