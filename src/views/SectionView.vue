<script setup>
import { computed, ref } from 'vue';
import { sectionLabelMap } from '../constants/sections';
import ModalDialog from '../components/ModalDialog.vue';

const props = defineProps({
  sectionId: {
    type: String,
    required: true,
  },
});

const sectionContentMap = {
  interview: {
    badge: '面试',
    title: '面试全流程',
    description: '根据岗位画像智能生成面试流程、题本与评分表，让考生清晰掌握面试节奏。',
    actions: ['查看题库', '预约考官', '生成评分表'],
  },
  'basic-skills': {
    badge: '基础能力',
    title: '能力专项练习',
    description: '围绕表达、逻辑、应变等基础能力，提供循序渐进的训练路径。',
    actions: ['专项测评', '训练营', '错题回顾'],
  },
  'special-a': {
    badge: '专项A',
    title: '专项A 默认界面',
    description: '继续深挖专项A 的高频考点，自动推送练习任务与复盘要点。',
    actions: ['挑战任务', '知识点速记', '复盘模板'],
  },
  'special-b': {
    badge: '专项B',
    title: '专项B 默认界面',
    description: '专项B 训练计划已就绪，结合历年真题制定个性化方案。',
    actions: ['查看计划', '智能练习', '性能报告'],
  },
  'special-c': {
    badge: '专项C',
    title: '专项C 默认界面',
    description: '聚焦专项C 命题趋势，强化综合应用场景与评分标准。',
    actions: ['题目速练', '直播讲解', '同行对比'],
  },
  'human-machine': {
    badge: '人机练习',
    title: 'AI 人机对练',
    description: '模拟真实考场的人机交互体验，实时反馈得分维度与改进建议。',
    actions: ['进入考场', '调试设备', '查看引导'],
  },
  'one-vs-one': {
    badge: '1v1',
    title: '一对一训练营',
    description: '匹配资深考官进行 1v1 实战演练，记录对话与反馈。',
    actions: ['预约导师', '历史记录', '反馈建议'],
  },
  'group-discussion': {
    badge: '多人讨论',
    title: '多人讨论场景',
    description: '复刻无领导小组面试流程，提供实时角色扮演与打分体系。',
    actions: ['创建小组', '讨论脚本', '评分面板'],
  },
  mock: {
    badge: '模拟面试',
    title: '全真模拟面试',
    description: '多维度模拟真实面试环境，汇总考官反馈与打分。',
    actions: ['快速开场', '录像回放', '综合分析'],
  },
  structured: {
    badge: '结构化面试',
    title: '结构化面试默认界面',
    description: '提供 STAR 法框架示例与答题流程指引，帮助快速组织答案。',
    actions: ['题目示例', '答题模板', '表现评估'],
  },
  leadership: {
    badge: '领导小组面试',
    title: '领导小组面试默认界面',
    description: '涵盖角色分配、会议纪要与投票流程的完整解决方案。',
    actions: ['分配角色', '准备材料', '导出纪要'],
  },
  written: {
    badge: '笔试',
    title: '智能笔试中心',
    description: '自动匹配岗位对应笔试题型，提供限时练习与智能判题。',
    actions: ['立即练习', '题型分析', '成绩报告'],
  },
  quality: {
    badge: '素质能力提升',
    title: '职业素质成长',
    description: '聚焦表达、协同、抗压等综合素质，搭建进阶成长路径。',
    actions: ['素质体检', '成长计划', '导师跟进'],
  },
};

const sectionTitle = computed(
  () => sectionLabelMap[props.sectionId] || '默认界面',
);

const heroContent = computed(() => sectionContentMap[props.sectionId] ?? {
  badge: sectionTitle.value,
  title: `${sectionTitle.value} 默认界面`,
  description: `这是 ${sectionTitle.value} 的默认界面，你可以在此查看任务与学习资源。`,
  actions: ['进入任务', '查看报告', '分享反馈'],
});

