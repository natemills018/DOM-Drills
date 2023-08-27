document.addEventListener("DOMContentLoaded", function() {
    let div1 = document.createElement('div');
   
    let h1 = document.createElement('h1');
    let h1text = document.createTextNode('Testing out to see if I can place a header using DOM');

    let h2 = document.createElement('h2');
    let h2text = document.createTextNode('This is an h2');

    let h3 = document.createElement('h3');
    let h3text = document.createTextNode('This is an h3');

    let h4 = document.createElement('h4');
    let h4text = document.createTextNode('This is an h4');

    let h5 = document.createElement('h5');
    let h5text = document.createTextNode('This is an h5');

    let h6 = document.createElement('h6');
    let h6text = document.createTextNode('This is an h6');

    let btnTwo = document.getElementById('btnTwo')

    let colors = ['blue','green','red','purple','yellow','orange','gray','brown'];

    h1.addEventListener("dblclick", function() {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        h1.style.color = randomColor;
    })

    h2.addEventListener("dblclick", function() {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        h2.style.color = randomColor;
    })
    
    h3.addEventListener("dblclick", function() {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        h3.style.color = randomColor;
    })

    h4.addEventListener("dblclick", function() {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        h4.style.color = randomColor;
    })

    h5.addEventListener("dblclick", function() {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        h5.style.color = randomColor;
    })

    h6.addEventListener("dblclick", function() {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        h6.style.color = randomColor;
    })
    
    h1.className = 'awesome-h1';
    h2.className = 'awesome-h2';
    h3.className = 'awesome-h3';
    h4.className = 'awesome-h4';
    h5.className = 'awesome-h5';
    h6.className = 'awesome-h6';
    
    
    div1.className = "header-container"
    
   
    h1.appendChild(h1text);
    h2.appendChild(h2text);
    h3.appendChild(h3text);
    h4.appendChild(h4text);
    h5.appendChild(h5text);
    h6.appendChild(h6text);

    div1.appendChild(h1);
    div1.appendChild(h2);
    div1.appendChild(h3);
    div1.appendChild(h4);
    div1.appendChild(h5);
    div1.appendChild(h6);

    document.body.appendChild(div1);

    let x = 1;

    function listItems() {
        let h3 = document.createElement('h3');
        let h3text = document.createTextNode('This is list item ' + x++ );
        h3.appendChild(h3text);
        document.body.appendChild(h3);
        h3.addEventListener("click", function() {
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            h3.style.color = randomColor;
        })
        h3.addEventListener("dblclick", function() {
            h3.removeChild(h3text);
        })
    }


    btnTwo.addEventListener("click", listItems)


    

    let button = document.createElement('button');
    let btnText = document.createTextNode('Continue?');
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        let h2 = document.createElement('h2');
        let h2text = document.createTextNode('You have decided to continue');
        h2.appendChild(h2text);
        document.body.appendChild(h2);
        
    })

})


