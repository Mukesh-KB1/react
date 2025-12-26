

function customreactrender(reactel,container){
    // let el = document.createElement(reactel.type);

    // el.innerHTML = reactel.children;

    // el.setAttribute("href",reactel.props.href);
    // el.setAttribute("target",reactel.props.target);

    // container.appendChild(el);


    let el = document.createElement(reactel.type);

    el.innerHTML = reactel.children;

    for(let prop in reactel.props){
        if(prop == "children" ) continue;
        el.setAttribute(prop,reactel.props[prop]);
    }

    container.appendChild(el);
}


let reactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    children : "click me to open the Google"
}

let container = document.querySelector("#root");

customreactrender(reactElement,container);