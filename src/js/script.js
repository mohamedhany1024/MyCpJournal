const actionMap = {
    'search': (value) => performSearch(value),
    'filter': (value) => applyFilter(value),
    'sort': (value) => sortResults(value),
    'page': (value) => goToPage(Number(value)),
    // Add more actions here
  };

function getParamValue(param) {
    const url = new URL(window.location.href);
    return url.searchParams.get(param);
}

function preparePostDetails(idd) {
    //alert("Update");
    openScreen('post-details');
    document.querySelector('#content').innerText =  "";
    document.querySelector('#post-title').innerText = data[parseInt(idd)].title;
    document.querySelector('#post-title-header').innerText = data[parseInt(idd)].title;
    document.querySelector('#post-author').innerText = `Author: ${data[parseInt(idd)].author}`;
    document.querySelector('#content').innerHTML = renderContenr(data[parseInt(idd)].content);
    hljs.highlightAll();
    //console.log(data[parseInt(idd)].resource.in);
    console.log(idd);
    if (data[parseInt(idd)].resource.out != null && data[parseInt(idd)].resource.out != "") {
        console.log("disaster1");
        document.querySelector('#openOutside').style.display = 'block';
        console.log(data[parseInt(idd)].resource.out);
        //document.querySelector('#openInside').setAttribute("resource--link")
        document.querySelector('#openOutside').setAttribute("res--link", data[parseInt(idd)].resource.out);
        document.querySelector('#openOutside').setAttribute('onclick', `window.open(this.getAttribute('res--link'), '_blank')`);
    } else {
        document.querySelector('#openOutside').style.display = 'none';
    }

    if (data[parseInt(idd)].resource.in != null && data[parseInt(idd)].resource.in != "") {
        console.log("disaster1");
        document.querySelector('#openInside').style.display = 'block';
        console.log(data[parseInt(idd)].resource.in);
        //document.querySelector('#openInside').setAttribute("resource--link")
        document.querySelector('#openInside').setAttribute("res--link", data[parseInt(idd)].resource.in);
        document.querySelector('#openInside').setAttribute('onclick', `openImage(this.getAttribute('res--link'))`);
    } else {
        document.querySelector('#openInside').style.display = 'none';
    }

    if (data[parseInt(idd)].video != null && data[parseInt(idd)].video != "") {
        console.log("disaster2");
        console.log(data[parseInt(idd)].video);
        document.querySelector('#openVideo').style.display = 'block';
        document.querySelector('#openVideo').setAttribute("video--link", data[parseInt(idd)].video);
        document.querySelector('#openVideo').setAttribute('onclick', `window.open(this.getAttribute('video--link'), '_blank')`);
    } else {
        document.querySelector('#openVideo').style.display = 'none';
    }
    
}

function prepareCategoryDetails(category) {
    openScreen('category-details');
    let filtered_posts = [];
    document.querySelector('#category-title-header').innerText = `Exploring: ${category}`;
    document.querySelector('#category-heading').innerHTML =`Posts in: ${category}`;
    document.querySelector('#category-content').innerHTML = "";
    for(i=0; i<data.length; i++) {
        if (data[i].category == category) {
            filtered_posts.push(data[i]);
            document.querySelector('#category-content').innerHTML+=`
                <div class="card3">
                    <div class="card-content">
                        <h3>${data[i].title}</h3>
                        
                        <div class="card-actions" onclick="performAction('post-details', {'id': ${i}})">
                            <button class="btn">Read More</button>
                        </div>
                    </div>
                </div>
            `;
        }
    }
    //document.querySelector('#content').innerText = data[parseInt(idd)].content;
}

function performAction(action, params) {
    const url = new URL(window.location.href);
    //appendRipples();
    Object.entries(params).forEach(([key, value]) => {
        if (value === null || value === undefined) {
          url.searchParams.delete(key);
        } else {
          url.searchParams.set(key, value);
        }
      });
      
    url.searchParams.set('screen', action);
    // Update URL without reload
    window.history.pushState({}, '', url);

    window.addEventListener("load", (event) => {
        //log.textContent += "load\n";
        if (document.querySelectorAll('.card3')) {
            appendRipples();
        }
    });

    if (action == 'post-details') {
        //console.log(pk);
        preparePostDetails(params.id);

    } else if (action == 'category-details') {
        prepareCategoryDetails(params.category);
    } else if(action == 'main') {
        openScreen('main');
    } else {
        openScreen('main');
    }
}

function performActionFromURL() {
    let screen = getParamValue('screen');
    let pk = getParamValue('id');
    let category = getParamValue('category');
    //appendRipples();

    if (screen == 'post-details') {
        console.log(pk);
        preparePostDetails(pk);
        
    } else if (screen == 'category-details') {
        prepareCategoryDetails(category);
    } else if (screen == 'main') {
        openScreen('main');
    } else {
        openScreen('main');
    }

}

window.addEventListener('popstate', (event) => {
    console.log('Navigation occurred! New URL:', window.location.href);
    
    // Access any state data you stored with pushState/replaceState
    console.log('State data:', event.state);
    
    // You can now handle the URL change
    performActionFromURL();
    
  });

  function goBack() {
    window.history.back();
  }

performActionFromURL();