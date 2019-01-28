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
        createListItem(indItems,iE,exp);
      }
    }
  }

  function createArticle(group,groupID){
    let nart = document.createElement("article");
    let nh1 = document.createElement("h1");
    let nul = document.createElement("ul");

    nul.classList.add(groupID);
    nart.classList.add("expGroup");

    nh1.appendChild(document.createTextNode(group));
    nart.appendChild(nh1);
    nart.appendChild(nul);
    event_container.appendChild(nart);
  }

  function createListItem(indItem,expID,groupID){
    let expItem = indItem[expID];
    let nul = document.getElementsByClassName(groupID)[0];
    let nli = document.createElement('li');
    let ndiv = document.createElement('div');
    let nh2 = document.createElement('h2');
    let nspanTitle = document.createElement('span');
    let nspanDesc = document.createElement('span');
    let npLongDesc = document.createElement('p');

    nli.classList.add("expItem");
    nspanDesc.classList.add("expDesc");
    npLongDesc.classList.add("expLongDesc");
  /*  nli.appendChild(document.createTextNode(indItem['name']));*/
    nspanTitle.appendChild(document.createTextNode(expItem['name']));
    nspanDesc.appendChild(document.createTextNode(expItem['desc']));
    npLongDesc.appendChild(document.createTextNode(expItem['long desc']));

    nh2.appendChild(nspanTitle);
    nh2.appendChild(nspanDesc);
    ndiv.appendChild(nh2);
    ndiv.appendChild(npLongDesc);
    nli.appendChild(ndiv);
    nli.id = expID;
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
    for (let expItem in flatItems) {
      let itemID = flatItems[expItem].id;
      if(flatItems[expItem].content.toLowerCase().indexOf(lowKeyWord) != -1){
        console.log(itemID);
        let expItem = document.getElementById(itemID);
        if(expItem.classList.contains("hidden")){
          expItem.classList.remove("hidden");
        }
      }else{
        let expItem = document.getElementById(itemID);
        if(!expItem.classList.contains("hidden")){
          expItem.classList.add("hidden");
        }
      }
    }
  }

})();
