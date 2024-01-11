// 一般常用 Regex 檢查

// 驗證網址:
export function isValidURL(url) {
    const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    return regex.test(url);
}

// 驗證電子郵件地址:
export function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// 驗證電話號碼 (簡單示例，具體模式可能因國家/地區而異):
export function isValidPhoneNumber(phone) {
    const regex = /^\d{10}$/;
    return regex.test(phone);
}


// 檢查密碼強度 (一個基礎示例，可以根據需要調整):
export function isValidPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
}


// 檢查字串是否只包含字母:
export function isAlpha(str) {
    const regex = /^[A-Za-z]+$/;
    return regex.test(str);
}

// 檢查字串是否只包含數字:
export function isNumeric(str) {
    const regex = /^[0-9]+$/;
    return regex.test(str);
}

// 去除字串中的空白字元:
export function removeWhitespace(str) {
    return str.replace(/\s+/g, '');
}


// 提取字串中的數字:
export function extractNumbers(str) {
    return str.match(/\d+/g);
}

// 驗證邏輯, 檢查是否是字串, 檢查數字是否完整, 是否以0開頭, 是否超過小數兩位, 不包含 +-*/. 和前導 0 的字串, 判斷輸入數值如果大於系統設定或是小於0(負數)時, 回傳錯誤:
export function isValidFullNum(value) {
    const regex = /^(0|[1-9]\d*)(\.\d{1,2})?$/;
    if (value === '' || !regex.test(value) || parseInt(value) < 0) {
        this.isTotalExceeded = true;
        // console.log(value === '', 'value === empty');
        // console.log(!regex.test(value), '!regex.test(value)');
        // console.log(parseInt(value) < 0, 'parseInt(value) < 0');
        return false;
    }
    return regex.test(value)
}