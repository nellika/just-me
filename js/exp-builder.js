/*https://workday.wd5.myworkdayjobs.com/en-US/Workday/job/Ireland-Dublin/UX-Product-Designer_JR-22241-1*/
/*https://www.avatier.com/careers/jobs/855E1AE972/*/
/*https://www.cartrawler.com/ct/careers/vacancies/view?requirementId=696*/
(function() {
  var event_container= document.getElementsByClassName('life-events')[0];
  var searchInput =  document.getElementById('mainSearchBar');
  var flatItems = [];

  searchInput.addEventListener("input",function (e) {
    searchForEvent(this.value);
  })

  renderAllexp(myExp);

  function renderAllexp(expItems){
    for (let exp in expItems) {
      console.log(exp);
      let expItem = expItems[exp];
      /*create articles*/
      createArticle(expItem.title,exp);

      let indItems = expItem.items;
      for (var iE in indItems) {
        createSearchArray(indItems[iE],exp,iE);
        createListItem(indItems[iE],exp);
      }
    }
  }

  function createArticle(group,groupID){
    let nart = document.createElement("article");
    let nh1 = document.createElement("h1");
    let nul = document.createElement("ul");

    nul.setAttribute("class", groupID);

    nh1.appendChild(document.createTextNode(group));
    nart.appendChild(nh1);
    nart.appendChild(nul);
    event_container.appendChild(nart);
  }

  function createListItem(indItem,expID){
    let nul = document.getElementsByClassName(expID)[0];
    let nli = document.createElement('li');
    nli.appendChild(document.createTextNode(indItem['name']));
    nul.appendChild(nli);
  }

  function createSearchArray(indExp,groupID,expID){
    let expObj = {};
    expObj['group'] = groupID;
    expObj['id'] = expID;
    expObj['content'] = Object.values(indExp).toString();
    flatItems.push(expObj);
  }

  function searchForEvent(keyword){
    let lowKeyWord = keyword.toLowerCase();
    for (var expItem in flatItems) {
      if(flatItems[expItem].content.toLowerCase().indexOf(lowKeyWord) != -1){
        console.log(flatItems[expItem].id);
      }
    }
  }

})();
