const cityMap = {
  // 直轄市
  '台北': 'Taipei',
  '臺北': 'Taipei',
  '新北': 'New Taipei',
  '桃園': 'Taoyuan',
  '台中': 'Taichung',
  '臺中': 'Taichung',
  '台南': 'Tainan',
  '臺南': 'Tainan',
  '高雄': 'Kaohsiung',
  '基隆': 'Keelung',
  '新竹': 'Hsinchu',
  '嘉義': 'Chiayi',

  // 縣
  '宜蘭': 'Yilan',
  '新竹縣': 'Hsinchu County',
  '苗栗': 'Miaoli',
  '彰化': 'Changhua',
  '南投': 'Nantou',
  '雲林': 'Yunlin',
  '嘉義縣': 'Chiayi County',
  '屏東': 'Pingtung',
  '台東': 'Taitung',
  '臺東': 'Taitung',
  '花蓮': 'Hualien',
  '澎湖': 'Penghu',
  '金門': 'Kinmen',
  '連江': 'Lienchiang',
}

export function convertCityName(name) {
  return cityMap[name] || name
}