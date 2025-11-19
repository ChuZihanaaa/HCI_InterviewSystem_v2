

<template>
  <div class="dashboard">
    <header class="header">
      <div class="user-info">
        <img src="/src/assets/avatar.png" alt="Avatar" class="avatar" />
        <span class="username">用户昵称</span>
      </div>
      <button class="logout-button">退出登录</button>
    </header>
    <div class="content">
      <aside class="sidebar">
        <ul>
          <li>
            <details>
              <summary>面试</summary>
              <ul>
                <li>
                  <details>
                    <summary>基础能力</summary>
                    <ul>
                      <li>专项A</li>
                      <li>专项B</li>
                      <li>专项C</li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>人机练习</summary>
                    <ul>
                      <li>1v1</li>
                      <li>多人讨论</li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>模拟面试</summary>
                    <ul>
                      <li>结构化面试</li>
                      <li>领导小组面试</li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li>笔试</li>
          <li>素质能力提升</li>
        </ul>
      </aside>
      <main class="main-content">
        <h1>欢迎来到XXX考试系统！</h1>
      </main>
    </div>
    <footer class="footer">
      <button>意见建议</button>
      <button>问题反馈</button>
      <button>联系方式：</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden; /* 防止滚动条出现 */
}

.dashboard {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 100%视口高度 */
  width: 100vw;  /* 100%视口宽度 */
  background-color: #66cccc;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #66cccc;
  flex-shrink: 0; /* 保持固定高度，不被压缩 */
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.username {
  margin-left: 10px;
}

.logout-button {
  background-color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
}

.content {
  display: flex;
  flex-grow: 1; /* 占满剩余空间 */
  width: 100%;
  overflow: auto; /* 如果内容过多，可以滚动 */
}

.sidebar {
  width: 200px;
  background-color: #e6e6fa;
  padding: 10px;
  flex-shrink: 0; /* 固定宽度 */
  overflow-y: auto; /* 侧边栏滚动 */
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar details summary {
  cursor: pointer;
  font-weight: bold;
}

.sidebar details[open] summary {
  margin-bottom: 5px;
}

.sidebar details ul {
  margin-left: 20px;
}

.main-content {
  flex-grow: 1; /* 占满剩余空间 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #66cccc;
  overflow: auto; /* 内容多时可以滚动 */
}

.footer {
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: #66cccc;
  flex-shrink: 0; /* 固定高度，不被压缩 */
}

.footer button {
  background-color: #333;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 0 5px;
}

</style>