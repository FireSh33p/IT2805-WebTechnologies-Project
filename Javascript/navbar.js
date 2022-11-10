'##-IMPORTER NAVBAR MED script og html-tagen <nav-bar></nav-bar>'
class Navbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

      <style>
      nav{
        position: sticky;
        position: -webkit-sticky;
        top: 0;
     
        height: 100%; /*Denne gjør susen*/
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        z-index: 99;
        background-color:#634d8d;
        
        }
    
    .nav_ikon{
        position:absolute;
        top:0;
        right: 0;
    
        margin: 15px;
        height: 50px;
        width: 50px;
        border-radius: 5px;
    
        background-color: #634d8d;
        background-image: url("../IMG/burgerIkon2.svg");
        background-position: center;
        background-repeat: no-repeat;
        
        cursor: pointer;
    }
    .mobil_logo{
        position: absolute;
        display: block;
        top:0;
        left:0;
    
        margin: 11px 0px 0px 10px;
        height: 70px;
        width: 70px;
    
        background-image: url("../IMG/BadCom-logo-100px.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        cursor: pointer;
    }
    
    nav ul{
        display: none;
        list-style-type: none;
        padding: 0;
        }
    
    nav ul li a{
        display: block;
        min-width: 150px;
        
        margin: 25px;    
        padding: 20px;

        border-style: solid;
        border-color: #feee05;
        border-radius: 35px;
    
        background-color: #634d8d;
    
        text-decoration: none;
        color: white;
        font-weight: normal;
        text-align: center;
        }
    
    .nav_senter{
        display: none;
        }
       
    .nav_check{
        display: none;
        }
        
    .nav_check:checked ~ ul{
            position: absolute;
            display: block;
            margin-top: 100px;
            width: 75vw;
            
        }
    
    .nav_check:checked + .nav_ikon{
            background-image: url("../IMG/kryss2.svg");
    }
    nav ul li a:hover{
        transform: scale(1.1);
    }
        
    @media screen and (min-width: 1000px) {
        .nav_ikon{
                display: none;
        }
        .mobil_logo{
                display: none;
        
        }
    
        nav ul{
            position: absolute;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin:0;
            padding:0;
            
        }
    
        nav ul li a{
            margin: 1vw;
            padding: 10px;
            border-radius: 25px;
            border-style: solid;
            border-color: #feee05;
        }
    
        .nav_senter{
            margin: 10px;
            padding: 10px;
            background: none;
            display: block;
            height: 125px;
            width: 125px;
            background-image: url("../IMG/BadCom-logo-360px.png");
            background-size: 125px;
            background-position: center;
            background-repeat: no-repeat;
            border-style: none;
            border-color: none;
        } 
    
    }
      </style>


      <!--##HTML-NAVBAR-START##-->
      <nav>
              <a class="mobil_logo" href="../HTML/hovedside.html" ></a>
              <input class="nav_check" type="checkbox" id="nav_check" />
              <label class="nav_ikon" for="nav_check"></label>

      
             <ul>
             <!--Venstre navn linker-->
             <li>
             <a href="../HTML/info.html">INFO</a>
             </li>
             <li>
             <a href="../HTML/Verv.html">VERV</a>
             </li>
             <!--Sentrert navbar logo-->
             <li>
                     <a href="../HTML/hovedside.html"  class="nav_senter" ></a>
             </li>
             <!--Høyre  linker-->
             <li class="nav_challenges">
             <a href="../HTML/challenges.html">CHALLENGES</a>   
             </li>
             <li class="nav_kontakOss">
             <a href="../HTML/kontakt_oss.html">KONTAKT OSS</a>
             </li>
             </ul>
      
             </nav>

<!--##HTML-NAVBAR-START##-->

      `;
    }
  }
  customElements.define('nav-bar', Navbar);
  window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 1000px)").matches) {
    document.getElementById("nav_check").checked = false;
    } 
    })