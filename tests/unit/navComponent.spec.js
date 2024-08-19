import { shallowMount } from '@vue/test-utils';
import NavComponent from '@/components/navbar.vue';

describe('NavComponent', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(NavComponent, {
      propsData: {
        type: 'a',
      },
    });
  });

  it('renders the correct navigation links', () => {
    const links = wrapper.findAll('ul > li > a');
    expect(links.at(0).attributes('href')).toBe('#discover');
    expect(links.at(1).attributes('href')).toBe('#about');
    expect(links.at(2).attributes('href')).toBe('#faqs');
    expect(links.at(3).attributes('href')).toBe('#contact');
  });

  it('renders the login and signup buttons correctly', () => {
    const loginButton = wrapper.find('a[href="#login"]');
    const signupButton = wrapper.find('a[href="#signup"]');
    expect(loginButton.exists()).toBe(true);
    expect(signupButton.exists()).toBe(true);
  });

  it('applies the correct styles based on the `type` prop', async () => {
    expect(wrapper.find('.text-white').exists()).toBe(true);
    expect(wrapper.find('.px-3').exists()).toBe(true);

    await wrapper.setProps({ type: 'b' });
    expect(wrapper.find('.text-black').exists()).toBe(true);
  });

  it('toggles the sidebar when the menu icon is clicked', async () => {
    const toggleButton = wrapper.find('span > img');
    await toggleButton.trigger('click');
    expect(wrapper.vm.isSidebarOpen).toBe(true);
    expect(wrapper.find('.sidebar').classes()).toContain('open');

    await toggleButton.trigger('click');
    expect(wrapper.vm.isSidebarOpen).toBe(false);
    expect(wrapper.find('.sidebar').classes()).not.toContain('open');
  });

  it('renders the correct sidebar links when sidebar is open', async () => {
    wrapper.setData({ isSidebarOpen: true });
    await wrapper.vm.$nextTick();

    const sidebarLinks = wrapper.findAll('.sidebar ul > li > a');
    expect(sidebarLinks.length).toBe(4);
    expect(sidebarLinks.at(0).attributes('href')).toBe('#discover');
    expect(sidebarLinks.at(1).attributes('href')).toBe('#about');
    expect(sidebarLinks.at(2).attributes('href')).toBe('#faqs');
    expect(sidebarLinks.at(3).attributes('href')).toBe('#contact');
  });

  it('renders the login and signup buttons in the sidebar', async () => {
    wrapper.setData({ isSidebarOpen: true });
    await wrapper.vm.$nextTick();

    const sidebarLoginButton = wrapper.find('button').text();
    const sidebarSignupButton = wrapper.findAll('button').at(1).text();
    expect(sidebarLoginButton).toContain('Login');
    expect(sidebarSignupButton).toContain('Sign up');
  });

  it('closes the sidebar when the close button is clicked', async () => {
    wrapper.setData({ isSidebarOpen: true });
    await wrapper.vm.$nextTick();

    const closeButton = wrapper.find('.pi-times');
    await closeButton.trigger('click');
    expect(wrapper.vm.isSidebarOpen).toBe(false);
  });
});
