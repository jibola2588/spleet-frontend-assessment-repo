import { shallowMount } from '@vue/test-utils';
import FooterComponent from '@/components/footer.vue';

describe('FooterComponent', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(FooterComponent);
  });

  it('renders the main section with correct classes and attributes', () => {
    const section = wrapper.find('section');
    expect(section.classes()).toContain('bg-primaryText');
    expect(section.attributes('aria-labelledby')).toBe('rendezvous-footer');
  });

  it('renders the heading with the correct text', () => {
    const heading = wrapper.find('h2');
    expect(heading.text()).toBe('rendezvous');
  });

  it('renders the tagline paragraph with the correct text', () => {
    const tagline = wrapper.find('p[aria-label="Tagline"]');
    expect(tagline.text()).toBe('Your Personal Event Sherpa: Curating Awesome, One Click at a Time.');
  });

  it('renders the footer navigation with correct headings and links', () => {
    const featuresHeading = wrapper.find('h3#features-heading');
    expect(featuresHeading.text()).toBe('Feature');

    const companyHeading = wrapper.find('h3#company-heading');
    expect(companyHeading.text()).toBe('Company');

    const contactHeading = wrapper.find('h3#contact-heading');
    expect(contactHeading.text()).toBe('Contact us');

    const featuresLinks = wrapper.findAll('h3#features-heading + ul a');
    expect(featuresLinks.at(0).text()).toBe('Events discovery');
    expect(featuresLinks.at(1).text()).toBe('Ticketing');

    const companyLinks = wrapper.findAll('h3#company-heading + ul a');
    expect(companyLinks.at(0).text()).toBe('About us');
    expect(companyLinks.at(1).text()).toBe('FAQs');
    expect(companyLinks.at(2).text()).toBe('Careers');
    expect(companyLinks.at(3).text()).toBe('Support');

    const contactLinks = wrapper.findAll('h3#contact-heading + ul a');
    expect(contactLinks.at(0).attributes('href')).toBe('mailto:info@events.com');
    expect(contactLinks.at(1).attributes('href')).toBe('tel:+2347013456789');
  });
});
