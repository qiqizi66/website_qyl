<template>
  <div class="page">
    <div class="header">
      <div class="header_top header__wrapper">
        <div class="header_one">
          <img class="logoimg" src="/assets/logo.png" alt="" />
          <div class="logo_name">Cronos<br />Nederland</div>
        </div>
        <div class="header_one">
          <p @click="wedoedClick('#bannered')">首页</p>
          <p @click="wedoedClick('#company_profileed')">企业介绍</p>
          <p @click="wedoedClick('#product_descriptioned')">产品介绍</p>
          <p @click="wedoedClick('#industry_introductioned')">行业介绍</p>
        </div>
        <div class="header_tel_button" @click="wedoedClick('#call_meed')">
          <img class="telimg" src="/assets/tel.png" alt="" />
          <p class="tel_name">联系我们</p>
        </div>
        <div class="menu_m" @click="menuopen">
          <img class="menu_mtrue" src="/assets/menu_true.png" alt="" />
        </div>
      </div>
    </div>
    <div id="bannered" class="banner">
      <img class="banner_img" src="/assets/banner.png" alt="" />
      <img class="banner_imgm" src="/assets/banner_m.png" alt="" />
      <!-- <div class="banner_all">
        <p class="banner_title">北京明信益达科技有限公司</p>
        <p class="banner_text">专注心理学服务</p>
        <div class="banner_btn">选择服务</div>
      </div> -->
    </div>
    <div id="psychological_tendencyed" class="psychological_tendency">
      <p class="psychological_tendency_title">
        <span>21种常见心理倾向</span>
      </p>
      <div class="psychological_tendency_box">
        <p class="psychological_tendency_p">喜爱厌恶倾向</p>
        <p class="psychological_tendency_p">避免怀疑倾向</p>
        <p class="psychological_tendency_p">羡慕妒忌倾向</p>
        <p class="psychological_tendency_p">奖惩超级反应倾向</p>
        <p class="psychological_tendency_p">回馈倾向</p>
        <p class="psychological_tendency_p">公平倾向</p>
        <p class="psychological_tendency_p">简单联想倾向</p>
      </div>
    </div>
    <div id="company_profileed" class="company_profile">
      <img
        class="company_profile_img"
        src="/assets/company_profile_img.png"
        alt=""
      />
      <div class="company_profile_box">
        <p class="company_profile_title">北京明信益达公司简介</p>
        <p class="company_profile_titlet">只提供高质量的服务</p>
        <p class="company_profile_text">
          公司经过快速的发展，建立了心理行为能力大数据服务体系和基于移动互联网线上线下相结合的心理健康服务体系，是能够同时提供心理行为能力综合解决方案提供商。 多年来，公司专注于心理行为能力学在各行各业的应用研究。公司通过与各行业权威机构多年持续性的合作，架构出中国人心理行为能力大数据库；结合中国人的心理行为能力大数据与各行业职业行为要求，构建出职业群体心理能力指标体系，形成行业应用模型；依托应用模型，不断完善科学有效、体系化、的心理行为能力应用产品与服务，并沉淀出具有不同针对性的行业工作整体解决方案。
        </p>
        <div class="company_profile_btn">联系我们</div>
        <div class="company_profile_textm">
          公司经过快速的发展，建立了心理行为能力大数据服务体系和基于移动互联网线上线下相结合的心理健康服务体系，是能够同时提供心理行为能力综合解决方案提供商。
        </div>
      </div>
      <div class="company_profile_box_mb">
        <p>
          多年来，公司专注于心理行为能力学在各行各业的应用研究。公司通过与各行业权威机构多年持续性的合作，架构出中国人心理行为能力大数据库；结合中国人的心理行为能力大数据与各行业职业行为要求，构建出职业群体心理能力指标体系，形成行业应用模型；依托应用模型，不断完善科学有效、体系化、的心理行为能力应用产品与服务，并沉淀出具有不同针对性的行业工作整体解决方案。
        </p>
        <div>联系我们</div>
      </div>
    </div>
    <div id="product_descriptioned" class="product_description">
      <p class="product_description_title">明信益达产品介绍</p>
      <p class="product_description_text">
        针对 情绪压力/亲密关系/性心理/亲子教育/个人成长 等不同领域提供个人化专业定制服务
      </p>
      <div class="product_description_box">
        <div class="product_description_box_ch">
          <div>
            <p>
              <img
                class="product_description_one"
                src="/assets/one.png"
                alt=""
              />
            </p>
            <p class="product_description_onetit">全员心检卡</p>
            <p class="product_description_onetex">
              为员工提供身心健康筛查，发现潜<br />在风险，增强企业的健康风险控制<br />能力并降低医疗支出
            </p>
            <p class="product_description_onetexm">
              为员工提供身心健康筛查，发现潜在风险，增强企业的健康风险控制能力并降低医疗支出
            </p>
          </div>
        </div>
        <div class="product_description_box_ch">
          <div>
            <p>
              <img
                class="product_description_one"
                src="/assets/two.png"
                alt=""
              />
            </p>
            <p class="product_description_onetit">主题讲座</p>
            <p class="product_description_onetex">
              资深行业专家针对企业员工和管理<br />者的心理特点与需求，从心理健<br />康、危机应对、......等角度入手，<br />结合大量实际案例，深刻剖析讲<br />解，并给出应对策略。
            </p>
            <p class="product_description_onetexm">
              资深行业专家针对企业员工和管理者的心理特点与需求，从心理健康、危机应对、......等角度入手，结合大量实际案例，深刻剖析讲解，并给出应对策略。
            </p>
          </div>
        </div>
        <div class="product_description_box_ch">
          <div>
            <p>
              <img
                class="product_description_one"
                src="/assets/three.png"
                alt=""
              />
            </p>
            <p class="product_description_onetit">组织心理健康移动管理平台</p>
            <p class="product_description_onetex">
              提供优质咨询服务，帮助员工及时<br />调整心态，维持高效工作，提升公<br />司效能 减少因员工自然流失造成<br />的企业损失
            </p>
            <p class="product_description_onetexm">
              提供优质咨询服务，帮助员工及时调整心态，维持高效工作，提升公司效能 减少因员工自然流失造成的企业损失
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="industry_introductioned" class="industry_introduction">
      <p class="industry_introduction_title">行业介绍</p>
      <p class="industry_introduction_text">
        伴随着社会不断发展，产业形势正在发生剧烈的变化
      </p>
      <div class="swipercus">
        <!-- <div class="mask"></div> -->
        <div class="swiper-container" id="swiperCus">
          <div class="swiper-wrapper" ref="swiperfea">
            <div class="swiper-slide">
              <div style="width: 100%; height: 100%">
                <div class="industry_introduction_box">
                  <img
                    class="industry_introduction_img"
                    src="/assets/banner_o.png"
                    alt=""
                  />
                  <div class="industry_introduction_you">
                    <p class="industry_introduction_you_title">社会层面</p>
                    <p
                      class="industry_introduction_you_text industry_introduction_you_texttop"
                    >
                      社会经济的进步，使得心理事件愈发引起公共关注
                      心理事件曝光率激增：随着社会认知提升，
                    </p>
                    <p class="industry_introduction_you_text">
                      公众已意识到公众安全事件多起因于重大心理疾病。
                      组织心理疏导和预防压力陡增：受舆论监督、员工意识提高，企事业单位对于心理问题的疏导和预防工作压力倍增。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div style="width: 100%; height: 100%">
                <div class="industry_introduction_box">
                  <img
                    class="industry_introduction_img"
                    src="/assets/banner_o.png"
                    alt=""
                  />
                  <div class="industry_introduction_you">
                    <p class="industry_introduction_you_title">社会层面</p>
                    <p
                      class="industry_introduction_you_text industry_introduction_you_texttop"
                    >
                      社会经济的进步，使得心理事件愈发引起公共关注
                      心理事件曝光率激增：随着社会认知提升，
                    </p>
                    <p class="industry_introduction_you_text">
                      公众已意识到公众安全事件多起因于重大心理疾病。
                      组织心理疏导和预防压力陡增：受舆论监督、员工意识提高，企事业单位对于心理问题的疏导和预防工作压力倍增。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div style="width: 100%; height: 100%">
                <div class="industry_introduction_box">
                  <img
                    class="industry_introduction_img"
                    src="/assets/banner_o.png"
                    alt=""
                  />
                  <div class="industry_introduction_you">
                    <p class="industry_introduction_you_title">社会层面</p>
                    <p
                      class="industry_introduction_you_text industry_introduction_you_texttop"
                    >
                      社会经济的进步，使得心理事件愈发引起公共关注
                      心理事件曝光率激增：随着社会认知提升，
                    </p>
                    <p class="industry_introduction_you_text">
                      公众已意识到公众安全事件多起因于重大心理疾病。
                      组织心理疏导和预防压力陡增：受舆论监督、员工意识提高，企事业单位对于心理问题的疏导和预防工作压力倍增。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev">
            <img
              class="swiper-button-prevone"
              src="/assets/left.png"
              alt=""
              srcset=""
            />
            <img
              class="swiper-button-prevtwo"
              src="/assets/left_true.png"
              alt=""
              srcset=""
            />
          </div>
          <div class="swiper-button-next">
            <img
              class="swiper-button-prevone"
              src="/assets/right.png"
              alt=""
              srcset=""
            />
            <img
              class="swiper-button-prevtwo"
              src="/assets/right_true.png"
              alt=""
              srcset=""
            />
          </div>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
      </div>
    </div>
    <div id="call_meed" class="call_me">
      <img class="call_meimg" src="/assets/callme.png" alt="" />
      <div class="call_me_box">
        <p class="call_me_title">联系我们</p>
        <p class="call_me_text">有什么详细信息与合作关系请联系我们！</p>
        <p class="call_me_inputtext">你的姓名*</p>
        <input
          class="call_me_input"
          type="text"
          v-model="nameid"
          placeholder="请输入您的姓名*"
          name="name"
        />
        <p class="call_me_inputtext">您的邮箱*</p>
        <input
          class="call_me_input"
          type="text"
          v-model="emailid"
          placeholder="请输入您的邮箱*"
          name="name"
        />
        <p class="call_me_inputtext">您对我们有什么意见与建议？</p>
        <textarea
          class="call_me_input call_me_inputbix"
          type="text"
          v-model="opinion"
          placeholder="请输入您的意见与建议！"
          name="name"
        ></textarea>
        <div class="call_me_btn">提交</div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom_one">
        <img class="logoimg" src="/assets/logo.png" alt="" />
        <p class="logo_name">Cronos<br />Nederland</p>
      </div>
    </div>
    <!-- menuBox -->
    <div class="menuBox" v-show="menu_box">
      <img @click="menuclose" class="close" src="/assets/menu_cha.png" alt="" />
      <div class="menuBox_onebox">
        <div class="menuBox_one">
          <img class="logoimg" src="/assets/logo.png" alt="" />
          <p class="logo_name">Cronos<br />Nederland</p>
        </div>
      </div>
      <div class="menuBox_list">
        <p @click="wedoedClick('#bannered')">首页</p>
        <p @click="wedoedClick('#company_profileed')">企业介绍</p>
        <p @click="wedoedClick('#product_descriptioned')">产品介绍</p>
        <p @click="wedoedClick('#industry_introductioned')">行业介绍</p>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import Swiper from "swiper";
