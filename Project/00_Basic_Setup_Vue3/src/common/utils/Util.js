// import Vue from "vue";
import store from '@/store'
import ConstCode from '../constants/ConstCode'

class Util {
  constructor() {
    this.store = store
    this.isSafari = this.isSafari()
  }

  isEmpty(value) {
    return (
      value === '' ||
      value === null ||
      value === undefined ||
      (value != null && typeof value === 'object' && !Object.keys(value).length)
    )
  }
  /**
   * 아이디 정규식 (땅땅기준)
   * @param value
   * @returns {boolean}
   */
  isIdValid(value) {
    if (this.isEmpty(value)) return false
    const regExp1 = /[0-9]/
    const regExp2 = /[a-zA-Z]/
    if (
      !regExp1.test(value) ||
      !regExp2.test(value) ||
      value.length < 6 ||
      value.length > 12
    ) {
      return false
    }
    return true
  }

  /**
   * 비밀번호 정규식
   * 영문/숫자/특수문자 조합 8자리 이상
   * @param value
   * @returns {boolean}
   */
  isPasswordValid(value) {
    if (this.isEmpty(value)) return false
    const regExp1 = /[0-9]/
    const regExp2 = /[a-zA-Z]/
    // eslint-disable-next-line no-useless-escape
    const regExp3 = /['"~․!@#$%^&*()_\-+=\[\]\[\]|;:‘“<>,.?\\/{}]/
    if (
      !regExp1.test(value) ||
      !regExp2.test(value) ||
      !regExp3.test(value) ||
      value.length < 8 ||
      value.length > 50
    ) {
      return false
    }
    return true
  }

  /**
   * 연속된 비밀번호 사용인지 여부 판단
   * @param value
   * @returns {boolean}
   */
  isContinueousVaild(value) {
    let userPwPassed = true
    let SamePass0 = 0 // 동일문자 카운트
    let SamePass1 = 0 // 연속성(+) 카운드
    let SamePass2 = 0 // 연속성(-) 카운드
    for (let i = 0; i < value.length; i++) {
      let chrPass0
      let chrPass1
      let chrPass2
      if (i >= 2) {
        chrPass0 = value.charCodeAt(i - 2)
        chrPass1 = value.charCodeAt(i - 1)
        chrPass2 = value.charCodeAt(i)
        // 동일문자 카운트
        if (chrPass0 === chrPass1 && chrPass1 === chrPass2) {
          SamePass0++
        } else {
          SamePass0 = 0
        }
        // 연속성(+) 카운드
        if (chrPass0 - chrPass1 === 1 && chrPass1 - chrPass2 === 1) {
          SamePass1++
        } else {
          SamePass1 = 0
        }
        // 연속성(-) 카운드
        if (chrPass0 - chrPass1 === -1 && chrPass1 - chrPass2 === -1) {
          SamePass2++
        } else {
          SamePass2 = 0
        }
      }

      if (SamePass0 > 0) {
        userPwPassed = false
      }
      if (SamePass1 > 0 || SamePass2 > 0) {
        alert('영문, 숫자는 3자 이상 연속으로 입력할 수 없습니다.')
        return false
      }
      if (!userPwPassed) {
        alert('동일 문자를 3자 이상 연속으로 입력할 수 없습니다.')
        return false
      }
    }
    return true
  }

  /**
   * 휴대폰 번호 정규식
   *  - 01012341234 형식 체크
   * @class Util
   */
  isPhoneValid(value) {
    if (this.isEmpty(value)) return false
    let regExp = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/
    return regExp.test(value)
  }

  /**
   * 전화번호 번호 정규식
   * @class Util
   */
  isTelValid(value) {
    if (this.isEmpty(value)) return false
    let regExp = /^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/
    return regExp.test(value)
  }
  /**
   * 핸드폰 하이픈(-) 포맷방식 출력 (type : 0일경우, 가운데 자리 **** 표시)
   * @param num
   * @param type
   * @returns {*|string}
   */
  getPhoneFormat(num, type = 1) {
    let formatNum = ''
    try {
      if (num.length === 11) {
        if (type === 0) {
          formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-****-$3')
        } else {
          formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
        }
      } else if (num.length === 8) {
        formatNum = num.replace(/(\d{4})(\d{4})/, '$1-$2')
      } else {
        if (num.indexOf('02') === 0) {
          if (num.length === 10) {
            if (type === 0) {
              formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-****-$3')
            } else {
              formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3')
            }
          } else {
            if (type === 0) {
              formatNum = num.replace(/(\d{2})(\d{3})(\d{4})/, '$1-****-$3')
            } else {
              formatNum = num.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3')
            }
          }
        } else {
          if (num.length === 10) {
            if (type === 0) {
              formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-***-$3')
            } else {
              formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
            }
          } else {
            if (type === 0) {
              formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-***-$3')
            } else {
              formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
            }
          }
        }
      }
    } catch (e) {
      formatNum = num
    }
    return formatNum
  }
  /**
   * 생년월일 번호 정규식
   *  - YYMMDD 형식 체크
   * @class Util
   */
  isBirthValid(value) {
    if (this.isEmpty(value)) return false
    let regExp = /^(?:[0-9]{4}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))$/
    return regExp.test(value)
  }
  /**
   * 이메일 정규식
   *  - test123@test.com
   * @class Util
   */
  isEmailValid(value) {
    if (this.isEmpty(value)) return false
    // let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    /*
      세종 Email validation
     */
    let regExp = /^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    return regExp.test(value)
  }

