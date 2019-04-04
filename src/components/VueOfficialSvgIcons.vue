<template>
  <div class="icons">
    <IconBox
      width="16"
      height="16"
      icon-color="#f36"
      icon-name="facebook"
    >
      <Facebook />
    </IconBox>
    <IconBox
      icon-color="#f0987a"
      icon-name="twitter"
    >
      <Twitter />
    </IconBox>
    <IconBox
      width="48"
      height="48"
      icon-name="google plus"
    >
      <GooglePlus />
    </IconBox>
  </div>
</template> 
<script> 
import IconBox from './icons/IconBox'
import Facebook from './icons/Facebook'
import Twitter from './icons/Twitter'
import GooglePlus from './icons/GooglePlus'
export default {
  name: 'VueOfficialSvgIcons',
  components: {
    IconBox,
    Facebook,
    Twitter,
    GooglePlus
  }
}
</script>