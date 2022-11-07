class Navbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

      <style>
        body{
                margin:0;
                padding:0;
                
        }
        .wraper{
                top:0;
                z-index: 2;
                position: absolute;
                width: 100%;
                height: fit-content;
                background: #333;
        }

        .frame1{
                width: 100vw;
                height: 100vh;
                background-color: red;
               
                
        }
        .frame2{
                width: 100vw;
                height: 100vh;
                background-color:blue;

        }
        .frame3{
                width: 100vw;
                height: 100vh;
                background-color:green;

        }


</style>
                          <!--navbarSTART-->
                               <!-- <div class="mob_interface_wrap">      -->

                                <!-- </div>   -->
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
    background-image: url("burgerIkon2.svg");
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

    background-image: url("BadCom_logo.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 70px;

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
    padding: 0;
    margin: 0;
    z-index: 99;
    }

nav ul li a{
    display: block;

    margin: 10px;    
    padding: 10px;
    border-radius: 15px;

    background: #634d8d;

    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    /* Over skal nok fjernes */
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
        align-items: right;
    }

.nav_check:checked + .nav_ikon{
        background-image: url("kryss2.svg");
}
nav ul li a:hover{
    transform: scale(1.1);
}
    
@media screen and (min-width: 950px) {
    .nav_ikon{
            display: none;
    }
    .mobil_logo{
            display: none;
    
    }

    nav ul{
        position: sticky !important;
        display: flex !important;
        flex-direction: row !important;
        align-items: center;
        justify-content: space-between !important;
        width: 100% !important;
    }

    nav ul li a{
        margin: 20px;
        padding: 10px;
        border-radius: 25px;
        width: 125px;
        min-width: 125px;
    }

    .nav_senter{
    
        margin: 10px;
        font-family: 'Courier New', Courier, monospace;
        padding: 10px;
        background: none;
        display: block;
        height: 125px;
        width: 125px;
        background-image: url("BadCom_logo.png");
        background-size: 125px;
        background-position: center;
        background-repeat: no-repeat;
    } 

}
                                </style>
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
                                       <!-- NAVBAR SLUTT -->  

      `;
    }
  }
  customElements.define('nav-bar', Navbar);