  /**
   * 만나이 계산
   *  - YYYYMMDD 형식 체크
   * @class Util
   */
  getBirthAge(birth) {
    let today = new Date()
    let age = today.getFullYear() - birth.getFullYear()
    birth.setFullYear(today.getFullYear())
    if (today < birth) age--
    return age
  }

  /**
   * 자리 뒤에 문자들 마스킹 처리
   * @param str
   * @param index
   * @returns {string}
   */
  setMasking(str, startIndex = str.length - 3) {
    if (this.isEmpty(str)) return ''
    const temp = str.substring(0, startIndex)
    const temp2 = str.substring(startIndex, str.length).replace(/\w/g, '*')
    // return str.replace(/(?<=.{3})./gi, '*')
    // str.replace(new RegExp('(?<=.{' + startIndex + '}).', 'gi'), '*');
    return `${temp}${temp2}`
  }

  /**
   * 중간글자 마스킹 처리
   * @param strName
   * @return { string }
   * */
  setMidMasking(strName) {
    if (this.isEmpty(strName)) return ''
    if (strName.length > 2) {
      const originName = strName.split('')
      originName.forEach((name, i) => {
        if (i === 0 || i === originName.length - 1) return ''
        originName[i] = '*'
      })
      const joinName = originName.join()
      return joinName.replace(/,/g, '')
    } else {
      const pattern = /.$/ // 정규식
      return strName.replace(pattern, '*')
    }
  }

  /**
   * YYYYMMDD -> YYYY.MM.DD 형식으로 리턴
   * @param birth
   * @returns {string}
   */
  formatStringBirth(birth = '20010101') {
    if (birth.length !== 8) return ''
    return `${birth.substr(0, 4)}.${birth.substr(4, 2)}.${birth.substr(6, 2)}`
  }

  /**
   * age가 되는 날짜를 구함
   *  - YYYYMMDD 형식 체크
   * @class Util
   */
  getAgeToDate(age, birth) {
    let years = birth.getFullYear() + age
    birth.setFullYear(years)
    return birth
  }

  getUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  getScrollTop() {
    const el = document.getElementById('wrap')
    return el.scrollTop
  }
  scrollByWrap(position, el) {
    el.scrollBy(0, position)
  }
  scrollToTop(elId, scrollDuration = 300) {
    let _this = this
    const el = document.getElementById(elId)
    let scrollStep = -el.scrollTop / (scrollDuration / 15)
    let scrollInterval = setInterval(function() {
      if (el.scrollTop !== 0) {
        _this.scrollByWrap(scrollStep, el)
        // el.scrollBy(0, scrollStep)
      } else {
        clearInterval(scrollInterval)
      }
    }, 12)
  }
  scrollToEl(el, scrollDuration = 300) {
    let _this = this
    let scrollStep = -el.scrollTop / (scrollDuration / 15)
    let scrollInterval = setInterval(function() {
      if (el.scrollTop !== 0) {
        _this.scrollByWrap(scrollStep, el)
        // el.scrollBy(0, scrollStep)
      } else {
        clearInterval(scrollInterval)
      }
    }, 12)
  }
  scrollLock(isLock = false) {
    document.body.className = ''
    if (isLock) document.body.className = 'scroll_lock'
  }

  isMobile() {
    let body = document.getElementsByTagName('body')
    return body[0].clientWidth < 1000
    // return (screen.width < 1000)
  }
  isScrollBar() {
    return (
      (document.getElementById('test').scrollHeight === 0 &&
        document.getElementById('test').clientHeight === 0) ||
      document.getElementById('test').scrollHeight >
        document.getElementById('test').clientHeight
    )
  }