const isModalOpen = ref(false);
const modalIntent = ref({
  type: 'detail',
  label: '查看详情',
});

const openModal = (type, label = '') => {
  modalIntent.value = {
    type,
    label,
  };
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const modalContent = computed(() => {
  const base = heroContent.value;
  if (modalIntent.value.type === 'action') {
    return {
      title: `${modalIntent.value.label} · ${base.badge}`,
      description: `该操作归属 ${base.title}，目前仅展示示例文案。后续可在此串联真实业务流程或跳转至相应页面。`,
      highlights: [
        `所属模块：${base.title}`,
        `操作类型：${modalIntent.value.label}`,
        '当前状态：仅展示示例，无实际写入',
      ],
    };
  }

  if (modalIntent.value.type === 'create') {
    return {
      title: `${base.title} · 新建任务`,
      description: `在正式环境中，此弹窗可用于提交 ${base.badge} 相关的任务配置。为便于演示，这里仅展示占位信息。`,
      highlights: [
        '任务模版：AI 自适应',
        '预计耗时：30 分钟',
        '协作角色：考生 / 导师',
      ],
    };
  }

  return {
    title: `${base.title} · 业务详情`,
    description: `${base.description} 当前展示为静态模板，后续可接入真实接口返回更详细的数据。`,
    highlights: base.actions,
  };
});
</script>

<template>
  <section class="section-view">
    <div class="hero-card">
      <p class="eyebrow">{{ heroContent.badge }}</p>
      <h1>{{ heroContent.title }}</h1>
      <p>
        {{ heroContent.description }}
      </p>
      <ul class="action-list">
        <li
          v-for="action in heroContent.actions"
          :key="action"
        >
          <button
            type="button"
            class="chip-button"
            @click="openModal('action', action)"
          >
            {{ action }}
          </button>
        </li>
      </ul>
      <div class="actions">
        <button
          type="button"
          @click="openModal('detail')"
        >
          查看详情
        </button>
        <button
          type="button"
          class="secondary"
          @click="openModal('create')"
        >
          新建任务
        </button>
      </div>
    </div>
    <div class="info-grid">
      <article class="info-card">
        <h2>推荐学习路径</h2>
        <p>结合岗位要求自动推荐的训练计划，覆盖核心能力点。</p>
      </article>
      <article class="info-card">
        <h2>系统提示</h2>
        <p>在这里同步系统通知、考场规则或平台公告。</p>
      </article>
    </div>
    <ModalDialog
      :show="isModalOpen"
      :title="modalContent.title"
      :description="modalContent.description"
      :highlights="modalContent.highlights"
      @close="closeModal"
    />
  </section>
</template>

<style scoped>
.section-view {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  box-sizing: border-box;
}

.hero-card {
  background: linear-gradient(135deg, #00c6ff 0%, #0072ff 100%);
  color: #fff;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 15px 30px rgba(0, 114, 255, 0.25);
}

.hero-card h1 {
  margin: 8px 0 16px;
  font-size: 32px;
}

.hero-card p {
  margin: 0;
  line-height: 1.6;
}

.action-list {
  list-style: none;
  padding: 0;
  margin: 18px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.action-list li {
  margin: 0;
}

.chip-button {
  background: rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  padding: 6px 18px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.chip-button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 12px;
  opacity: 0.8;
}

.actions {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.actions button {
  border: none;
  border-radius: 999px;
  padding: 12px 24px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.actions button:hover {
  opacity: 0.9;
}

.actions .secondary {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.info-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
}

.info-card h2 {
  margin: 0 0 8px;
  font-size: 18px;
}

.info-card p {
  margin: 0;
  color: #475569;
  line-height: 1.5;
}

@media (max-width: 640px) {
  .section-view {
    padding: 16px;
  }

  .hero-card {
    padding: 24px;
  }

  .hero-card h1 {
    font-size: 24px;
  }
}
</style>

