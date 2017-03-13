import lazyLoading from './lazyLoading'

export default {
  path: '/components',
  meta: {
    icon: 'fa-building-o',
    expanded: false,
    label: 'Components'
  },
  component: lazyLoading('components', true),

  children: [
    {
      name: 'Components',
      path: '',
      component: lazyLoading('components/Default'),
      meta: {
        link: 'components/Default.vue'
      }
    },
    {
      name: 'BackToTop',
      path: 'backToTop',
      meta: {
        description: 'Jump component is based on jump.js',
        repository: '#',
        link: 'components/BackToTop.vue'
      },
      component: lazyLoading('components/BackToTop')
    },
    {
      name: 'Brace',
      path: 'brace',
      meta: {
        description: 'Code editor component that based on brace',
        repository: '#',
        link: 'components/Brace.vue'
      },
      component: lazyLoading('components/Brace')
    },
    {
      name: 'Collapse',
      path: 'collapse',
      meta: {
        description: 'Collapse component',
        repository: '#',
        link: 'components/Collapse.vue'
      },
      component: lazyLoading('components/Collapse')
    },
    {
      name: 'Datepicker',
      path: 'datepicker',
      meta: {
        description: 'Datepicker component is based on flatpickr',
        repository: '#',
        link: 'components/Datepicker.vue'
      },
      component: lazyLoading('components/Datepicker')
    },
    {
      name: 'Emoji',
      path: 'emoji',
      meta: {
        description: 'Emoji Component is based on emojione.com',
        repository: '#',
        link: 'components/Emoji.vue'
      },
      component: lazyLoading('components/Emoji')
    },
    {
      name: 'Message',
      path: 'message',
      meta: {
        description: 'Message component',
        repository: '#',
        link: 'components/Message.vue'
      },
      component: lazyLoading('components/Message')
    },
    {
      name: 'Modal',
      path: 'modal',
      meta: {
        description: 'Modal component',
        repository: '#',
        link: 'components/Modal.vue'
      },
      component: lazyLoading('components/Modal')
    },
    {
      name: 'Notification',
      path: 'notification',
      meta: {
        description: 'Notification component',
        repository: '#',
        link: 'components/Notification.vue'
      },
      component: lazyLoading('components/Notification')
    },
    {
      name: 'ProgressBar',
      path: 'progress-bar',
      meta: {
        description: 'ProgressBar component',
        repository: '#',
        link: 'components/ProgressBar.vue'
      },
      component: lazyLoading('components/ProgressBar')
    },
    {
      name: 'ProgressTracker',
      path: 'progress-tracker',
      meta: {
        description: 'ProgressTracker component is based on progress-tracker',
        repository: '#',
        link: 'components/ProgressTracker.vue'
      },
      component: lazyLoading('components/ProgressTracker')
    },
    {
      name: 'Quill',
      path: 'quill',
      meta: {
        description: 'Your powerful, rich text editor',
        repository: '#',
        link: 'components/Quill.vue'
      },
      component: lazyLoading('components/Quill')
    },
    {
      name: 'Rating',
      path: 'rating',
      meta: {
        description: 'Rating component is based on starability.css',
        repository: '#',
        link: 'components/Rating.vue'
      },
      component: lazyLoading('components/Rating')
    },
    {
      name: 'Slider',
      path: 'slider',
      meta: {
        description: 'Slider component',
        repository: '#',
        link: 'components/Slider.vue'
      },
      component: lazyLoading('components/Slider')
    },
    {
      name: 'Switch',
      path: 'switch',
      meta: {
        description: 'Switch component',
        repository: '#',
        link: 'components/Switch.vue'
      },
      component: lazyLoading('components/Switch')
    },
    {
      name: 'Tabs',
      path: 'tabs',
      meta: {
        description: 'Tabs component',
        repository: '#',
        link: 'components/Tabs.vue'
      },
      component: lazyLoading('components/Tabs')
    },
    {
      name: 'Tooltip',
      path: 'tooltip',
      meta: {
        description: 'Tooltip component is based on hint.css',
        repository: '#',
        link: 'components/Tooltip.vue'
      },
      component: lazyLoading('components/Tooltip')
    },
    {
      name: 'Lory',
      path: 'lory',
      meta: {
        description: 'Slider component is based on lory, lory: ☀ Touch enabled minimalistic slider',
        repository: '#',
        link: 'components/Lory.vue'
      },
      component: lazyLoading('components/Lory')
    }
  ]
}
