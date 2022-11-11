'##-IMPORTER NAVBAR MED script og html-tagen <nav-bar></nav-bar>'
class Navbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

      <style>
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
        z-index: 99;
    }
    .mobil_logo{
        display: block;
    
        margin:10px;
        height: 70px;
        width: 70px;
    
        background-image: url("../IMG/BadCom-logo-100px.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    
        cursor: pointer;
        z-index: 99;
    }
    nav{
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        display: flex;
        flex-direction: column;
        z-index: 99;
        }
    
    nav ul{
        display: none;
        list-style-type: none;
        z-index: 99;
        }
    
    nav ul li a{
        display: block;
        min-width: 100px;
        
        margin: 10px;    
        padding: 10px;
        border-radius: 15px;
    
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
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    
    .nav_check:checked + .nav_ikon{
            background-image: url("../IMG/kryss2.svg");
    }
    nav ul li a:hover{
        transform: scale(1.1);
    }
        
    @media screen and (min-width: 850px) {
        .nav_ikon{
                display: none;
        }
        .mobil_logo{
                display: none;
        
        }
    
        nav ul{
            display: flex !important;
            flex-direction: row !important;
            justify-content: center;
            align-items: center;
            margin:0;
            padding:0;
            
        }
    
        nav ul li a{
            margin: 20px;
            padding: 10px;
            border-radius: 25px;
        }
    
        .nav_senter{
            margin: 10px;
            font-family: 'Courier New', Courier, monospace;
            padding: 10px;
            background: none;
            display: block;
            height: 125px;
            width: 125px;
            background-image: url("../IMG/BadCom-logo-360px.png");
            background-size: 125px;
            background-position: center;
            background-repeat: no-repeat;
        } 
    }
      </style>


<!--##HTML-NAVBAR-START##-->

      <nav>
              <a class="mobil_logo" href="#" ></a>
              <input class="nav_check" type="checkbox" id="nav_check" />
              <label class="nav_ikon" for="nav_check"></label>
             <ul>
             <!--Venstre navn linker-->
             <li>
             <a href="https://www.nrk.no/">INFO</a>
             </li>
             <li>
             <a href="#">VERV</a>
             </li>
             <!--Sentrert navbar logo-->
             <li>
                     <a href="#"  class="nav_senter" ></a>
             </li>
             <!--Høyre  linker-->
             <li class="nav_challenges">
             <a href="#">CHALLENGES</a>   
             </li>
             <li class="nav_kontakOss">
             <a href="#">KONTAKT OSS</a>
             </li>
             </ul>
             </nav>

<!--##HTML-NAVBAR-START##-->


      `;
    }
  }
  customElements.define('nav-bar', Navbar);