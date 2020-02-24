// pages/home/home.js

import {config} from "../../config/config";
import {Theme} from "../../models/theme";
import {Banner} from "../../models/banner";
import {Category} from "../../models/category";
import {Activity} from "../../models/activity";
import {SpuPaging} from "../../models/spu-paging";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    themeA: null,
    themeE: null,
    themeF: null,
    themeESpu: null,
    bannerB: null,
    grid: [],
    activityD: null,
    themeESpuList: null,
    bannerG: null,
    themeH: null,
    spuPaging: null,
    loadingType: 'loading'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad (options) {
    this.initAllData()
    this.initBottomSpuList()
  },

  async initBottomSpuList() {
    const paging = SpuPaging.getLatestPaging()
    this.data.spuPaging = paging
    const data = await paging.getMoreData()
    if (!data) return
    //累加数据
    wx.lin.renderWaterFlow(data.items)
  },



  async initAllData() {
    //find, filter, map, some, reduce
    const theme = new Theme();
    await theme.getThemes();
    const themeA = theme.getHomeLocationA()
    const themeE = theme.getHomeLocationE()
    const themeF = theme.getHomeLocationF()
    let themeESpu = []
    if (themeE.online) {
      const data = await Theme.getHomeLocationESpu()
      if (data) {
        themeESpu = data.spu_list.slice(0, 8)
      }
    }

    //保存数据，类的对象 本身就具有保存数据的功能
    //类保存数据，类不能保存状态
    //类的对象 既可以保存数据，也能保存状态

    //原则，保证调用过程是简单的

    const bannerB = await Banner.getHomeLocationB()
    const grid = await Category.getHomeLocationC()
    const activityD = await Activity.getHomeLocationD()

    const bannerG = await Banner.getHomeLocationG()
    const themeH = theme.getHomeLocationH()

    this.setData({
      themeA,
      bannerB,
      grid,
      activityD,
      themeE,
      themeF,
      themeESpu,
      bannerG,
      themeH
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  async onReachBottom() {

    const data = await this.data.spuPaging.getMoreData()
    if (!data) return

    wx.lin.renderWaterFlow(data.items)

    console.log('data', data);

    if (!data.moreData) {
      console.log('123123123');
      this.setData({
        loadingType: 'end'
      })
    }

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})