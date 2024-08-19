import { shallowMount } from '@vue/test-utils';
import CardComponent from '@/components/card.vue';
import moment from 'moment';

describe('CardComponent', () => {
  const card = {
    imageUrl: 'path/to/image.jpg',
    title: 'ISWIS Live Show',
    date: '2024-10-03',
    time: '18:00',
    description: 'This is a description of the ISWIS Live Show that is quite long and should be truncated.',
    id: '123'
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CardComponent, {
      propsData: { card },
      global: {
        stubs: {
          'router-link': true
        }
      }
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the image with the correct src and alt attributes', () => {
    const img = wrapper.find('img');
    expect(img.attributes('src')).toBe(card.imageUrl);
    expect(img.attributes('alt')).toBe('Promotional poster for ISWIS Live Show');
  });

  it('renders the title correctly', () => {
    expect(wrapper.find('h3').text()).toBe(card.title);
  });

  it('formats the date correctly', () => {
    const formattedDate = moment(card.date).format('ddd, MMM Do');
    expect(wrapper.find('time').text()).toBe(formattedDate);
  });

  it('formats the time correctly', () => {
    const formattedTime = moment(card.time, 'HH:mm').format('hA');
    const timeElements = wrapper.findAll('time');
    expect(timeElements.at(1).text()).toBe(formattedTime);
  });

  it('truncates the description correctly', () => {
    const truncatedDescription = card.description.substring(0, 100) + '...';
    expect(wrapper.find('p').text()).toBe(truncatedDescription);
  });
});
