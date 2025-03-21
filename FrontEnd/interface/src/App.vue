<template>
  <div :id="pageClass">
    <header class="app-header">

      <div class="menu-right">
        <router-link to="/login" class="sair-link" @click="logout">Sair</router-link>
      </div>
      <div class="menu-icon" @click="toggleMenu" v-if="!hideLinks">
        <i class="fas fa-bars"></i>
      </div>
    </header>

    <main class="app-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "App",
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    logout() {
      localStorage.removeItem("access_token");
      this.$router.push({ name: "Login" });
    },
  },
  setup() {
    const route = useRoute();
    const hideLinks = computed(() => route.meta.hideLinks);
    const pageClass = computed(() =>
      route.name === "Login" ? "app-login" : "app"
    );
    return { hideLinks, pageClass };
  },
  mounted() {
    document.title = "Sistema de Controle";
  },
};
</script>

<style scoped>

#app,
.app {
  font-family: 'Roboto', Arial, sans-serif;
  color: #333;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #ffffff, #ffffff);
  padding: 0 10px;
}

.app-header {
  position: relative;
  background: rgba(247, 245, 245, 0.904);
  backdrop-filter: blur(10px);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-height: 70px;
  border-radius: 10px;
  transition: all 0.3s ease;
  width: 100%;
}

.menu-left {
  display: none;
}
.menu-left .home-link {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.959);
  padding: 8px 15px;
  border-radius: 10px;
  transition: background 0.3s;
  order: 0;
  align-self: flex-start;
}
.menu-left .home-link:hover {
  background: rgba(0, 0, 0, 0.5);
}

.menu-right .sair-link {
  color: #000000;
  text-decoration: none;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.918);
  padding: 8px 15px;
  border-radius: 10px;
  transition: background 0.3s;
  order: 2;
  margin-top: 10px;
}
.menu-right .sair-link:hover {
  background: rgb(209, 181, 181);
}

.navigation {
  display: flex;
  gap: 1rem;
}
.navigation a {
  color: #000;
  text-decoration: none;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 10px;
}
.navigation a:hover {
  background: rgba(255, 255, 255, 0.973);
}

.menu-icon {
  display: none;
  cursor: pointer;
  font-size: 2rem;
  color: #fff;
}

.app-content {
  flex: 1;
  padding: 20px;
  background: rgb(255, 255, 255);
  backdrop-filter: blur(15px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  width: 95%;
  max-width: 1200px;
  border-radius: 10px;
  animation: fadeIn 0.5s ease;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .menu-left {
    display: block;
  }
  .app-header {
    flex-direction: column;
    padding: 1rem;
  }
  .menu-right {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
  .navigation {
    display: none;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.877);
    backdrop-filter: blur(10px);
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    z-index: 999;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    transition: all 0.3s ease;
  }
  .navigation.show {
    display: flex;
  }
  .menu-icon {
    display: block;
  }
}

@media (max-width: 480px) {
  .app-header {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
  .menu-right .sair-link {
    margin-top: 20px;
  }
  .navigation {
    top: 60px;
    width: 100%;
  }
  .app-content {
    padding: 15px;
    width: 100%;
  }
}
</style>
