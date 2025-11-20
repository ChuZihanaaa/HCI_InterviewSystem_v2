

<script setup>
import { computed } from 'vue';
import { RouterView, useRoute, useRouter } from 'vue-router';
import { sectionTree } from '../constants/sections';

const router = useRouter();
const route = useRoute();

const activeSectionId = computed(() => route.params.sectionId);

const goToSection = (sectionId) => {
  router.push(`/section/${sectionId}`);
};

const isActive = (sectionId) => activeSectionId.value === sectionId;
</script>

<template>
  <div class="dashboard">
    <header class="header">
      <div class="user-info">
        <img src="/src/assets/avatar.png" alt="Avatar" class="avatar" />
        <div class="user-meta">
          <span class="username">用户昵称</span>
          <small class="user-role">高级考生 · 今日已完成 0 个计划</small>
        </div>
      </div>
      <div class="header-actions">
        <button type="button" class="outline-btn">学习轨迹</button>
        <button type="button" class="logout-button">退出登录</button>
      </div>
    </header>
    <div class="content">
      <aside class="sidebar">
        <h2 class="sidebar-title">功能导航</h2>
        <nav class="nav-tree">
          <ul class="nav-list">
            <li
              v-for="section in sectionTree"
              :key="section.id"
            >
              <button
                type="button"
                class="nav-button"
                :class="{ active: isActive(section.id) }"
                @click="goToSection(section.id)"
              >
                {{ section.label }}
              </button>
              <ul
                v-if="section.children"
                class="nav-sub-list"
              >
                <li
                  v-for="child in section.children"
                  :key="child.id"
                >
                  <button
                    type="button"
                    class="nav-button sub"
                    :class="{ active: isActive(child.id) }"
                    @click="goToSection(child.id)"
                  >
                    {{ child.label }}
                  </button>
                  <ul
                    v-if="child.children"
                    class="nav-sub-list nested"
                  >
                    <li
                      v-for="leaf in child.children"
                      :key="leaf.id"
                    >
                      <button
                        type="button"
                        class="nav-button sub nested"
                        :class="{ active: isActive(leaf.id) }"
                        @click="goToSection(leaf.id)"
                      >
                        {{ leaf.label }}
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <main class="main-content">
        <RouterView />
      </main>
    </div>
    <footer class="footer">
      <button type="button">意见建议</button>
      <button type="button">问题反馈</button>
      <button type="button">联系方式</button>
    </footer>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f6ff 0%, #d8ecff 50%, #fef6f0 100%);
  color: #1f2d3d;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px;
  background: transparent;
}

.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 10px 20px rgba(31, 45, 61, 0.1);
}

.username {
  font-size: 16px;
  font-weight: 600;
  color: #0f172a;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-meta {
  display: flex;
  flex-direction: column;
}

.user-role {
  color: #64748b;
  margin-top: 4px;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.outline-btn {
  border: 1px solid #94a3b8;
  background: rgba(255, 255, 255, 0.6);
  color: #0f172a;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 500;
}

.logout-button {
  background-color: #111827;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 600;
  box-shadow: 0 12px 24px rgba(17, 24, 39, 0.2);
}

.content {
  display: flex;
  flex-grow: 1;
  width: 100%;
  gap: 24px;
  padding: 0 40px 40px;
  box-sizing: border-box;
}

.sidebar {
  width: 320px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 15px 45px rgba(15, 23, 42, 0.08);
  flex-shrink: 0;
  overflow-y: auto;
  backdrop-filter: blur(12px);
}

.sidebar-title {
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
}

.nav-list,
.nav-sub-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-sub-list {
  margin-left: 16px;
  padding-left: 12px;
  border-left: 1px dashed rgba(148, 163, 184, 0.4);
}

.nav-sub-list.nested {
  margin-left: 24px;
}

.nav-button {
  width: 100%;
  text-align: left;
  padding: 10px 14px;
  margin-bottom: 6px;
  background: transparent;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
}

.nav-button.sub {
  font-size: 13px;
  color: #334155;
}

.nav-button.sub.nested {
  font-size: 12px;
  color: #475569;
}

.nav-button:hover {
  background: rgba(14, 165, 233, 0.15);
  color: #0369a1;
}

.nav-button.active {
  background: #0ea5e9;
  color: #fff;
  box-shadow: 0 12px 24px rgba(14, 165, 233, 0.35);
}

.main-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background: transparent;
  overflow-y: auto;
}

.footer {
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 20px 0 32px;
  background: transparent;
  flex-shrink: 0;
}

.footer button {
  background-color: rgba(15, 23, 42, 0.9);
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 500;
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.2);
  cursor: pointer;
}

@media (max-width: 960px) {
  .content {
    flex-direction: column;
    padding: 0 20px 20px;
  }

  .sidebar {
    width: 100%;
  }
}
</style>