export default {
  name: "catgpt",
  data() {
    return {
      nameid: "",
      emailid: "",
      opinion: "",
      menu_box: false,
    };
  },
  mounted() {
    this.customers();
    this.showhide_header();
    this.color_header();
  },
  methods: {
    menuclose() {
      this.menu_box = false;
    },
    menuopen() {
      this.menu_box = true;
    },
    color_header() {
      window.addEventListener(
        "scroll",
        function () {
          var navbar = document.querySelector(".header__wrapper");
          var scrollPosition =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;
          var number = 0;
          if (window.screen.width < 1024) {
            number = 50;
          } else {
            number = 200;
          }
          if (scrollPosition <= number) {
            navbar.classList = "header_top header__wrapper acvi";
          } else {
            navbar.classList = "header_top header__wrapper erro";
          }
        },
        true
      );
    },
    showhide_header() {
      var header = document.querySelector(".header");
      console.log(header);
      var prevScrollPos = window.pageYOffset;
      window.addEventListener(
        "scroll",
        function () {
          var currentScrollPos =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;
          if (prevScrollPos > currentScrollPos) {
            header.classList.remove("headeractive");
            header.classList.add("headernone");
          } else {
            header.classList.add("headeractive");
            header.classList.remove("headernone");
          }
          prevScrollPos = currentScrollPos;
        },
        true
      );
    },
    customers() {
      var mySwiper = new Swiper("#swiperCus", {
        //配置分页器内容
        direction: "horizontal",
        mousewheel: false,
        centeredSlides: true,
        slidesPerView: 1,
        allowTouchMove: true,
        observer: true,
        observeParents: true,
        spaceBetween: 0,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }, //这样写小圆点就有了
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        // autoplay: false,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      mySwiper.el.onmouseover = function () {
        mySwiper.autoplay.stop();
      };
      mySwiper.el.onmouseout = function () {
        mySwiper.autoplay.start();
      };
    },
    wedoedClick(e) {
      this.menu_box = false;
      document.querySelector(e).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    },
  },
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
<style src="./index.mobile.scss" lang="scss" scoped></style>