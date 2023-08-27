export default function Donations() {
  return (
    <>

      <div className="block bg-primary-1 p-6 pb-0 text-header mb-2 sm:mb-20">
        <h2 id="sponsors" className="text-center text-2xl mb-4 mt-6 mb-10 sm:text-3xl sm:mb-10 sm:mt-4">Sponsors and Friends</h2>

        <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">

          {/* Alby Beer */}
          <li className="block border-2 border-secondary-2 hover:border-2 hover:border-highlight-1 p-6 mb-4 sm:mx-2 sm:flex-1/2 md:flex-1/3">
            <a className="text-highlight-1" href="https://alby.beer/">
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/sponsors/alby.jpg" alt="#" />
              <span className="block nohover text-highlight-1 w-100 mb-4 text-center">Alby Beer</span>
              <p className="block w-100 text-center text-sm">
                Alby's ALBY MADE grant helped us revamp our design lab and offer a wider range of workshops for our
                members!
              </p>
            </a>
          </li>

          {/* Altronics */}
          <li className="block border-2 border-secondary-2 hover:border-2 hover:border-highlight-1 p-6 mb-4 sm:mx-2 sm:flex-1/2 md:flex-1/3">
            <a className="text-highlight-1" href="https://www.altronics.com.au/">
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/sponsors/altronics.png" alt="#" />
              <span className="block nohover text-highlight-1 w-100 mb-4 text-center">Altronics</span>
              <p className="block w-100 text-center text-sm">
                The endless support Altronics has provided to our organisation and members over the years has been invaluable.
                Many aspects of the space simply wouldn't be financially viable without their support!
              </p>
            </a>
          </li>

          {/* Aussie Broadband */}
          <li className="block border-2 border-secondary-2 hover:border-2 hover:border-highlight-1 p-6 mb-4 sm:mx-2 sm:flex-1/2 md:flex-1/3">
            <a className="text-highlight-1" href="https://www.aussiebroadband.com.au/">
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/sponsors/ABB.jpg" alt="#" />
              <span className="block nohover text-highlight-1 w-100 mb-4 text-center">Aussie Broadband</span>
              <p className="block w-100 text-center text-sm">
                Huge thanks to Aussie Broadband for providing us with a substantial discount on our internet service. Many of the services our members use wouldn't be possible without their support!
              </p>
            </a>
          </li>

          {/* Github */}
          <li className="block border-2 border-secondary-2 hover:border-2 hover:border-highlight-1 p-6 mb-4 sm:mx-2 sm:flex-1/2 md:flex-1/3">
            <a className="text-highlight-1" href="https://socialimpact.github.com/">
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/sponsors/github.png" alt="#" />
              <span className="block nohover text-highlight-1 w-100 mb-4 text-center">Github</span>
              <p className="block w-100 text-center text-sm">
                Collaboration on our open source projects is a breeze with Github's organisation management!
              </p>
            </a>
          </li>

          {/* Google NFP */}
          <li className="block border-2 border-secondary-2 hover:border-2 hover:border-highlight-1 p-6 mb-4 sm:mx-2 sm:flex-1/2 md:flex-1/3">
            <a className="text-highlight-1" href="https://www.google.com/nonprofits/">
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/sponsors/google_nfp.png" alt="#" />
              <span className="block nohover text-highlight-1 w-100 mb-4 text-center">Google NFP</span>
              <p className="block w-100 text-center text-sm">
                Google's services for nonprofits help us stay connected and collaborate on the operation of the workshop!
              </p>
            </a>
          </li>

          {/* Healthchecks.io */}
          <li className="block border-2 border-secondary-2 hover:border-2 hover:border-highlight-1 p-6 mb-4 sm:mx-2 sm:flex-1/2 md:flex-1/3">
            <a className="text-highlight-1" href="https://healthchecks.io/">
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/sponsors/healthchecks.jpg" alt="#" />
              <span className="block nohover text-highlight-1 w-100 mb-4 text-center">Healthchecks.io</span>
              <p className="block w-100 text-center text-sm">
                The service monitoring provided by Healthchecks helps our volunteers administer the services we rely on and helps our members lock up the space!
              </p>
            </a>
          </li>

          {/* LotteryWest */}
          <li className="block border-2 border-secondary-2 hover:border-2 hover:border-highlight-1 p-6 mb-4 sm:mx-2 sm:flex-1/2 md:flex-1/3">
            <a className="text-highlight-1" href="https://lotterywest.wa.gov.au/">
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/sponsors/lotterywest.jpg" alt="#" />
              <span className="block nohover text-highlight-1 w-100 mb-4 text-center">LotteryWest</span>
              <p className="block w-100 text-center text-sm">
                We are proudly supported by LotteryWest grants that help us buy awesome equipment to do awesome things!
              </p>
            </a>
          </li>

          {/* St John WA */}
          <li className="block border-2 border-secondary-2 hover:border-2 hover:border-highlight-1 p-6 mb-4 sm:mx-2 sm:flex-1/2 md:flex-1/3">
            <a className="text-highlight-1" href="https://stjohnwa.com.au/">
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/sponsors/SJA.png" alt="#" />
              <span className="block nohover text-highlight-1 w-100 mb-4 text-center">St John WA</span>
              <p className="block w-100 text-center text-sm">
                The St John WA Heart Grant has allowed us to maintain a defibrillator on site for the safety of our attendees. Big thanks to St John and LotteryWest for looking out for our health!
              </p>
            </a>
          </li>

          {/* Supanova */}
          <li className="block border-2 border-secondary-2 hover:border-2 hover:border-highlight-1 p-6 mb-4 sm:mx-2 sm:flex-1/2 md:flex-1/3">
            <a className="text-highlight-1" href="https://www.supanova.com.au/">
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/sponsors/supanova.jpg" alt="#" />
              <span className="block nohover text-highlight-1 w-100 mb-4 text-center">Supanova</span>
              <p className="block w-100 text-center text-sm">
                Thanks to Supanova for giving us the opportunity to show off the space and our creations at Supanova
                Perth!
              </p>
            </a>
          </li>

          {/* WebInABox */}
          <li className="block border-2 border-secondary-2 hover:border-2 hover:border-highlight-1 p-6 mb-4 sm:mx-2 sm:flex-1/2 md:flex-1/3">
            <a className="text-highlight-1" href="https://www.webinabox.net.au/">
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/sponsors/webinabox.jpg" alt="#" />
              <span className="block nohover text-highlight-1 w-100 mb-4 text-center">WebInABox</span>
              <p className="block w-100 text-center text-sm">
                A big thank-you to Web In A Box for helping us out with their fantastic cloud platform, many of our services
                wouldn't run without it!
              </p>
            </a>
          </li>

        </ul>
      </div>
    </>
  );
}
