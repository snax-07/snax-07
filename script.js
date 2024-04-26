function navWrapper(){
    if (document.getElementById('nav').className == 'nav-link'){
        document.getElementById('nav').className= 'nav-link-show';
        
    }else if(document.getElementById('nav').className == 'nav-link-show' ){
        document.getElementById('nav').className = 'nav-link-hide';
        
    }
    else {
        document.getElementById('nav').className = 'nav-link-show';

    }

}
