//Check all exist
function allExist(el) {
  var exist = true
  k = document.querySelectorAll(el);
  for (var i = 0; i < k.length; i++) {
    if (k[i] == null) {
      exist = false
      return exist
    } else {
      exist = true
      return exist
    }
  }
}

//Check one exist
function oneExist(el) {
  var exist = true
  k = document.querySelectorAll(el);
  for (var i = 0; i < k.length; i++) {
    if (k[i] != null) {
      return exist
    } else {
      exist = false
      return exist
    }
  }
}

//toggle all class by array - onclick="toggleAllClass(findChildren(findParent(this, 'LI'), '.detail'), 'hidden'); return false;"
//return false - avoid the page jumping straight to the top"
function toggleAllClass(allChildren, cls1, cls2) {
  for (var i = 0; i < allChildren.length; i++) {
    allChildren[i].classList.toggle(cls1)
    if (cls2 != null) {
      allChildren[i].classList.toggle(cls2)
    }
  }
  // return false; //not working
}

//findParent(this, thisParentTagName, ''), the last variable is necessary
function findParent(thisElement, parentTagName, className) {
  if (className != '') {
    while (
      (thisElement = thisElement.parentElement) && !thisElement.classList.contains(className)
    );
    return thisElement
  } else {
    while (
      (thisElement = thisElement.parentElement) &&
      thisElement.tagName != parentTagName
    );
    return thisElement
  }
}

function findChildren(parentEL, sl) {
  return parentEL.querySelectorAll(sl)
}

function findFirstChild(parentEL) {
  return parentEL.firstElementChild
}

function findLastChild(parentEL) {
  return parentEL.lastElementChild
}

//Remove & Add Class to all
function RemoveAddClass(el, classRemove, classAdd) {
  var _el = document.querySelectorAll(el)
  for (var i = 0; i < _el.length; i++) {
    if (classRemove != '') {
      _el[i].classList.remove(classRemove)
    }
    if (classAdd != '') {
      _el[i].classList.add(classAdd)
    }
  }
}

//Remove & Add Class to all by element, only works on selector not object
function RemoveAddClassByArray(el, classRemove, classAdd) {
  // var _el = document.querySelectorAll(el)
  for (var i = 0; i < el.length; i++) {
    if (classRemove != '') {
      el[i].classList.remove(classRemove)
    }
    if (classAdd != '') {
      el[i].classList.add(classAdd)
    }
  }
}

function navMenu(targetMenu, btn, thisParentTagName, classThisParent, activeParentClassName, classToggle, classHiddenName, classActiveName) {
  
  const buttons = document.querySelectorAll(btn);

  //----- Reset ------
  // RemoveAddClass(btn + '>:first-child', classHiddenName, '') //Show all right arrow buttons at first
  // RemoveAddClass(btn + '>:last-child', '', classHiddenName) //Hide all down arrow buttons at first
  // // = RemoveAddClass('.listMenu ul.toggle', '', classHiddenName)
  // RemoveAddClass(target + ' ' + subNavTagName.toLowerCase() + classToggle, '', classHiddenName) //Hide All sub menus at first

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {

      //------------------------0. Basic: Close one by one ------------------------

      //----- Normal: Close menu one by one (Comment the codes below) -----
      //----- Accordion: open this item and close others in the meantime -----
      // Remove 'active' from all the same level parents
      RemoveAddClass(targetMenu + ' ' + thisParentTagName.toLowerCase() + classThisParent, classActiveName, '')

      //----- Toggle ------
      toggleAllClass(findChildren(this, classToggle), classHiddenName) //Toggle this arrow btn
      findLastChild(findParent(this, thisParentTagName, '')).classList.toggle(classHiddenName) //Toggle this hidden content
      findParent(this, thisParentTagName, activeParentClassName).classList.toggle(classActiveName) //Toggle active
    })
  }
}

UIkit.icon.add('chevron-right', '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="chevron-right"><polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"></polyline></svg>')
UIkit.icon.add('chevron-down', '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="chevron-down"><polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"></polyline></svg>')

if (allExist(['.listMenu', '.listMenu li>.flex>a:nth-child(2)', 'LI', '.uk-parent', 'uk-nav-header', '.toggle', 'hidden', 'active']) == true) {
  navMenu('.listMenu', '.listMenu li>.flex>a:nth-child(2)', 'LI', '.uk-parent', 'uk-nav-header', '.toggle', 'hidden', 'active')
}