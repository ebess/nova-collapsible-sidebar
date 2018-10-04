<template>
  <div class="sidebar" :class="{collapsed}" :style="sidebarStyle" @keyup.esc="toggleCollapsed">
    <a ref="trigger" class="trigger" href="#" @click.prevent="toggleCollapsed" :style="{height, width}">
      <chevron-left class="icon" v-if="!collapsed"/>
      <chevron-right class="icon" v-else/>
    </a>
    <slot/>
  </div>
</template>

<style lang="scss">
  .sidebar {
    position: relative;

    .trigger {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      z-index: 999;
      padding: 10px;

      .icon {
        height: 25px;
        width: 25px;
      }
    }

    &.collapsed {
      > *:not(.trigger) {
        display: none;
      }

      .trigger + a {
        display: block;
      }

      + .content {
        max-width: inherit;
      }
    }
  }
</style>

<script>
  import ChevronLeft from './ChevronLeft';
  import ChevronRight from './ChevronRight';

  export default {
    components: {
      ChevronLeft,
      ChevronRight,
    },
    props: {
      height: {
        default: '60px',
      },
      width: {
        default: '60px',
      },
      persist: {
        type: Boolean,
      },
      storageKey: {
        type: String,
        default: 'nova-navigation-collapsed',
      },
      toggleKeyCode: {
        type: String,
        default: 'Escape',
      },
    },
    mounted() {
      this.marginLeft = -1 * (this.$el.offsetWidth - this.$refs.trigger.offsetWidth);

      if (!this.persist) {
        localStorage.removeItem(this.storageKey)
      } else {
        this.collapsed = localStorage.getItem(this.storageKey) == 1;
      }

      window.addEventListener('keyup', event => {
        if (event.code === this.toggleKeyCode) {
          this.toggleCollapsed();
        }
      });
    },
    data: () => {
      return {
        marginLeft: null,
        collapsed: false,
      };
    },
    computed: {
      sidebarStyle() {
        return {
          marginLeft: (this.collapsed ? this.marginLeft : 0) + 'px',
        };
      },
    },
    methods: {
      toggleCollapsed() {
        this.collapsed = !this.collapsed;

        if (this.persist) {
          localStorage.setItem(this.storageKey, this.collapsed ? 1 : 0);
        }
      },
    },
  };
</script>
