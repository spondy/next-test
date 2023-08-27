import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Events',
      href: getPermalink('/events'),
    },

    {
      text: 'Membership',
      links: [
        {
          text: 'What we offer',
          href: getPermalink('/facilities'),
        },
        {
          text: 'Your first visit',
          href: getPermalink('/first_visit'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Sponsored membership',
          href: getPermalink('/free_membership'),
        },
      ],
    },

    {
      text: 'Pages',
      links: [
        {
          text: 'FAQs',
          href: getPermalink('/faq'),
        },
        {
          text: 'Wiki',
          href: 'https://wiki.artifactory.org.au/',
        },
        {
          text: 'Webcams',
          href: 'https://space.artifactory.org.au/',
        },
        {
          text: 'Slack',
          href: getPermalink('/#slack'),
          //href: 'https://perart.io/slack',
        },
      ],
    },


    {
      text: 'About us',
      links: [
        {
          text: 'Our Values',
          href: getPermalink('/about'),
        },
        {
          text: 'Location',
          href: getPermalink('/about/#location'),
        },
        {
          text: 'Contact Us',
          href: getPermalink('/about/#contact'),
        },
        {
          text: 'Code of Conduct',
          href: getPermalink('/code_of_conduct'),
        },
      ],
    },
  ],
  actions: [{ type: 'button', text: 'Sign Up', href: '/pricing' }],
};



export const footerData = {
  links: [
    {
      title: 'Navigation',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Plan your first visit', href: '/first_visit' },
        { text: 'Upcoming Events', href: '/events' },
        { text: 'FAQs', href: '/faq' },
        { text: 'Wiki', href: 'https://wiki.artifactory.org.au/' },
        { text: 'Webcams', href: 'https://space.artifactory.org.au/' },
      ],
    },
    {
      title: 'Membership',
      links: [
        { text: 'Become a member', href: '/pricing' },
        { text: 'What we offer', href: '/facilities' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'Sponsored membership', href: '/free_membership' },
      ],
    },
    {
      title: 'Organisation',
      links: [
        { text: 'Code of Conduct', href: '/code_of_conduct' },
        { text: 'Discussion and Voting', href: 'https://perart.io/vote' },
        { text: 'Contact Us', href: '/about/#contact' },
        { text: 'Slack', href: '/#slack' },
        { text: 'Meetup', href: 'https://www.meetup.com/Perth-Artifactory/' },
      ],
    },
    {
      title: 'Australian Makerspaces',
      links: [
        { text: 'ACT: Make, Hack, Void', href: 'https://canberramaker.space/', target: '_blank'},
        { text: 'NSW: Robots & Dinosaurs', href: 'https://robodino.org/', target: '_blank'},
        { text: 'SA: Hackerspace Adelaide', href: 'https://www.hackerspace-adelaide.org.au/', target: '_blank'},
        { text: 'TAS: Hobart Hackerspace', href: 'https://www.hobarthackerspace.org.au/', target: '_blank'},
        { text: 'QLD: Brisbane Makerspace', href: 'https://brisbanemaker.space/', target: '_blank'},
        { text: 'QLD: HSBNE', href: 'https://hsbne.org/', target: '_blank'},
        { text: 'VIC: CCHS', href: 'https://hackmelbourne.com/', target: '_blank'},
        { text: 'WA: South West Makers', href: 'http://swmakers.org/', target: '_blank'},
      ],
    },
/*    {
      title: 'Sponsors and Friends',
      links: [
        { text: 'Alby Beer', href: 'http://alby.beer/', target: '_blank'},
        { text: 'Altronics', href: 'https://www.altronics.com.au/' },
        { text: 'Aussie Broadband', href: 'https://www.aussiebroadband.com.au/' },
        { text: 'Google NFP', href: 'https://www.google.com.au/nonprofits/' },
        { text: 'LotteryWest', href: 'https://www.lotterywest.wa.gov.au/' },
        { text: 'St. John WA', href: 'https://stjohnwa.com.au/' },
        { text: 'Supanova', href: 'https://www.supanova.com.au/' },
        { text: 'Taubmans', href: 'https://www.taubmans.com.au/' },
        { text: 'WebInABox', href: 'https://www.webinabox.net.au/' },
      ],
    }, */
  ],
  secondaryLinks: [
    { text: 'About', href: '/about' },
    { text: 'Constitution', href: 'https://wiki.artifactory.org.au/en/constitution' },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/pages/The-Perth-Artifactory/178514525501368' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/theperthartifactory/' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.facebook.com/pages/The-Perth-Artifactory/178514525501368' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Perth-Artifactory' },
  ],
  footNote: `
  Perth Artifactory Inc is a not-for-profit incorporated association in Western Australia and <span class="md:inline-block">registered as a charity with the Australian Charities and Not-for-profits Commission.</span>
  `,
};
