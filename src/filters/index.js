function pluralize(time, label) {
  if (time === 1) {
    return time + label;
  }
  return `${time + label}s`;
}
export function timeAgo(time) {
  const between = (Date.now() / 1000) - Number(time);
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute');
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour');
  }
  return pluralize(~~(between / 86400), ' day');
}

export function parseStatus(s) {
  if (s <= 0) {
    return ['禁用', '删除', '正常'][s + 2];
  }
  return '未知';
}

export function parseCosttype(s) {
  return ['充值',
    '修改昵称',
    '牌局',
    '购买vip',
    '赠送',
    '创建俱乐部',
    '创建牌局服务费',
    '房间逾期退还',
    '积分买入',
    '积分返还',
    '房间结算',
    '领取成就',
    '房间续时',
    '私密创建牌局服务费',
    '私密房间续时',
    '抽水',
  ][s];
}

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }

  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else if(typeof time === 'string'){
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
    if (result.length > 0 && value < 10) {
      value = `0${value}`;
    }
    return value || 0;
  });
  return timeStr;
}

export function formatTime(time, option) {
  time = +time * 1000;
  const d = new Date(time);
  const now = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 30) {
    return '刚刚';
  } else if (diff < 3600) { // less 1 hour
    return `${Math.ceil(diff / 60)}分钟前`;
  } else if (diff < 3600 * 24) {
    return `${Math.ceil(diff / 3600)}小时前`;
  } else if (diff < 3600 * 24 * 2) {
    return '1天前';
  }
  if (option) {
    return parseTime(time, option);
  }
  return `${d.getMonth() + 1}月${d.getDate()}日${d.getHours()}时${d.getMinutes()}分`;
}
/* eslint no-bitwise: ["error", { "allow": ["~"] }] */
export function nFormatter(num, digits) {
  const si = [
        { value: 1E18, symbol: 'E' },
        { value: 1E15, symbol: 'P' },
        { value: 1E12, symbol: 'T' },
        { value: 1E9, symbol: 'G' },
        { value: 1E6, symbol: 'M' },
        { value: 1E3, symbol: 'k' },
  ];
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return ((num / si[i].value) + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol;
    }
  }
  return num.toString();
}

export function html2Text(val) {
  const div = document.createElement('div');
  div.innerHTML = val;
  return div.textContent || div.innerText;
}

export function toThousandslsFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','));
}

