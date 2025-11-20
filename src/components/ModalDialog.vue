<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  highlights: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(['close']);

const handleMaskClick = (event) => {
  if (event.target === event.currentTarget) {
    emit('close');
  }
};

const closeModal = () => {
  emit('close');
};
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="props.show"
        class="modal-overlay"
        @click="handleMaskClick"
      >
        <div class="modal-card">
          <button
            type="button"
            class="close-button"
            aria-label="关闭弹窗"
            @click="closeModal"
          >
            ✕
          </button>
          <p class="modal-eyebrow">业务弹窗</p>
          <h3>{{ props.title }}</h3>
          <p class="modal-description">
            {{ props.description }}
          </p>
          <ul
            v-if="props.highlights.length"
            class="highlight-list"
          >
            <li
              v-for="item in props.highlights"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
          <div class="modal-actions">
            <button
              type="button"
              class="primary"
              @click="closeModal"
            >
              知道了
            </button>
            <button
              type="button"
              class="ghost"
              @click="closeModal"
            >
              返回
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.modal-card {
  width: min(520px, 90vw);
  background: #ffffff;
  border-radius: 24px;
  padding: 32px;
  position: relative;
  box-shadow: 0 30px 60px rgba(15, 23, 42, 0.25);
}

.close-button {
  position: absolute;
  top: 18px;
  right: 18px;
  border: none;
  background: #f1f5f9;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  color: #0f172a;
}

.modal-eyebrow {
  font-size: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #94a3b8;
  margin-bottom: 8px;
}

h3 {
  margin: 0 0 12px;
  font-size: 26px;
  color: #0f172a;
}

.modal-description {
  margin: 0;
  color: #475569;
  line-height: 1.6;
}

.highlight-list {
  list-style: none;
  padding: 0;
  margin: 24px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.highlight-list li {
  background: #eef2ff;
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 13px;
  color: #312e81;
  font-weight: 600;
}

.modal-actions {
  margin-top: 28px;
  display: flex;
  gap: 12px;
}

.modal-actions button {
  flex: 1;
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  cursor: pointer;
}

.modal-actions .primary {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: #fff;
  box-shadow: 0 12px 25px rgba(37, 99, 235, 0.3);
}

.modal-actions .ghost {
  background: #f8fafc;
  color: #0f172a;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

</style>
