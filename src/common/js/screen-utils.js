// src/common/js/screen-utils.js
import device from '@system.device';

/**
 * 屏幕适配工具类
 * 支持方形（Redmi Watch 5/6）和圆形（Xiaomi Watch S4）屏幕
 */
class ScreenUtils {
  constructor() {
    this._screenWidth = 0;
    this._screenHeight = 0;
    this._screenShape = 'rect'; // 'rect' or 'circle'
    this._safeArea = { top: 0, bottom: 0, left: 0, right: 0 };
    this._initialized = false;
  }

  /**
   * 初始化屏幕信息
   * @returns {Promise<void>}
   */
  async init() {
    if (this._initialized) return;

    return new Promise((resolve) => {
      device.getInfo({
        success: (data) => {
          this._screenWidth = data.screenWidth || 336;
          this._screenHeight = data.screenHeight || 400;
          this._screenShape = data.screenShape || 'rect';
          this._calculateSafeArea();
          this._initialized = true;
          resolve();
        },
        fail: () => {
          // 默认值：Band 9 Pro
          this._screenWidth = 336;
          this._screenHeight = 400;
          this._screenShape = 'rect';
          this._calculateSafeArea();
          this._initialized = true;
          resolve();
        }
      });
    });
  }

  /**
   * 计算安全区域（圆形屏幕需要更大的边距）
   */
  _calculateSafeArea() {
    if (this._screenShape === 'circle') {
      // 圆形屏幕：计算边缘安全区域
      // 圆的内接正方形边长 = 直径 * √2 / 2
      const radius = this._screenWidth / 2;
      const inscribedSquare = radius * Math.sqrt(2);
      const margin = (this._screenWidth - inscribedSquare) / 2;

      this._safeArea = {
        top: Math.ceil(margin * 1.2), // 顶部留更多空间
        bottom: Math.ceil(margin * 1.2),
        left: Math.ceil(margin),
        right: Math.ceil(margin)
      };
    } else {
      // 方形屏幕：仅处理圆角
      this._safeArea = { top: 0, bottom: 0, left: 0, right: 0 };
    }
  }

  /**
   * 获取屏幕宽度
   */
  get width() {
    return this._screenWidth;
  }

  /**
   * 获取屏幕高度
   */
  get height() {
    return this._screenHeight;
  }

  /**
   * 获取屏幕形状
   */
  get shape() {
    return this._screenShape;
  }

  /**
   * 是否为圆形屏幕
   */
  get isCircle() {
    return this._screenShape === 'circle';
  }

  /**
   * 获取安全区域
   */
  get safeArea() {
    return this._safeArea;
  }

  /**
   * 获取适配后的 padding 样式
   * @returns {object} 包含 padding 的样式对象
   */
  getSafePadding() {
    return {
      paddingTop: `${this._safeArea.top}px`,
      paddingBottom: `${this._safeArea.bottom}px`,
      paddingLeft: `${this._safeArea.left}px`,
      paddingRight: `${this._safeArea.right}px`
    };
  }

  /**
   * 获取适配后的 margin 样式
   * @returns {object} 包含 margin 的样式对象
   */
  getSafeMargin() {
    return {
      marginTop: `${this._safeArea.top}px`,
      marginBottom: `${this._safeArea.bottom}px`,
      marginLeft: `${this._safeArea.left}px`,
      marginRight: `${this._safeArea.right}px`
    };
  }

  /**
   * 根据屏幕宽度计算尺寸
   * @param {number} designPx - 设计稿尺寸（基于 336px 宽度）
   * @returns {number} 实际尺寸
   */
  scalePx(designPx) {
    return Math.round((designPx * this._screenWidth) / 336);
  }

  /**
   * 获取屏幕适配类名
   * @returns {string} 'screen-circle' 或 'screen-rect'
   */
  getScreenClass() {
    return this._screenShape === 'circle' ? 'screen-circle' : 'screen-rect';
  }
}

export default new ScreenUtils();
