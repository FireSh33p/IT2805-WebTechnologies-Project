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
        }
    
    .nav_ikon{
        position:absolute;
        top:0;
        right: 0;
    
        margin: 20px 30px;

        height: 50px;
        width: 50px;
        border: 2px solid white;
        border-radius: 5px;
    
        background-color: #634d8d;
        background-image: url("../IMG/Ikoner/burgerIkon2.svg");
        background-position: center;
        background-repeat: no-repeat;
        
        cursor: pointer;
        z-index:999;
    }

    .mobil_logo{
        position: absolute;
        display: block;
        top:0;
        left:0;
    
        margin: 11px 0px 0px 15px;
        height: 75px;
        width: 75px;
    
        background-image: url("../IMG/logoer/BadCom-logo-100px.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        cursor: pointer;

        z-index:999;
    }
    
    nav ul{
        display: none;
        list-style-type: none;
        padding: 0;
        margin:0;
        
        }
    
    nav ul li a{
        display: block;
        width:50vw;
        margin: 25px;    
        padding: 20px;

        
        border: 2px solid white;
        border-radius: 35px;
    
        background-color: #634d8d;
    
        text-decoration: none;
        color: white;
        font-weight: bold;
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
            display: flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            width: 100vw;
            height:100vh;
            background-color: #634d8d;
        }
    
    .nav_check:checked + .nav_ikon{
            background-image: url("../IMG/Ikoner/kryss2.svg");
    }
    nav ul li a:hover{
        transform: scale(1.05);
    }
        
    @media screen and (min-width: 1000px) {
        .nav_ikon{
                display: none;
        }
        .mobil_logo{
                display: none;
        
        }
    
        nav ul{
            position: absolute ;
            display: flex ;
            flex-direction: row ;
            justify-content: center ;
            align-items: center ;
            margin:0 ;
            padding:0 ;
            background:none;
        }
     
        nav ul li a{
            margin: 1vw;
            width:150px;
     
            padding: 10px ;
            border-radius: 25px ;
            border: 2px solid white;
        }
    
        .nav_senter{

            background: none;
            display: block;
            height: 125px;
            width: 125px;
            background-image: url("../IMG/logoer/BadCom-logo-360px.png");
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
             <a href="../HTML/info.html" id="nav-info">INFO</a>
             </li>
             <li>
             <a href="../HTML/Verv.html" id="nav-verv">VERV</a>
             </li>
             <!--Sentrert navbar logo-->
             <li>
                     <a href="../HTML/hovedside.html"  class="nav_senter" ></a>
             </li>
             <!--Høyre  linker-->
             <li>
             <a href="../HTML/challenges.html" id="nav-challenges">CHALLENGES</a>   
             </li>
             <li>
             <a href="../HTML/guidev2.html" id="nav-guide">GUIDE</a>
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