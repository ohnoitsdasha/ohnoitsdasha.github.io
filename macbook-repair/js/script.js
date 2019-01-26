
//burger-menu
var menuIcon = document.querySelector('#menuIcon');
var bigHeader = document.querySelector('.big-header')


if(menuIcon) {

menuIcon.addEventListener('click', clicked);

}

function clicked (){
 
  menuIcon.classList.toggle('change');
  bigHeader.classList.toggle('slide')

}


 //represantation of price without php with the help of drop down table
  (function() {
  function _appendBefore(after, el) {
  after.parentNode.insertBefore(el, after);
  }
  function _appendAfter(after, el) {
  after.parentNode.insertBefore(el, after.nextSibling);
  }
    
  function _react() {
    var s1 = this["data-select-1"].value;
    var s2 = this["data-select-2"].value;
    var target = this["data-target"];
    
    if (parseInt(s1) && parseInt(s2)) {
      target.textContent = this.table.rows[s2].cells[s1].textContent
      this.table.rows[s2].cells[s1].classList.add('color')
    } else {
      target.textContent = ""  
    } 
        
  }
    
      function convert(selector) {
        var i,
          j,
          el,
          elements = document.querySelectorAll(selector),
          captions_1,
          captions_2,
          select_1,
          select_2,
          target,
          option;
        if (elements.length) {
          for (i = 0; i < elements.length; i++) {
            el = elements[i];
            captions_1 = el.querySelectorAll("th[scope=row]");
            select_1 = document.createElement("select");
            select_1.classList.add("select-first" );
            select_1.table = el;
            _appendAfter(el, select_1);
            option = document.createElement("option");
            option.append(document.createTextNode("Модель"));
            option.setAttribute("value", 0);
            option.style.display = "none";
            select_1.append(option);
            for (j = 0; j < captions_1.length; j++) {
              option = document.createElement("option");
              option.setAttribute("value", j + 1);
              option.append(document.createTextNode(captions_1[j].textContent));
              select_1.append(option);
            }
            select_1.addEventListener("change", _react);
    
            captions_2 = el.querySelectorAll("th[scope=col]");
            select_2 = document.createElement("select");
            select_2.classList.add("select-second");
           
            select_2.table = el;
            _appendAfter(select_1, select_2);
            option = document.createElement("option");
            option.append(document.createTextNode("Услуга"));
            option.setAttribute("value", 0);
            option.style.display = "none";
            select_2.append(option);
            for (j = 0; j < captions_2.length; j++) {
              option = document.createElement("option");
              option.setAttribute("value", j + 1);
              option.append(document.createTextNode(captions_2[j].textContent));
              select_2.append(option);
            }
            select_2.addEventListener("change", _react);
    
            target = document.createElement('div')
            target.classList.add("result-div");
            _appendAfter(select_2, target);
            select_1["data-select-1"] = select_1;
            select_1["data-select-2"] = select_2;
            select_1["data-target"] = target;
            select_2["data-select-1"] = select_1;
            select_2["data-select-2"] = select_2;
            select_2["data-target"] = target;
          }
        }
      }
    
      self.UItableConvert = convert;
    })();
    UItableConvert(".substitute-with-dropdowns");

    
/*modal*/
(function iife() {
"use strict";
function closestEl(el, selector) {
  var doc = el.document || el.ownerDocument;
  var matches = doc.querySelectorAll(selector);
  var i;
  while (el) {
      i = matches.length - 1;
      while (i >= 0) {
      if (matches.item(i) === el) {
      return el;
  }
      i -= 1;
  }
      el = el.parentElement;
  }
      return el;
}
  var modalBtns = document.querySelectorAll(".form-button");
  modalBtns.forEach(function addBtnClickEvent(btn) {
      btn.onclick = function showModal() {
          var modal = btn.getAttribute("data-modal");
          document.getElementById(modal).style.display = "block";
      };
  });

  var closeBtns = document.querySelectorAll(".close");
  closeBtns.forEach(function addCloseClickEvent(btn) {
      btn.onclick = function closeModal() {
          var modal = closestEl(btn, ".modal");
          modal.style.display = "none";
      };
  });

  window.onclick = function closeOnClick(event) {
      if (event.target.className === "modal") {
          event.target.style.display = "none";
      }
  };
}());
 

