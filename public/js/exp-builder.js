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
      createArticle(expItem,exp);

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
    let nIcon = document.createElement("i");
    let nul = document.createElement("ul");

    nul.classList.add(groupID);
    nart.classList.add("expGroup");
    nIcon.classList.add("fas");
    nIcon.classList.add("fa-" + group['icon']);

    nh1.appendChild(nIcon);
    nh1.appendChild(document.createTextNode(' ~ ' + group['title']));
    nart.appendChild(nh1);
    nart.appendChild(nul);
    event_container.appendChild(nart);
  }

  function createListItem(indItem,expID,groupID){
    let expItem = indItem[expID];
    let skills = expItem['tools'];
    let skillArray = skills.split(',');
    let nul = document.getElementsByClassName(groupID)[0];
    let nli = document.createElement('li');
    let ndiv = document.createElement('div');
    let nh2 = document.createElement('h2');
    let nspanTitle = document.createElement('span');
    let nspanDesc = document.createElement('span');
    let npLongDesc = document.createElement('p');
    let npSkills = document.createElement('p');

    nli.classList.add("expItem");
    nspanDesc.classList.add("expDesc");
    npLongDesc.classList.add("expLongDesc");
    npSkills.classList.add("skillSet");

    nspanTitle.appendChild(document.createTextNode(expItem['name']));
    nspanDesc.appendChild(document.createTextNode(expItem['desc'] + ", " + expItem['from'] + " - " + expItem['to']));
    npLongDesc.appendChild(document.createTextNode(expItem['long desc']));

    for (var i in skillArray) {
      let nspanSkill = document.createElement('span');
      let spanPillow = document.createElement('span');
      spanPillow.classList.add('pillow');
      spanPillow.appendChild(document.createTextNode('#'));
      nspanSkill.appendChild(spanPillow);
      nspanSkill.appendChild(document.createTextNode(skillArray[i]));
      npSkills.appendChild(nspanSkill);
    }

    nh2.appendChild(nspanTitle);
    nh2.appendChild(nspanDesc);
    ndiv.appendChild(nh2);
    ndiv.appendChild(npLongDesc);
    ndiv.appendChild(npSkills);
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
      if(flatItems[expItem].content.toLowerCase().indexOf((' ' + lowKeyWord)) != -1 ||
         flatItems[expItem].content.toLowerCase().indexOf((',' + lowKeyWord)) != -1){
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
    toggleGroups();
  }

  function toggleGroups(){
    let articles = document.getElementsByClassName('expGroup');

    for (var i = 0; i < articles.length; i++) {
      let items = articles[i].innerHTML;
      if(items.indexOf('class="expItem"') != -1){
        articles[i].classList.remove('hidden');
      }else{
        articles[i].classList.add('hidden');
      }
    }
    toggleNotFound();
  }

  function toggleNotFound(){
    let section = document.getElementsByClassName('life-events')[0];
    let nf = document.getElementsByClassName('notFound')[0];
    let items = section.innerHTML;

    if(items.indexOf('class="expGroup"') != -1){
      nf.classList.remove('show');
    }else{
      nf.classList.add('show');
    }
  }

  document.getElementById("mainSearchBar")
      .addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
          console.log('ddd');
      }
  });

})();
