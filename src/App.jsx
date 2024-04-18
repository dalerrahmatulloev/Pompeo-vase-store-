import './App.css'
import Card from './Components/Cards/card'
import Ender from './Components/Ender/Ender'
import card from './assets/card.png'
import vase from './assets/vase.png'
import Vases from './assets/Vases.png'
import Mugs from './assets/Mugs.png'
import plates from './assets/plates.png'
import goldVase from './assets/goldVase.png'
import underNavbar from './assets/underNavbar.png'
import ogangeVase from './assets/ogangeVase.png'
import Decor from './assets/Decor.png'
import Mint from './assets/Mint.png'
import Set from './assets/Set.png'
import Orange from './assets/Orange.png'
import Dark from './assets/Dark.png'
import Square from './assets/Square.png'
import plan from './assets/plan.png'
import EMAIL from './assets/EMAIL.png'
import FIND from './assets/FIND.png'
import CALL from './assets/CALL.png'

function App() {

  return (
    <>
      <div className="navbar">
        <div className="navbarLeft">
          <h1>Pompeo</h1>
          <h2 className='eee'>Buttons</h2>
        </div>
        <div className="navbarRight">
          <p>HOME</p>
          <p>ABOUT</p>
          <p>SHOP</p>
          <p>CONTACT</p>
          <h3><img src={card} alt="" /><span>Card</span></h3>
        </div>
      </div>

      <div className="underNavbar">
        <div className="underNavbarText">
          <h3>&</h3>
          <h2>POMPED POTTERY</h2>
          <h1>Unique Porcelain <br /> Stone Collection</h1>
          <p>Unique & modern pottery made by our master in porcelain & stones</p>
          <button>Shop Collection</button>
        </div>
        <div className="underNavbarImg">
          <img src={vase} alt="" />
        </div>
      </div>

      <div className="Porcelain">
        <h2>Product Categories</h2>
        <div className="pars">
          <h1>Porcelain</h1>
          <h2>&</h2>
          <h1>Pottery</h1>
        </div>
        <div className="rounds">
          <div className="round">
            <div className="inRound">
              <img src={Vases} alt="" />
              <p>VASES</p>
            </div>
          </div>

          <div className="round2">
            <div className="inRound2">
              <img src={Mugs} alt="" />
              <p>MUGS</p>
            </div>
          </div>

          <div className="round3">
            <div className="inRound3">
              <img src={plates} alt="" />
              <p>PLATES</p>
            </div>
          </div>
        </div>
        <div className="PorcelainEnd">
          <div className="PorcelainEndLeft">
            <h1>Hand Grafted <br /> Pottery since 1990</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
          </div>
          <div className="PorcelainEndRight">
            <h1>We Provide Premium <br />Pottery Produts</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
          </div>
        </div>
      </div>

      <div className="what">
        <div className="whatDiv">
          <div className="whatImg">
            <img className='sss' src={goldVase} alt="" />
            <img className='yyy' src={underNavbar} alt="" />
          </div>
          <div className="whatText">
            <h2>Gold & Black Pottery</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>
            <h3>View Details</h3>
          </div>          
        </div>
        <div className="whatDiv2">
          <div className="whatText2">
            <h2>Orange Ceramic</h2>
            <p>Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt.</p>
            <h3>View Details</h3>
          </div>
          <div className="whatImg2">
            <img className='ssss' id='tyt' src={ogangeVase} alt="" />
            <img className='yyy' src={underNavbar} alt="" />
          </div>    
        </div>
      </div>

      <div className="store">
        <h2>Our online store</h2>
        <h1>Pottery Collection</h1>
        <div className="storeDiv">
          <Card img={Decor} title={'Decor Plate'} price={'$ 65.00 USD'}></Card>
          <Card img={Mint} title={'Mint Pottery'} price={'$ 75.00 USD'}></Card>
          <Card img={Set} title={'Set Of Potterys'} price={'$ 125.00 USD'}></Card>
          <Card img={Orange} title={'Orange Ceramic'} price={'$ 55.00 USD'}></Card>
          <Card img={Dark} title={'Dark Bowl'} price={'$ 115.00 USD'}></Card>
          <Card img={Square} title={'Square Pottery'} price={'$ 75.00 USD'}></Card>
        </div>
        <button>View All Products</button>
      </div>

      <div className="ready">
        <div className="readyDiv">
          <h2>POMPEO POTTERY</h2>
          <h1>Ready to start shopping?</h1>
          <p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit</span> Suspendisse varius enim in eros elementum.</p>
          <button>New Collection</button>
        </div>
      </div>

      <div className="upFooter">
        <img src={plan} alt="" />
        <h2 className='upFooterH2'>LATEST NEWS</h2>
        <div className="upFooterDiv">
          <h1>Latest news</h1>
          <h2>&</h2>
          <h1>New updates</h1>
        </div>
        <div className="upFooterEmail">
          <div className="emailDiv">
            <p>Enter your email</p>
          </div>
          <div className="emailSub">
            <p>SUBSCRIBE</p>
          </div>
        </div>
        <div className="upFooterEnd">
          <div></div>
          <p>Sign up for our newsletter</p>
        </div>
      </div>

      <div className="footer">
        <h1>Pompeo</h1>
        <h2>I have always striven to fix beauty in wood, stone, <br /> glass or pottery, that has been my creed.</h2>
        <div className="enderDiv">
          <Ender img = {EMAIL} title={'EMAIL'} desc={'pompeopotery@gmail.com'}></Ender>
          <Ender img={FIND} title={'FIND'} desc={'Central Park, Manhattan New York, 1101'}></Ender>
          <Ender img={CALL} title={'CALL'} desc={'+1 292 345 678'}></Ender>
        </div>
      </div>

      <div className="end">
        <p>Template design by <span>Dorian Hoxha</span> - <span>Image License Info</span> Powered by <span>Webflow</span></p>
      </div>
    </>
  )
}

export default App
