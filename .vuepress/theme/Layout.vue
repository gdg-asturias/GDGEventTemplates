<template>
  <div>
    <TheHeader v-if="$page.frontmatter.showHeader"/>
    <AboutEvent v-if="$page.frontmatter.showAbout"/>
    <Organizers v-if="$page.frontmatter.showOrganizers"/>
    <BuyTickets v-if="$page.frontmatter.showBuyTickets"/>
    <Schedule v-if="$page.frontmatter.showSchedule"/>
    <Speakers v-if="$page.frontmatter.showSpeakers"/>
    <Sponsors v-if="$page.frontmatter.showSponsors"/>
    <Travel v-if="$page.frontmatter.showTravel"/>
    <Faq v-if="$page.frontmatter.showFaq"/>
    <EventLocation v-if="$page.frontmatter.showEventLocation"/>
    <Newsletter v-if="$page.frontmatter.showNewsletter"/>
    <TheFooter v-if="$page.frontmatter.showFooter"/>
  </div>
</template>

<script>
import Vue from 'vue'

import TheHeader from './TheHeader.vue'
import AboutEvent from './AboutEvent.vue'
import Newsletter from './Newsletter.vue'
import Speakers from './Speakers.vue'
import Sponsors from './sponsors/Sponsors.vue'
import Faq from './Faq.vue'
import Travel from './Travel.vue'
import EventLocation from './EventLocation.vue'
import Organizers from './Organizers.vue'
import Schedule from './Schedule.vue'
import BuyTickets from './BuyTickets.vue'
import TheFooter from './TheFooter.vue'

import { pathToComponentName } from '@app/util'
import { resolveSidebarItems } from './util'

export default {
  components: { 
    TheHeader,
    AboutEvent,
    Speakers,
    Sponsors,
    Faq,
    Travel,
    EventLocation,
    Organizers,
    Schedule,
    BuyTickets,
    Newsletter,
    TheFooter,
  },

  created () {
    if (this.$ssrContext) {
      this.$ssrContext.title = this.$title
      this.$ssrContext.lang = this.$lang
      this.$ssrContext.description = this.$page.description || this.$description
    }

  },

  async mounted () {
    const mailScript = document.createElement('script')
    mailScript.id = 'mcjs'
    mailScript.innerHTML = '!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/f10809b78bdc8e15b8261a06d/2d52c7a4d17a97b8d45182c86.js");'
    document.body.appendChild(mailScript)
  },

  beforeDestroy () {
    updateMetaTags(null, this.currentMetaTags)
  }
}

function updateMetaTags (meta, current) {
  if (current) {
    current.forEach(c => {
      document.head.removeChild(c)
    })
  }
  if (meta) {
    return meta.map(m => {
      const tag = document.createElement('meta')
      Object.keys(m).forEach(key => {
        tag.setAttribute(key, m[key])
      })
      document.head.appendChild(tag)
      return tag
    })
  }
}
</script>

<style src="./styles/bootstrap.min.css"></style>
<style src="./styles/icons.css"></style>

<style lang="scss">
@import './fonts/GoogleSans-Bold.ttf';
@import './fonts/GoogleSans-BoldItalic.ttf';
@import './fonts/GoogleSans-Italic.ttf';
@import './fonts/GoogleSans-Medium.ttf';
@import './fonts/GoogleSans-MediumItalic.ttf';
@import './fonts/GoogleSans-Regular.ttf';
@import "./styles/vars.scss";

#app{
  font-family: 'Google Sans', sans-serif;
  color: black;
}

.section__title {
  font-size: 40px;
  text-transform: uppercase;
  line-height: 1em;
  margin: 0 0 30px 0;
  @media (min-width: map-get($grid-breakpoints, sm)){
    font-size: 50px;
  }
  @media (min-width: map-get($grid-breakpoints, md)){
    font-size: 60px;
  }
}
.section__subtitle {
  color: $azul;
  font-size: 20px;
  text-transform: uppercase;
  line-height: 1em;
  margin: 0 0 30px 0;
  @media (min-width: map-get($grid-breakpoints, sm)){
    font-size: 30px;
  }
  @media (min-width: map-get($grid-breakpoints, md)){
    font-size: 40px;
  }
}

.section__title--white {
  @extend .section__title;
  color: white;
}

.section__paragraph {
  font-size: 16px;
  line-height: 25px;
  @media (min-width: map-get($grid-breakpoints, sm)){
    font-size: 18px;
    line-height: 30px;
  }
}

.section__rrss-item {
  color: #4D4D4D;
  margin: 10px;
  font-size: 20px;
  &:hover {
    color: #4385F5;
    text-decoration: none;
  }
}

.section__rrss-item--white {
  @extend .section__rrss-item;
    color: white;
}
</style>