  isApp() {
    return (
      navigator.userAgent.indexOf(`${ConstCode.CODE_ENV_LIST.APP_SCHEMA}`) > -1
    )
  }
  isSafari() {
    return /^((?!chrome|android).)*safari/i.test(
      navigator.userAgent.toLowerCase()
    )
  }
  isIPhone() {
    return /^((?!chrome|android).)*iphone/i.test(
      navigator.userAgent.toLowerCase()
    )
  }
  isIPad() {
    return /^((?!chrome|android).)*ipad/i.test(
      navigator.userAgent.toLowerCase()
    )
  }
  formatNumber(value) {
    if (this.isEmpty(value)) return 0
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  formatNumber2(value, options) {
    if (this.isEmpty(value) || isNaN(value) || value === 0) return '-'
    let dl = options['decimalLength'] || 0
    let ts = options['thousandsSep'] || ','
    let ty = options['type'] || ''
    let ut = options['unit'] || ''

    if (ty !== '') value = value * 100
    value = parseFloat(value)
    let re = '\\d(?=(\\d{3})+' + (dl > 0 ? '\\D' : '$') + ')'
    let num = value.toFixed(Math.max(0, ~~dl))
    return `${num.replace(new RegExp(re, 'g'), '$&' + ts)}${ut}`
  }

  formatDate(value, options = { flag: false }) {
    let text = ''
    let flag = options['flag'] || false
    if (value.length === 6) {
      text = flag
        ? `${value.substring(0, 4)}년 ${value.substring(4, 6)}월`
        : `${value.substring(0, 4)}-${value.substring(4, 6)}`
    } else if (value.length === 8) {
      text = flag
        ? `${value.substring(0, 4)}년 ${value.substring(
            4,
            6
          )}월 ${value.substring(6, 8)}일`
        : `${value.substring(0, 4)}-${value.substring(4, 6)}-${value.substring(
            6,
            8
          )}`
    } else if (value.length > 8) {
      text = value
    } else {
      text = '-'
    }
    return text
  }

  formatRpad(target, value, n) {
    return `${target}${Array(n - target.length + 1).join(value || '0')}`
  }
  formatNumberToPhone(value) {
    if (this.isEmpty(value)) return ''
    return value.replace(
      /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
      '$1-$2-$3'
    )
  }

  formatBizNum(value) {
    if (this.isEmpty(value)) return ''
    return value.replace(/([0-9]{3})([0-9]{2})([0-9]{5})/, '$1-$2-$3')
  }

  formatLpad(target, value, n) {
    if (this.isEmpty(target)) return ''
    target = target.toString()
    return `${Array(n - target.length + 1).join(value || '0')}${target}`
  }
  secondsToTimes(value, format = [':', ':', '']) {
    value = parseInt(value)
    let hour = Math.floor(value / 3600)
    let minutes = Math.floor((value - hour * 3600) / 60)
    let seconds = value - hour * 3600 - minutes * 60
    let covHour = this.formatLpad(hour, 0, '2')
    let covMinutes = this.formatLpad(minutes, 0, '2')
    let covSeconds = this.formatLpad(seconds, 0, '2')
    return `${covHour}${format[0]}${covMinutes}${format[1]}${covSeconds}${format[2]} `
    // if (this.isEmpty(format)) return `${this.formatLpad(hour, 0, '2')}:${this.formatLpad(minutes, 0, '2')}:${this.formatLpad(seconds, 0, '2')}`
  }
  // 현재 url 공유
  intentShareUrl() {
    let currentUrl = location.href
    this.nativeShareText(currentUrl)
  }

  getRandomNo = length => {
    let result = ''
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charLen = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charLen))
    }
    return result
  }

  /**
   * 모달 confirm 창 (땅땅용)
   * @param message
   * @param callBack
   * @param confirmLabel
   * @param cancelLabel
   */
  modalConfirm(
    message = '',
    callBack = () => {},
    confirmLabel = '확인',
    cancelLabel = '취소'
  ) {
    store.commit('layout/setModalAlert', {
      modalAlertName: 'modal-alert-confirm',
      isHideHeader: false,
      data: { message },
      callBack,
      confirmLabel,
      cancelLabel
    })
  }

  /**
   * 모달 alert 창 (땅땅용)
   * @param message
   */
  modalAlert(message = '', callBack = () => {}) {
    store.commit('layout/setModalAlert', {
      modalAlertName: 'modal-alert-alert',
      isHideHeader: false,
      data: { message },
      callBack
    })
  }

  maxLengthCheck(object) {
    if (object.value.length > object.maxLength) {
      object.value = object.value.slice(0, object.maxLength)
    }
  }

  /**
   * 디바이스 정보 native call
   * @param callBack(콜백 받을 function name)
   * @return callBack(deviceTypeID, deviceID, registrationKey, isFirst)
   * @class Util
   */
  nativeGetRegistrationKey(callBack) {
    location.href = `native://action.${ConstCode.CODE_ENV_LIST.APP_SCHEMA}?cmd=getRegistrationKey&callback=${callBack}`
  }

  /**
   * 기본 텍스트 공유
   * @param data(Intent 공유할 메세지 혹은 url)
   * @return ''
   * @class Util
   */
  nativeShareText(data) {
    location.href = `native://action.${
      ConstCode.CODE_ENV_LIST.APP_SCHEMA
    }?cmd=shareText&callback=CALLBACK&url=${encodeURIComponent(data)}`
    return ''
  }

  /**
   * 기본 텍스트 공유
   * @param data(Intent 공유할 메세지 혹은 url)
   * @return ''
   * @class Util
   */
  nativeShareUrl(data) {
    location.href = `native://action.${
      ConstCode.CODE_ENV_LIST.APP_SCHEMA
    }?cmd=shareUrl&callback=CALLBACK&url=${encodeURIComponent(data)}`
    return ''
  }

  /**
   * 카카오 공유
   * @param data(Intent 공유할 메세지 혹은 url)
   * @return ''
   * @class Util
   */
  nativeShareKaKao(data) {
    data += '&rUrl=/main/map'
    location.href = `native://action.${
      ConstCode.CODE_ENV_LIST.APP_SCHEMA
    }?cmd=shareKaKao&callback=CALLBACK&url=${encodeURIComponent(data)}`
    return ''
  }

  /**
   * SHOW SMS
   * @param data(휴대폰번호)
   * @return ''
   * @class Util
   */
  nativeShowSms(data) {
    location.href = `native://action.${ConstCode.CODE_ENV_LIST.APP_SCHEMA}?cmd=showSms&callback=CALLBACK&data=${data}`
  }

  /**
   * 강제 인트로 HIDE
   * @return ''
   * @class Util
   */
  nativeHideIntro() {
    location.href = `native://action.${ConstCode.CODE_ENV_LIST.APP_SCHEMA}?cmd=hideIntro`
  }

  /**
   * 디바이스 최초 실행 여부
   * @return ''
   * @class Util
   */
  nativeFirstRun(callBack) {
    location.href = `native://action.${ConstCode.CODE_ENV_LIST.APP_SCHEMA}?cmd=firstRun&callback=${callBack}`
  }

  /**
   * 카메라 권한 여부
   * @return 승인: '1', 거부 or 응답전: '-1'
   * @class Util
   */
  cameraPermission(callBack) {
    location.href = `native://action.${ConstCode.CODE_ENV_LIST.APP_SCHEMA}?cmd=cameraPermission&callback=${callBack}`
  }

  /**
   * 커스텀 카메라 뷰 이동
   * @return 이미지 데이터 (base 64)
   * @class Util
   */
  captureCard(callBack) {
    location.href = `native://action.${ConstCode.CODE_ENV_LIST.APP_SCHEMA}?cmd=captureCard&callback=${callBack}`
  }

  /**
   * 앱 설정 페이지로 보내기
   * @class Util
   */
  goToSetting() {
    location.href = `native://action.${ConstCode.CODE_ENV_LIST.APP_SCHEMA}?cmd=goToSetting`
  }

  /**
   * 외부링크 URL 호출시
   * @return ''
   * @class Util
   */
  nativeLink(link) {
    location.href = `native://action.${
      ConstCode.CODE_ENV_LIST.APP_SCHEMA
    }?cmd=browse&url=${encodeURIComponent(link)}`
  }

  /**
   * (shoppingValue) orderRequestNo로 주문시간 구하기
   * @param orderKey
   * @returns {string | *}
   */
  parseOrderKey(orderKey = '') {
    if (orderKey.length > 0) return orderKey.substr(2, 14)
    else return orderKey
  }

  /**
   *  call
   * @return ''
   * @class Util
   */
  nativeTel(tel) {
    location.href = `tel:${tel}`
  }

  /**
   * Object -> queryString 변환
   * @param obj
   * @returns {string}
   */
  objectToQuerystring(obj) {
    return Object.keys(obj).reduce(function(str, key, i) {
      let delimiter, val
      delimiter = i === 0 ? '?' : '&'
      key = encodeURIComponent(key)
      val = encodeURIComponent(obj[key])
      return [str, delimiter, key, '=', val].join('')
    }, '')
  }

  calcCrow(lat1, lon1, lat2, lon2) {
    const R = 6371 // km
    const _lat1 = this.toRad(lat1)
    const _lat2 = this.toRad(lat2)
    const dLat = this.toRad(lat2 - lat1)
    const dLon = this.toRad(lon2 - lon1)

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) *
        Math.sin(dLon / 2) *
        Math.cos(_lat1) *
        Math.cos(_lat2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const d = R * c
    return d
  }

  // Converts numeric degrees to radians
  toRad(Value) {
    return (Value * Math.PI) / 180
  }

  nativeGetEncryptValue(callBack, birth = '') {
    let url = `native://action.${ConstCode.CODE_ENV_LIST.APP_SCHEMA}?cmd=getEncryptValue&callback=${callBack}`
    if (!this.isEmpty(birth)) {
      url += `&birth=${birth}`
    }
    location.href = url
  }

  setSecondsToTime(seconds = 0) {
    seconds = Number(seconds)
    if (seconds < 1) {
      return '00:00'
    }
    const hours = Math.floor(seconds / (60 * 60))
    seconds -= hours * 60 * 60
    const minutes = Math.floor(seconds / 60)
    seconds -= minutes * 60
    return `${
      hours > 0 ? `${this.formatLpad(hours, 0, '2')}:` : ''
    }${this.formatLpad(minutes, 0, '2')}:${this.formatLpad(seconds, 0, '2')}`
  }
}
export default new Util()
