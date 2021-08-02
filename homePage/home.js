let links_div = document.getElementById('links');
let desc_div = document.getElementById('descr');
let res_div = document.getElementById('resultFeed');

// links feed
const appendlinks = ({ title, url, displayed_url }) => {
    let div = document.createElement('div');
    div.style.marginTop = '20px'
    div.style.border = '1px solid rgb(231, 231, 231)'

    let t = document.createElement('p')
    t.innerHTML = `<a href="${url}" target="_blank">${title}</a>`;
    t.style.fontSize = '25px'

    // let u = document.createElement('p')
    // u.innerHTML = url

    let d = document.createElement('p')
    d.innerHTML = displayed_url;

    div.append(d, t);
    links_div.append(div);
}
// description feed
const appenddesc = ({ title, description }) => {
    res_div.style.display = 'grid'
    let t = document.createElement('p')
    t.style.fontWeight = '550'
    t.innerHTML = `Title : ${title}`
    let d = document.createElement('p')
    d.innerHTML = `Description : ${description}`
    desc_div.append(t, d);
    desc_div.style.fontSize = '20px'
}

// appending data
const appendData = ({ knowledge_graph, organic_results }) => {

    if (knowledge_graph != undefined) {
        appenddesc(knowledge_graph);
    }
    organic_results.forEach(ele => {
        appendlinks(ele);
    });
}

//fetching data from server
async function getData() {
    links_div.innerHTML = null;
    desc_div.innerHTML = null;

    let query = document.getElementById('query').value;
    let res = await fetch(`http://api.serpstack.com/search?access_key=9901c721624121dee78ff33987ec32c2&query=${query}`);
    let data = await res.json();
    // localStorage.setItem('googleEngine', JSON.stringify(data));
    // let data = JSON.parse(localStorage.getItem('googleEngine'));
    // console.log(data);
    appendData(data);
}