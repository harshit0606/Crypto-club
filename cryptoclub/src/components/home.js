import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import image from "../Assets/pic1.jpg"
import Banner from "../Assets/banner.png"
import PBanner from "../Assets/phone_banner.png";
import {BsArrowRight} from "react-icons/bs";
import {BsDiscord} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
function Home() {
  return (
    <div>
    <div className='banner'><img src={Banner}></img></div>
    <div className='phone_banner'><img src={PBanner}></img></div>
    <div id="about" className='faq'>
        <h1>About Us:</h1>
        <p>CryptoClub Events is the #1st “in real life” crypto exclusive, events
        company where fellow cryptonians can connect, learn, socialise and party
        with each other. Our vision is to bring people together who are in the
        space as well as people looking to get into it. </p>
        <p>We have developed a unique NFT ticketing platform where patrons can
        mint their NFT ticket passes on our website in order to gain access to our
        events. For people with no Solana wallets, we have integrated an option
        where you can mint your pass using your debit card, credit card, Apple
        Pay and Google Pay. </p>
        <p>Let’s bring a decentralized experience to a centralised environment.</p>
        <p>For more info, please visit our FAQ. </p>
    </div>
    <div className="explore">
    <div className='button_div'><button className="explore_btn">Explore Events&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsArrowRight/></button></div>
    <div className='image_div'><img src={image}/></div>
    </div>
    <div id="faq" className="faq">
    <h1>FAQ:</h1>
    <p>Here are the answers to some of the most frequent questions</p>
    <Accordion style={{borderRadius:"5px",fontFamily:'Montserrat'}}>
<Accordion.Item eventKey="0" style={{marginBottom:"10px",borderRadius:"5px"}}>
  <Accordion.Header style={{fontSize:"18px"}}>What is CryptoClub Events?</Accordion.Header>
  <Accordion.Body style={{color:"black",fontSize:"16px",textAlign:"left",borderRadius:"5px"}}>
  CryptoClub Events is a crypto-focused events company that is looking to
  bring people from the space together. Our events aim to provide an
  enjoyable “in real life” experience where you will be able to connect, learn,
  socialise and party with like minded people. Our unique NFT ticketing
  platform allows patrons the opportunity to mint their NFT ticket pass on
  our website in order to gain access to our events. Build a ticket collection
  and attend our events globally!
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1" style={{marginBottom:"10px",borderRadius:"5px"}}>
  <Accordion.Header style={{fontSize:"18px"}}>How do we mint a ticket?</Accordion.Header>
  <Accordion.Body style={{color:"black",fontSize:"16px",textAlign:"left",borderRadius:"5px"}}>
  PS: Mint = Purchase<br></br>
  Minting an NFT Ticket pass can be done in two ways:<br></br>
  1. Mint a ticket by using a recognised Solana Wallet such as Phantom or
  Slope:<br></br>
  <p style={{marginLeft:"30px", fontSize:"14px"}}>
  Step 1: Connect your wallet<br></br>
  Step 2: Click on the event you want to attend<br></br>
  Step 3: Select “Mint Ticket”<br></br>
  Step 4: Once your NFT ticket has been minted, it will be accessible in your
  Solana Wallet.<br></br>
  Step 5: Ensure your wallet is still connected to our site. Go to the
  “Generate QR Code” page and select generate.<br></br>
  Step 6: Voila, you are now done! Please make sure to save the QR Code
  that is auto-generated.<br></br><br></br>
  For security reasons and to ensure that fake tickets are not created, you
will need to use the QR code to enter the event. The QR code contains
important information from the blockchain in order to authenticate your
unique NFT Ticket pass.</p>
2.Mint a ticket using your credit/debit card. We have partnered with
Crossmint to provide a simple way for users who do not yet have a
Solana Wallet to mint an NFT ticket pass. 
<p style={{marginLeft:"30px", fontSize:"14px"}}>
Step 1: Go to the Upcoming Events page<br></br>
Step 2: Click on the event you want to attend<br></br>
Step 3: Select “Buy with credit card” and follow the prompts. It takes just
a few minutes to complete your purchase.<br></br>
Step 4: Add<br></br>
Step 5: Add<br></br>
Step 6: Add<br></br><br></br>
In this instance, you do NOT need to navigate to the “Generate QR code”
page as your NFT Ticket pass will sit in your Crossmint wallet. If you
decide to download a Solana wallet at a later stage and wish to send your
NFT over from Crossmint, then only will need to generate a QR code.
</p>
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2" style={{marginBottom:"10px",borderRadius:"5px"}}>
  <Accordion.Header style={{fontSize:"18px"}}>Is Crossmint safe to use?</Accordion.Header>
  <Accordion.Body style={{color:"black",fontSize:"16px",textAlign:"left",borderRadius:"5px"}}>
 <p style={{    fontSize:"14px"}}> Crossmint is 100% safe. Crossmint uses Stripe as a 3rd party payment
 gateway. Stripe is one of the worlds largest payment companies, used by
 the likes of Facebook and Google. </p>
  </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="3" style={{marginBottom:"10px",borderRadius:"5px"}}>
  <Accordion.Header style={{fontSize:"18px"}}>Where will your events be held?</Accordion.Header>
  <Accordion.Body style={{color:"black",fontSize:"16px",textAlign:"left",borderRadius:"5px"}}>
  Events will slowly be rolled out globally however to start they will be held
  in Cape Town, South Africa. Crypto enthusiasts from all over the world
  are welcome to attend. There will also be a range of crypto companies and
  projects that will be hosting some of the events.
  </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="4" style={{marginBottom:"10px",borderRadius:"5px"}}>
  <Accordion.Header style={{fontSize:"18px"}}>How will Solana Pay work?</Accordion.Header>
  <Accordion.Body style={{color:"black",fontSize:"16px",textAlign:"left",borderRadius:"5px"}}>
  Similarly to other QR code merchants, Solana Pay functions in the same
  manner whereby you scan a QR code and pay instantly on the spot for
  your purchase. Our events will have mechanise, food as well as a crypto
  exclusive drinks bar - all of which we will accept payment using Solana
  Pay. 
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="5" style={{marginBottom:"10px",borderRadius:"5px"}}>
  <Accordion.Header style={{fontSize:"18px"}}>Why have you decided to use Solana for the NFT Tickets?</Accordion.Header>
  <Accordion.Body style={{color:"black",fontSize:"16px",textAlign:"left",borderRadius:"5px"}}>
  At the moment we have decided to only integrate Solana due to the low
gas fees and very quick transaction speed.<br></br>
We will release an ETH mint option at a later stage however users will need
to pay for the gas fees as they will more than likely cost more than the
price of the actual NFT ticket pass.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="6" style={{marginBottom:"10px",borderRadius:"5px"}}>
  <Accordion.Header style={{fontSize:"18px"}}>How many tickets can one person mint?</Accordion.Header>
  <Accordion.Body style={{color:"black",fontSize:"16px",textAlign:"left",borderRadius:"5px"}}>
  Patrons will be allowed to mint up to 3 NFT Ticket Passes each.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="7" style={{marginBottom:"10px",borderRadius:"5px"}}>
  <Accordion.Header style={{fontSize:"18px"}}>How old do you need to be to attend our events?</Accordion.Header>
  <Accordion.Body style={{color:"black",fontSize:"16px",textAlign:"left",borderRadius:"5px"}}>
  This is largely dependent on where the event is held and the country it is
held in. If events are held in a venue that is serving alcohol and has an age
limit, then the venue rules will be followed accordingly. Each event will
stipulate the age limit.<br></br>
<b>Events held in Cape Town - South Africa, will be for over 18s only!</b>
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="8" style={{marginBottom:"10px",borderRadius:"5px"}}>
  <Accordion.Header style={{fontSize:"18px"}}>I want to attend your events in Cape Town, do you offer a
  packaged deal incl flights and accommodation?</Accordion.Header>
  <Accordion.Body style={{color:"black",fontSize:"16px",textAlign:"left",borderRadius:"5px"}}>
  If you are travelling from another city or country and would like to have all
your travel needs taken care of, we have paterned with XXXX who provide
a full 360 degree concierge service.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="9" style={{marginBottom:"10px",borderRadius:"5px"}}>
  <Accordion.Header style={{fontSize:"18px"}}>Who can sponsor to host an event?</Accordion.Header>
  <Accordion.Body style={{color:"black",fontSize:"16px",textAlign:"left",borderRadius:"5px"}}>
  Crypto related companies and/or projects will be eligible. If you would like
to either sponsor or host an event, please fill out this form or pop us an
email using the contact form on the “Contact Us” page.<br></br><br></br>
Disclaimer: Companies/Projects will be vetted thoroughly by our team to
ensure they are both legitimate and reputable. 
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="10" style={{marginBottom:"10px",borderRadius:"5px"}}>
  <Accordion.Header style={{fontSize:"18px"}}>I tried to mint an NFT Ticket but it did not go through?</Accordion.Header>
  <Accordion.Body style={{color:"black",fontSize:"16px",textAlign:"left",borderRadius:"5px"}}>
  There are 2 possible reasons as to why a transaction can fail:
    1.If there is network congestion, it is possible that your transaction may
    not go through. Keep trying until it does.<br></br>
    2.You must have at least $0,0001 extra in your wallet or account in order
    to cover gas fees.<br></br>
    If the above does not sort out your issue, please email our support team
on xxxxx. Provide them with your wallet address as well as the details of
the event you are trying to mint a ticket for.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="11" style={{marginBottom:"10px",borderRadius:"5px"}}>
  <Accordion.Header style={{fontSize:"18px"}}>I have a question that but it’s not on your FAQ list?</Accordion.Header>
  <Accordion.Body style={{color:"black",fontSize:"16px",textAlign:"left",borderRadius:"5px"}}>
  Please fill out the “Contact Us” form and will endeavour to get back to you
within 48hrs.
  </Accordion.Body>
</Accordion.Item>
</Accordion>
</div>
<div className='footer'>
  <div className='socials'>
  <a href="https://twitter.com/MiniApesNFT_"><div className='twitter'>
    <BsTwitter style={{color:"rgb(117,113,224)"}}/></div></a>
    <a href="https://discord.gg/XEY9pdDbkv"> <div className='discord'>
     <BsDiscord style={{color:"rgb(117,113,224)"}} /></div></a>
    </div>
    <hr></hr>
    <p>Copyright © 2022 Crypto Club. All Right Reserved</p>
  </div>
    </div>
  )
}

export default Home;