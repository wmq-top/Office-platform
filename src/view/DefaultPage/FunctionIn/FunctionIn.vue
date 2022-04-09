<template>
  <div id="functionIn">
    <div class="defaultPage-router-content">
      <div class="defaultPage-Title">{{functitle}}</div>
      <div class="defaultPage-FuncCard">
        <div
          v-for="(item, index) in funclist"
          :key="index"
          class="func-list"
          :class="'FuncCard-color' + index"
        >
          <router-link :to="item.href">
            <div class="router-content">
              <div class="card-title" :class="EnClass ? 'Encard-title' : ''">
                {{ item.title }}
              </div>
              <div
                class="card-mission"
                :class="EnClass ? 'Encard-mission' : ''"
              >
                {{ item.mission }}
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="defaultPage-ExtendCard">
        <div
          v-for="(item, index) in extendList"
          :key="index"
          class="func-list"
          :class="'ExtendCard-color' + index"
        >
          <router-link :to="item.href">
            <div class="router-content">
              <div class="card-title" :class="EnClass ? 'Encard-title' : ''">{{ item.title }}</div>
              <div class="card-mission" :class="EnClass ? 'Encard-mission' : ''">{{ item.mission }}</div>
              <div class="tips">{{ upcoming }}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
        ...mapGetters('publicState', ['Language', 'skinMode','SlogenTitle']),

    functitle() {
      return this.$t('com.FuncIntroduc', this.Language)
    },
    upcoming() {
      return this.$t('com.UpcomingSupport', this.Language)
    },
    funclist() {
      return [
        {
          title: this.$t("com.ExperienceSharing", this.Language),
          mission: this.$t("tip.ExperienceSharing", this.Language),
          href: "/experience",
        },
        {
          title: this.$t("com.NewEmployeeQ&A", this.Language),
          mission: this.$t("tip.NewEmployeeQ&A", this.Language),
          href: "/Q&A",
        },
        {
          title: this.$t("com.TeamSpecificAutomaticUrging", this.Language),
          mission: this.$t("tip.TeamSpecificAutomaticUrging", this.Language),
          href: "/teamurging",
        },
      ];
    },
    extendList() {
      return [
        {
          title: this.$t("com.TechnicalExchangeForum", this.Language),
          mission: this.$t("tip.TechnicalExchangeForum", this.Language),
          href: "/forum",
        },
        {
          title: this.$t("com.TeamMeeting", this.Language),
          mission: this.$t("tip.TeamMeeting", this.Language),
          href: "/meeting",
        },
        {
          title: this.$t("com.OnlineCoding", this.Language),
          mission: this.$t("tip.OnlineCoding", this.Language),
          href: "/onlinecoding",
        },
      ];
    },
    EnClass() {
      return this.Language === "English";
    },
  },
};
</script>
